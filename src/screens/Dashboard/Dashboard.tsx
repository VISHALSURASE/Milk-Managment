/** @format */

import React from 'react';
import { Card, CardBody } from '@progress/kendo-react-layout';
import { Typography } from '@progress/kendo-react-common';
import { useGetDashboardStatsQuery } from '../../store/services/dashboard-services';
// import { useGetRecentMilkCollectionsQuery } from '../../store/services/dashboard-services';
// import { useGetRecentPaymentsQuery } from '../../Store/reducers/Services/dashboard-service';
import {
  LABEL_TOTAL_FARMERS,
  LABEL_TOTAL_COLLECTORS,
  LABEL_TODAY_MILK_COLLECTION,
  LABEL_TOTAL_PAYMENTS,
} from '../../constants/Comman';
import './dashboard.css';

function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useGetDashboardStatsQuery();
//   const { data: recentCollections, isLoading: collectionsLoading } = useGetRecentMilkCollectionsQuery({ limit: 5 });
//   const { data: recentPayments, isLoading: paymentsLoading } = useGetRecentPaymentsQuery({ limit: 5 });

  const statCards = [
    {
      title: LABEL_TOTAL_FARMERS,
      value: stats?.totalFarmers || 0,
      icon: '👨‍🌾',
      color: '#4CAF50',
    },
    {
      title: LABEL_TOTAL_COLLECTORS,
      value: stats?.totalCollectors || 0,
      icon: '🚚',
      color: '#2196F3',
    },
    {
      title: LABEL_TODAY_MILK_COLLECTION,
      value: `${stats?.todayMilkCollection || 0} L`,
      icon: '🥛',
      color: '#FF9800',
    },
    {
      title: LABEL_TOTAL_PAYMENTS,
      value: `₹${stats?.totalPayments || 0}`,
      icon: '💰',
      color: '#9C27B0',
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Typography.h1>Dashboard</Typography.h1>
        <Typography.p>Welcome to Milk Management System Admin Panel</Typography.p>
      </div>

      <div className="stats-grid">
        {statCards.map((card, index) => (
          <Card key={index} className="stat-card">
            <CardBody>
              <div className="stat-content">
                <div className="stat-icon" style={{ backgroundColor: card.color }}>
                  {card.icon}
                </div>
                <div className="stat-info">
                  <Typography.h3 className="stat-value">{card.value}</Typography.h3>
                  <Typography.p className="stat-title">{card.title}</Typography.p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="recent-section">
          <Card>
            <CardBody>
              {/* <Typography.h3>Recent Milk Collections</Typography.h3>
              {collectionsLoading ? (
                <div className="loading">Loading...</div>
              ) : recentCollections && recentCollections.length > 0 ? (
                <div className="recent-list">
                  {recentCollections.map((collection: any, index: number) => (
                    <div key={index} className="recent-item">
                      <div className="item-info">
                        <span className="item-title">Farmer #{collection.farmerId}</span>
                        <span className="item-subtitle">{collection.quantity}L - {collection.date}</span>
                      </div>
                      <div className="item-value">₹{collection.amount}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-data">No recent collections</div>
              )} */}
            </CardBody>
          </Card>
        </div>

        <div className="recent-section">
          <Card>
            <CardBody>
              {/* <Typography.h3>Recent Payments</Typography.h3>
              {paymentsLoading ? (
                <div className="loading">Loading...</div>
              ) : recentPayments && recentPayments.length > 0 ? (
                <div className="recent-list">
                  {recentPayments.map((payment: any, index: number) => (
                    <div key={index} className="recent-item">
                      <div className="item-info">
                        <span className="item-title">Farmer #{payment.farmerId}</span>
                        <span className="item-subtitle">{payment.paymentDate}</span>
                      </div>
                      <div className="item-value">₹{payment.amount}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-data">No recent payments</div>
              )} */}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };

