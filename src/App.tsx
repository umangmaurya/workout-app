import { useState } from 'react';
import { TabType } from './types';
import { useTheme, useWorkout, useTime, useProgram } from './hooks';
import { 
  Header, 
  Sidebar, 
  BottomNav, 
  WorkoutCard, 
  ProgressTab, 
  ProfileTab,
  DaySelector
} from './components';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('workout');
  
  const { isDarkMode, toggleTheme } = useTheme();
  const { formattedDate, formattedTime } = useTime();
  const { program, selectProgram } = useProgram();
  const {
    currentIndex,
    currentWorkout,
    filteredWorkouts,
    isStarter,
    warmupOpen,
    cooldownOpen,
    handlePrev,
    handleNext,
    setWorkoutIndex,
    toggleWarmup,
    toggleCooldown,
  } = useWorkout(program);

  return (
    <div className={`min-h-screen flex justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="w-full max-w-md min-h-screen flex flex-col relative overflow-hidden">
        
        <Sidebar 
          isOpen={sidebarOpen} 
          isDarkMode={isDarkMode}
          program={program}
          onClose={() => setSidebarOpen(false)}
          onProgramChange={selectProgram}
        />

        <Header
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onMenuClick={() => setSidebarOpen(true)}
          formattedDate={formattedDate}
          formattedTime={formattedTime}
        />

        <main className="flex-1 overflow-hidden pb-20 flex flex-col">
          {activeTab === 'workout' && currentWorkout && (
            <>
              <DaySelector
                currentIndex={currentIndex}
                totalDays={filteredWorkouts.length}
                isDarkMode={isDarkMode}
                isStarter={isStarter}
                onDayChange={setWorkoutIndex}
              />
              <div className="flex-1 overflow-hidden">
                <WorkoutCard
                  workout={currentWorkout}
                  workouts={filteredWorkouts}
                  currentIndex={currentIndex}
                  isStarter={isStarter}
                  isDarkMode={isDarkMode}
                  warmupOpen={warmupOpen}
                  cooldownOpen={cooldownOpen}
                  onToggleWarmup={toggleWarmup}
                  onToggleCooldown={toggleCooldown}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onIndexChange={setWorkoutIndex}
                />
              </div>
            </>
          )}

          {activeTab === 'progress' && (
            <ProgressTab isDarkMode={isDarkMode} />
          )}

          {activeTab === 'profile' && (
            <ProfileTab isDarkMode={isDarkMode} />
          )}
        </main>

        <BottomNav 
          activeTab={activeTab} 
          isDarkMode={isDarkMode} 
          onTabChange={setActiveTab} 
        />
      </div>
    </div>
  );
}

export default App;
