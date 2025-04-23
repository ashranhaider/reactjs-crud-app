import './EmptyState.css';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState = ({ 
  title = "No Employees Found", 
  message = "There are no employees in the system yet." 
}: EmptyStateProps) => (
  <div className="empty-state">
    <div className="empty-state-icon">
      <i className="bi bi-people"></i>
    </div>
    <h3>{title}</h3>
    <p className="text-muted">{message}</p>
  </div>
);

export default EmptyState; 