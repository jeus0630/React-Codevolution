import React, {ChangeEvent, ChangeEventHandler, FormEvent, FunctionComponent, useState} from 'react';

interface OwnProps {
}

type StateType = {
    userId: string;
    title: string;
    body: string;
}

type Props = OwnProps;

const PostForm: FunctionComponent<Props> = (props) => {

    const [state, setState] = useState<StateType>({
        userId: '',
        title: '',
        body: ''
    });

    const changeHandler = (e: ChangeEvent) => {
        const {name,value} = e.target as HTMLInputElement;

        setState({
            ...state,
            [name]: value
        })
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <input type="text" name={"userId"} value={state.userId} onChange={changeHandler}/>
                </div>
                <div>
                    <input type="text" name={"title"} value={state.title} onChange={changeHandler}/>
                </div>
                <div>
                    <input type="text" name={"body"} value={state.body} onChange={changeHandler}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
