import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ContentModal } from "./styles";
import Mercury from "../../../assets/Mercury.png";
import { Button } from "@mui/material";
import { getPlanetsInformation } from "../../../services/ListPlanetsInformation";

interface IProps {
  closeModal: () => void;
  open: boolean;
  deleteById: () => void;
}

const ModalDelete = ({
  closeModal,
  open,
  deleteById,
}: IProps): React.ReactElement => {
  const deleteCard = () => {
    deleteById();
    closeModal();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
      >
        <ContentModal>
          <div className="stars">
            <img src={Mercury} />
          </div>
          <div className="box">
            <h1>Tem certeza?</h1>
            <p>
              Ao pressionar em <strong>deletar</strong> todos os dados desse
              planeta serão apagados dos sistema{" "}
              <strong>permanentemente</strong>! Deseja apagar todos os dados?
            </p>
            <div className="buttons">
              <Button
                className="btn-back"
                variant="contained"
                onClick={closeModal}
              >
                Voltar
              </Button>
              <Button
                className="btn-delete"
                variant="outlined"
                onClick={deleteCard}
              >
                Deletar
              </Button>
            </div>
          </div>
        </ContentModal>
      </Modal>
    </>
  );
};

export default ModalDelete;
