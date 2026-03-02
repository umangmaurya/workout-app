import { useState } from 'react';
import { TabType } from './types';
import { useTheme, useWorkout, useTime } from './hooks';
import { 
  Header, 
  Sidebar, 
  BottomNav, 
  WorkoutCard, 
  ProgressTab, 
  ProfileTab 
} from './components';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('workout');
  
  const { isDarkMode, toggleTheme } = useTheme();
  const { formattedDate, formattedTime } = useTime();
  const {
    currentIndex,
    currentWorkout,
    isStarter,
    warmupOpen,
    cooldownOpen,
    handlePrev,
    handleNext,
    setWorkoutIndex,
    toggleWarmup,
    toggleCooldown,
  } = useWorkout();

  return (
    <div className={`min-h-screen flex justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="w-full max-w-md min-h-screen flex flex-col relative overflow-hidden">
        
        <Sidebar 
          isOpen={sidebarOpen} 
          isDarkMode={isDarkMode} 
          onClose={() => setSidebarOpen(false)} 
        />

        <Header
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onMenuClick={() => setSidebarOpen(true)}
          formattedDate={formattedDate}
          formattedTime={formattedTime}
        />

        <main className="flex-1 overflow-hidden pb-20">
          {activeTab === 'workout' && (
            <WorkoutCard
              workout={currentWorkout}
              currentIndex={currentIndex}
              isStarter={isStarter}
              warmupOpen={warmupOpen}
              cooldownOpen={cooldownOpen}
              onToggleWarmup={toggleWarmup}
              onToggleCooldown={toggleCooldown}
              onPrev={handlePrev}
              onNext={handleNext}
              onIndexChange={setWorkoutIndex}
            />
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
