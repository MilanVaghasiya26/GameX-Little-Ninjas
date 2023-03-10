import { Maths } from '../../entities/maths.entity';

export class MathsSeeder {
  public static data = [
    {
      id: 'd50a7596-d658-4621-b605-5a5ea6a564b1',
      category: 'addition',
      question: ['1', '+', '1'],
      answer: 2,
      options: [3, 2, 1, 4],
    },
    {
      id: 'a1518bd9-d29d-4f7b-a81e-daa878f8adec',
      category: 'addition',
      question: ['1', '+', '2'],
      answer: 3,
      options: [1, 4, 3, 2],
    },
    {
      id: '07316c00-44e5-4314-9dd8-c27680a124b5',
      category: 'addition',
      question: ['2', '+', '2'],
      answer: 4,
      options: [2, 1, 3, 4],
    },
    {
      id: '0fbcc02c-1d7f-4f1c-8755-cd9c3396427f',
      category: 'addition',
      question: ['2', '+', '3'],
      answer: 5,
      options: [5, 3, 6, 4],
    },
    {
      id: '398f8f37-2a87-49c0-9812-fbd66f8d2689',
      category: 'addition',
      question: ['3', '+', '3'],
      answer: 6,
      options: [4, 6, 5, 7],
    },
    {
      id: '6daa7552-1126-4f52-bb96-057554257b78',
      category: 'addition',
      question: ['0', '+', '1'],
      answer: 1,
      options: [0, 2, 3, 1],
    },
    {
      id: 'e3e152e0-fb1e-4435-851f-ec38b62e079e',
      category: 'addition',
      question: ['2', '+', '0'],
      answer: 2,
      options: [1, 3, 0, 2],
    },
    {
      id: '809ea93f-424c-46de-9cf8-1bcfba806761',
      category: 'addition',
      question: ['1', '+', '3'],
      answer: 4,
      options: [4, 2, 3, 1],
    },
    {
      id: '9dbb8e09-4cd8-42f3-afba-4dfd4e6e0c4e',
      category: 'addition',
      question: ['4', '+', '1'],
      answer: 5,
      options: [6, 3, 5, 4],
    },
    {
      id: 'a33cc2d8-c13c-4f68-b54e-07d447b2ba07',
      category: 'addition',
      question: ['2', '+', '1'],
      answer: 3,
      options: [2, 1, 4, 3],
    },
    {
      id: '78f12351-2d6a-4479-a1ca-19b1112e15ed',
      category: 'subtraction',
      question: ['1', '-', '1'],
      answer: 0,
      options: [1, 0, 3, 2],
    },
    {
      id: '0d98763a-2dbe-42f8-8ef7-bdf4c83fb7aa',
      category: 'subtraction',
      question: ['2', '-', '1'],
      answer: 1,
      options: [3, 2, 0, 1],
    },
    {
      id: 'e01267ee-a985-4fe7-8578-0da2284a6143',
      category: 'subtraction',
      question: ['2', '-', '2'],
      answer: 0,
      options: [0, 3, 2, 1],
    },
    {
      id: 'fcdca7d4-9fb0-4a32-ba15-9d208d3866b3',
      category: 'subtraction',
      question: ['2', '-', '0'],
      answer: 2,
      options: [3, 1, 0, 2],
    },
    {
      id: '1b43dcc2-1d32-4d4a-9b0f-3a1b7e38a750',
      category: 'subtraction',
      question: ['3', '-', '2'],
      answer: 1,
      options: [0, 3, 1, 2],
    },
    {
      id: '2580aba0-9757-40e0-a94f-e6531023a213',
      category: 'subtraction',
      question: ['5', '-', '3'],
      answer: 2,
      options: [1, 2, 4, 3],
    },
    {
      id: 'f6163b9f-a648-4a67-b028-61b027ecc7c5',
      category: 'subtraction',
      question: ['3', '-', '1'],
      answer: 2,
      options: [4, 1, 3, 2],
    },
    {
      id: '581db4e2-3a64-4735-9ac0-641874f5238b',
      category: 'subtraction',
      question: ['4', '-', '3'],
      answer: 1,
      options: [1, 3, 2, 4],
    },
    {
      id: 'b6552744-8022-46ab-9d62-9ff37265f875',
      category: 'subtraction',
      question: ['5', '-', '2'],
      answer: 3,
      options: [4, 2, 3, 1],
    },
    {
      id: '34025c29-db40-462e-a359-ff85bdacd1a4',
      category: 'subtraction',
      question: ['5', '-', '1'],
      answer: 4,
      options: [5, 3, 2, 4],
    },
    {
      id: '6d6f9aa1-5163-4e52-841d-57aae25753f2',
      category: 'multiplication',
      question: ['1', '*', '1'],
      answer: 1,
      options: [1, 2, 3, 2],
    },
    {
      id: '652d7a6f-48c2-4e29-9bab-0fa8385f5afd',
      category: 'multiplication',
      question: ['0', '*', '1'],
      answer: 0,
      options: [3, 2, 0, 1],
    },
    {
      id: 'b89b5f91-cb8d-4b52-bc6d-b9e25e6d247c',
      category: 'multiplication',
      question: ['1', '*', '2'],
      answer: 2,
      options: [0, 2, 3, 1],
    },
    {
      id: '76479558-cb50-4ed7-96f3-7e5f0ef603bf',
      category: 'multiplication',
      question: ['2', '*', '2'],
      answer: 4,
      options: [3, 1, 2, 4],
    },
    {
      id: '8e06432d-5c2a-4d72-9fad-18d944d69577',
      category: 'multiplication',
      question: ['3', '*', '1'],
      answer: 3,
      options: [4, 3, 1, 2],
    },
    {
      id: 'b6bdd7db-6b85-4997-810a-5b836147e39a',
      category: 'multiplication',
      question: ['2', '*', '3'],
      answer: 6,
      options: [3, 5, 4, 6],
    },
    {
      id: 'e884fd52-b4f7-478b-b5e7-f127c5242ef4',
      category: 'multiplication',
      question: ['3', '*', '3'],
      answer: 9,
      options: [8, 6, 3, 9],
    },
    {
      id: '1a8d2eeb-bf60-4e96-8023-50225fb7934d',
      category: 'multiplication',
      question: ['3', '*', '0'],
      answer: 0,
      options: [0, 3, 6, 1],
    },
    {
      id: '9fab6344-7d3b-409c-b1c5-ae78895c38ca',
      category: 'multiplication',
      question: ['2', '*', '4'],
      answer: 8,
      options: [4, 8, 2, 6],
    },
    {
      id: '391f9f78-0a53-4c01-b5bc-a5992c65970f',
      category: 'multiplication',
      question: ['5', '*', '1'],
      answer: 5,
      options: [1, 3, 7, 5],
    },
    {
      id: '2219d1d2-c863-446f-866b-e93219a4dcb0',
      category: 'division',
      question: ['2', '/', '1'],
      answer: 2,
      options: [3, 2, 0, 1],
    },
    {
      id: 'a93ab762-bf67-41b6-ae0f-350b89ed67c6',
      category: 'division',
      question: ['1', '/', '1'],
      answer: 1,
      options: [1, 0, 3, 2],
    },
    {
      id: 'f6bfabaf-b589-4cea-ba2a-7c1239f79240',
      category: 'division',
      question: ['2', '/', '2'],
      answer: 1,
      options: [0, 3, 2, 1],
    },
    {
      id: 'ac255901-1df6-4c96-b1bf-f37993ca7a55',
      category: 'division',
      question: ['3', '/', '1'],
      answer: 3,
      options: [4, 1, 3, 2],
    },
    {
      id: '63fc287a-0e08-4507-9563-4aef8ff9d2af',
      category: 'division',
      question: ['3', '/', '3'],
      answer: 1,
      options: [0, 3, 1, 2],
    },
    {
      id: 'f9cdd433-68e2-46af-9208-6e0e9490f429',
      category: 'division',
      question: ['6', '/', '3'],
      answer: 2,
      options: [1, 2, 6, 3],
    },
    {
      id: 'ee5eeff3-51e7-4634-9fac-287d98564ab1',
      category: 'division',
      question: ['6', '/', '2'],
      answer: 3,
      options: [6, 4, 2, 3],
    },
    {
      id: '0d997607-2020-4b0c-a74b-cb11a808d367',
      category: 'division',
      question: ['4', '/', '2'],
      answer: 2,
      options: [2, 8, 4, 6],
    },
    {
      id: 'eb74675b-2b92-4e74-9090-b364af78907e',
      category: 'division',
      question: ['4', '/', '4'],
      answer: 1,
      options: [2, 6, 1, 4],
    },
    {
      id: 'e5c155b3-dfd4-4ace-8259-ea29c40d89a1',
      category: 'division',
      question: ['6', '/', '6'],
      answer: 1,
      options: [3, 2, 1, 6],
    },
    {
      id: '99b491cf-0a17-480e-ad54-a180a5d23bb4',
      category: 'addition',
      question: ['9', '+', '1'],
      answer: 10,
      options: [10, 9, 8, 11],
    },

    {
      id: 'afef602c-0676-4cb5-b084-d188be83e2a8',
      category: 'addition',
      question: ['6', '+', '0'],
      answer: 6,
      options: [0, 6, 7, 5],
    },
    {
      id: '939a3373-8a58-4466-8a31-ca8bd9fa8955',
      category: 'addition',
      question: ['7', '+', '2'],
      answer: 9,
      options: [9, 7, 8, 6],
    },

    {
      id: '92b77f82-35cd-4202-b03c-030c3be8ab28',
      category: 'addition',
      question: ['10', '+', '10'],
      answer: 20,
      options: [21, 20, 22, 23],
    },
    {
      id: '862c15cc-32ea-4151-8325-9bb93ee41654',
      category: 'addition',
      question: ['10', '+', '2'],
      answer: 12,
      options: [11, 10, 13, 12],
    },

    {
      id: '28e2f892-0f07-4c28-b4b9-6268c737b4c5',
      category: 'addition',
      question: ['0', '+', '3'],
      answer: 3,
      options: [0, 4, 3, 5],
    },
    {
      id: '46b781ea-7c2d-4bfd-bbb5-f403a4546e66',
      category: 'addition',
      question: ['1', '+', '0'],
      answer: 1,
      options: [0, 2, 1, 3],
    },
    {
      id: '0868286a-1708-4e24-84af-cc8c41e701dd',
      category: 'addition',
      question: ['8', '+', '7'],
      answer: 15,
      options: [16, 13, 14, 15],
    },

    {
      id: '67e96ac5-956d-4219-b405-5ed10bac1a44',
      category: 'addition',
      question: ['8', '+', '5'],
      answer: 13,
      options: [12, 14, 13, 15],
    },
    {
      id: 'ac46ae2f-f9c3-4f84-b275-385cb305f980',
      category: 'addition',
      question: ['8', '+', '3'],
      answer: 11,
      options: [10, 12, 11, 13],
    },
    {
      id: '6309e28b-e194-4b55-83e4-06b18f752653',
      category: 'addition',
      question: ['2', '+', '5'],
      answer: 7,
      options: [5, 7, 6, 8],
    },

    {
      id: '4d694457-61ef-4e3f-8cac-1b5b2ca4bdff',
      category: 'addition',
      question: ['10', '+', '4'],
      answer: 14,
      options: [12, 10, 14, 13],
    },
    {
      id: '682eb9d5-b617-4c25-b6c4-4ac8d3edb87d',
      category: 'addition',
      question: ['3', '+', '5'],
      answer: 8,
      options: [9, 10, 8, 7],
    },

    {
      id: '7d79a009-c243-4a42-b4e6-b009c8cc14aa',
      category: 'addition',
      question: ['0', '+', '4'],
      answer: 4,
      options: [0, 3, 2, 4],
    },
    {
      id: '7da32744-ba48-40c6-97b5-fcf476abeb7a',
      category: 'addition',
      question: ['0', '+', '6'],
      answer: 6,
      options: [6, 5, 7, 4],
    },

    {
      id: 'e7983969-0b45-440c-b003-dd1f9d98c014',
      category: 'addition',
      question: ['9', '+', '5'],
      answer: 14,
      options: [12, 14, 13, 11],
    },
    {
      id: 'c7dab870-359e-41bf-a8ae-2c43befeff4e',
      category: 'addition',
      question: ['5', '+', '0'],
      answer: 5,
      options: [6, 4, 5, 7],
    },

    {
      id: '28104e88-0e3d-4736-b0f9-58be4187b03d',
      category: 'addition',
      question: ['9', '+', '4'],
      answer: 13,
      options: [12, 11, 14, 13],
    },

    {
      id: 'a8ee385e-dae3-4fd3-9e4f-3d8e455945e3',
      category: 'addition',
      question: ['5', '+', '7'],
      answer: 12,
      options: [12, 10, 11, 13],
    },

    {
      id: 'c152a5c5-0a42-469b-a99e-723d589452c3',
      category: 'addition',
      question: ['8', '+', '2'],
      answer: 10,
      options: [8, 9, 10, 11],
    },

    {
      id: '5ea8f8d5-e85e-4e8d-a502-7cacb8376805',
      category: 'addition',
      question: ['1', '+', '5'],
      answer: 6,
      options: [5, 1, 6, 4],
    },

    {
      id: '95e348d2-ec54-4680-81f6-ed2fc867fdde',
      category: 'addition',
      question: ['2', '+', '9'],
      answer: 11,
      options: [9, 12, 11, 10],
    },

    {
      id: 'a03ce192-0d67-4c36-b418-81db3b665dda',
      category: 'addition',
      question: ['4', '+', '5'],
      answer: 9,
      options: [9, 8, 11, 10],
    },

    {
      id: 'e85c7bc6-86b0-4349-954b-04bbd6244651',
      category: 'addition',
      question: ['3', '+', '6'],
      answer: 9,
      options: [10, 8, 11, 9],
    },

    {
      id: 'b46825c6-43d1-4b3b-b091-ce6a220e0144',
      category: 'addition',
      question: ['5', '+', '5'],
      answer: 10,
      options: [9, 11, 10, 8],
    },

    {
      id: 'ee30d939-c48f-49f2-b01c-1d4f08060df8',
      category: 'addition',
      question: ['6', '+', '8'],
      answer: 14,
      options: [11, 12, 13, 14],
    },

    {
      id: '8090dd5b-648d-448f-88e7-fe6569d03d86',
      category: 'addition',
      question: ['10', '+', '6'],
      answer: 16,
      options: [14, 15, 16, 13],
    },

    {
      id: 'f1a693b3-ecb2-454a-9b3f-a8e156c4a8f4',
      category: 'addition',
      question: ['7', '+', '3'],
      answer: 10,
      options: [11, 10, 12, 9],
    },

    {
      id: '31854fda-0c37-4d57-aeac-7563b4392063',
      category: 'addition',
      question: ['7', '+', '6'],
      answer: 13,
      options: [11, 10, 12, 13],
    },

    {
      id: '97599fab-4517-42f9-bf4a-319c6b3c005a',
      category: 'addition',
      question: ['7', '+', '1'],
      answer: 8,
      options: [9, 10, 8, 7],
    },

    {
      id: 'af43aa9a-3db7-422d-a3d0-ac0420a465f0',
      category: 'addition',
      question: ['9', '+', '6'],
      answer: 15,
      options: [14, 13, 16, 15],
    },

    {
      id: '68d56719-8c2b-4c6f-84e7-7c583d9cbe74',
      category: 'addition',
      question: ['0', '+', '0'],
      answer: 0,
      options: [2, 0, 1, 3],
    },

    {
      id: '768e957a-f9ff-4cec-9923-e3105eb75863',
      category: 'addition',
      question: ['7', '+', '10'],
      answer: 17,
      options: [15, 14, 16, 17],
    },

    {
      id: '3b1a3c3f-b1cb-4a8c-9a4e-d26ccecbadaa',
      category: 'addition',
      question: ['5', '+', '4'],
      answer: 9,
      options: [7, 6, 9, 8],
    },

    {
      id: 'fe4cdbfb-1810-4c56-bc4d-c615d6bcfd33',
      category: 'addition',
      question: ['8', '+', '8'],
      answer: 16,
      options: [18, 12, 14, 16],
    },

    {
      id: 'd6fff999-5beb-47f1-87e2-22e8acdd9d74',
      category: 'addition',
      question: ['8', '+', '4'],
      answer: 12,
      options: [12, 10, 9, 11],
    },

    {
      id: 'b63d77e0-77d1-419a-a9d2-90b5a7c3d9db',
      category: 'addition',
      question: ['6', '+', '5'],
      answer: 11,
      options: [12, 10, 9, 11],
    },

    {
      id: 'ec0643c7-80c4-447b-9ba9-a785dbd43789',
      category: 'addition',
      question: ['9', '+', '7'],
      answer: 16,
      options: [14, 13, 16, 15],
    },

    {
      id: '6d9d1074-de7b-432d-8f13-20f7520d1509',
      category: 'addition',
      question: ['4', '+', '10'],
      answer: 14,
      options: [14, 13, 16, 15],
    },

    {
      id: 'da4b4c7d-3c1b-4504-a425-1489ec47838b',
      category: 'addition',
      question: ['6', '+', '6'],
      answer: 12,
      options: [13, 11, 12, 14],
    },
    {
      id: 'a569b931-b6c7-4ac3-9cd2-c27c1cb60eb7',
      category: 'subtraction',
      question: ['8', '-', '4'],
      answer: 4,
      options: [8, 4, 6, 2],
    },
    {
      id: 'e5d75c28-6cef-41a1-85e3-37c3385ee028',
      category: 'subtraction',
      question: ['10', '-', '0'],
      answer: 10,
      options: [8, 9, 7, 10],
    },
    {
      id: 'd0af2703-b6df-47b8-b84c-84a61b88ea2f',
      category: 'subtraction',
      question: ['9','-', '8'],
      answer: 1,
      options: [8, 9, 1, 5],
    },
    {
      id: '0705aaf4-2ede-4a40-aae2-a94ca5ea4d63',
      category: 'subtraction',
      question: ['6', '-', '1'],
      answer: 5,
      options: [6, 1, 3, 5],
    },
    {
      id: '0b7bc284-e39c-4fff-93a0-dbd7f66a1e4f',
      category: 'subtraction',
      question: ['9', '-', '2'],
      answer: 7,
      options: [9, 2, 7, 5],
    },
    {
      id: '9473861b-b1b1-4ebb-9300-9c7a78d09606',
      category: 'subtraction',
      question: ['8', '-', '8'],
      answer: 0,
      options: [0, 8, 6, 7],
    },
    {
      id: '8721b5dc-9853-4ede-9fb1-408345bd7c49',
      category: 'subtraction',
      question: ['6', '-', '0'],
      answer: 6,
      options: [5, 8, 6, 7],
    },
    {
      id: '12b834d9-7fd0-4d57-ac4f-0af5c2c59484',
      category: 'subtraction',
      question: ['8', '-', '5'],
      answer: 3,
      options: [5, 4, 6, 3],
    },
    {
      id: '77774ecd-13e2-42d6-935a-b4ed8ec5ce8d',
      category: 'subtraction',
      question: ['9', '-', '7'],
      answer: 2,
      options: [4, 7, 2, 9],
    },
    {
      id: '4e9977ef-1a24-4079-9743-944adb99c01a',
      category: 'subtraction',
      question: ['10', '-', '2'],
      answer: 8,
      options: [6, 7, 8, 9],
    },
    {
      id: 'ab7cf2cc-b9b0-40c6-80a7-65c2631492e5',
      category: 'subtraction',
      question: ['4', '-', '2'],
      answer: 2,
      options: [4, 2, 6, 5],
    },
    {
      id: '2ac84ac3-70e5-4968-8eee-3ddab8ff351b',
      category: 'subtraction',
      question: ['3', '-', '0'],
      answer: 3,
      options: [4, 2, 3, 5],
    },
    {
      id: '8a9c0869-5156-4c5b-8700-9efc25300b9d',
      category: 'subtraction',
      question: ['5', '-', '4'],
      answer: 1,
      options: [4, 2, 3, 1],
    },
    {
      id: '9263e55a-4b42-4fe4-9573-36265c13e6c2',
      category: 'subtraction',
      question: ['6', '-', '2'],
      answer: 4,
      options: [4, 6, 3, 5],
    },
    {
      id: '7062c598-bb51-4fd1-b211-2a409d56aa57',
      category: 'subtraction',
      question: ['6', '-', '3'],
      answer: 3,
      options: [4, 5, 3, 2],
    },
    {
      id: 'fea43446-eff3-4896-9b25-fe2a2bb28c3d',
      category: 'subtraction',
      question: ['6', '-', '4'],
      answer: 2,
      options: [4, 5, 3, 2],
    },
    {
      id: 'c7e0d038-7c2e-469f-9963-4baeaae8b2d3',
      category: 'subtraction',
      question: ['6', '-', '5'],
      answer: 1,
      options: [4, 1, 3, 2],
    },
    {
      id: 'f7ade6a4-8c14-4995-8727-bd904ac0ced9',
      category: 'subtraction',
      question: ['6', '-', '6'],
      answer: 0,
      options: [3, 1, 2, 0],
    },
    {
      id: '997dc40a-693e-4dad-8284-240705b5fefe',
      category: 'subtraction',
      question: ['7', '-', '6'],
      answer: 1,
      options: [2, 4, 1, 3],
    },
    {
      id: 'b8229d43-113d-44ea-829e-b39f8ec7f502',
      category: 'subtraction',
      question: ['7', '-', '5'],
      answer: 2,
      options: [2, 4, 5, 3],
    },
    {
      id: '78115972-cdc9-4cf5-9f2f-0c1919cd4775',
      category: 'subtraction',
      question: ['7', '-', '4'],
      answer: 3,
      options: [2, 1, 4, 3],
    },
    {
      id: '8b7d2921-22c1-4e46-bf2c-0bab2b719ece',
      category: 'subtraction',
      question: ['7', '-', '3'],
      answer: 4,
      options: [5, 2, 4, 3],
    },
    {
      id: '4a16c0f4-fa23-43e6-887a-6a2739af2726',
      category: 'subtraction',
      question: ['7', '-', '2'],
      answer: 5,
      options: [3, 4, 6, 5],
    },
    {
      id: '1b88066f-397b-45d9-9028-146d1edc9955',
      category: 'subtraction',
      question: ['8', '-' , '7'],
      answer: 1,
      options: [4, 2, 1, 4],
    },
    {
      id: 'a26f96d5-c15d-487d-82c0-e8be06fdf0de',
      category: 'subtraction',
      question: ['8', '-', '6'],
      answer: 2,
      options: [1, 3, 4, 2],
    },
    {
      id: '7ed9ec01-b830-43d8-a953-c0e5159f3de9',
      category: 'subtraction',
      question: ['8', '-', '3'],
      answer: 5,
      options: [5, 3, 2, 4],
    },
    {
      id: '55f8d432-624c-4f31-b39f-4a82ec718ea9',
      category: 'subtraction',
      question: ['8', '-', '2'],
      answer: 6,
      options: [5, 7, 4, 6],
    },
    {
      id: 'ff661d6c-23e3-4af9-9626-7d00bf7681ff',
      category: 'subtraction',
      question: ['8', '-', '1'],
      answer: 7,
      options: [5, 7, 8, 6],
    },
    {
      id: '57fca3e9-0e6f-45ba-88a7-6104c31d0afb',
      category: 'subtraction',
      question: ['8', '-', '0'],
      answer: 8,
      options: [5, 7, 8, 6],
    },
    {
      id: 'e06e5286-84b9-423c-aabb-8788ffd023e8',
      category: 'subtraction',
      question: ['9', '-', '0'],
      answer: 9,
      options: [8, 7, 6, 9],
    },
    {
      id: '29a919a8-498e-4da8-80a4-b54a18653851',
      category: 'subtraction',
      question: ['9', '-', '1'],
      answer: 8,
      options: [8, 7, 6, 9],
    },
    {
      id: '443a9d5b-be26-467b-97ea-cf2f52dbbebd',
      category: 'subtraction',
      question: ['9', '-', '3'],
      answer: 6,
      options: [5, 7, 8, 6],
    },
    {
      id: '8a762acf-295e-4d31-a628-01498efd7762',
      category: 'subtraction',
      question: ['9', '-', '4'],
      answer: 5,
      options: [9, 5, 4, 6],
    },
    {
      id: 'b94a3294-c6cd-4814-83df-7ea689e0aedb',
      category: 'subtraction',
      question: ['9', '-', '5'],
      answer: 4,
      options: [7, 5, 4, 6],
    },
    {
      id: '73429405-7a85-461e-b4bf-d5923760b1a6',
      category: 'subtraction',
      question: ['9', '-', '6'],
      answer: 3,
      options: [2, 5, 4, 3],
    },
    {
      id: '08cdcb4d-8625-4d88-b578-b74556bda989',
      category: 'subtraction',
      question: ['9', '-', '9'],
      answer: 0,
      options: [2, 1, 0, 3],
    },
    {
      id: 'd7c318d4-958d-4242-ac22-e5902f086128',
      category: 'subtraction',
      question: ['10', '-', '1'],
      answer: 9,
      options: [7, 6, 9, 8],
    },
    {
      id: '1d1e1f23-d406-4fe6-ba87-a1917404b3fb',
      category: 'subtraction',
      question: ['10', '-', '3'],
      answer: 7,
      options: [6, 5, 8, 7],
    },
    {
      id: '459550da-987e-421e-93a3-ca82b7ec7205',
      category: 'subtraction',
      question: ['10', '-', '4'],
      answer: 6,
      options: [4, 5, 6, 7],
    },
    {
      id: '5909d037-44d4-4f5d-9b6c-b97a9453eec2',
      category: 'subtraction',
      question: ['10', '-', '5'],
      answer: 5,
      options: [7, 4, 5, 6],
    },
    {
      id: 'ff5dce8c-e9e6-4aaa-9d31-0eba16f1a405',
      category: 'multiplication',
      question: ['2', '*', '5'],
      answer: 10,
      options: [9, 8, 7, 10],
    },
    {
      id: 'cf152124-0803-4431-a551-6d3d6b0555cc',
      category: 'multiplication',
      question: ['2', '*', '6'],
      answer: 12,
      options: [9, 12, 11, 10],
    },
    {
      id: '20070617-128d-454a-bd94-ff65d7fb0c50',
      category: 'multiplication',
      question: ['3', '*', '6'],
      answer: 18,
      options: [16, 14, 15, 18],
    },
    {
      id: 'e3c62d24-6660-46ec-87a9-ed3804fd8e57',
      category: 'multiplication',
      question: ['3', '*', '5'],
      answer: 15,
      options: [16, 14, 15, 18],
    },
    {
      id: '8a5c411e-430f-4f5d-a7b7-121ab423e883',
      category: 'multiplication',
      question: ['3', '*', '2'],
      answer: 6,
      options: [8, 7, 9, 6],
    },
    {
      id: 'c4c50820-6d26-45de-bfdb-46da2f85a8cd',
      category: 'multiplication',
      question: ['4', '*', '1'],
      answer: 4,
      options: [5, 3, 4, 2],
    },
    {
      id: 'a30f3714-9234-4ce5-a141-5235cfec4104',
      category: 'multiplication',
      question: ['4', '*', '2'],
      answer: 8,
      options: [5, 7, 6, 8],
    },
    {
      id: '3f69602b-ffa9-40e7-b586-aa8bb91ac332',
      category: 'multiplication',
      question: ['4', '*', '3'],
      answer: 12,
      options: [14, 10, 12, 16],
    },
    {
      id: '65257dc4-4188-46e8-9408-a19c6599dd03',
      category: 'multiplication',
      question: ['3', '*', '4'],
      answer: 12,
      options: [15, 14, 12, 13],
    },
    {
      id: '9416822b-2e04-4831-a58c-af3a29df3651',
      category: 'multiplication',
      question: ['4', '*', '4'],
      answer: 16,
      options: [16, 10, 12, 14],
    },
    {
      id: '26c70288-2398-4fd9-a267-fc9a1fd0f15f',
      category: 'multiplication',
      question: ['4', '*', '5'],
      answer: 20,
      options: [22, 16, 18, 20],
    },
    {
      id: '267234c8-ca5b-448b-acd4-c6469ec8a730',
      category: 'multiplication',
      question: ['4', '*', '6'],
      answer: 24,
      options: [22, 18, 24, 20],
    },
    {
      id: 'f3aa50a1-55a9-456c-8588-496b30c20bc9',
      category: 'multiplication',
      question: ['5', '*', '6'],
      answer: 30,
      options: [30, 24, 28, 20],
    },
    {
      id: '564c3689-5903-42d9-8541-37963264f245',
      category: 'multiplication',
      question: ['5', '*', '5'],
      answer: 25,
      options: [26, 24, 25, 27],
    },
    {
      id: '053eb072-c0e8-44be-aa83-6d713d367c63',
      category: 'multiplication',
      question: ['5', '*', '4'],
      answer: 20,
      options: [25, 10, 15, 20],
    },
    {
      id: 'a31b42c5-78f0-4ab0-9a1c-c39a10d50750',
      category: 'multiplication',
      question: ['5', '*', '3'],
      answer: 15,
      options: [25, 10, 15, 20],
    },
    {
      id: 'a5c87f09-f1e0-4d87-9197-a8dd30b20236',
      category: 'multiplication',
      question: ['5', '*', '2'],
      answer: 10,
      options: [15, 10, 20, 5],
    },
    {
      id: '25311d9c-b820-4231-9257-c75def781048',
      category: 'multiplication',
      question: ['6', '*', '0'],
      answer: 0,
      options: [1, 5, 0, 6],
    },
    {
      id: 'f4b27f3a-7ec6-41b5-bd6d-ee43a880bcdd',
      category: 'multiplication',
      question: ['5', '*', '0'],
      answer: 0,
      options: [4, 5, 0, 6],
    },
    {
      id: '95ccadce-930f-4261-b045-4bf1af0c4cf2',
      category: 'multiplication',
      question: ['4', '*', '0'],
      answer: 0,
      options: [4, 0, 5, 6],
    },
    {
      id: '19095249-a499-4cdd-8487-1f001123e76d',
      category: 'multiplication',
      question: ['6', '*', '1'],
      answer: 6,
      options: [4, 5, 1, 6],
    },
    {
      id: 'bd3aeca6-4a7a-4154-8ea8-1dc0b6416055',
      category: 'multiplication',
      question: ['6', '*', '2'],
      answer: 12,
      options: [10, 6, 2, 12],
    },
    {
      id: '9e37d33b-c942-4265-b6f7-90a169b04652',
      category: 'multiplication',
      question: ['6', '*', '3'],
      answer: 18,
      options: [6, 18, 12, 24],
    },
    {
      id: '313c1128-fd2f-4a9c-a5eb-bfa46fdfdf6a',
      category: 'multiplication',
      question: ['6', '*', '4'],
      answer: 24,
      options: [12, 18, 6, 24],
    },
    {
      id: '4765ff71-9ee4-4f43-9b36-7266874de1a7',
      category: 'multiplication',
      question: ['6', '*', '5'],
      answer: 30,
      options: [24, 12, 30, 18],
    },
    {
      id: 'f56d93fc-8ab4-40d1-a7b0-6b4e3c8fc62c',
      category: 'multiplication',
      question: ['6', '*', '6'],
      answer: 36,
      options: [18, 36, 30, 24],
    },
    {
      id: 'b1828ec6-8bdb-417c-8cad-3d6cb2fdaa10',
      category: 'multiplication',
      question: ['7', '*', '6'],
      answer: 42,
      options: [40, 44, 42, 46],
    },
    {
      id: '813554ad-023d-4082-8a2b-423afbd5d88f',
      category: 'multiplication',
      question: ['7', '*', '5'],
      answer: 35,
      options: [14, 28, 21, 35],
    },
    {
      id: 'add3094e-0ff6-4bc8-8b3b-30d4245ccdcf',
      category: 'multiplication',
      question: ['7', '*', '4'],
      answer: 28,
      options: [35, 28, 21, 14],
    },
    {
      id: 'e6bc5add-021c-44bb-8a0b-7c2c9d55b611',
      category: 'multiplication',
      question: ['7', '*', '3'],
      answer: 21,
      options: [7, 28, 21, 14],
    },
    {
      id: '2a922291-751c-464a-8aea-4e8ca6b82ced',
      category: 'multiplication',
      question: ['7', '*', '2'],
      answer: 14,
      options: [14, 28, 21, 7],
    },
    {
      id: 'd0d0cb54-3a0a-4ec2-b70e-30aad13b4c06',
      category: 'multiplication',
      question: ['7', '*', '1'],
      answer: 7,
      options: [1, 14, 21, 7],
    },
    {
      id: '09015ce1-c38d-40f0-926a-e39fda848c42',
      category: 'multiplication',
      question: ['7', '*', '0'],
      answer: 0,
      options: [7, 1, 0, 6],
    },
    {
      id: '98341f53-4f41-4a60-a2a7-966ea3a7ff45',
      category: 'multiplication',
      question: ['8', '*', '0'],
      answer: 0,
      options: [7, 1, 0, 8],
    },
    {
      id: 'fe4f0d67-54a4-4a10-94b8-b66a1977a52f',
      category: 'multiplication',
      question: ['8', '*', '1'],
      answer: 8,
      options: [7, 5, 6, 8],
    },
    {
      id: 'cb4ab887-b80a-4d99-b7f9-651ac231efee',
      category: 'multiplication',
      question: ['8', '*', '2'],
      answer: 16,
      options: [14, 8, 12, 16],
    },
    {
      id: '83e6babb-6b7e-4cd0-b236-319a553cf102',
      category: 'multiplication',
      question: ['8', '*', '3'],
      answer: 24,
      options: [8, 16, 32, 24],
    },
    {
      id: '2d77059c-e69e-46a1-84bf-eda936d9c382',
      category: 'multiplication',
      question: ['8', '*', '4'],
      answer: 32,
      options: [40, 16, 32, 24],
    },
    {
      id: 'a3d3459d-c63a-452b-a85d-5189374b3a5d',
      category: 'multiplication',
      question: ['8', '*', '5'],
      answer: 40,
      options: [40, 16, 32, 24],
    },
    {
      id: '340da8f7-ba35-48b9-8916-c2c17b88a1f7',
      category: 'multiplication',
      question: ['9', '*', '0'],
      answer: 0,
      options: [3, 1, 2, 0],
    },
    {
      id: '6e652837-69e9-4844-86b1-3f7c5bf996ab',
      category: 'division',
      question: ['5', '/', '5'],
      answer: 1,
      options: [3, 1, 2, 0],
    },
    {
      id: '557315f7-ae2d-4442-bca4-69581fae0e18',
      category: 'division',
      question: ['6', '/', '6'],
      answer: 1,
      options: [3, 1, 2, 0],
    },
    {
      id: '6d7a491d-680e-4840-8386-f6c4647529da',
      category: 'division',
      question: ['7', '/', '7'],
      answer: 1,
      options: [0, 3, 2, 1],
    },
    {
      id: '24926cc7-f1b0-41dd-af7a-1a3c5eac3267',
      category: 'division',
      question: ['8', '/', '8'],
      answer: 1,
      options: [3, 0, 2, 1],
    },
    {
      id: 'd3264e67-23dc-4ee1-8bc1-dea6367d2ac1',
      category: 'division',
      question: ['9', '/', '9'],
      answer: 1,
      options: [1, 0, 3, 2],
    },
    {
      id: '30bf3c44-7f5c-489e-8172-c04a43b81635',
      category: 'division',
      question: ['10', '/', '10'],
      answer: 1,
      options: [3, 0, 1, 2],
    },
    {
      id: '1ab9d974-6692-4d96-aca5-974928614edd',
      category: 'division',
      question: ['8', '/', '2'],
      answer: 4,
      options: [3, 4, 1, 8],
    },
    {
      id: 'c3705d9f-f024-4bab-89c5-3f2031f9af14',
      category: 'division',
      question: ['10', '/', '2'],
      answer: 5,
      options: [6, 5, 8, 2],
    },
    {
      id: 'd063fcf2-f802-4365-b7cf-d1e9f1ea662d',
      category: 'division',
      question: ['8', '/', '4'],
      answer: 2,
      options: [2, 4, 6, 8],
    },
    {
      id: '1a28b206-5184-4064-a540-65bf93b9d8e5',
      category: 'division',
      question: ['9', '/', '1'],
      answer: 9,
      options: [8, 9, 6, 1],
    },
    {
      id: '064b9618-9ed9-4626-911c-2f8bdd4bd00c',
      category: 'division',
      question: ['8', '/', '1'],
      answer: 8,
      options: [1, 9, 6, 8],
    },
    {
      id: 'dae2f990-1f49-4465-a54b-105550d91d02',
      category: 'division',
      question: ['9', '/', '3'],
      answer: 3,
      options: [9, 3, 6, 8],
    },
    {
      id: '987c47bb-82fa-47d0-81e1-b75f3c388a22',
      category: 'division',
      question: ['10', '/', '1'],
      answer: 10,
      options: [9, 3, 10, 1],
    },
    {
      id: '664ada31-a3cf-4e61-b4aa-08eb2ae2a140',
      category: 'division',
      question: ['10', '/', '5'],
      answer: 2,
      options: [8, 5, 10, 2],
    },
    {
      id: 'ebf72c27-d135-4f7e-bc3e-56225a19446d',
      category: 'division',
      question: ['12', '/', '12'],
      answer: 1,
      options: [8, 12, 10, 1],
    },
    {
      id: 'fb9a4964-bc1c-4528-bd8e-c4c87ec76598',
      category: 'division',
      question: ['12', '/', '2'],
      answer: 6,
      options: [8, 12, 6, 10],
    },
    {
      id: 'ac65470e-bfbe-44c4-9fd3-46b7af6a0a0b',
      category: 'division',
      question: ['12', '/', '4'],
      answer: 3,
      options: [12, 3, 4, 10],
    },
    {
      id: '0eda337d-5d79-4157-a1cf-88c784b2b437',
      category: 'division',
      question: ['12', '/', '6'],
      answer: 2,
      options: [6, 2, 4, 12],
    },
    {
      id: '09f51425-10e7-446c-a1a8-ac5ce07e130c',
      category: 'division',
      question: ['14', '/', '14'],
      answer: 1,
      options: [6, 14, 1, 12],
    },
    {
      id: 'ff8ae5bd-23bb-442a-a805-88d05169b1d1',
      category: 'division',
      question: ['14', '/', '2'],
      answer: 7,
      options: [7, 14, 8, 12],
    },
    {
      id: 'b9fca3b4-0884-44cc-9cb5-bbed23c85f53',
      category: 'division',
      question: ['14', '/', '7'],
      answer: 2,
      options: [7, 14, 2, 12],
    },
    {
      id: 'b61889a9-6da0-47fe-870d-b93db6790760',
      category: 'division',
      question: ['15', '/', '15'],
      answer: 1,
      options: [14, 1, 15, 12],
    },
    {
      id: '1283fc83-5261-492d-95ad-ed14a9072454',
      category: 'division',
      question: ['15', '/', '1'],
      answer: 15,
      options: [14, 1, 15, 13],
    },
    {
      id: '078f65da-70d2-4733-b6dd-371a32312857',
      category: 'division',
      question: ['15', '/', '3'],
      answer: 5,
      options: [10, 5, 15, 13],
    },
    {
      id: '632ceeca-7c18-4986-a9bc-a904f9a83288',
      category: 'division',
      question: ['15', '/', '5'],
      answer: 3,
      options: [10, 5, 3, 13],
    },
    {
      id: 'e051782d-3cf5-40eb-8c67-a1cfd3bc86cb',
      category: 'division',
      question: ['16', '/', '1'],
      answer: 16,
      options: [10, 16, 1, 12],
    },
    {
      id: 'c90d97d5-9201-48ab-9143-d818d9468c86',
      category: 'division',
      question: ['16', '/', '16'],
      answer: 1,
      options: [8, 16, 1, 12],
    },
    {
      id: 'c0b5aaa7-2969-45b9-ba18-6cc1ff5975fa',
      category: 'division',
      question: ['16', '/', '2'],
      answer: 8,
      options: [8, 16, 1, 12],
    },
    {
      id: '7d3a3a3e-5d1f-4c4d-80ad-307983096b91',
      category: 'division',
      question: ['16', '/', '4'],
      answer: 4,
      options: [8, 4, 1, 6],
    },
    {
      id: 'b17a8ba9-8eaf-4a3d-a803-4969bb685abc',
      category: 'division',
      question: ['16', '/', '8'],
      answer: 2,
      options: [8, 4, 2, 6],
    },
    {
      id: '2073ac41-7c19-47ea-be8f-513dc0fb3c52',
      category: 'division',
      question: ['17', '/', '17'],
      answer: 1,
      options: [17, 1, 2, 0],
    },
    {
      id: 'a381e597-57c1-493c-b16b-296a7da2d8f5',
      category: 'division',
      question: ['17', '/', '1'],
      answer: 17,
      options: [0, 17, 1, 10],
    },
    {
      id: '257758ba-90a6-4a7b-b2f8-4f752c51f17e',
      category: 'division',
      question: ['13', '/', '1'],
      answer: 13,
      options: [0, 13, 1, 10],
    },
    {
      id: '96a1a50f-0b1e-41f0-b5ae-3ce894272eee',
      category: 'division',
      question: ['13', '/', '13'],
      answer: 1,
      options: [0, 13, 1, 10],
    },
    {
      id: 'b959cd3c-0263-48c9-8865-179486706751',
      category: 'division',
      question: ['11', '/', '11'],
      answer: 1,
      options: [2, 11, 1, 10],
    },
    {
      id: '3e2a4658-2845-4876-ba16-f79cac419279',
      category: 'division',
      question: ['11', '/', '1'],
      answer: 11,
      options: [2, 11, 1, 10],
    },
    {
      id: '1f3a74f0-7c1f-4687-9985-0640d974dcfa',
      category: 'division',
      question: ['18', '/', '2'],
      answer: 9,
      options: [7, 10, 9, 8],
    },
    {
      id: '5b90aab5-3b51-4689-9cc6-3fb2bd91424b',
      category: 'division',
      question: ['18', '/', '3'],
      answer: 6,
      options: [7, 6, 9, 8],
    },
    {
      id: '203f2562-8c8f-43fa-a003-8455a0b672ce',
      category: 'division',
      question: ['18', '/', '6'],
      answer: 3,
      options: [6, 3, 9, 8],
    },
    {
      id: '4359b342-928b-4339-8589-46d09a4b688b',
      category: 'division',
      question: ['18', '/', '9'],
      answer: 2,
      options: [6, 3, 2, 8],
    }


  ];

  public static async execute() {
    for (const item of this.data) {
      try {
        const event = await Maths.findByPk(item.id);
        !event && (await Maths.create(item));
      } catch (e) {
        console.log(e);
      }
    }
  }
}
