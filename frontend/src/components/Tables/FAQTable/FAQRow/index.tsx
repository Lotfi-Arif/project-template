// import {
//   EyeOutline,
//   PencilOutline,
//   TrashOutline,
// } from "@graywolfai/react-heroicons";
import { HiOutlineEye, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi"
import Link from "next/link";

const FAQRow = (faqs) => {
  console.log(faqs);

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
              {/* <img className="h-6 w-6" src={faqs.event.eventImageURL} alt="Event Image" /> */}
            </div>
            <span className="font-medium">{/* {faqs.event.title} */}</span>
          </div>
        </td>
        <span className="text-gray-700 py-1 px-3 items-center table-caption">
          {/* {faqs.event.eventDetails} */}
        </span>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <Link href={"/pages/admin/manageevents/viewEvent"} passHref>
                <HiOutlineEye />
              </Link>
            </button>
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <Link href={"/pages/admin/manageevents/editEvent"} passHref>
                <HiOutlinePencil />
              </Link>
            </button>
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <HiOutlineTrash />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default FAQRow;
