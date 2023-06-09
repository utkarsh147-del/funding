//  SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;


contract CampaignFactory{
    address[] public deployedCamaigns;

    event campaignCreated(
        string title,
        uint requireAmt,
        address indexed owner,
        address campaignAddress,
        string imgURI,
        uint indexed timestamp,
        string indexed category
    );

    function createCampaign(string memory campaignTitle,uint requiredCampaignAmount,string memory imgURL,string memory category,string memory sturl) public
    {
Campaign newCampaign=new Campaign(campaignTitle,requiredCampaignAmount,imgURL,sturl);

deployedCamaigns.push(address(newCampaign));
emit campaignCreated(campaignTitle,requiredCampaignAmount,msg.sender,address(newCampaign),imgURL,block.timestamp,category);
    }
}

contract Campaign
{
    string public title;
uint public requireAmt;
string public image;
string public story;
address payable public owner;
uint public receiveAmt;

event donated(address indexed donar,uint indexed amount,uint indexed timestamp);

constructor(string memory Campaigntitle,uint requiredCampaignAmount,string memory imgURI,string memory storyURI)
{
    title=Campaigntitle;
    requireAmt=requiredCampaignAmount;
    image=imgURI;
    story=storyURI;
    owner=payable(msg.sender);
}

function donate() public payable
{
    require(requireAmt>receiveAmt,"require amt fulfll");
    owner.transfer(msg.value);
    receiveAmt+=msg.value;
    emit donated(msg.sender,msg.value,block.timestamp);
}

}