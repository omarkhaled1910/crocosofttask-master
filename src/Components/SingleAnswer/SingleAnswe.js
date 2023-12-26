import React from "react";
import { Circle, Delete, Edit } from "@mui/icons-material";
import { TextField } from "@mui/material";
import SaceCancel from "../SaveCancel/SaceCancel";

const SingleAnswer = ({
  ans,
  i,
  setQuestionHover,
  questionHover,
  handleEditAnswerSubmit,
  handleDeleteAnswer,
  questionId,
}) => {
  const [answerEdit, setAnswerEdit] = React.useState(null);

  return (
    <>
      {answerEdit?.id == ans?.id ? (
        <>
          <div className="flex-center">
            <TextField
              value={answerEdit.text}
              onChange={(e) =>
                setAnswerEdit({ ...answerEdit, text: e.target.value })
              }
              type={"text"}
              fullWidth
            />
            <SaceCancel
              savefn={() => {
                handleEditAnswerSubmit(answerEdit, questionId);
                setAnswerEdit(null);
              }}
              cancelfn={() => setAnswerEdit(null)}
            />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid lightgray",
            justifyContent: "space-between",
          }}
        >
          <div
            key={i}
            onMouseEnter={() => setQuestionHover(ans.id.toString())}
            style={{
              minWidth: "250px",
              gap: "10px",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              <Circle style={{ fill: "lightgray", width: 15, height: 15 }} />
            </span>

            {ans.text}
            {ans.is_true && " (Right Answer)"}
          </div>

          {!answerEdit && (
            <div
              onMouseEnter={() => setQuestionHover(ans.id.toString())}
              className="flex-center"
            >
              <div onClick={() => setAnswerEdit(ans)}>
                <Edit />
              </div>
              <div onClick={() => handleDeleteAnswer(ans.id, questionId)}>
                <Delete />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SingleAnswer;
