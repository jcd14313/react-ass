// Lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import moment from "moment";

// Context
import { useMain } from "../../context/main-context";

// hooks
import useAllStudents from "../../hooks/useAllStudent";

// Components
import Table from "../../components/table";
import PageContainer from "../../components/page-container";
import ErrorAlert from "../../components/error-alert";
import NoDataAlert from "../../components/nodata-alert";

//  utils
import { Capitalize } from "../../utils";

// Styles
import * as SC from "./styled";

const StudentPage = () => {
  const { data, loading, error } = useAllStudents();
  const [students, setStudents] = useState([]);
  const { deleteStudentService } = useMain();

  const navigate = useNavigate();

  const deleteRow = async (_id) => {
    const filterStudents = [...students].filter((item) => {
      return item._id !== _id;
    });
    await deleteStudentService(_id);
    setStudents(filterStudents);
    toast.success("Student successfully deleted");
  };

  useEffect(() => {
    setStudents(data);
  }, [data]);

  const columns = [
    {
      key: "id",
      title: "ID",
      width: "20%",
    },
    {
      key: "fullName",
      title: "Full Name",
      width: "20%",
    },
    {
      key: "email",
      title: "Email",
      width: "20%",
    },
    {
      key: "dob",
      title: "DOB",
      width: "20%",
    },
    {
      key: "actions",
      title: "Actions",
      width: "10%",
      render: (_, { _id }) => {
        return (
          <>
            <SC.EditBtn to={`/dashboard/students/${_id}`}>
              <FontAwesomeIcon icon={faPencil} />
            </SC.EditBtn>
            <SC.DeleteBtn href="/" onClick={() => deleteRow(_id)}>
              <FontAwesomeIcon icon={faTrash} />
            </SC.DeleteBtn>
          </>
        );
      },
    },
  ];

  const gotoCreate = () => {
    navigate("/dashboard/students/new");
  };

  const mapData = (items) => {
    if (!items) return [];
    return items.map((item) => ({
      ...item,
      fullName: `${Capitalize(item.firstName)}  ${Capitalize(item.lastName)}`,
      dob: item.dob ? moment(new Date(item.dob)).format("MMM Do YY") : "",
    }));
  };

  if (loading) {
    return (
      <PageContainer>
        <p>
          <strong>Loading...</strong>
        </p>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorAlert msg="Apologies we cant load student's at this moment" />
      </PageContainer>
    );
  }

  return (
    <div className="container">
      <SC.ButtonWrap>
        <button onClick={gotoCreate} className="btn btn-primary btn-small">
          Create
        </button>
      </SC.ButtonWrap>

      {students && students.length === 0 ? (
        <PageContainer>
          <NoDataAlert />
        </PageContainer>
      ) : (
        <Table data={mapData(students)} columns={columns} />
      )}
    </div>
  );
};

export default StudentPage;
