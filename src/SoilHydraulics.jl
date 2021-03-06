module SoilHydraulics

using ClimaCache: MonoMLGrassSPAC, MonoMLPalmSPAC, MonoMLTreeSPAC, NonSteadyStateFlow, Root, SteadyStateFlow, VanGenuchten
using ClimaCache: CP_L, M_H₂O, Λ_THERMAL_H₂O, ρ_H₂O, ρg_MPa
using ConstrainedRootSolvers: ReduceStepMethodND, SolutionToleranceND, find_peak
using UnPack: @unpack
using WaterPhysics: relative_surface_tension, relative_viscosity

import ClimaCache: BrooksCorey


include("budget.jl"       )
include("vulnerability.jl")


end # module
