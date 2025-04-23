import './LoadingSkeleton.css';

interface LoadingSkeletonProps {
  rows?: number;
  columns?: number;
}

const LoadingSkeleton = ({ rows = 5, columns = 4 }: LoadingSkeletonProps) => (
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Position</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(rows)].map((_, index) => (
          <tr key={index}>
            {[...Array(columns)].map((_, colIndex) => (
              <td key={colIndex}>
                <div className="skeleton-loader"></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LoadingSkeleton; 