import React from 'react'

type State = { hasError: boolean }

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError(){ return { hasError: true } }
  componentDidCatch(err: any){ console.error('ErrorBoundary', err) }
  render(){
    if (this.state.hasError) return <div className="card p-6">Something went wrong.</div>
    return this.props.children
  }
}


