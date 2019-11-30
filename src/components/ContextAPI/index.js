/**
 * @author: Cosmin Mihai <cosmin.mihai2612@gmail.com>
 */

import React, { useState } from "react";

export const GlobalContext = React.createContext(
{
  step: 0,
  persoana_creditor: "",
  persoana_debitor: "",
  nume_creditor: "",
  nume_debitor: "",
  domiciliul_creditor: "",
  domiciliul_debitor: "",
  sediul_creditor: "",
  sediul_debitor: "",
  judetul_creditor: "",
  judetul_debitor: "",
  titlu_executoriu: "",
  CUI_debitor: "",
  CNP_debitor: "",
  debit: "",
  documente_de_generat: [
    "Instiintare",
    "Deschidere"
  ],
  updateStep: () => {},
  updateDetails: () => {},
  updateDocumentsList: () => {}
});

const ContextAPI = props => {

  const [state, setState] = useState({
    step: 2,
    persoana_creditor: "",
    persoana_debitor: "",
    nume_creditor: "",
    nume_debitor: "",
    domiciliul_creditor: "",
    domiciliul_debitor: "",
    sediul_creditor: "",
    sediul_debitor: "",
    judetul_creditor: "",
    judetul_debitor: "",
    titlu_executoriu: "",
    CUI_debitor: "",
    CNP_debitor: "",
    debit: "",
    documente_de_generat: [
      "Instiintare",
      "Deschidere"
    ]
  });

  const updateStepHandler = (value) => {
    setState({
      ...state,
      step: value
    });
  };

  const updateDetailsHandler = (details) => {
    setState({
      ...state,
      ...details
    });
  };

  const updateDocumentsListHandler = (value) => {
    setState({
      ...state,
      documente_de_generat: [...state.documente_de_generat,value]
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state,
        updateStep: updateStepHandler,
        updateDetails: updateDetailsHandler,
        updateDocumentsList: updateDocumentsListHandler
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextAPI;
