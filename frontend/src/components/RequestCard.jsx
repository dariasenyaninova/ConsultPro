import React from "react";

export default function RequestCard({ request }) {
  return (
    <div className="specialist-card-full margin-bottom">
      <div className="info-grid two-columns">
        <div>
          <strong>Status</strong><br />{request.status}
        </div>
        <div>
          <strong>Data</strong><br />{request.createdAt}
        </div>
        <div>
          <strong>Message</strong><br />{request.message}
        </div>
        <div>
          <strong>ID</strong><br />{request.id}
        </div>
      </div>
    </div>
  );
}
