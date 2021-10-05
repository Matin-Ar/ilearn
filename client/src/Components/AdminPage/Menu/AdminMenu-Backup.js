// import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import { Link } from "react-router-dom";

// //imported assets
// import { ReactComponent as HomeImg } from "../../../Assets/Svg/homepage.svg";
// import { ReactComponent as PenImg } from "../../../Assets/Svg/pen.svg";
// import { ReactComponent as DocumentImg } from "../../../Assets/Svg/document.svg";
// import { ReactComponent as AvatarImg } from "../../../Assets/Svg/avatar.svg";

// function AdminMenu() {
//   return (
//     <div className="admin-menu-container">
//       <div className="admin-menu__logo-container">
//         <h1 className="admin-menu__logo">CMS</h1>
//       </div>

//       <div className="admin-menu__items">
//         <Accordion allowZeroExpanded>
//           <div className="accordion__item accordion__button">
//             <Link
//               className="admin-menu__link"
//               to="/admin"
//               activeClassName="active_admin_menu_link"
//             >
//               <HomeImg className="admin-menu__items__img" /> داشبورد
//             </Link>
//           </div>
//           <AccordionItem>
//             <AccordionItemHeading>
//               <AccordionItemButton>
//                 <DocumentImg className="admin-menu__items__img" /> دوره ها
//               </AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel>
//               <Link to="/admin/ViewCourse" className="admin-menu__link">
//                 <p>مشاهده لیست دوره ها</p>
//               </Link>
//             </AccordionItemPanel>
//             <AccordionItemPanel>
//               <Link to="/admin/AddCourse" className="admin-menu__link">
//                 <p> افزودن دوره</p>
//               </Link>
//             </AccordionItemPanel>
//           </AccordionItem>
//           <div className="accordion__item accordion__button">
//             <Link to="/admin/users" className="admin-menu__link">
//               <AvatarImg className="admin-menu__items__img" /> کاربران
//             </Link>
//           </div>
//         </Accordion>
//       </div>
//     </div>
//   );
// }

// export default AdminMenu;
