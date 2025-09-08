import DashboardGrid from './components/layout/DashboardGrid'
import PasswordFortifier from './components/PasswordFortifier'
// Futuramente você importará os outros módulos aqui

function App() {
  return (
    <main className="container mx-auto p-4 lg:p-8">
      <h1 className="text-4xl lg:text-6xl text-cyber-cyan uppercase tracking-widest text-center mb-8 animate-pulse">
        Painel de Sobrevivência Cybersecurity
      </h1>

      <DashboardGrid>
        {/* Por enquanto, vamos adicionar apenas o PasswordFortifier */}
        <PasswordFortifier />
        {/* <BreachDetector /> */}
        {/* <ThreatScanner /> */}
      </DashboardGrid>
    </main>
  )
}

export default App;