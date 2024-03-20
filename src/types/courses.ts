export type coursesType = {
  start_at: string;
  end_at: string;
  distance: number;
  speed_max: number;
  stops: number;
  total_stop_time: number;
  stop_points: {
    type: string;
    crs: {
      type: string;
      properties: {
        name: string;
      };
    };
    coordinates: [[number, number, number, null, null]];
  };
  gps_count: number;
  duration: number;
  speed_avg: number;
  gps: [
    {
      longitude: number;
      latitude: number;
      acquisition_time_unix: number;
      speed: number;
      direction: number;
      acquisition_time: string;
      address: string;
    },
  ];
};
