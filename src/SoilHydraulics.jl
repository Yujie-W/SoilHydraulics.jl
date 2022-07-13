module SoilHydraulics

using ClimaCache: MonoMLGrassSPAC, MonoMLPalmSPAC, MonoMLTreeSPAC, NonSteadyStateFlow, Root, SteadyStateFlow, VanGenuchten
using ClimaCache: ρg_MPa
using ConstrainedRootSolvers: ReduceStepMethodND, SolutionToleranceND, find_peak
using DocStringExtensions: METHODLIST
using UnPack: @unpack
using WaterPhysics: relative_surface_tension, relative_viscosity

import ClimaCache: BrooksCorey


include("budget.jl"       )
include("vulnerability.jl")


end # module
