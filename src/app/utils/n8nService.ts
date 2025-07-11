/**
 * n8nService.ts
 * -------------
 * ไฟล์นี้จัดการการเชื่อมต่อและการส่งข้อมูลระหว่างแอพ JoyTrip และ n8n automation platform
 * รองรับการส่งข้อความจากผู้ใช้ไปยัง n8n และประมวลผลการตอบกลับในหลายรูปแบบ
 * 
 * @author JoyTrip Team
 * @version 1.0
 */

/**
 * WeatherInfo
 * ----------
 * Interface สำหรับข้อมูลสภาพอากาศ
 * - location: ชื่อสถานที่
 * - temperature: อุณหภูมิ (องศา)
 * - condition: สภาพอากาศ (เช่น มีเมฆ, แดดออก)
 * - icon?: URL ของไอคอนสภาพอากาศ (ถ้ามี)
 */
export interface WeatherInfo {
  location: string;
  temperature: number;
  condition: string;
  icon?: string;
}

/**
 * MessageResponse
 * --------------
 * Interface กำหนดรูปแบบข้อมูลที่ได้รับจาก n8n
 * - text: ข้อความตอบกลับจาก AI (จำเป็นต้องมี)
 * - weather?: ข้อมูลสภาพอากาศ (ถ้ามี)
 */
export interface MessageResponse {
  text: string;
  weather?: WeatherInfo;
}


/**
 * แหล่งข้อมูล
 * ---------
 */
// URL ของ webhook บน n8n - ใช้เพื่อส่งข้อความและรับการตอบกลับ
const N8N_WEBHOOK_URL = 'https://joytrip2.app.n8n.cloud/webhook-test/2e3f1d63-42be-4c89-ae64-fd3cb2cfb9cf';

// ตัวแปรควบคุมการใช้งานโหมดจำลองสำหรับทดสอบ
// - false: ใช้งานการเชื่อมต่อกับ n8n webhook จริง
// - true: ใช้ข้อมูลจำลองเพื่อทดสอบโดยไม่ต้องเชื่อมต่อ n8n
const USE_MOCK_MODE = false;

/**
 * mockResponses
 * ------------
 * ข้อมูลจำลองสำหรับการทดสอบในโหมดออฟไลน์
 * มีคำตอบสำเร็จรูปสำหรับคำถามเกี่ยวกับ:
 * - อากาศ (weather)
 * - โรงแรม (hotel)
 * - อาหาร (food)
 * - วัด (temple)
 * - และคำตอบเริ่มต้น (default)
 */
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
 * sendMessageToN8n
 * ---------------
 * ส่งข้อความไปยัง n8n webhook และรับคำตอบกลับ
 * หรือใช้คำตอบจำลองในโหมดทดสอบ
 * 
 * @param message - ข้อความที่ผู้ใช้ส่งเข้ามา
 * @returns Promise<MessageResponse> - คำตอบจาก AI พร้อมข้อมูลสภาพอากาศ (ถ้ามี)
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
    /**
     * การจัดการ timeout
     * ---------------
     * สร้าง AbortController เพื่อยกเลิกการเชื่อมต่อหากใช้เวลานานเกินไป
     * timeout ตั้งไว้ที่ 10 วินาทีเพื่อป้องกันการรอนานเกินไป
     */
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // timeout หลัง 10 วินาที
    
    /**
     * ส่งคำขอไปยัง n8n webhook
     * ----------------------
     * - method: POST - ส่งข้อมูลไปยัง webhook
     * - headers: กำหนด Content-Type เป็น JSON
     * - body: ข้อมูลที่ส่งประกอบด้วย
     *   - message: ข้อความจากผู้ใช้
     *   - timestamp: เวลาปัจจุบัน
     *   - sessionId: ID สำหรับ session นี้ (ใช้เวลาปัจจุบันเพื่อให้ไม่ซ้ำกัน)
     * - signal: ใช้สำหรับยกเลิกการเชื่อมต่อเมื่อหมดเวลา
     */
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp: new Date().toISOString(),
        sessionId: 'joytrip-user-session-' + new Date().getTime(), // สร้าง sessionId ที่ไม่ซ้ำโดยใช้ timestamp
      }),
      signal: controller.signal
    });
    
    // ล้าง timeout เมื่อได้รับการตอบกลับเรียบร้อยแล้ว
    clearTimeout(timeoutId);

    /**
     * ตรวจสอบสถานะการตอบกลับ
     * -----------------------------
     * ถ้าไม่สำเร็จ (HTTP status ไม่ใช่ 200 OK) จะส่ง Error 
     */
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    /**
     * ตรวจสอบ Content-Type ของการตอบกลับ
     * ---------------------------------------
     * เพื่อกำหนดวิธีการประมวลผลที่เหมาะสม (JSON หรือ text)
     */
    const contentType = response.headers.get('content-type');
    console.log('Response content type:', contentType);
    
    let data;
    try {
      /**
       * วิธีที่ 1: ประมวลผลข้อมูล JSON
       * ----------------------------
       * สำหรับกรณีที่ Content-Type เป็น application/json
       */
      if (contentType && contentType.includes('application/json')) {
        try {
          // อ่านข้อมูลเป็น JSON object
          data = await response.json();
        } catch (jsonError) {
          // ถ้าพบข้อผิดพลาดในการแปลง JSON
          console.error('JSON parsing error:', jsonError);
          
          // อ่านข้อมูลดิบเป็นข้อความแทน (ใช้ clone เพราะ body ถูกใช้ไปแล้ว)
          const textResponse = await response.clone().text();
          console.log('Raw response text:', textResponse);
          
          // ถ้ามีข้อความ ใช้ข้อความนั้นโดยตรง
          if (textResponse && textResponse.trim()) {
            data = textResponse;
          } else {
            // ถ้าไม่มีข้อความ ให้ใช้ข้อความแจ้งเตือน
            data = { text: 'ไม่มีคำตอบจากเซิร์ฟเวอร์ โปรดลองอีกครั้งภายหลัง' };
          }
        }
      } 
      /**
       * วิธีที่ 2: ประมวลผลข้อมูล Text
       * ----------------------------
       * สำหรับกรณีที่ Content-Type ไม่ใช่ application/json
       * หรือไม่มี Content-Type ระบุมา
       */
      else {
        // อ่านข้อมูลเป็นข้อความ
        const textData = await response.text();
        console.log('Text data received:', textData);
        
        // ถ้าไม่มีข้อความ ให้ใช้ข้อความแจ้งเตือน
        if (!textData || textData.trim() === '') {
          data = { text: 'ไม่มีคำตอบจากเซิร์ฟเวอร์ กรุณาลองอีกครั้ง' };
        } else {
          // ลองแปลงเป็น JSON ถ้าทำได้ (อาจจะเป็น JSON ที่ส่งมาโดยไม่ได้กำหนด Content-Type ที่ถูกต้อง)
          try {
            data = JSON.parse(textData);
          } catch (e) {
            // ถ้าแปลงไม่ได้ ให้ใช้เป็นข้อความโดยตรง
            data = textData;
          }
        }
      }
    } catch (error) {
      // จัดการข้อผิดพลาดที่ไม่คาดคิด
      console.error('Error processing response:', error);
      data = { text: 'เกิดข้อผิดพลาดในการประมวลผลคำตอบ' };
    }
    
    /**
     * ลงบันทึกข้อมูลที่ได้รับจาก n8n เพื่อการตรวจสอบ
     */
    console.log('Data received from n8n:', data);
    
    /**
     * การแปลงข้อมูลให้ตรงกับรูปแบบที่ต้องการ
     * ------------------------------------------
     * n8n อาจส่งข้อมูลกลับมาในหลายรูปแบบ เราต้องแปลงให้อยู่ในรูปแบบที่แอพเข้าใจได้
     * ตั้งค่าเริ่มต้นเป็นข้อความแจ้งเตือนในกรณีที่ไม่สามารถประมวลผลได้
     */
    let messageText = 'ไม่สามารถประมวลผลคำตอบได้';
    let weatherData = undefined;
    
    /**
     * การวิเคราะห์ข้อมูลจากหลายรูปแบบ
     * ---------------------------------------
     * ตรวจสอบโครงสร้างข้อมูลในหลายรูปแบบที่เป็นไปได้
     */
    if (typeof data === 'object') {
      /**
       * ลำดับความสำคัญในการตรวจสอบข้อมูล:
       * 1. 'output' - พบในรูปภาพที่ผู้ใช้ส่งมา เป็นรูปแบบที่ n8n มักใช้
       * 2. 'text' - รูปแบบมาตรฐานที่เรากำหนด
       * 3. รูปแบบอื่นๆ - เพื่อให้รองรับกับทุกกรณี
       */
      
      // ตรวจสอบฟิลด์ 'output' (มักพบใน n8n workflows)
      if (data.output && typeof data.output === 'string') {
        console.log('Found output field in JSON:', data.output);
        messageText = data.output;
      }
      // ตรวจสอบรูปแบบมาตรฐาน { text, weather? }
      else if (typeof data.text === 'string') {
        messageText = data.text;
        weatherData = data.weather;
      }
      // ตรวจสอบรูปแบบอื่นๆ ที่ n8n อาจส่งกลับมา
      else if (typeof data.message === 'string') {
        messageText = data.message;  // บางโหนดใช้ฟิลด์ 'message' แทน 'text'
      }
      else if (data.response && typeof data.response.text === 'string') {
        messageText = data.response.text;  // รูปแบบซ้อน { response: { text, weather? } }
        weatherData = data.response.weather;
      }
      else if (data.content && typeof data.content === 'string') {
        messageText = data.content;  // บางโหนดใช้ฟิลด์ 'content' แทน 'text'
      }
      else if (data.result && typeof data.result === 'string') {
        messageText = data.result;  // บางโหนดใช้ฟิลด์ 'result' แทน 'text'
      }
      // รองรับกรณีเกิด error ในโหนด AI ของ n8n 
      else if (data.error && typeof data.error === 'string') {
        messageText = `เกิดข้อผิดพลาด: ${data.error}`;
      }
    }
    /**
     * กรณีข้อมูลเป็นข้อความ (string) ทั้งหมด
     * n8n อาจส่งข้อความธรรมดากลับมาโดยไม่ได้ใส่โครงสร้าง JSON
     */
    else if (typeof data === 'string') {
      // ถ้าเป็นข้อความโดยตรงจาก n8n ก็ใช้เลย (ตัด whitespace หัวท้าย)
      messageText = data.trim();
      console.log('Using direct text message from n8n:', messageText);
    }
    
    /**
     * สร้างคำตอบสุดท้ายในรูปแบบที่แอพต้องการ
     * ประกอบด้วยข้อความตอบกลับและข้อมูลสภาพอากาศ (ถ้ามี)
     */
    const formattedResponse: MessageResponse = {
      text: messageText,
      weather: weatherData
    };
    
    // บันทึกรูปแบบข้อมูลสุดท้ายที่จะส่งกลับไปยังแอพ
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
