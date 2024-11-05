import React, { useEffect } from "react";
import DataTable from "datatables.net-react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
const LiveAccountsB = ({ title }) => {
  useEffect(() => {
    const table = $("#myTable").DataTable({
      destroy: true,
    });
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl my-4">{title}</h1>
      <div className="overflow-x-auto">
        <table id="myTable" className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">A-ID</th>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Deposit</th>
              <th className="py-2 px-4 border-b">Group</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>
                  <CiEdit className="text-gray-700 font-bold text-4xl" />
                </button>
                <button className="m-2">
                  <MdDeleteOutline className="text-red-700 font-bold text-4xl" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>
                  <CiEdit className="text-gray-700 font-bold text-4xl" />
                </button>
                <button className="m-2">
                  <MdDeleteOutline className="text-red-700 font-bold text-4xl" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>
                  <CiEdit className="text-gray-700 font-bold text-4xl" />
                </button>
                <button className="m-2">
                  <MdDeleteOutline className="text-red-700 font-bold text-4xl" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>
                  <CiEdit className="text-gray-700 font-bold text-4xl" />
                </button>
                <button className="m-2">
                  <MdDeleteOutline className="text-red-700 font-bold text-4xl" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>
                  <CiEdit className="text-gray-700 font-bold text-4xl" />
                </button>
                <button className="m-2">
                  <MdDeleteOutline className="text-red-700 font-bold text-4xl" />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>
                  <CiEdit className="text-gray-700 font-bold text-4xl" />
                </button>
                <button className="m-2">
                  <MdDeleteOutline className="text-red-700 font-bold text-4xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveAccountsB;
