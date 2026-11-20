// ==========================================
// OG_RACE - CONFIGURATION CONSTANTS
// ==========================================

export const CONFIG = {
  // Road & Lane Geometry
  LANES: [-3.7, 0.0, 3.7], // X positions: Left (-1), Center (0), Right (1)
  LANE_WIDTH: 3.7,
  ROAD_WIDTH: 13.0,
  ROAD_SEGMENT_LENGTH: 60,
  ROAD_SEGMENT_COUNT: 8, // Total active highway segments
  
  // Dynamic Car / Truck Speeds (in km/h) with Progressive Race Speed Acceleration
  SPEED: {
    MIN: 45,
    BASE_START: 82,     // Starting speed at 0 meters
    PROGRESSIVE_RATE: 16, // +16 km/h gained per kilometer traveled
    MAX_PROGRESSIVE_BONUS: 90, // Up to +90 km/h natural speed increase
    BASE: 85,
    MAX_NORMAL: 145,
    BOOST: 225,        // Rockets super fast when boosted! (Joree jabe)
    ACCELERATION: 28,
    BRAKING: 95,       // Smooth brake deceleration
    NATURAL_DECEL: 22,
    BOOST_ACCEL: 115   // Fast punchy pickup when pressing Up Arrow!
  },

  // Heavy Truck Steering & Handling Dynamics
  STEERING: {
    LANE_CHANGE_SPEED: 9.0,  // Heavy truck lane transition
    BODY_ROLL_FACTOR: 0.075, // Weighty chassis roll when steering
    BODY_YAW_FACTOR: 0.045,  // Truck cab turning angle
    WHEEL_TURN_ANGLE: 0.35
  },

  // Nitro / Diesel Boost System
  NITRO: {
    MAX: 100,
    CONSUMPTION_RATE: 24,
    RECHARGE_RATE: 8,
    NEAR_MISS_BONUS: 28
  },

  // Highway Traffic Spawning
  TRAFFIC: {
    SPAWN_DISTANCE: 190,
    DESPAWN_DISTANCE: 45,
    MIN_SPAWN_INTERVAL: 1.1,
    MAX_SPAWN_INTERVAL: 2.2,
    MIN_CAR_SPACING: 30,
    TYPES: ['cow_truck', 'bus', 'sedan', 'suv', 'truck'],
    SPEEDS: {
      cow_truck: [60, 75],
      truck: [65, 80],
      bus: [75, 90],
      suv: [80, 100],
      sedan: [90, 115]
    }
  },

  // Scoring & Bonuses
  SCORING: {
    DISTANCE_MULTIPLIER: 1.0,
    NEAR_MISS_POINTS: 300,
    NEAR_MISS_DIST_X: 2.1,
    NEAR_MISS_DIST_Z: 5.5,
    COMBO_TIMEOUT: 3.8,
    MAX_COMBO: 5
  },

  // Elevated Chase Camera for Heavy Truck
  CAMERA: {
    DEFAULT_OFFSET: { x: 0, y: 4.4, z: 9.2 },
    LOOK_OFFSET: { x: 0, y: 1.8, z: -15.0 },
    BASE_FOV: 65,
    MAX_FOV: 82,       // Widescreen warp effect when boosting fast
    FOV_LERP_SPEED: 3.5,
    LAG_FACTOR: 0.14
  },

  // Colors & Visuals
  COLORS: {
    TRUCK_YELLOW: 0xf5b002,
    TRUCK_GREEN: 0x15803d,
    TRUCK_TEAL: 0x0f766e,
    TRUCK_RED: 0xdc2626,
    ASPHALT: 0x222329,
    ROAD_LINE: 0xffffff,
    PADDY_GREEN: 0x2e7d32,
    SKY_TOP: 0x1565c0,
    SKY_BOTTOM: 0xffe082
  }
};
