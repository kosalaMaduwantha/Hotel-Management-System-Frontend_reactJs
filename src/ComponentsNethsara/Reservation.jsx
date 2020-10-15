import React, { Component } from 'react'
import ReservationSuccess from './ReservationSuccess';
import jsPDF from "jspdf";
import "jspdf-autotable";
import './css/Reservation.css';
import Reserve from '../images/reserve.png'
import Button from 'react-bootstrap/Button'
import AccomodationLogo from '../images/reservimg.png'
import SocialButtons from './SocialButtons'
import Footer01 from './Footer01'
import { message, notification, Spin  } from "antd"
import { Select } from 'antd';
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
//drawer
import { Drawer} from 'antd';

const { Option } = Select;


export class Reservation extends Component {

    constructor(props) {
        super(props)

        
        this.state = {
            fname:"",
            lname:"",
            nic:"",
            email:"",
            phone:"",
            country:"",
            roomType:"",
            children:"",
            cINdate:"",
            cOUTdate:"",
            adults:"",
            headStatus:"",
            visible: false, 
            childrenDrawer: false 
            
        }
        this.handleInput = this.handleInput.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    randomStr = (len, arr) => { 
        var ans = ''; 
        for (var i = len; i > 0; i--) { 
            ans +=  
              arr[Math.floor(Math.random() * arr.length)]; 
        } 
        return ans; 
    } 
    
    componentDidMount(){
        //this.OnSubmit();
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    //drawer functions
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };

    //validations for the reservation form

    //validate the phone number
    validatePhone = () => {
        let phoneNum = this.state.phone;
        if (isNaN(phoneNum)) {
        message.error(
            "oopz!!! " +
            phoneNum +
            " is not recognized as a valid phone number. Please check the input and try again"
        );
        } else if (phoneNum.length != 10) {
        message.error(
            "oopz!!! the enterd phone number is not recognized as a valid mobile number. The number of digits should be 10"
        );
        }
    };

    //select the room type from the drop down
    selectRoom = (value) =>{
        //console.log(value);
        this.setState({roomType:value})
    }

    //generate a reservation confirm PDF
    generatePDF = (reservationData) => {
        //initilize the pds
        const doc = new jsPDF();

        //column definition
        const tableColumns = ["Reservation ID", "Customer Email", "Room Type", "Paid Status"];
        const tableRows = [];

        const rowdata = [
            reservationData.res_id,
            reservationData.cID,
            reservationData.room_type,
            reservationData.paid_status
        ];

        tableRows.push(rowdata);
        
        doc.autoTable(tableColumns, tableRows, { startY: 25 });

        const tableColumns2 = ["Check In Date", "Check Out Date", "Created date", "Adults", "Children"];
        const tableRows2 = [];

        const rowdata2 = [
            reservationData.check_in_date,
            reservationData.check_out_date,
            reservationData.date_time,
            reservationData.adults,
            reservationData.children,
        ];

        tableRows2.push(rowdata2);
        
        doc.autoTable(tableColumns2, tableRows2, { sstartY: doc.lastAutoTable.finalY + 50 });


        const date = Date().split(" ");
        //the filename will be the current systems date
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        doc.text("Your "+ reservationData.room_type + " room reservation report for "  + reservationData.check_in_date + " to " + reservationData.check_out_date, 14, 15);
        let finalY = doc.lastAutoTable.finalY + 25; // The y position on the page
        doc.text(10, finalY, "Thank you for choosing The ROCK FORT UNAWATUNA as your home away\r\nfrom home during your travels in Unawatuna, Galle, Sri Lanka.\r\nWe look forward to welcoming you and ensuring a most enjoyable visit.\r\nYou will receive an email shortly confirming the details of your reservation.\r\nIf there is anything we can do to make your visit extra special, \r\nplease let us know by sending us an email to rockfortuna@gmail.com. \r\nWe look forward to the pleasure of having you as our guest at Rock Fort Unawatuna.!");
        doc.save(`report_${dateStr}.pdf`);

    }

    OnSubmit = (e) => {
        
        e.preventDefault();

        const custData = {
            cID:this.state.email,
            fName:this.state.fname,
            lName:this.state.lname,
            nic:this.state.nic,
            email:this.state.email,
            phone:this.state.phone,
            country:this.state.country
        }

        const args = {
            message: <Spin />,
            description:
              "Please Wait... The form is submitting. Once successfull you will be redirect to the success page",
            duration: 2,
        };
        notification.open(args);

        console.log(custData);

        fetch("http://127.0.0.1:8000/customer-create/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(custData)

      })//.then((response) => {})
      .catch((err) => console.log(err)) 

      const resData = {
                res_id:"res"+this.randomStr(3,'12345abcdef'),
                room_type:this.state.roomType,
                check_in_date:this.state.cINdate,
                check_out_date:this.state.cOUTdate,
                adults:this.state.adults,
                children:this.state.children,
                date_time:new Date().toISOString().slice(0, 10),
                paid_status:"Pending",
                cID:this.state.email,
                room_id:null,
                ro_id:null

      }

      //this.generatePDF(resData);

      console.log(resData);
      fetch("http://127.0.0.1:8000/reservation-create/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(resData)

      }).then((response) => {
        // alert(response.status)
        this.setState({ headStatus: response.status });
        if(response.status == 200){
            this.generatePDF(resData);
        }
      })
      .catch((err) => console.log(err)) 

 
    }
    

    render() {
        if (this.state.headStatus == "200") {
        return <ReservationSuccess />;
      } else {
        return (
            <div >
                <SocialButtons/>
                <div className="Accomodation01" style={{overflowX:"hidden"}}>
                    <div className="row header-row" style={{overflow:"hidden"}}>
                        <div className="col-sm-12 col-md-4 col-lg-4"></div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3"></div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-5" style={{padding:0,margin:0,overflow:"hidden"}}>
                            <button className="homebtn">HOME</button>
                            <button className="menuBtn">MENU</button>
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"120px", display:"bottom"}}>
                            <img src={AccomodationLogo} className="AccomImg" alt="" style={{marginBottom:"80px"}}/>
                            <br/>
                            <button className="y-btn mt-1" onClick={this.showDrawer} >Booking Conditions</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"280px"}}>
                            <ul className="accom-ulist">
                                <li className="accom-list">Standard</li>
                                <li className="accom-list">Deluxe</li>
                                <li className="accom-list">Deluxe Mini Suite</li>
                                <li className="accom-list">Executive</li>
                                <li className="accom-list">Deluxe Family</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", overflowX:"hidden"}}>

                    <form onSubmit={this.OnSubmit.bind(this)}>
                    <table style={{marginTop:"100px", marginBottom:"20px", marginLeft:"80px"}}>
                        <tr>
                            <td>First name : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="fname" placeholder="Enter your name"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Last name : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="lname" placeholder="Enter your name"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>NIC / Passport NO : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="nic" placeholder="Enter your NIC or Passport No"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Email : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="email" placeholder="Enter your emial"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Phone : </td>
                            <td><input onChange={this.handleInput} required onBlur={this.validatePhone} type="text" className="res-input" name="phone" placeholder="Enter your Phone Number"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Country : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="country" placeholder="Enter your Country"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Room Type : </td>
                            <td>
                                <Select defaultValue="Please select the room type from the drop down" required  
                                    style={{ width: 500, marginLeft:"25px"}}
                                    onChange={(value) => this.selectRoom(value)}>
                                    <Option value="Standard">Standard</Option>
                                    <Option value="Deluxe">Deluxe</Option>
                                    <Option value="Deluxe Double">Deluxe Double</Option>
                                    <Option value="Executive">Executive</Option>
                                </Select>
                                
                            </td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Chek-In date : </td>
                            <td><input onChange={this.handleInput} required type="date" className="res-input" name="cINdate" placeholder=""/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Chek-Out date : </td>
                            <td><input onChange={this.handleInput} required type="date" className="res-input" name="cOUTdate" placeholder=""/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>No. of adults : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="adults" placeholder="Enter no of adults"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>No. of children : </td>
                            <td><input onChange={this.handleInput} required type="text" className="res-input" name="children" placeholder="Enter no of children"/></td>
                        </tr>
                        <br/>
                        <br/>
                    </table>
                    
                    <h6 style={{marginLeft:"50px", color:"#ee430f"}}>**Please make sure to read the booking conditions before make the reservation</h6>
                    <a onClick={this.showDrawer}><h6 style={{marginBottom:"50px", marginLeft:"50px"}}>Click here to read the BOOKING CONDITIONS</h6></a>
                    <input type="submit" style={{marginBottom:"120px", marginLeft:"50px"}} className="submit-btn" value="RESERVE"/>

                    </form>

                    
                    <img src={Reserve} alt=""  style={{width:"600px", height:"280px", paddingTop:"100px"}}/>
                    
                </div>
                <Footer01/>

                <Drawer
                    title="Booking Conditions"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                        <h3>Payments</h3>
                        <p>Full payment to be made to confirm the booking.<br/>Bank Transfer in USD & LKR.</p>
                        <br/><br/>

                        <h3>Property</h3>
                        <p>Check-in time 2.00 pm. check-out time 12.00 noon<br/>
                            It is important to kindly protect the furniture and other amenities of this apartment during your stay with us.<br/>
                            Any damages to the furniture and fittings will be charged before check-out.<br/>
                            Smoking is strictly prohibited inside the rooms and common areas of the apartment.<br/>
                            Cooking is not allowed.<br/>
                            Visitors are not allowed to stay overnight.
                        </p><br/><br/>

                        <h3>Cancellation Policy</h3>
                        <h6>We apply the following cancellation policy. The breakdown is as follows:</h6>
                        <p>Before 30 days of the booking - cancellation with no charge<br/>
                            From 15 days - 30% of the total price of the booking is non-refundable<br/>
                            From 7 to 14 days before the booking, 60% of the total price is non-refundable;<br/>
                            And 6 days or less before the booking start date, 90% of the total price is non-refundable;
                        </p><br/><br/>

                        <h3>Payment Instructions</h3>
                        <h6>We believe in your right to privacy and in furthering that belief we have created strict guidelines for protecting 
                            the information you provide us during the reservation process; while visiting our website (Site), and during any 
                            communication (includes chat, telephone, email) with us. We guarantee that the information you provide us will be kept 
                            confidential and will be used to support your customer relationship with us. Your personally identifiable information is 
                            not shared with third parties.<br/> <br/>Please read below for further details in order to know how we manage you data.
                        </h6><br/><br/>

                        <Button variant="primary" onClick={this.onClose} style={{marginLeft:"350px"}}>I Agree</Button>
                </Drawer>
            </div>
        )}
    }
}

export default Reservation
