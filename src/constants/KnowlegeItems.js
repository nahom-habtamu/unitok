const coinKnowledgeItems = [
    {  key : "BitCoin", value : "31", },
    {  key : "Ethereum",value : "18", },
    {  key : "Litecoin",value : "23", },
    {  key : "Startcoin",value : "14",},
    {  key : "Startcoin",value : "17",},
];

const paymentsKnowledgeItems = [
    {  key : "Buy/Sell", value : "39", },
    {  key : "Withdrawals",value : "12", },
    {  key : "Coins Exchange",value : "8", },
    {  key : "About Tokens",value : "74",},
    {  key : "Earnings",value : "13",},
];

const nftKnowledgeItems = [
    {  key : "Fundametals", value : "44", },
    {  key : "Investment",value : "82", },
    {  key : "Risks and Benefits",value : "16", },
    {  key : "Trade", value: "8",},
    {  key : "Earnings",value : "13",},
];


const KnowledgeItems = [
    {
        title : "Coins",
        iconPath : "M21.22,12A3,3,0,0,0,22,10a3,3,0,0,0-3-3H13.82A3,3,0,0,0,11,3H5A3,3,0,0,0,2,6a3,3,0,0,0,.78,2,3,3,0,0,0,0,4,3,3,0,0,0,0,4A3,3,0,0,0,2,18a3,3,0,0,0,3,3H19a3,3,0,0,0,2.22-5,3,3,0,0,0,0-4ZM11,19H5a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H5a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H5A1,1,0,0,1,5,9h6a1,1,0,0,1,0,2Zm0-4H5A1,1,0,0,1,5,5h6a1,1,0,0,1,0,2Zm8.69,11.71A.93.93,0,0,1,19,19H13.82a2.87,2.87,0,0,0,0-2H19a1,1,0,0,1,1,1A1,1,0,0,1,19.69,18.71Zm0-4A.93.93,0,0,1,19,15H13.82a2.87,2.87,0,0,0,0-2H19a1,1,0,0,1,1,1A1,1,0,0,1,19.69,14.71Zm0-4A.93.93,0,0,1,19,11H13.82a2.87,2.87,0,0,0,0-2H19a1,1,0,0,1,1,1A1,1,0,0,1,19.69,10.71Z",
        knowledgeItems : coinKnowledgeItems 
    },
    {
        title : "Payments",
        iconPath : "M20,17.57a4.3,4.3,0,1,0-3.67,2.06A4.37,4.37,0,0,0,18.57,19l1.72,1.73a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM18,17a2.37,2.37,0,0,1-3.27,0,2.32,2.32,0,0,1,0-3.27,2.31,2.31,0,0,1,3.27,0A2.32,2.32,0,0,1,18,17ZM19,3H5A3,3,0,0,0,2,6v9a3,3,0,0,0,3,3H9a1,1,0,0,0,0-2H5a1,1,0,0,1-1-1V9H20v1a1,1,0,0,0,2,0V6A3,3,0,0,0,19,3Zm1,4H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1ZM10,11H7a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z",
        knowledgeItems : paymentsKnowledgeItems 
    },
    {
        title : "NFT Marketplace",
        iconPath : "M12,9.84a2.92,2.92,0,0,0-3.43,4.65l2.72,2.72a1,1,0,0,0,1.42,0l2.72-2.72A2.92,2.92,0,0,0,12,9.84Zm2,3.23-2,2-2-2a.92.92,0,0,1,0-1.3.92.92,0,0,1,1.3,0,1,1,0,0,0,1.42,0,.92.92,0,0,1,1.3,1.3ZM19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z",
        knowledgeItems : nftKnowledgeItems 
    }
];

export default KnowledgeItems;