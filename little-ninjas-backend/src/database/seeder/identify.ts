import { Identify } from '../../entities/identify.entity';

export class IdentifySeeder {
  public static data = [
    {
      id: '92fdc7aa-7e86-46ba-8a1f-6fba4fcc950b',
      question: 'apple',
      answer: 'apple',
      options: ['orange', 'grapes', 'apple', 'mango'],
    },
    {
      id: '1b1d5257-1a07-4e0d-8d59-7e787f039adb',
      question: 'orange',
      answer: 'orange',
      options: ['grapes', 'orange', 'mango', 'strawberry'],
    },
    {
      id: '0088b813-d901-477d-872f-96e84d38a61d',
      question: 'grapes',
      answer: 'grapes',
      options: ['mango', 'watermelon', 'strawberry', 'grapes'],
    },
    {
      id: '987fac1c-a326-4ac2-b102-c8c8cffcb444',
      question: 'mango',
      answer: 'mango',
      options: ['mango', 'watermelon', 'kiwi', 'strawberry'],
    },
    {
      id: '8da5b8fb-3950-418b-80ca-ce98b4357153',
      question: 'strawberry',
      answer: 'strawberry',
      options: ['watermelon', 'strawberry', 'banana', 'kiwi'],
    },
    {
      id: 'd8002632-56a9-4868-8d5e-76650a4348e9',
      question: 'watermelon',
      answer: 'watermelon',
      options: ['banana', 'kiwi', 'plum', 'watermelon'],
    },
    {
      id: '18e4e8d8-7fff-43a3-91e8-27eb702c848d',
      question: 'kiwi',
      answer: 'kiwi',
      options: ['banana', 'cherry', 'kiwi', 'plum'],
    },
    {
      id: '8f2e072b-63a7-4feb-b767-5ff5488192f1',
      question: 'banana',
      answer: 'banana',
      options: ['banana', 'apple', 'cherry', 'plum'],
    },
    {
      id: '7f4159fa-7740-4393-bc30-3765bdb3056c',
      question: 'plum',
      answer: 'plum',
      options: ['cherry', 'apple', 'plum', 'orange'],
    },
    {
      id: 'b5fa7581-104d-49bc-a9ba-18ad34f3c1b7',
      question: 'cherry',
      answer: 'cherry',
      options: ['orange', 'apple', 'grapes', 'cherry'],
    },
    {
      id: 'fc50fc72-b360-40d8-ac74-9b2a343ef68d',
      question: 'peacock',
      answer: 'peacock',
      options: ['parrot', 'hen', 'bat', 'peacock'],
    },
    {
      id: '1d0ed612-09bf-4a23-9c71-5afd34f32bbd',
      question: 'bat',
      answer: 'bat',
      options: ['hen', 'parrot', 'bat', 'duck'],
    },
    {
      id: '912ecd08-c031-4d05-a845-590f22ed6b67',
      question: 'parrot',
      answer: 'parrot',
      options: ['duck', 'parrot', 'crow', 'hen'],
    },
    {
      id: '18442d0d-49d7-4983-a57b-95c1b1b04d88',
      question: 'hen',
      answer: 'hen',
      options: ['crow', 'duck', 'owl', 'hen'],
    },
    {
      id: '969565a2-12f7-4e13-bc94-4918a62fd33d',
      question: 'duck',
      answer: 'duck',
      options: ['duck', 'owl', 'swallow', 'crow'],
    },
    {
      id: '1751d42f-129d-4ad0-9c82-8731571a3c6a',
      question: 'crow',
      answer: 'crow',
      options: ['owl', 'swallow', 'crow', 'eagle'],
    },
    {
      id: '1f0db03f-4c9c-493e-9a4e-3543b5a8b264',
      question: 'owl',
      answer: 'owl',
      options: ['swallow', 'owl', 'penguin', 'eagle'],
    },
    {
      id: '0e5ce84b-5397-49e6-9d6b-3e81b1d98dc0',
      question: 'swallow',
      answer: 'swallow',
      options: ['penguin', 'eagle', 'swallow', 'peacock'],
    },
    {
      id: 'd02f1685-4e67-4bbd-8cb1-e3139b9218c5',
      question: 'eagle',
      answer: 'eagle',
      options: ['peacock', 'bat', 'eagle', 'penguin'],
    },
    {
      id: '3cd12ace-142f-4ced-8d43-ebe6feed0fe0',
      question: 'penguin',
      answer: 'penguin',
      options: ['parrot', 'penguin', 'peacock', 'bat'],
    },
    {
      id: '0d586948-2b22-4e7e-a800-c76ecedb1303',
      question: 'train',
      answer: 'train',
      options: ['train', 'ball', 'teddybear', 'kite'],
    },
    {
      id: '2bbf307c-d6e8-4ef9-b389-0610e91e4e29',
      question: 'ball',
      answer: 'ball',
      options: ['teddybear', 'kite', 'car', 'ball'],
    },
    {
      id: '112cf4f4-b5b2-4894-8468-26bded69c4d0',
      question: 'teddybear',
      answer: 'teddybear',
      options: ['kite', 'car', 'horse', 'teddybear'],
    },
    {
      id: '61fdd553-c708-486e-a8ed-2f898f01bd2d',
      question: 'kite',
      answer: 'kite',
      options: ['car', 'horse', 'kite', 'gun'],
    },
    {
      id: 'd43b6bbb-a69a-410f-984d-a8f1a09171af',
      question: 'car',
      answer: 'car',
      options: ['gun', 'horse', 'phone', 'car'],
    },
    {
      id: '2c6ce956-a14d-45fe-9816-759b523353e8',
      question: 'horse',
      answer: 'horse',
      options: ['gun', 'balloon', 'horse', 'phone'],
    },
    {
      id: 'c6694bbd-9610-48df-b408-02da95ef283c',
      question: 'gun',
      answer: 'gun',
      options: ['gun', 'phone', 'drumb', 'balloon'],
    },
    {
      id: 'b5e9585d-31d2-4fe2-aa8c-26168c3452d2',
      question: 'phone',
      answer: 'phone',
      options: ['balloon', 'phone', 'train', 'drumb'],
    },
    {
      id: '384b928e-13ca-4a3e-be8c-2232272c934a',
      question: 'balloon',
      answer: 'balloon',
      options: ['drumb', 'train', 'ball', 'balloon'],
    },
    {
      id: '6da5779b-d1ad-4c31-ae28-46a86f9d7c79',
      question: 'drumb',
      answer: 'drumb',
      options: ['teddybear', 'ball', 'drumb', 'train'],
    },
  ];

  public static async execute() {
    for (const item of this.data) {
      try {
        const event = await Identify.findByPk(item.id);
        !event && (await Identify.create(item));
      } catch (e) {
        console.log(e);
      }
    }
  }
}
