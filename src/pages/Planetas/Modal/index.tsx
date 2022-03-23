import { Modal } from "@material-ui/core";
import React from "react";
import { ContentModal } from "./styles";
import Mercury from "../../../assets/Mercury.png";
import { Button } from "@mui/material";

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const ModalDelete = ({ closeModal, open }: IProps): React.ReactElement => {
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
              <Button className="btn-delete" variant="outlined">
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
