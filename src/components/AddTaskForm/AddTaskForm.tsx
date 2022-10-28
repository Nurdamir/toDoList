import React from 'react';

interface AddTaskProps extends React.PropsWithChildren {
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  add: React.MouseEventHandler;

}

const AddTaskForm: React.FC<AddTaskProps> = (props) => {
  return (
    <div className="addTaskForm">
      <form className={'form'}>
        <input placeholder={"Add New Task"} className="formInput" onChange={props.onInputChange}/>
        <button type={"submit"} className="addBtn" onClick={props.add}>Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;