import React, { useState } from 'react';
import './Debitor.scss';
import {
    Form,
    Select,
    SelectItem,
    TextInput,
    Button
} from 'carbon-components-react';

const Debitor = () => {

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
                <div className="bx--col-lg-2 bx--col-sm-4">
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
                <div className="bx--col-lg-4 bx--col-sm-2">
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
                <div className="bx--col-lg-2 bx--col-sm-2">
                    {persoanaFizica ?
                        <CreditorTextInput
                            className="generare-dosar-form-3"
                            id="textinput2"
                            labelText="CNP:"
                            placeholder="Ex: 1871123474321"
                            required
                        />
                        : <CreditorTextInput
                            className="generare-dosar-form-3"
                            id="textinput2"
                            labelText="CUI:"
                            placeholder="Ex: 6859662"
                            required
                        />}
                </div>
                <div className="bx--col-lg-6 bx--col-sm-4">
                    {persoanaFizica ?
                        <CreditorTextInput
                            className="generare-dosar-form-4"
                            id="textinput3"
                            labelText="cu domiciliul in:"
                            placeholder="Ex: com. Gruia, sat Izvoarele"
                            required
                        />
                        : <CreditorTextInput
                            className="generare-dosar-form-4"
                            id="textinput3"
                            labelText="cu sediul procesual ales in:"
                            placeholder="Ex: Alexandria, str. Libertatii, nr.200A, et. 1"
                            required
                        />}
                </div>
                <div className="bx--col-lg-2 bx--col-sm-2">
                    <CreditorTextInput
                        className="generare-dosar-form-5"
                        id="textinput4"
                        labelText="judetul:"
                        placeholder="Ex: Teleorman"
                        required
                    />
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-16 bx--col-sm-4">
                    <CreditorTextInput
                        className="generare-dosar-form-6"
                        id="textinput5"
                        labelText="Titlu Executoriu:"
                        placeholder="Ex: Sentinta Civila nr. 420/13.09.2018, pronuntata de Judecatoria Zimnicea"
                        required
                    />
                </div>
            </div>
            <div className="bx--row submit-row">
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="generare-dosar-form-7"
                        disabled={false}
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                    >
                        Pasul Precedent
                    </Button>
                </div>
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="generare-dosar-form-8"
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

export default Debitor;
