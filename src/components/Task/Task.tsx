import React from 'react';

interface TaskProps extends React.PropsWithChildren {
  text: string;
  delete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div>
      <p className={'text'}>
        {props.text}
      </p>
      <div>
        <button className={'btnDel'} onClick={props.delete}>Delete</button>
      </div>
    </div>
  );
};

export default Task;