import React from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import {Table} from "react-bootstrap";
import "../../src/App.css";


const SamitiUddeshay=()=>
{
    return(
        <div>
            <MenuBar/>
            <h1 style={{textAlign:"center", color:"green", padding:10, backgroundColor:"white"}}>ट्रस्ट उद्देश्य सूची</h1>
            

            <h3  style={{textAlign:"left", fontWeight:"bold",backgroundColor:"lightcoral",color:"white", padding:10,  }} >चिन्दडी श्री वीर तेजाजी मंदिर विकास ट्रस्ट का रजिस्ट्रेशन राजस्थान लोकन्यास  अधिनियम 1959 के अन्तर्गत किया गया है जिसका रजिस्ट्रेशन क्रमांक 38/2021/जोधपुर है।</h3>
            
            
            <Table striped bordered hover size="sm" style={{marginTop:100, textAlign:"left"}}>
        <thead>
            <tr>
            <th>क्रम संख्या</th>
            <th>विवरण</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>1</td>
            <td>सामाजिक समरसता एवं सौहार्द कायम करना।</td>
            </tr>
            <tr>
            <td>2</td>
            <td> लोकदेवता वीर तेजाजी के प्रति धार्मिक भावना का संचार करना।
</td>
            </tr>
            <tr>
            <td>3</td>
            <td>आर्थिक व सामाजिक रूप से पिछड़े लोगो की मदद करना।
</td>
            </tr>
            <tr>
            <td>4</td>
            <td> समाज मे सामाजिक,आर्थिक,राजनैतिक,धार्मिक एवं सांस्कृतिक जागरूकता पैदा करना।</td>
            </tr>
            <tr>
            <td>5</td>
            <td>समय-समय पर युवाओं के लिए खेलकूद व मनोरंजन की गतिविधियां आयोजित करना।</td>
            </tr>
            <tr>
            <td>6</td>
            <td>रक्तदान व अन्य प्रकार के शिविरों के माध्यम से जनसेवा करना।</td>
            </tr>
            <tr>
            <td>7</td>
            <td>सामाजिक कुरीतियों को दूर करने का प्रयास करना।</td>
            </tr>
            <tr>
            <td>8</td>
            <td>आर्थिक रूप से पिछड़े विद्यार्थियों को समुचित शिक्षा उपलब्ध कराने के प्रयास करना।</td>
            </tr>
            <tr>
            <td>9</td>
            <td>मेलो व अन्य सांस्कृतिक आयोजनों के माध्यमों से लोक संस्कृति को समृद्ध करना।</td>
            </tr>
            <tr>
            <td>10</td>
            <td>किसी भी क्षेत्र में उत्कृष्ट कार्य करने वाले ग्रामवासियों को प्रतिवर्ष सम्मानित करना।</td>
            </tr>
            <tr>
            <td>11</td>
            <td>समय-समय पर रोजगार मेलों व रोजगार परामर्श शिविरों का आयोजन करना।</td>
            </tr>
            <tr>
            <td>12</td>
            <td>किसानों को कृषि सम्बन्धी विशेषज्ञ सहायता उपलब्ध करवाना।</td>
            </tr>
            <tr>
            <td>13</td>
            <td>गांव के असहाय व निराश्रित वृध्दजनो को हरसंभव सहायता उपलब्ध करवाना।</td>
            </tr>
            <tr>
            <td>14</td>
            <td>महिलाओं को शिक्षा,स्वास्थ्य व रोजगार में पुरुषो के समान अवसर उपलब्ध करवाना।</td>
            </tr>
            <tr>
            <td>15</td>
            <td>सामाजिक विवादों को निपटाने हेतु मध्यस्थता मंच के रूप में कार्य करना।</td>
            </tr>
            
            
            
        </tbody>
</Table>
    
 

           <Footer/>

        </div>
    )
}
export default SamitiUddeshay;