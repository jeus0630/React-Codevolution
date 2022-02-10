import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type StateType = {
    name: string;
    comments: string;
    topic: string;
}

const Form: FunctionComponent<Props> = (props) => {

    const [state, setState] = useState<StateType>({
        name: '',
        comments: '',
        topic: 'React'
    });

    const {name, comments, topic} = state;

    const changeHandler = (e: React.ChangeEvent): void => {
        const {name, value} = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        setState({
            ...state,
            [name] : value
        })
    }

    const handleSubmit = (e: React.FormEvent):void => {
        e.preventDefault();
        console.log(`${name} ${comments} ${topic}`);
    }

    return (
        <form action="" onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name="name" value={name} onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="">Comments</label>
                <textarea name="comments" id="" cols={30} rows={10} value={comments} onChange={changeHandler}></textarea>
            </div>
            <div>
                <label htmlFor="">Topic</label>
                <select name="topic" id="" value={topic} onChange={changeHandler}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <button type="submit">submit</button>
        </form>
    );
};

export default Form;

