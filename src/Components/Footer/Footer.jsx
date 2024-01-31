import { Link } from "react-router-dom";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    // <section className="relative overflow-hidden py-10 bg-amber-00 border border-t-2 ">
    //   <div className="relative z-10 mx-auto max-w-7xl px-4">
    //     <div className="-m-6 flex flex-wrap">
    //       <div className="w-full p-6 md:w-1/2 lg:w-5/12">
    //         <div className="flex h-full flex-col justify-between">
    //           <div className="mb-4 inline-flex items-center">
    //             <Logo width="100px" />
    //           </div>
    //           <div>
    //             <p className="text-sm text-gray-600">
    //               &copy; Copyright 2023. All Rights Reserved by DevUI.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //         <div className="h-full">
    //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //             Company
    //           </h3>
    //           <ul>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Features
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Pricing
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Affiliate Program
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Press Kit
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //         <div className="h-full">
    //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //             Support
    //           </h3>
    //           <ul>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Account
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Help
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Contact Us
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Customer Support
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="w-full p-6 md:w-1/2 lg:w-3/12">
    //         <div className="h-full">
    //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //             Legals
    //           </h3>
    //           <ul>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Terms &amp; Conditions
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Privacy Policy
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                 to="/"
    //               >
    //                 Licensing
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="flex justify-between bg-amber-200 fixed bottom-0 w-full overflow-hidden py-3">
      <div>
        <p className="text-sm text-slate-700 pl-5">
          &copy; Copyright 2023. All Rights Reserved.
        </p>
      </div>

      <div className="flex justify-around w-1/6">
        <a href="https://github.com/saffi-786">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sk-saffiulla-144077195/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/saffi._01/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}
export default Footer;
