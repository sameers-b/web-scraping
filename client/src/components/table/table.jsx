import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
const Table = ({ data, page, limit }) => {
  const tableHeader = [
    "Company",
    "SOCIAL PROFILE",
    "DESCRIPTION",
    "ADDRESS",
    "PHONE NO.",
    "EMAIL",
  ];
  return (
    <div className="m-auto max-w-screen-xl shadow-md sm:rounded-lg">
      <div className="flex p-3 pl-5 pt-4 items-center gap-20 bg-white border rounded-t-lg">
        <div className="font-semibold">
          <span>0</span> selected
        </div>
        <div className="flex gap-5">
          <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200">
            Delete
          </Button>
          <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200">
            Export as CSV
          </Button>
        </div>
      </div>
      <div className="  overflow-x-auto border ">
        <table className="table-auto overflow-x-auto md:overflow-auto w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {tableHeader.map((header) => (
                <th scope="col" className="px-6 py-3" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.data.map((row, i) => (
              <tr className="bg-white border-b  hover:bg-gray-50 " key={i}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link to={`/scrape/${row?._id}`}>
                    <img
                      src={row?.logoUrl}
                      className="bg-black h-10 w-20 object-contain rounded-md px-1"
                    />
                  </Link>
                </th>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <Link to={row?.socialLinks?.facebook} target="_blank">
                      <FaFacebook size={20} />
                    </Link>
                    <Link to={row?.socialLinks?.twitter} target="_blank">
                      <FaTwitter size={20} />
                    </Link>
                    <Link to={row?.socialLinks?.linkedin} target="_blank">
                      <FaLinkedin size={20} />
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4 text-elicps w-80">
                  {row?.description || "N/A"}
                </td>
                <td className="px-6 py-4">{row?.address || "N/A"}</td>
                <td className="px-6 py-4 min-w-44">{row?.phone || "N/A"}</td>
                <td className="px-6 py-4">{row?.email || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between border rounded-b-lg bg-white pt-6 p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {page}-{data?.data?.data.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {data?.data?.totalCount}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {Array.from({ length: data?.data?.totalPages }, (x) => x + x).map(
            (row, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {i + 1}
                </a>
              </li>
            )
          )}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
