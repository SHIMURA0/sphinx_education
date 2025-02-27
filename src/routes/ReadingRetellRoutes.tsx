import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReadingRetellIndex from '../pages/ReadingRetell';
import StoryDetail from '../pages/ReadingRetell/StoryDetail';
import Training from '../pages/ReadingRetell/Training';
import Reports from '../pages/ReadingRetell/Reports';

const ReadingRetellRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ReadingRetellIndex />} />
            <Route path="/story/:id" element={<StoryDetail />} />
            <Route path="/training/:id" element={<Training />} />
            <Route path="/reports" element={<Reports />} />
        </Routes>
    );
};

export default ReadingRetellRoutes;