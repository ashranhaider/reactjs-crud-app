import { useState, useEffect } from "react";
import useAddDepartment from "../hooks/Departments/useAddDepartment";
import { Department } from "../models/Department";
import { useNavigate } from "react-router";

function AddDepartment() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const { mutate: createDepartment, isPending, isSuccess, isError, error } = useAddDepartment();

  useEffect(() => {
    if (isSuccess) {
      navigate("/departments");
    }
  }, [isSuccess, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDepartment: Department = { name, id: 0 }; // Assuming id is auto-generated
    createDepartment(newDepartment);
  };

  return (
    <div className="container mt-4">
      <h1>Add Department</h1>
      {isError && (
        <div className="alert alert-danger" role="alert">
          Error: {(error as Error)?.message || 'Failed to add department'}
        </div>
      )}
      {isSuccess && (
        <div className="alert alert-success" role="alert">
          Department added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="depname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="depname"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={isPending}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Adding...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}

export default AddDepartment;