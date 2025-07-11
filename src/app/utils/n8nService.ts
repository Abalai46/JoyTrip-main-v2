/**
 * Service to handle communication with n8n webhook
 */

// ปรับ URL ตามการตั้งค่า webhook ของคุณใน n8n
const N8N_WEBHOOK_URL = 'https://joytrip2.app.n8n.cloud/webhook-test/2e3f1d63-42be-4c89-ae64-fd3cb2cfb9cf'; // URL webhook n8n จริง

// ตั้งค่าให้ใช้โหมดจำลองหรือไม่
const USE_MOCK_MODE = false; // ตั้งค่าเป็น false เพื่อใช้การเชื่อมต่อกับ n8n จริง

interface MessageResponse {
  text: string;
  weather?: {
    location: string;
    temperature: number;
    condition: string;
  };
  // สามารถเพิ่ม fields อื่นๆ ตามที่ n8n workflow ส่งกลับมา
}

// คำตอบจำลองสำหรับการทดสอบ
const mockResponses: Record<string, MessageResponse> = {
  default: {
    text: 'ฉันเป็น AI ผู้ช่วยการท่องเที่ยวของคุณ และพร้อมช่วยวางแผนการเดินทางให้คุณ',
  },
  weather: {
    text: 'ขณะนี้สภาพอากาศในกรุงเทพฯ ร้อนมาก ไม่เหมาะกับการท่องเที่ยวกลางแจ้ง แนะนำให้เที่ยวในห้างสรรพสินค้าหรือพิพิธภัณฑ์',
    weather: {
      location: 'กรุงเทพมหานคร',
      temperature: 32,
      condition: 'แดดจัด',
    },
  },
  hotel: {
    text: 'ฉันแนะนำโรงแรมในย่านสุขุมวิทที่เดินทางสะดวก ใกล้รถไฟฟ้า BTS และมีร้านอาหารดีๆ มากมายในบริเวณนั้น',
  },
  food: {
    text: 'อาหารไทยที่คุณไม่ควรพลาดเมื่อมาเที่ยวประเทศไทย ได้แก่ ต้มยำกุ้ง ผัดไทย ส้มตำ และมัสมั่น ซึ่งเคยติดอันดับอาหารอร่อยที่สุดในโลก',
  },
  temple: {
    text: 'วัดที่มีชื่อเสียงในกรุงเทพฯ ได้แก่ วัดพระแก้ว วัดอรุณ และวัดพระเชตุพนฯ (วัดโพธิ์) ซึ่งทั้งหมดอยู่ในเขตพระนคร สามารถเดินทางต่อเนื่องกันได้',
  },
};

/**
 * ส่งข้อความไปยัง n8n webhook และรับคำตอบกลับ
 * หรือใช้คำตอบจำลองในโหมดทดสอบ
 */
export const sendMessageToN8n = async (message: string): Promise<MessageResponse> => {
  // ถ้าอยู่ในโหมดจำลอง ให้ใช้ข้อมูลจำลอง
  if (USE_MOCK_MODE) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // จำลองความล่าช้าของเครือข่าย 1 วินาที
    
    // ตรวจสอบข้อความและเลือกคำตอบที่เหมาะสม
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage.includes('อากาศ') || lowercaseMessage.includes('weather')) {
      return mockResponses.weather;
    } else if (lowercaseMessage.includes('โรงแรม') || lowercaseMessage.includes('hotel')) {
      return mockResponses.hotel;
    } else if (lowercaseMessage.includes('อาหาร') || lowercaseMessage.includes('food')) {
      return mockResponses.food;
    } else if (lowercaseMessage.includes('วัด') || lowercaseMessage.includes('temple')) {
      return mockResponses.temple;
    } else {
      return mockResponses.default;
    }
  }
  
  // หากไม่ได้อยู่ในโหมดจำลอง ให้เชื่อมต่อกับ webhook จริง
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // timeout หลัง 10 วินาที
    
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp: new Date().toISOString(),
        sessionId: 'joytrip-user-session-' + new Date().getTime(), // เพิ่ม sessionId ที่ไม่ซ้ำ
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // ตรวจสอบ Content-Type ของ response
    const contentType = response.headers.get('content-type');
    console.log('Response content type:', contentType);
    
    let data;
    // ถ้าเป็น JSON ให้แปลงเป็น object
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } 
    // ถ้าเป็น text ให้ใช้ข้อความโดยตรง
    else {
      const textData = await response.text();
      console.log('Text data received:', textData);
      // ลองแปลงเป็น JSON ถ้าทำได้
      try {
        data = JSON.parse(textData);
      } catch (e) {
        // ถ้าแปลงไม่ได้ ให้ใช้เป็นข้อความโดยตรง
        data = textData;
      }
    }
    
    console.log('Data received from n8n:', data);
    
    // ตรวจสอบรูปแบบข้อมูลและแก้ไขให้ตรงกับที่แอพต้องการ
    let messageText = 'ไม่สามารถประมวลผลคำตอบได้';
    let weatherData = undefined;
    
    // ลองหาข้อมูลในหลายรูปแบบที่เป็นไปได้
    if (typeof data === 'object') {
      // ให้ความสำคัญกับ field 'output' ที่เห็นจากรูปภาพก่อน
      if (data.output && typeof data.output === 'string') {
        console.log('Found output field in JSON:', data.output);
        messageText = data.output;
      }
      // ตรวจสอบรูปแบบมาตรฐานของเรา
      else if (typeof data.text === 'string') {
        messageText = data.text;
        weatherData = data.weather;
      }
      // รูปแบบอื่นๆ ที่ n8n อาจส่งกลับมา
      else if (typeof data.message === 'string') {
        messageText = data.message;
      }
      else if (data.response && typeof data.response.text === 'string') {
        messageText = data.response.text;
        weatherData = data.response.weather;
      }
      else if (data.content && typeof data.content === 'string') {
        messageText = data.content;
      }
      else if (data.result && typeof data.result === 'string') {
        messageText = data.result;
      }
      // รองรับกรณีเกิด error ในโหนด AI ของ n8n 
      else if (data.error && typeof data.error === 'string') {
        messageText = `เกิดข้อผิดพลาด: ${data.error}`;
      }
    }
    // กรณีที่ข้อมูลเป็น string ทั้งหมด
    else if (typeof data === 'string') {
      // ถ้าเป็นข้อความโดยตรงจาก n8n ก็ใช้เลย
      messageText = data.trim();
      console.log('Using direct text message from n8n:', messageText);
    }
    
    const formattedResponse: MessageResponse = {
      text: messageText,
      weather: weatherData
    };
    
    console.log('Formatted response:', formattedResponse);
    return formattedResponse;
  } catch (error) {
    console.error('Error sending message to n8n:', error);
    
    // ถ้าเกิดข้อผิดพลาด ให้ใช้คำตอบจากโหมดจำลองแทน
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage.includes('อากาศ') || lowercaseMessage.includes('weather')) {
      return mockResponses.weather;
    } else {
      return {
        text: 'ขออภัย ฉันไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ในขณะนี้ กำลังทำงานในโหมดออฟไลน์ คุณสามารถถามคำถามพื้นฐานได้',
      };
    }
  }
};
