import React from 'react'
import Menu from './components/Menu'
import Home from './views/Home'
import Articles from './views/Articles'
import BlogPosts from './views/BlogPosts'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Particles from 'react-tsparticles'
import NoRouteMatch from './views/NoRouteMatch'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const particlesInit = (particles: any) => {
  //   particles.loadJSON('tsparticles', '../particles.config.json')
  // }

  return (
    <React.Fragment>
      <Particles
        className="fixed z-0 opacity-95"
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: '#000000'
            },
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
            opacity: 1
          },
          backgroundMask: {
            composite: 'destination-out',
            cover: {
              color: {
                value: '#fff'
              },
              opacity: 1
            },
            enable: false
          },
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 40,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: false,
                mode: 'repulse',
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                factor: 1,
                maxSpeed: 50,
                speed: 1
              },
              bubble: {
                distance: 400,
                duration: 2,
                mix: false,
                opacity: 0.8,
                size: 40
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5
                },
                radius: 60
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1
                }
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: '#ffffff'
                    },
                    stop: {
                      value: '#000000'
                    }
                  },
                  radius: 1000
                },
                shadow: {
                  color: {
                    value: '#000000'
                  },
                  length: 2000
                }
              },
              push: {
                default: true,
                groups: ['z5000', 'z7500', 'z2500', 'z1000'],
                quantity: 4
              },
              remove: {
                quantity: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50
              },
              slow: {
                factor: 3,
                radius: 200
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1
              }
            }
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true
            }
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              }
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                }
              },
              enable: false,
              mode: 'bounce',
              overlap: {
                enable: true,
                retries: 0
              }
            },
            color: {
              value: '#fff',
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 20,
                  sync: true
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true
                }
              }
            },
            groups: {
              z5000: {
                number: {
                  value: 70
                },
                zIndex: {
                  value: 5000
                }
              },
              z7500: {
                number: {
                  value: 30
                },
                zIndex: {
                  value: 7500
                }
              },
              z2500: {
                number: {
                  value: 50
                },
                zIndex: {
                  value: 2500
                }
              },
              z1000: {
                number: {
                  value: 40
                },
                zIndex: {
                  value: 1000
                }
              }
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                sync: false
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001
                },
                value: 0,
                sync: false
              }
            },
            links: {
              blink: false,
              color: {
                value: '#ffffff'
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: '#00ff00'
                },
                enable: false
              },
              triangles: {
                enable: false,
                frequency: 1
              },
              width: 1,
              warp: false
            },
            move: {
              angle: {
                offset: 0,
                value: 10
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              decay: 0,
              distance: {},
              direction: 'right',
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0
                },
                enable: false
              },
              outModes: {
                default: 'out',
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out'
              },
              random: false,
              size: false,
              speed: 5,
              spin: {
                acceleration: 0,
                enable: false
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: '#000000'
                }
              },
              vibrate: false,
              warp: false
            },
            number: {
              density: {
                enable: false,
                area: 800,
                factor: 1000
              },
              limit: 0,
              value: 200
            },
            opacity: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1,
              animation: {
                count: 0,
                enable: false,
                speed: 3,
                sync: false,
                destroy: 'none',
                minimumValue: 0.1,
                startValue: 'random'
              }
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                sync: false
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 45
              },
              width: 1
            },
            reduceDuplicates: false,
            repulse: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1
            },
            roll: {
              darken: {
                enable: false,
                value: 0
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0
              },
              speed: 25
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false
              },
              direction: 'clockwise',
              path: false
            },
            shadow: {
              blur: 0,
              color: {
                value: '#000000'
              },
              enable: false,
              offset: {
                x: 0,
                y: 0
              }
            },
            shape: {
              options: {},
              type: 'circle'
            },
            size: {
              random: {
                enable: false,
                minimumValue: 1
              },
              value: 3,
              animation: {
                count: 0,
                enable: false,
                speed: 5,
                sync: false,
                destroy: 'none',
                minimumValue: 0,
                startValue: 'random'
              }
            },
            stroke: {
              width: 0
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false
              },
              direction: 'clockwise',
              enable: false
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1
              }
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: 50
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 500,
              opacityRate: 0.5,
              sizeRate: 1,
              velocityRate: 1
            }
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          themes: [],
          emitters: {
            autoPlay: true,
            life: {},
            rate: {
              quantity: 1,
              delay: 7
            },
            size: {
              mode: 'percent',
              height: 0,
              width: 0
            },
            position: {
              x: -5,
              y: 55
            }
          }
        }}
      />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-200">
          <Menu />
          <Switch>
            <Route exact path="/news-from-the-wormhole">
              <Home />
            </Route>
            <Route path="/news-from-the-wormhole/articles">
              <Articles />
            </Route>
            <Route path="/news-from-the-wormhole/blogposts">
              <BlogPosts />
            </Route>
            <Route path="*">
              <NoRouteMatch />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
