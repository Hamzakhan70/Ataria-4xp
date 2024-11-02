import React from "react";

const PerformanceStatistics = () => {
  return (
    <div>
      PerformanceStatistics
      <div className="flex justify-center items-center">
        <iframe
          className="w-full h-[600rem] md:h-[600px] lg:h-[600px]"
          src="https://performancestats.autochartist.com/918_consolidateddark_en.xml"
          title="Performance Stats"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PerformanceStatistics;
