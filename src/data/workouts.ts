import { Workout, WarmupCooldown } from '../types';

export const warmups: WarmupCooldown = {
  upper: [
    { name: "Arm Circles", sets: "30 sec", url: "https://youtube.com/watch?v=140RTNMciH8" },
    { name: "Shoulder Rolls", sets: "30 sec", url: "https://youtube.com/watch?v=iSry2bK-dGc" },
    { name: "Chest Opener Stretch", sets: "30 sec", url: "https://youtube.com/watch?v=vL26cGL_tyU" },
    { name: "Cat-Cow Stretch", sets: "30 sec", url: "https://youtube.com/watch?v=kqnua4rHVVA" },
    { name: "Jumping Jacks", sets: "1 min", url: "https://youtube.com/watch?v=c4DAnQ6DtF8" },
  ],
  lower: [
    { name: "Leg Swings", sets: "30 sec", url: "https://youtube.com/watch?v=5rMifhBvL2Y" },
    { name: "Hip Circles", sets: "30 sec", url: "https://youtube.com/watch?v=bNfOBqslbKQ" },
    { name: "Bodyweight Squats", sets: "10 reps", url: "https://youtube.com/watch?v=aclHkVaku9U" },
    { name: "Walking Knee Hugs", sets: "30 sec", url: "https://youtube.com/watch?v=L0MLcWt7xXU" },
    { name: "High Knees", sets: "1 min", url: "https://youtube.com/watch?v=D0LqEDXz5Oc" },
  ],
  full: [
    { name: "Jumping Jacks", sets: "1 min", url: "https://youtube.com/watch?v=c4DAnQ6DtF8" },
    { name: "Arm Circles", sets: "30 sec", url: "https://youtube.com/watch?v=140RTNMciH8" },
    { name: "Leg Swings", sets: "30 sec", url: "https://youtube.com/watch?v=5rMifhBvL2Y" },
    { name: "Hip Circles", sets: "30 sec", url: "https://youtube.com/watch?v=bNfOBqslbKQ" },
    { name: "Inchworms", sets: "5 reps", url: "https://youtube.com/watch?v=ZY2ji_Ho0dA" },
  ],
};

export const cooldowns: WarmupCooldown = {
  upper: [
    { name: "Chest Doorway Stretch", sets: "30 sec", url: "https://youtube.com/watch?v=vL26cGL_tyU" },
    { name: "Tricep Stretch", sets: "30 sec each", url: "https://youtube.com/watch?v=5_ejbGfdAqQ" },
    { name: "Cross-Body Shoulder", sets: "30 sec each", url: "https://youtube.com/watch?v=WGi7e1dvQnE" },
    { name: "Neck Rolls", sets: "30 sec", url: "https://youtube.com/watch?v=xmgvmIL1NxQ" },
    { name: "Child's Pose", sets: "1 min", url: "https://youtube.com/watch?v=2MJGg-dUKh0" },
  ],
  lower: [
    { name: "Quad Stretch", sets: "30 sec each", url: "https://youtube.com/watch?v=WQ_G4LTCBv8" },
    { name: "Hamstring Stretch", sets: "30 sec each", url: "https://youtube.com/watch?v=FDwpEdxZ4H4" },
    { name: "Pigeon Pose", sets: "30 sec each", url: "https://youtube.com/watch?v=_DALSy_Hbz4" },
    { name: "Calf Stretch", sets: "30 sec each", url: "https://youtube.com/watch?v=P-Y3lQ7Zvzs" },
    { name: "Seated Forward Fold", sets: "1 min", url: "https://youtube.com/watch?v=1IDkb5leJGA" },
  ],
  full: [
    { name: "Standing Quad Stretch", sets: "30 sec each", url: "https://youtube.com/watch?v=WQ_G4LTCBv8" },
    { name: "Chest Stretch", sets: "30 sec", url: "https://youtube.com/watch?v=vL26cGL_tyU" },
    { name: "Seated Hamstring", sets: "30 sec each", url: "https://youtube.com/watch?v=FDwpEdxZ4H4" },
    { name: "Cat-Cow", sets: "30 sec", url: "https://youtube.com/watch?v=kqnua4rHVVA" },
    { name: "Child's Pose", sets: "1 min", url: "https://youtube.com/watch?v=2MJGg-dUKh0" },
  ],
};

export const workoutData: Workout[] = [
  {
    id: 1,
    title: "Day 1: Upper Body (Light)",
    duration: "30-35 min",
    theme: "starter",
    warmupType: "upper",
    cooldownType: "upper",
    exercises: [
      { name: "Push-ups", sets: "3x10-12", url: "https://youtube.com/watch?v=IODxDxX7oi4" },
      { name: "Lat Pulldown", sets: "3x12", url: "https://youtube.com/watch?v=CAwf7n6Luuc" },
      { name: "DB Shoulder Press", sets: "3x12", url: "https://youtube.com/watch?v=qEwKCR5JCog" },
      { name: "Bicep Curl", sets: "2x12", url: "https://youtube.com/watch?v=ykJmrZ5v0Oo" },
      { name: "Tricep Pushdown", sets: "2x12", url: "https://youtube.com/watch?v=2-LAMcpzODU" },
      { name: "Plank", sets: "2x30sec", url: "https://youtube.com/watch?v=ASdvN_XEl_c" },
    ]
  },
  {
    id: 2,
    title: "Day 2: Lower Body (Light)",
    duration: "30-35 min",
    theme: "starter",
    warmupType: "lower",
    cooldownType: "lower",
    exercises: [
      { name: "Bodyweight Squats", sets: "3x15", url: "https://youtube.com/watch?v=aclHkVaku9U" },
      { name: "Leg Press", sets: "3x12", url: "https://youtube.com/watch?v=IZxyjW7MPJQ" },
      { name: "Lunges", sets: "2x10 each", url: "https://youtube.com/watch?v=QOVaHwm-Q6U" },
      { name: "Leg Curl", sets: "3x12", url: "https://youtube.com/watch?v=1Tq3QdYUuHs" },
      { name: "Calf Raises", sets: "3x15", url: "https://youtube.com/watch?v=-M4-G8p8fmc" },
      { name: "Glute Bridge", sets: "2x15", url: "https://youtube.com/watch?v=OUgsJ8-Vi0E" },
    ]
  },
  {
    id: 3,
    title: "Day 3: Full Body + Cardio",
    duration: "35-40 min",
    theme: "starter",
    warmupType: "full",
    cooldownType: "full",
    exercises: [
      { name: "Goblet Squat", sets: "3x12", url: "https://youtube.com/watch?v=MeIiIdhvXT4" },
      { name: "DB Bench Press", sets: "3x12", url: "https://youtube.com/watch?v=VmB1G1K7v94" },
      { name: "Seated Cable Row", sets: "3x12", url: "https://youtube.com/watch?v=GZbfZ033f74" },
      { name: "Lateral Raise", sets: "2x12", url: "https://youtube.com/watch?v=3VcKaXpzqRo" },
      { name: "Plank", sets: "2x30sec", url: "https://youtube.com/watch?v=ASdvN_XEl_c" },
      { name: "Treadmill", sets: "15min", url: "https://youtube.com/watch?v=iBHc323QwFE" },
    ]
  },
  {
    id: 4,
    title: "Monday: Legs + Glutes",
    duration: "50-55 min",
    theme: "main",
    warmupType: "lower",
    cooldownType: "lower",
    exercises: [
      { name: "Barbell Squats", sets: "4x10-12", url: "https://youtube.com/watch?v=ultWZbUMPL8" },
      { name: "Leg Press", sets: "3x12-15", url: "https://youtube.com/watch?v=IZxyjW7MPJQ" },
      { name: "Romanian Deadlift", sets: "3x10-12", url: "https://youtube.com/watch?v=7j-2w4-P14I" },
      { name: "Walking Lunges", sets: "3x12 each", url: "https://youtube.com/watch?v=L8fvypPrzzs" },
      { name: "Leg Curl", sets: "3x12-15", url: "https://youtube.com/watch?v=1Tq3QdYUuHs" },
      { name: "Leg Extension", sets: "3x12-15", url: "https://youtube.com/watch?v=YyvSfVjQeL0" },
      { name: "Calf Raises", sets: "4x15-20", url: "https://youtube.com/watch?v=-M4-G8p8fmc" },
    ]
  },
  {
    id: 5,
    title: "Tuesday: Chest + Triceps",
    duration: "45-50 min",
    theme: "main",
    warmupType: "upper",
    cooldownType: "upper",
    exercises: [
      { name: "Flat Bench Press", sets: "4x10-12", url: "https://youtube.com/watch?v=rT7DgCr-3pg" },
      { name: "Incline DB Press", sets: "3x10-12", url: "https://youtube.com/watch?v=8iPEnn-ltC8" },
      { name: "Cable Fly", sets: "3x12-15", url: "https://youtube.com/watch?v=Iwe6AmxVf7o" },
      { name: "Push-ups", sets: "2xFailure", url: "https://youtube.com/watch?v=IODxDxX7oi4" },
      { name: "Tricep Pushdown", sets: "3x12-15", url: "https://youtube.com/watch?v=vB5OHsJ3EME" },
      { name: "Overhead Extension", sets: "3x10-12", url: "https://youtube.com/watch?v=YbX7Wd8jQ-Q" },
      { name: "Dips", sets: "2x10-12", url: "https://youtube.com/watch?v=2z8JmcrW-As" },
    ]
  },
  {
    id: 6,
    title: "Wednesday: Back + Biceps",
    duration: "45-50 min",
    theme: "main",
    warmupType: "upper",
    cooldownType: "upper",
    exercises: [
      { name: "Lat Pulldown", sets: "4x10-12", url: "https://youtube.com/watch?v=CAwf7n6Luuc" },
      { name: "Seated Cable Row", sets: "3x10-12", url: "https://youtube.com/watch?v=GZbfZ033f74" },
      { name: "Bent Over Row", sets: "3x10-12", url: "https://youtube.com/watch?v=FWJR5Ve8bnQ" },
      { name: "Single Arm DB Row", sets: "3x10 each", url: "https://youtube.com/watch?v=pYcpY20QaE8" },
      { name: "Face Pulls", sets: "3x15", url: "https://youtube.com/watch?v=rep-qVOkqgk" },
      { name: "Barbell Curl", sets: "3x10-12", url: "https://youtube.com/watch?v=kwG2ipFRgfo" },
      { name: "Hammer Curls", sets: "3x12", url: "https://youtube.com/watch?v=zC3nLlEvin4" },
    ]
  },
  {
    id: 7,
    title: "Thursday: Shoulders + Abs",
    duration: "45-50 min",
    theme: "main",
    warmupType: "upper",
    cooldownType: "upper",
    exercises: [
      { name: "Shoulder Press", sets: "4x10-12", url: "https://youtube.com/watch?v=qEwKCR5JCog" },
      { name: "Lateral Raises", sets: "4x12-15", url: "https://youtube.com/watch?v=3VcKaXpzqRo" },
      { name: "Front Raises", sets: "3x12", url: "https://youtube.com/watch?v=-t7fuZ0KhDA" },
      { name: "Rear Delt Fly", sets: "3x12-15", url: "https://youtube.com/watch?v=EA7u4Q_8HQ0" },
      { name: "Shrugs", sets: "3x15", url: "https://youtube.com/watch?v=cJRVVxmytaM" },
      { name: "Hanging Leg Raise", sets: "3x12-15", url: "https://youtube.com/watch?v=hdng3Nm1x_E" },
      { name: "Plank", sets: "3x45-60sec", url: "https://youtube.com/watch?v=ASdvN_XEl_c" },
      { name: "Russian Twist", sets: "3x20", url: "https://youtube.com/watch?v=wkD8rjkodUI" },
    ]
  },
  {
    id: 8,
    title: "Friday: Full Body + Cardio",
    duration: "50-55 min",
    theme: "main",
    warmupType: "full",
    cooldownType: "full",
    exercises: [
      { name: "Deadlift", sets: "4x8-10", url: "https://youtube.com/watch?v=op9kVnSso6Q" },
      { name: "DB Bench Press", sets: "3x12", url: "https://youtube.com/watch?v=VmB1G1K7v94" },
      { name: "Pull-ups", sets: "3x8-10", url: "https://youtube.com/watch?v=eGo4IYlbE5g" },
      { name: "Goblet Squat", sets: "3x12", url: "https://youtube.com/watch?v=MeIiIdhvXT4" },
      { name: "DB Shoulder Press", sets: "3x12", url: "https://youtube.com/watch?v=qEwKCR5JCog" },
      { name: "Plank", sets: "2x45sec", url: "https://youtube.com/watch?v=ASdvN_XEl_c" },
      { name: "HIIT Cardio", sets: "15min", url: "https://youtube.com/watch?v=ml6cT4AZdqI" },
    ]
  },
];

export const getDayWorkoutIndex = (): number => {
  const day = new Date().getDay();
  const dayMap: Record<number, number> = {
    0: 3, // Sunday -> show Monday
    1: 3, // Monday -> Legs
    2: 4, // Tuesday -> Chest + Triceps
    3: 5, // Wednesday -> Back + Biceps
    4: 6, // Thursday -> Shoulders + Abs
    5: 7, // Friday -> Full Body
    6: 3, // Saturday -> show Monday
  };
  return dayMap[day];
};
