import React from 'react';
import CreateForumButton from '../../components/Forum/CreateForumButton';
import ForumTable from '../../components/Forum/ForumTable';

const ForumList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Forum Diskusi</h1>
          <p className="text-gray-600">Diskusikan topik pembelajaran dengan guru dan sesama murid</p>
        </div>
        <CreateForumButton />
      </div>
      <ForumTable />
    </div>
  );
};

export default ForumList;