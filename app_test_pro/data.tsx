import avatarImage from './src/assets/avatar.jpeg'

export const dummySubmissions = [
    {
      id: 1,
      testerName: 'Alice Johnson',
      appName: 'SuperApp',
      review: 'The task creation feature works well, but I encountered some issues with the drag-and-drop functionality. Sometimes tasks wouldnt drop into the correct category.',
      screenshots: [
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
      ],
      submissionDate: new Date(2023, 5, 15, 14, 30),
    },
    {
      id: 2,
      testerName: 'Bob Smith',
      appName: 'FitTrack',
      review: 'The workout logging feature is intuitive and easy to use. However, the integration with my Fitbit device failed a couple of times during testing.',
      screenshots: [
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
      ],
      submissionDate: new Date(2023, 5, 16, 9, 45),
    },
  ]

  const dummyUser = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=3',
    coins: 150
  }
  
export const dummyApps = [
    { id: 1, name: 'SuperApp', description: 'A revolutionary task management app', reward: 100, icon: avatarImage, screenshots: [avatarImage, avatarImage], rating: 4.5 },
    { id: 2, name: 'FitTrack', description: 'Fitness tracking made easy', reward: 75, icon: avatarImage, screenshots: [avatarImage], rating: 3.8 },
    { id: 3, name: 'BrainBoost', description: 'Improve your memory and cognitive skills', reward: 150, icon: avatarImage, screenshots: [avatarImage, avatarImage, avatarImage], rating: 4.2 },
  ]
  
export const dummyStats = [
    { appName: 'SuperApp', testers: 15, completionRate: '80%', icon: avatarImage, rating: 4.5 },
    { appName: 'FitTrack', testers: 8, completionRate: '65%', icon: avatarImage, rating: 3.8 },
  ]
  
export const popularPhones = [
    'iPhone 12', 'iPhone 13', 'iPhone 14', 'Samsung Galaxy S21', 'Samsung Galaxy S22',
    'Google Pixel 6', 'Google Pixel 7', 'OnePlus 9', 'OnePlus 10'
  ]
  
export const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'India'
  ]