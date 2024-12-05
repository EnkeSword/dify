const translation = {
  title: 'บันทึก',
  description: 'บันทึกบันทึกสถานะการทํางานของแอปพลิเคชัน รวมถึงการป้อนข้อมูลของผู้ใช้และการตอบกลับ AI',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      updatedTime: 'อัพเดทเวลา',
      time: 'เวลาที่สร้าง',
      endUser: 'ผู้ใช้ปลายทางหรือบัญชี',
      input: 'อินพุต',
      output: 'ผลิตภัณฑ์',
      summary: 'ชื่อเรื่อง',
      messageCount: 'จํานวนข้อความ',
      userRate: 'อัตราผู้ใช้',
      adminRate: 'Op. อัตรา',
      startTime: 'เวลาเริ่มต้น',
      status: 'สถานะ',
      runtime: 'เวลาทํางาน',
      tokens: 'โท เค็น',
      user: 'ผู้ใช้ปลายทางหรือบัญชี',
      version: 'เวอร์ชัน',
    },
    pagination: {
      previous: 'ก่อนหน้า',
      next: 'ต่อไป',
    },
    empty: {
      noChat: 'ยังไม่มีการสนทนา',
      noOutput: 'ไม่มีเอาต์พุต',
      element: {
        title: 'มีใครอยู่ที่นั่นไหม?',
        content: 'สังเกตและใส่คําอธิบายประกอบการโต้ตอบระหว่างผู้ใช้ปลายทางและแอปพลิเคชัน AI ที่นี่เพื่อปรับปรุงความแม่นยําของ AI อย่างต่อเนื่อง คุณสามารถลอง<shareLink>แชร์</shareLink>หรือ<testLink>ทดสอบเว็บ</testLink>แอปด้วยตัวคุณเอง แล้วกลับไปที่หน้านี้',
      },
    },
  },
  detail: {
    time: 'เวลา',
    conversationId: 'รหัสการสนทนา',
    promptTemplate: 'เทมเพลตพร้อมท์',
    promptTemplateBeforeChat: 'เทมเพลตพร้อมท์ก่อนแชท · เป็นข้อความของระบบ',
    annotationTip: 'การปรับปรุงที่ทําเครื่องหมายโดย {{user}}',
    second: 's',
    tokenCost: 'โทเค็นที่ใช้ไป',
    loading: 'การโหลด',
    operation: {
      like: 'ชอบ',
      dislike: 'ไม่ชอบ',
      addAnnotation: 'เพิ่มการปรับปรุง',
      editAnnotation: 'แก้ไขการปรับปรุง',
      annotationPlaceholder: 'ป้อนคําตอบที่คาดหวังที่คุณต้องการให้ AI ตอบกลับ ซึ่งสามารถใช้สําหรับการปรับแต่งโมเดลและการปรับปรุงคุณภาพการสร้างข้อความอย่างต่อเนื่องในอนาคต',
    },
    variables: 'ตัว แปร',
    uploadImages: 'รูปภาพที่อัปโหลด',
    timeConsuming: '',
  },
  filter: {
    period: {
      today: 'วันนี้',
      last7days: '7 วันที่ผ่านมา',
      last4weeks: '4 สัปดาห์ที่ผ่านมา',
      last3months: '3 เดือนที่ผ่านมา',
      last12months: '12 เดือนที่ผ่านมา',
      monthToDate: 'เดือนจนถึงปัจจุบัน',
      quarterToDate: 'ไตรมาสจนถึงปัจจุบัน',
      yearToDate: 'ปีจนถึงปัจจุบัน',
      allTime: 'ตลอดเวลา',
    },
    annotation: {
      all: 'ทั้งหมด',
      annotated: 'การปรับปรุงที่มีคําอธิบายประกอบ ({{count}} รายการ)',
      not_annotated: 'ไม่มีคําอธิบายประกอบ',
    },
    sortBy: 'เมืองสีดํา:',
    descending: 'จากมากไปหาน้อย',
    ascending: 'จากน้อยไปมาก',
  },
  workflowTitle: 'บันทึกเวิร์กโฟลว์',
  workflowSubtitle: 'บันทึกบันทึกการทํางานของ Automate',
  runDetail: {
    title: 'บันทึกการสนทนา',
    workflowTitle: 'รายละเอียดบันทึก',
  },
  promptLog: 'บันทึกพร้อมท์',
  agentLog: 'บันทึกตัวแทน',
  viewLog: 'ดูบันทึก',
  agentLogDetail: {
    agentMode: 'โหมดตัวแทน',
    toolUsed: 'เครื่องมือที่ใช้',
    iterations: 'เกิด ซ้ำ',
    iteration: 'เกิด ซ้ำ',
    finalProcessing: 'การประมวลผลขั้นสุดท้าย',
  },
}

export default translation
