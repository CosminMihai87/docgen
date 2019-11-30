import React, { useState, useContext, useEffect } from 'react';
import './Machete.scss';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { GlobalContext } from '../ContextAPI';
import {
    Button,
    TextInput
} from "carbon-components-react";
import CheckboxTree from 'react-checkbox-tree';
import {
    ChevronRight20,
    ChevronDown20,
    Checkbox20,
    CheckboxChecked20,
    CheckboxCheckedFilled20,
    Folder20,
    FolderDetails20,
    Document20,
    AddAlt20,
    SubtractAlt20
} from "@carbon/icons-react";

const Machete = () => {

    const globalContext = useContext(GlobalContext);

    //this will come from the firebase database as the index of the folder from the folder structure:
    const dosarNR = 1;

    const [treeStateMachete, setTreeStateMachete] = useState({
        checked: ["poprire1", "poprire2", "child1", "child2"],
        expanded: ["root", "parent1", "parent2"],
    });

    const [treeStateResult, setTreeStateResult] = useState({
        checked: [],
        expanded: ["parent1"],
    });

    const [machete, setMachete] = useState(
    [
        {
            value: 'parent1',
            label: 'Standard:',
            type: 'folder',
            disabled: true,
            children: [
                {
                    value: 'poprire1',
                    type: 'folder',
                    label: 'Popriri Banci',
                    children: []
                },
                {
                    value: 'poprire2',
                    type: 'folder',
                    label: 'Popriri Loc de munca',
                    children: []
                },
                {
                    value: 'child1',
                    label: 'Încheiere înregistrare cerere și deschidere dosar de executare',
                    type: 'file'
                },
                {
                    value: 'child2',
                    label: 'Cerere încuviințare executare silită',
                    type: 'file'
                }
            ],
        },
        {
            value: 'parent2',
            label: 'Altele',
            type: 'folder',
            children: [
                {
                    value: 'child3',
                    label: 'Adresa asistenta sociala si protectia copilului',
                    type: 'file'
                },
                {
                    value: 'child4',
                    label: 'Adresa camera notarilor',
                    type: 'file'
                },
                {
                    value: 'child5',
                    label: 'Adresă certificat deces',
                    type: 'file'
                },
                {
                    value: 'child6',
                    label: 'Adresa înaintare dosar judecătorie',
                    type: 'file'
                },
                {
                    value: 'child7',
                    label: 'Adresa infiintare poprire',
                    type: 'file'
                }
                // {value: 'child8', label: 'Macheta8'},
                // {value: 'child9', label: 'Macheta9'},
                // {value: 'child10', label: 'Macheta10'},
                // {value: 'child11', label: 'Macheta11'},
                // {value: 'child12', label: 'Macheta12'},
                // {value: 'child13', label: 'Macheta13'},
                // {value: 'child14', label: 'Macheta14'},
                // {value: 'child15', label: 'Macheta15'},
                // {value: 'child16', label: 'Macheta16'},
                // {value: 'child17', label: 'Macheta17'},
                // {value: 'child18', label: 'Macheta18'},
                // {value: 'child19', label: 'Macheta19'},
                // {value: 'child20', label: 'Macheta20'}
            ]
        }
    ]);

    const [macheteAlese, setMacheteAlese] = useState( [], );

    const updateTreeStateMacheteChecked = (values) => {
        setTreeStateMachete({
            ...treeStateMachete,
            checked: values
        });
    };

    const updateTreeStateMacheteExpanded = (values) => {
        setTreeStateMachete({
            ...treeStateMachete,
            expanded: values
        });
    };

    const updateTreeStateResultChecked = (values) => {
        setTreeStateResult({
            ...treeStateResult,
            checked: values
        });
    };

    const updateTreeStateResultExpanded = (values) => {
        setTreeStateResult({
            ...treeStateResult,
            expanded: values
        });
    };

    const handleBackBtn = () => {
        globalContext.updateDetails({
            step: 1
        });
    };

    const createFolderStructure = () => {
        // createFolderStructure(macheteAlese,"C:\\0.Cosmin\\2.Node\\docgen-electron\\Assets\\Templates", "C:\\0.Cosmin\\5.React\\docgen\\output");
    };


    let jsonTreeResult = [{
        value: 'parent1',
        type: 'folder',
        label: `Ds. ${dosarNR} din 2019 (${globalContext.data.nume_creditor} vs. ${globalContext.data.nume_debitor})`,
        children: macheteAlese
    }];

    useEffect( () => {
        setMacheteAlese([
            ...treeStateMachete.checked.map( k=> {
                return {
                    value: k,
                    type: [...machete[0].children,...machete[1].children]
                        .find(n => n.value===k).type,
                    label: [...machete[0].children,...machete[1].children]
                        .find(n => n.value===k).label
                }
            })
        ]);
    },[treeStateMachete, machete]);

    return (
        <div className="bx--row machete">
            <div className="bx--col-lg-6 bx--col-sm-4">
                <div className="bx--row-lg-6 bx--row-sm-4">
                    <div className="bx--col-lg-16 bx--col-sm-4 titlu-executoriu">
                        <TextInput
                            className=""
                            defaultValue={globalContext.data.titlu_executoriu}
                            disabled={false}
                            helperText=""
                            id="textinput1"
                            invalid={false}
                            invalidText=""
                            labelText="Titlu Executoriu:"
                            light={false}
                            name="textinput1"
                            placeholder="Ex: Sentinta Civila nr. 321/01.09.2018, pronuntata de Judecatoria Zimnicea"
                            type="text"
                        />
                    </div>
                    <div className="bx--col-lg-16 bx--col-sm-4 debit">
                        <TextInput
                            className=""
                            defaultValue={globalContext.data.debit}
                            disabled={false}
                            helperText=""
                            id="textinput2"
                            invalid={false}
                            invalidText=""
                            labelText="Debit:"
                            light={false}
                            name="textinput2"
                            placeholder="Ex: 12345"
                            type="text"
                        />
                    </div>
                    <div className="bx--col-lg-16 bx--col-sm-4 check-box-tree-machete">
                        <h4> Machetele disponibile: </h4>
                        <CheckboxTree
                            nodes={machete}
                            checked={treeStateMachete.checked}
                            expanded={treeStateMachete.expanded}
                            onCheck={(checked) => updateTreeStateMacheteChecked(checked)}
                            onExpand={(expanded) => updateTreeStateMacheteExpanded(expanded)}
                            icons={{
                                check: <CheckboxCheckedFilled20 />,
                                uncheck: <Checkbox20 />,
                                halfCheck:  <CheckboxChecked20 />,
                                expandClose: <ChevronRight20 />,
                                expandOpen: <ChevronDown20 />,
                                expandAll: <AddAlt20 />,
                                collapseAll: <SubtractAlt20 />,
                                parentClose: <Folder20 />,
                                parentOpen: <FolderDetails20 />,
                                leaf: <Document20 />,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="bx--col-lg-10 bx--col-sm-4 check-box-tree-result">
                <h4> Structura de fisiere si directoare generata in functie de machetele alese: </h4>
                <CheckboxTree
                    nodes={jsonTreeResult}
                    checked={treeStateResult.checked}
                    expanded={treeStateResult.expanded}
                    onCheck={(checked) => updateTreeStateResultChecked(checked)}
                    onExpand={(expanded) => updateTreeStateResultExpanded(expanded)}
                    icons={{
                        check: <CheckboxCheckedFilled20 />,
                        uncheck: <Checkbox20 />,
                        halfCheck:  <CheckboxChecked20 />,
                        expandClose: <ChevronRight20 />,
                        expandOpen: <ChevronDown20 />,
                        expandAll: <AddAlt20 />,
                        collapseAll: <SubtractAlt20 />,
                        parentClose: <Folder20 />,
                        parentOpen: <FolderDetails20 />,
                        leaf: <Document20 />,
                    }}
                />
            </div>
            <div className="bx--row btn-row">
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="btn-back"
                        disabled={false}
                        kind="primary"
                        onClick={handleBackBtn}
                        tabIndex={0}
                        type="submit"
                    >
                        Pasul Precedent
                    </Button>
                </div>
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="btn-next"
                        disabled={false}
                        kind="primary"
                        onClick={createFolderStructure}
                        tabIndex={0}
                        type="submit"
                    >
                        Creaza structura Local
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Machete;
