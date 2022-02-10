import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Form: FunctionComponent<Props> = (props) => {

    let [userName, setUserName] = useState('');
    let [comments, setComments] = useState('');
    const [topic, setTopic] = useState('React');

    const handleUserNameChange = (e: React.ChangeEvent): void => {
        const {value} = e.target as HTMLInputElement;
        setUserName(value);
    }

    const handleCommentsChange = (e: React.ChangeEvent): void => {
        const {value} = e.target as HTMLTextAreaElement;
        setComments(value);
    }

    const handleTopicChange = (e: React.ChangeEvent): void => {
        const {value} = e.target as HTMLSelectElement;
        setTopic(value);
    }

    const handleSubmit = (e: React.FormEvent):void => {
        e.preventDefault();
        console.log(`${userName} ${comments} ${topic}`);
    }

    return (
        <form action="" onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" value={userName} onChange={(e) => handleUserNameChange(e)}/>
            </div>
            <div>
                <label htmlFor="">Comments</label>
                <textarea name="" id="" cols={30} rows={10} value={comments} onChange={(e)=>handleCommentsChange(e)}></textarea>
            </div>
            <div>
                <label htmlFor="">Topic</label>
                <select name="" id="" value={topic} onChange={e => handleTopicChange(e)}>
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

