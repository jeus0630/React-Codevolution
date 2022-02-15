import React, {FunctionComponent, useEffect, useState} from 'react';

interface OwnProps {
}

type fetchData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type Props = OwnProps;

const GetList: FunctionComponent<Props> = (props) => {
    const [list, setList] = useState<fetchData[]>([]);

    useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/todos/').then(response=>{
        return response.json();
      }).then(json => {
        setList([...list, ...json]);
      })

      return () => {

      }
    },[])

    return (
        <div>
          {
            list.length && list.map(list => <h1>{list.title}</h1>)
          }
        </div>
    );
};

export default GetList;
