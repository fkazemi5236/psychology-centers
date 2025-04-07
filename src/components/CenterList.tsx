'use client';
import React, { useState, useEffect, useRef } from 'react';
import CenterCard from './CenterCard';
import { fetchCenters } from '../utils/fetchCenters';

const CenterList = () => {
  const [centers, setCenters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const loadMoreCenters = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newCenters = await fetchCenters(page);
    setCenters((prevCenters) => [...prevCenters, ...newCenters]);
    setHasMore(newCenters.length > 0);
    setLoading(false);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadMoreCenters();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCenters();
        }
      },
      { threshold: 1.0 , rootMargin: '20px' }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  return (
    <div>
      <div>
        {centers.map((center, index) => (
          <CenterCard
            key={index}
            name={center.detail.title}
            address={center.detail.address}
            phone={center.detail.phone_numbers?.[0] || 'شماره ثبت نشده است'}
            imageUrl={center.manager.avatar?.[0]?.url || '/images/default-avatar.png'}
          />
        ))}
      </div>
      
      {loading && <div>Loading...</div>}
      
      <div ref={loaderRef} style={{ height: '20px', background: 'transparent' }} />
    </div>
  );
};

export default CenterList;
