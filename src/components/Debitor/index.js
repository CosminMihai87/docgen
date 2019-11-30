import React, { useState } from 'react';
import './Creditor.scss';
import {
    Form,
    Select,
    SelectItem,
    TextInput,
    Button
} from 'carbon-components-react';

const Creditor = () => {

    const [persoanaFizica, setPersoanaFizica] = useState(true);

    const CreditorTextInput = props => {
        return (
            <TextInput {...props} />
        );
    };

    CreditorTextInput.defaultProps = {
        className: "className",
        disabled: false,
        helperText: "",
        id: "id",
        invalid: false,
        invalidText: "",
        labelText: "labelText",
        light: false,
        placeholder: "Placeholder text",
        type: "text"
    };

    const toggleCreditorHandler = () => {
        setPersoanaFizica(!persoanaFizica);
    };


    return (
        <Form
            className="generare-dosar-form"
            onSubmit={function noRefCheck(){}}
        >
            <div className="bx--row">
                <div className="bx--col-lg-2 bx--col-sm-12">
                    <Select
                        className="generare-dosar-form-1"
                        defaultValue="Fizica"
                        disabled={false}
                        helperText=""
                        iconDescription="open list of options"
                        id="select-1"
                        inline={false}
                        invalid={false}
                        invalidText=""
                        labelText="Persoana:"
                        light={false}
                        onChange={toggleCreditorHandler}
                        required
                    >
                        <SelectItem
                            disabled={false}
                            hidden={false}
                            text="Fizica"
                            value="Fizica"
                        />
                        <SelectItem
                            disabled={false}
                            hidden={false}
                            text="Juridica"
                            value="Juridica"
                        />
                    </Select>
                </div>
                <div className="bx--col-lg-4 bx--col-sm-12">
                    {persoanaFizica ?
                        <CreditorTextInput
                            className="generare-dosar-form-2"
                            id="textinput1"
                            labelText="Nume/Prenume:"
                            placeholder="Ex: Andreca Nicu"
                            required
                        />
                        : <CreditorTextInput
                            className="generare-dosar-form-2"
                            id="textinput1"
                            labelText="Denumire Societate:"
                            placeholder="Ex: S.C. POLARIS M HOLDING S.R.L."
                            required
                        />}
                </div>
                <div className="bx--col-lg-4 bx--col-sm-12">
                    {persoanaFizica ?
                        <CreditorTextInput
                            className="generare-dosar-form-3"
                            id="textinput2"
                            labelText="cu domiciliul in:"
                            placeholder="Ex: com. Gruia, sat Izvoarele"
                            required
                        />
                        : <CreditorTextInput
                            className="generare-dosar-form-3"
                            id="textinput2"
                            labelText="cu sediul procesual ales in:"
                            placeholder="Ex: Alexandria, str. Libertatii, nr.200A, et. 1"
                            required
                        />}
                </div>
                <div className="bx--col-lg-2 bx--col-sm-12">
                    <CreditorTextInput
                        className="generare-dosar-form-4"
                        id="textinput3"
                        labelText="judetul:"
                        placeholder="Ex: Teleorman"
                        required
                    />
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-12 bx--col-sm-12">
                    <CreditorTextInput
                        className="generare-dosar-form-5"
                        id="textinput4"
                        labelText="Titlu Executoriu:"
                        placeholder="Ex: Sentinta Civila nr. 420/13.09.2018, pronuntata de Judecatoria Zimnicea"
                        required
                    />
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-12 bx--col-sm-12">
                    <Button
                        className="generare-dosar-form-6"
                        disabled={false}
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                    >
                        Pasul Urmator
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default Creditor;
