(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},197:function(e,t,a){},200:function(e,t,a){},253:function(e,t,a){},255:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);a(96),a(98),a(100);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=(a(106),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),d=a(16),h=a(15),p=a(40),g=a.n(p),f=(a(108),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"company-background-container"},r.a.createElement("div",{className:"container-section-one"},r.a.createElement("img",{className:"circle-logo",src:g.a,alt:"Circle Logo"})),r.a.createElement("div",{className:"container-section-two"},r.a.createElement("p",{className:"section-two-copyright"},"Copyright \xa9 2018 Circle. All Rights Reserved.")))}}]),t}(n.Component)),E=a(14),b=(a(110),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home-Portal"},r.a.createElement("div",{className:"first-section"},r.a.createElement("div",{className:"container-fluid-self background-container1 parallax-visual"},r.a.createElement("br",null),r.a.createElement("div",{className:"display"},r.a.createElement("h3",{className:"display-h"},"Help Us Recycling The Clothes")),r.a.createElement("h3",null,"\"It's not at all important to get it right the first time. It's vitally important to get it right the last time.\""),r.a.createElement("div",{className:"s-buttons"},r.a.createElement(E.a,{className:"btn-primary-white",to:"./donate"},"Donate"),r.a.createElement(E.a,{className:"btn-primary-white",to:"./non-profit"},"Non-profit")))),r.a.createElement(f,null))}}]),t}(n.Component)),v=a(22),N=a(2),C=(a(131),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){var t=new FormData;t.append("image",a.state.fileDetail),t.append("owner_id","1bb71fc0-fdc9-11e8-91c3-ef72bb587e0e"),t.append("category",a.state.donationCategory),t.append("pick_up_address",a.state.pickUpAddress),t.append("reserved_status",!1),t.append("description",a.state.description),fetch("/items/",{method:"POST",body:t}).then(function(e){if(console.log("status code",e.status),201===e.status)return e.json();500===e.status?a.setState({formStatus:"Unexpected Error, please make sure you fill out all the inputs correctly."}):(console.log(e.message),a.setState({formStatus:"Unexpected Error, please try again later"}))}).then(function(e){a.setState({formStatus:e.message})}).catch(function(e){console.log(e)})},a.handleChange=function(e){a.setState({filePath:e.target.value}),a.setState({fileDetail:e.target.files[0]})},a.handleNameChange=function(e){a.setState({name:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handlePhoneChange=function(e){a.setState({phoneNum:e.target.value})},a.handlePickUpAddChange=function(e){a.setState({pickUpAddress:e.target.value})},a.handleDonationCategoryChange=function(e){a.setState({donationCategory:e.target.value})},a.handleDescriptionChange=function(e){a.setState({description:e.target.value})},a.state={filePath:"Choose an image file of the product!",fileDetail:null,name:"",email:"",phoneNum:"",pickUpAddress:"",donationCategory:"",description:"",formStatus:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return r.a.createElement("div",{className:"User-Portal parallax-visual"},r.a.createElement(N.MDBContainer,{className:"d-flex justify-content-center"},r.a.createElement(N.MDBRow,null,r.a.createElement(N.MDBCol,{md:"12"},r.a.createElement(N.MDBCard,null,r.a.createElement(N.MDBCardBody,null,r.a.createElement("form",{className:"user-portal-form",encType:"multipart/form-data"},r.a.createElement("p",{className:"h4 text-center py-4",id:"donateText"},"Donate Now!"),r.a.createElement("p",{className:"text"},"Our non profit organizations will contact you once we receive your information."),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormCardNameEx",className:"grey-text font-weight-light"},"Your name"),r.a.createElement("input",{type:"text",id:"defaultFormCardNameEx",className:"form-control",onChange:this.handleNameChange,placeholder:"Elon Musk"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormCardEmailEx",className:"grey-text font-weight-light"},"Your email"),r.a.createElement("input",{type:"email",id:"defaultFormCardEmailEx",className:"form-control",onChange:this.handleEmailChange,placeholder:"e.musk@gmail.com"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormCardEmailEx",className:"grey-text font-weight-light"},"Your phone number"),r.a.createElement("input",{type:"tel",id:"defaultFormCardPhoneEx",className:"form-control",onChange:this.handlePhoneChange,placeholder:"145-385-8796"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormCardEmailEx",className:"grey-text font-weight-light"},"Enter Pickup Address"),r.a.createElement("input",{type:"text",id:"defaultFormCardAddressEx",className:"form-control",onChange:this.handlePickUpAddChange,placeholder:"199 Chamber Street. Brooklyn NY 11204"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormCardDescriptionEx",className:"grey-text font-weight-light"},"Product Description"),r.a.createElement("textarea",{id:"defaultFormCardDescriptionEx",className:"form-control",onChange:this.handleDescriptionChange,placeholder:""}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormCardTextEx",className:"grey-text font-weight-light"},"Things you want to donate"),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",onChange:this.handleDonationCategoryChange,type:"checkbox",id:"defaultCheck12"}),r.a.createElement("label",{htmlFor:"defaultCheck12",className:"grey-text"},"Preserved Food")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",onChange:this.handleDonationCategoryChange,type:"checkbox",id:"defaultCheck12"}),r.a.createElement("label",{htmlFor:"defaultCheck12",className:"grey-text"},"Clothes")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",onChange:this.handleDonationCategoryChange,type:"checkbox",id:"defaultCheck12"}),r.a.createElement("label",{htmlFor:"defaultCheck12",className:"grey-text"},"Others")),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",(e={name:"image",type:"file"},Object(v.a)(e,"name","image"),Object(v.a)(e,"className","custom-file-input"),Object(v.a)(e,"id","inputGroupFile01"),Object(v.a)(e,"aria-describedby","inputGroupFileAddon01"),Object(v.a)(e,"onChange",this.handleChange),Object(v.a)(e,"accept","audio/*,video/*,image/*"),e)),r.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},this.state.filePath))),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement("p",null,this.state.formStatus),r.a.createElement(N.MDBBtn,{type:"button",gradient:"blue",rounded:!0,className:"btn-block z-depth-1a",onClick:this.handleSubmit},"Submit")))))))),r.a.createElement(f,null))}}]),t}(n.Component)),y={isAuthenticated:!1,authenticate:function(e,t,a,n){var r=this;fetch("/auth/login",{method:"POST",uid:"1",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({email:e,password:t})}).then(function(e){return 200===e.status?(r.isAuthenticated=!0,e.json()):401===e.status?e.json():void console.log(e)}).then(function(e){r.isAuthenticated?(r.uid=e.user_id,r.userName=e.username,console.log(e),console.log("hihiiiii  "+r.uid),a()):n(e.message[0])}).catch(function(e){console.log(e)})},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h3",{className:"item-title"},this.props.title)}}]),t}(n.Component),O=(a(133),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{className:"item-image",src:this.props.imageSource})}}]),t}(n.Component)),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"description"},r.a.createElement("p",null,r.a.createElement("label",null,"Posted By:")," ",this.props.description.username," ",r.a.createElement("br",null),r.a.createElement("label",null,"Email: ")," ",this.props.description.email))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"address"},r.a.createElement("p",null,this.props.address))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"category"},this.props.category)}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"date-modified"},this.props.date)}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box-item"},r.a.createElement(j,{title:this.props.title}),r.a.createElement(O,{imageSource:this.props.image}),r.a.createElement(x,{category:this.props.category}),r.a.createElement(S,{date:this.props.date}),r.a.createElement(k,{address:this.props.address}),r.a.createElement(w,{description:this.props.description}),r.a.createElement(P,{item:this.props.item,buttonLabel:this.props.buttonLabel,completePhrase:this.props.completePhrase,callFrom:this.props.callFrom,btnClassName:this.props.btnClassName}))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).markItem=function(){console.log(a.props),"reservedItemList"===a.props.callFrom?fetch("/order/mark/"+a.state.item_id,{method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return console.log(e),e.json()}).then(function(e){a.setState({complete_status:!0,buttonText:a.props.completePhrase})}).catch(function(e){console.log("error",e)}):"itemList"===a.props.callFrom&&fetch("/items/reserve/"+a.state.item_id,{method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({item_id:a.state.item_id,customer_id:a.state.customer_id,pick_up_date:a.state.pick_up_date,description:a.state.description,order_status:a.state.order_status,reserved_status:a.state.reserved_status})}).then(function(e){return console.log(e),e.json()}).then(function(e){a.setState({complete_status:!0,buttonText:a.props.completePhrase})}).catch(function(e){console.log("error",e)})},a.state={item_id:a.props.item.item_id,customer_id:y.uid,pick_up_date:"12/12/18",description:"Non Profit",order_status:"Requested",complete_status:!1,buttonText:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.buttonLabel;this.setState({buttonText:e})}},{key:"render",value:function(){return r.a.createElement("button",{className:this.props.btnClassName,onClick:this.markItem,disabled:this.state.complete_status},this.state.buttonText)}}]),t}(n.Component),B=D,M=a(32),_=a.n(M),F=a(28),I=a.n(F),T=(a(197),F.transitions.scaleDown),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.width;return r.a.createElement(I.a,{columnWidth:e<=768?"100%":"33.33%",appear:T.appear,appeared:T.appeared,enter:T.enter,entered:T.entered,leaved:T.leaved,gutterWidth:6,gutterHeight:10,monitorImagesLoaded:!0},this.props.itemList.map(function(e,t){return r.a.createElement("div",{className:"image",key:"key".concat(t+1)},r.a.createElement(O,{imageSource:e.item_pic_url}),r.a.createElement("div",{className:"image-caption-wrapper"},r.a.createElement("div",{className:"image-caption"},r.a.createElement(B,{title:e.description,description:e.User,item:e,address:e.pick_up_address,buttonLabel:"reserve",completePhrase:"reserved",callFrom:"itemList",btnClassName:"btn-primary-white-item"}))))}))}}]),t}(n.Component),L=_()()(A),R=(a(69),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={items:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/items").then(function(e){return e.json()}).then(function(t){e.setState({items:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"NonProfit-Portal"},r.a.createElement(L,{itemList:this.state.items}))}}]),t}(n.Component)),U=(a(200),a(260)),W=a(261),z=a(18),J=a(85),G=a.n(J),Y=a(86),H=a.n(Y),q=a(87),K=a.n(q),$=a(88),Q=a.n($),V=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"About-Portal"},r.a.createElement("div",{className:"first-section"},r.a.createElement("div",{className:"container-fluid-self background-container2 parallax-visual"},r.a.createElement("div",{className:"display"},r.a.createElement(U.a,{className:"title"},"About Circle")))),r.a.createElement("div",{className:"second-section"},r.a.createElement(W.a,{className:"content-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 offset-md-1"},r.a.createElement("h2",null,"Our Mission"),r.a.createElement("p",null,"Circle encourages communities to decrease the amount of secondhand (but still useful!) items that get sent to landfills and recycling centers by prioritizing reusing over recycling."),r.a.createElement("br",null),r.a.createElement("h2",null,"The Problem"),r.a.createElement("p",null,"According to the EPA, over 13 million tons of textiles are trashed every year, even though nearly half of it is perfectly reusable. This is a statistic concerning only clothing, so just imagine vast amount of items being wasted overall."),r.a.createElement("br",null),r.a.createElement("h2",null,"Our Solution"),r.a.createElement("p",null,"Circle serves as a middleman that will connect users who have items they no longer want to other users and non\xadprofit organizations that would like to make use of the secondhand items. Users will post items that they no longer need on the web application, making it public to all users to view and request. Once a request is made, the user who posted the item would be notified and the two parties would be set up to figure out a time and place to meet."))))),r.a.createElement(W.a,{className:"team-Jumbotron"},r.a.createElement("h1",null,"Meet our Team"),r.a.createElement(z.Container,{className:"team-container"},r.a.createElement(z.Row,{className:"row"},r.a.createElement(z.Col,{id:"sheng",className:"col-lg-6",lg:6},r.a.createElement("img",{className:"rounded-circle",src:G.a,alt:"Generic placeholder image",width:"200",height:"200"}),r.a.createElement("h2",null,"Sheng Liu"),r.a.createElement("p",null,"Computer Science Major at Brooklyn College"),r.a.createElement("p",null,"Full Stack Developer"),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"https://www.linkedin.com/in/sheng-liu13/",role:"button"},"LinkedIn"))),r.a.createElement(z.Col,{className:"col-lg-6",lg:6},r.a.createElement("img",{className:"rounded-circle",src:Q.a,alt:"Generic placeholder image",width:"200",height:"200"}),r.a.createElement("h2",null,"Kevin Thaw"),r.a.createElement("p",null,"Computer Science Major at Brooklyn College"),r.a.createElement("p",null,"Backend Developer"),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"https://www.linkedin.com/in/kevinthaw/",role:"button"},"LinkedIn")))),r.a.createElement(z.Row,{className:"row"},r.a.createElement(z.Col,{className:"col-lg-6",lg:6},r.a.createElement("img",{className:"rounded-circle",src:H.a,alt:"Generic placeholder image",width:"200",height:"200"}),r.a.createElement("h2",null,"Rachel Chen"),r.a.createElement("p",null,"Computer Information System Major in Baruch College"),r.a.createElement("p",null,"Front End Developer"),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"https://www.linkedin.com/in/rachelchen18/",role:"button"},"LinkedIn"))),r.a.createElement(z.Col,{className:"col-lg-6",lg:6},r.a.createElement("img",{className:"rounded-circle",src:K.a,alt:"Generic placeholder image",width:"200",height:"200"}),r.a.createElement("h2",null,"Jane Chen"),r.a.createElement("p",null,"Computer Science Major at The City College of New York"),r.a.createElement("p",null,"Software Engineer and Data Analyst"),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-secondary",href:"#",role:"button"},"LinkedIn")))))),r.a.createElement(f,null))}}]),t}(n.Component),X=(a(253),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleOnClick=function(){a.setState({collapse:!a.state.collapse})},a.state={collapse:!1,isWideEnough:!1,loginStatus:"Login",authRoute:"/login",display:"hidden"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N.Navbar,{color:"green",dark:!0,expand:"md",scrolling:!0},r.a.createElement(N.NavbarBrand,{href:"/"},r.a.createElement("img",{src:g.a,height:"50",alt:"logo"})),!this.state.isWideEnough&&r.a.createElement(N.NavbarToggler,{onClick:this.handleOnClick}),r.a.createElement(N.Collapse,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(N.NavbarNav,{left:!0},r.a.createElement(N.NavItem,null,r.a.createElement(N.NavLink,{to:"/about"},"About Circle")),r.a.createElement(N.NavItem,null,r.a.createElement(N.NavLink,{to:"/donate"},"Donate")," "),r.a.createElement(N.NavItem,null,r.a.createElement(N.NavLink,{to:"/non-profit"},"Non-Profit Portal"))),r.a.createElement(N.NavbarNav,{right:!0},r.a.createElement(N.NavItem,null,r.a.createElement(N.Dropdown,null,r.a.createElement(N.DropdownToggle,{nav:!0,caret:!0},r.a.createElement(N.Fa,{icon:"user"},y.isAuthenticated?" ".concat(y.userName,", "):"Login")),r.a.createElement(N.DropdownMenu,{className:"dropdown-default",right:!0},r.a.createElement(N.DropdownItem,null,r.a.createElement(E.a,{className:"dropdown-item-align",to:y.isAuthenticated?"/auth/signout":"/Login"},y.isAuthenticated?"Logout ":"Login")),r.a.createElement(N.DropdownItem,{className:y.isAuthenticated?"":"hidden"},r.a.createElement(E.a,{className:"dropdown-item-align",to:"/reservation"},"Reserved Items"))))))))}}]),t}(n.Component)),Z=a(83),ee=(a(255),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleEmailChange=function(e){console.log(e.target.value),a.setState({email:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(){y.authenticate(a.state.email,a.state.password,function(){a.setState({redirectToReferrer:!0}),a.setState({authMessage:""})},function(e){a.setState({authMessage:e})})},a.state={email:"",password:"",redirectToReferrer:!1,authMessage:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?r.a.createElement(Z.a,{to:e}):r.a.createElement("div",{className:"loginBox parallax-visual"},r.a.createElement(N.MDBContainer,{className:"d-flex justify-content-center"},r.a.createElement(N.MDBRow,null,r.a.createElement(N.MDBCol,null,r.a.createElement(N.MDBCard,null,r.a.createElement(N.MDBCardBody,{className:"mx-4"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"dark-grey-text mb-5"},r.a.createElement("strong",null,"Sign in"))),r.a.createElement(N.MDBInput,{label:"Your email",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:this.handleEmailChange}),r.a.createElement(N.MDBInput,{label:"Your password",group:!0,type:"password",validate:!0,containerClass:"mb-0",onChange:this.handlePasswordChange}),r.a.createElement("p",{className:"font-small d-flex justify-content-end pb-3 status"},this.state.authMessage),r.a.createElement("p",{className:"font-small blue-text d-flex justify-content-end pb-3"},"Forgot",r.a.createElement("a",{href:"#!",className:"blue-text ml-1"},"Password?")),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement(N.MDBBtn,{type:"button",gradient:"blue",rounded:!0,className:"btn-block z-depth-1a",onClick:this.handleSubmit},"Sign in"))),r.a.createElement(N.MDBModalFooter,{className:"mx-5 pt-3 mb-1"},r.a.createElement("p",{className:"font-small grey-text d-flex justify-content-end"},"Not a member?",r.a.createElement(E.a,{className:"blue-text ml-1",to:"./register"},"Non-profit? Join us to recycle the clothes.."))))))))}}]),t}(n.Component)),te=(a(257),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleNameChange=function(e){a.setState({nonProfitName:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleAddressChange=function(e){a.setState({address:e.target.value})},a.handleSubmit=function(e){a.state.password!==a.state.confirmPassWord?a.setState({registerStatus:"Password does not match! Check again."}):""===a.state.address||""===a.state.nonProfitName?a.setState({registerStatus:"Please fill out all the star fields."}):fetch("/auth/signup",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({email:a.state.email,password:a.state.password,username:a.state.nonProfitName,address:a.state.address,user_type:"nonprofit"})}).then(function(e){return e.json()}).then(function(e){a.setState({registerStatus:e.message}),console.log(e)}).catch(function(e){console.log("error",e)})},a.handlePasswordConfirmChange=function(e){a.setState({confirmPassWord:e.target.value})},a.state={registerStatus:"",email:"",password:"",confirmPassWord:"",nonProfitName:"",address:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nonprofit-registration-portal parallax-visual"},r.a.createElement(N.MDBContainer,{className:"d-flex justify-content-center "},r.a.createElement(N.MDBRow,null,r.a.createElement(N.MDBCol,null,r.a.createElement(N.MDBCard,null,r.a.createElement(N.MDBCardBody,{className:"mx-4"},r.a.createElement("div",{className:"justify-content-center"},r.a.createElement("h3",{className:"dark-grey-text mb-5"},r.a.createElement("strong",null," - Become A Member - "))),r.a.createElement(N.MDBInput,{label:"Email*",type:"email",error:"wrong",success:"right",onChange:this.handleEmailChange}),r.a.createElement(N.MDBInput,{label:"Password*",type:"password",onChange:this.handlePasswordChange}),r.a.createElement(N.MDBInput,{label:"Confirm*",type:"password",onChange:this.handlePasswordConfirmChange}),r.a.createElement(N.MDBInput,{label:"Organization Name*",type:"text",onChange:this.handleNameChange}),r.a.createElement(N.MDBInput,{label:"Organization Address*",type:"text",onChange:this.handleAddressChange}),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement(N.MDBBtn,{type:"button",gradient:"peach",className:"btn-block z-depth-1a",onClick:this.handleSubmit},"Sign Up")),r.a.createElement("p",{className:"register-status"},this.state.registerStatus)))))))}}]),t}(n.Component)),ae=F.transitions.scaleDown,ne=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.width;return r.a.createElement(I.a,{columnWidth:e<=768?"100%":"33.33%",appear:ae.appear,appeared:ae.appeared,enter:ae.enter,entered:ae.entered,leaved:ae.leaved,gutterWidth:6,gutterHeight:10,monitorImagesLoaded:!0},this.props.itemList.map(function(e,t){return r.a.createElement("div",{className:"image",key:"key".concat(t+1)},r.a.createElement(O,{imageSource:e.Item.item_pic_url}),r.a.createElement("div",{className:"image-caption-wrapper"},r.a.createElement("div",{className:"image-caption"},r.a.createElement(B,{title:e.Item.description,description:e.Item.User,item:e.Item,address:e.Item.pick_up_address,buttonLabel:"Complete",completePhrase:"Completed",callFrom:"reservedItemList",btnClassName:"btn-primary-white-item"}))))}))}}]),t}(n.Component),re=_()()(ne),le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={items:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/order/".concat(y.uid)).then(function(e){if(200===e.status)return e.json();console.log(e.message)}).then(function(t){console.log(t),e.setState({items:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"reservation-portal"},r.a.createElement(re,{itemList:this.state.items}))}}]),t}(n.Component),oe=a(93);var ce=function(e){var t=e.component,a=Object(oe.a)(e,["component"]);return r.a.createElement(h.a,Object.assign({},a,{render:function(e){return y.isAuthenticated?r.a.createElement(t,e):r.a.createElement(Z.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},se=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{path:"/donate",component:C}),r.a.createElement(h.a,{path:"/about",component:V}),r.a.createElement(h.a,{path:"/login",component:ee}),r.a.createElement(h.a,{path:"/register",component:te}),r.a.createElement(ce,{path:"/non-profit",component:R}),r.a.createElement(ce,{path:"/reservation",component:le}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,a){e.exports=a.p+"static/media/circle_logo.6234a579.png"},69:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/sheng.12621918.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/rachel.925ac820.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/jane.ea6f34bc.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/kevin.70903210.jpg"},95:function(e,t,a){e.exports=a(259)}},[[95,2,1]]]);
//# sourceMappingURL=main.c78fbd00.chunk.js.map