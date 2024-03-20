export type vehicleType = {
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
  vehicle: {
    plate: string;
    vin: string;
    color: string;
    picture: {
      address: string;
    };
  };
};
