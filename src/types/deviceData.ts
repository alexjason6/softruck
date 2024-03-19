export type deviceData = {
  accOn: string;
  total_time: number;
  total_distance: number;
  speed_max: number;
  speed_avg: number;
  num_courses: number;
  stops: number;
  total_stop_time: number;
  perc_fixed: number;
  gps_count: number;
  courses: [
    {
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
    },
  ];
  vehicle: {
    plate: string;
    vin: string;
    color: string;
    picture: {
      address: string;
    };
  };
};
