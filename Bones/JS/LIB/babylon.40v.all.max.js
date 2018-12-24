
!function(t, i) { "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.OIMO = t.OIMO || {}) }(this, function(t) { "use strict"; function s(t, i) { console.error("[OIMO] " + t + ": " + i) } function h(t) { this.parent = t, this.infos = new Float32Array(13), this.f = [0, 0, 0], this.times = [0, 0, 0, 0], this.broadPhase = this.parent.broadPhaseType, this.version = mt, this.fps = 0, this.tt = 0, this.broadPhaseTime = 0, this.narrowPhaseTime = 0, this.solvingTime = 0, this.totalTime = 0, this.updateTime = 0, this.MaxBroadPhaseTime = 0, this.MaxNarrowPhaseTime = 0, this.MaxSolvingTime = 0, this.MaxTotalTime = 0, this.MaxUpdateTime = 0 } function e(t, i, s) { this.x = t || 0, this.y = i || 0, this.z = s || 0 } function a(t, i, s, h) { this.x = t || 0, this.y = i || 0, this.z = s || 0, this.w = void 0 !== h ? h : 1 } function o(t, i, s, h, e, a, o, n, r) { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("OIMO.Mat33: the constructor no longer reads arguments. use .set() instead.") } function n(t, i, s, h, e, a) { this.elements = new Float32Array(6); var o = this.elements; o[0] = t || 0, o[1] = s || 0, o[2] = e || 0, o[3] = i || 0, o[4] = h || 0, o[5] = a || 0 } function r() { return Tt++ } function l(t) { this.type = ft, this.id = r(), this.prev = null, this.next = null, this.proxy = null, this.parent = null, this.contactLink = null, this.numContacts = 0, this.position = new e, this.rotation = new o, this.relativePosition = (new e).copy(t.relativePosition), this.relativeRotation = (new o).copy(t.relativeRotation), this.aabb = new n, this.density = t.density, this.friction = t.friction, this.restitution = t.restitution, this.belongsTo = t.belongsTo, this.collidesWith = t.collidesWith } function c(t, i, s, h) { l.call(this, t), this.type = vt, this.width = i, this.height = s, this.depth = h, this.halfWidth = .5 * i, this.halfHeight = .5 * s, this.halfDepth = .5 * h, this.dimentions = new Float32Array(18), this.elements = new Float32Array(24) } function m(t, i) { l.call(this, t), this.type = bt, this.radius = i } function p(t, i, s) { l.call(this, t), this.type = zt, this.radius = i, this.height = s, this.halfHeight = .5 * s, this.normalDirection = new e, this.halfDirection = new e } function u(t, i) { l.call(this, t), this.type = Nt, this.normal = new e(0, 1, 0) } function y(t, i) { l.call(this, t), this.type = kt } function x() { this.relativePosition = new e, this.relativeRotation = new o, this.friction = .2, this.restitution = .2, this.density = 1, this.belongsTo = 1, this.collidesWith = 4294967295 } function d(t, i) { i = i || !1, this.axis = t, this.angle = 0, this.lowerLimit = i ? 0 : 1, this.upperLimit = 0, this.motorSpeed = 0, this.maxMotorForce = 0, this.frequency = 0, this.dampingRatio = 0 } function f() { this.parent = null, this.body1 = null, this.body2 = null, this.addedToIsland = !1 } function b(t) { this.prev = null, this.next = null, this.body = null, this.joint = t } function v(t) { f.call(this), this.scale = 1, this.invScale = 1, this.name = "", this.id = NaN, this.type = wt, this.prev = null, this.next = null, this.body1 = t.body1, this.body2 = t.body2, this.localAnchorPoint1 = (new e).copy(t.localAnchorPoint1), this.localAnchorPoint2 = (new e).copy(t.localAnchorPoint2), this.relativeAnchorPoint1 = new e, this.relativeAnchorPoint2 = new e, this.anchorPoint1 = new e, this.anchorPoint2 = new e, this.allowCollision = t.allowCollision, this.b1Link = new b(this), this.b2Link = new b(this) } function z(t) { this.m1 = NaN, this.m2 = NaN, this.ii1 = null, this.ii2 = null, this.dd = null, this.r1x = NaN, this.r1y = NaN, this.r1z = NaN, this.r2x = NaN, this.r2y = NaN, this.r2z = NaN, this.ax1x = NaN, this.ax1y = NaN, this.ax1z = NaN, this.ay1x = NaN, this.ay1y = NaN, this.ay1z = NaN, this.az1x = NaN, this.az1y = NaN, this.az1z = NaN, this.ax2x = NaN, this.ax2y = NaN, this.ax2z = NaN, this.ay2x = NaN, this.ay2y = NaN, this.ay2z = NaN, this.az2x = NaN, this.az2y = NaN, this.az2z = NaN, this.vel = NaN, this.velx = NaN, this.vely = NaN, this.velz = NaN, this.joint = t, this.r1 = t.relativeAnchorPoint1, this.r2 = t.relativeAnchorPoint2, this.p1 = t.anchorPoint1, this.p2 = t.anchorPoint2, this.b1 = t.body1, this.b2 = t.body2, this.l1 = this.b1.linearVelocity, this.l2 = this.b2.linearVelocity, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.impx = 0, this.impy = 0, this.impz = 0 } function N(t, i, s, h) { this.cfm1 = NaN, this.cfm2 = NaN, this.cfm3 = NaN, this.i1e00 = NaN, this.i1e01 = NaN, this.i1e02 = NaN, this.i1e10 = NaN, this.i1e11 = NaN, this.i1e12 = NaN, this.i1e20 = NaN, this.i1e21 = NaN, this.i1e22 = NaN, this.i2e00 = NaN, this.i2e01 = NaN, this.i2e02 = NaN, this.i2e10 = NaN, this.i2e11 = NaN, this.i2e12 = NaN, this.i2e20 = NaN, this.i2e21 = NaN, this.i2e22 = NaN, this.ax1 = NaN, this.ay1 = NaN, this.az1 = NaN, this.ax2 = NaN, this.ay2 = NaN, this.az2 = NaN, this.ax3 = NaN, this.ay3 = NaN, this.az3 = NaN, this.a1x1 = NaN, this.a1y1 = NaN, this.a1z1 = NaN, this.a2x1 = NaN, this.a2y1 = NaN, this.a2z1 = NaN, this.a1x2 = NaN, this.a1y2 = NaN, this.a1z2 = NaN, this.a2x2 = NaN, this.a2y2 = NaN, this.a2z2 = NaN, this.a1x3 = NaN, this.a1y3 = NaN, this.a1z3 = NaN, this.a2x3 = NaN, this.a2y3 = NaN, this.a2z3 = NaN, this.lowerLimit1 = NaN, this.upperLimit1 = NaN, this.limitVelocity1 = NaN, this.limitState1 = 0, this.enableMotor1 = !1, this.motorSpeed1 = NaN, this.maxMotorForce1 = NaN, this.maxMotorImpulse1 = NaN, this.lowerLimit2 = NaN, this.upperLimit2 = NaN, this.limitVelocity2 = NaN, this.limitState2 = 0, this.enableMotor2 = !1, this.motorSpeed2 = NaN, this.maxMotorForce2 = NaN, this.maxMotorImpulse2 = NaN, this.lowerLimit3 = NaN, this.upperLimit3 = NaN, this.limitVelocity3 = NaN, this.limitState3 = 0, this.enableMotor3 = !1, this.motorSpeed3 = NaN, this.maxMotorForce3 = NaN, this.maxMotorImpulse3 = NaN, this.k00 = NaN, this.k01 = NaN, this.k02 = NaN, this.k10 = NaN, this.k11 = NaN, this.k12 = NaN, this.k20 = NaN, this.k21 = NaN, this.k22 = NaN, this.kv00 = NaN, this.kv11 = NaN, this.kv22 = NaN, this.dv00 = NaN, this.dv11 = NaN, this.dv22 = NaN, this.d00 = NaN, this.d01 = NaN, this.d02 = NaN, this.d10 = NaN, this.d11 = NaN, this.d12 = NaN, this.d20 = NaN, this.d21 = NaN, this.d22 = NaN, this.limitMotor1 = i, this.limitMotor2 = s, this.limitMotor3 = h, this.b1 = t.body1, this.b2 = t.body2, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.limitImpulse1 = 0, this.motorImpulse1 = 0, this.limitImpulse2 = 0, this.motorImpulse2 = 0, this.limitImpulse3 = 0, this.motorImpulse3 = 0 } function k(t, i, s) { v.call(this, t), this.type = It, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize(); var h = (new o).setQuat((new a).setFromUnitVectors(this.localAxis1, this.localAxis2)); this.localAngle1 = (new e).tangent(this.localAxis1).normalize(), this.localAngle2 = this.localAngle1.clone().applyMatrix3(h, !0), this.ax1 = new e, this.ax2 = new e, this.an1 = new e, this.an2 = new e, this.tmp = new e, this.nor = new e, this.tan = new e, this.bin = new e, this.limitMotor = new d(this.nor, !1), this.limitMotor.lowerLimit = i, this.limitMotor.upperLimit = s, this.lc = new z(this), this.r3 = new N(this, this.limitMotor, new d(this.tan, !0), new d(this.bin, !0)) } function w(t) { v.call(this, t), this.type = gt, this.lc = new z(this) } function M(t, i) { this.cfm = NaN, this.m1 = NaN, this.m2 = NaN, this.i1e00 = NaN, this.i1e01 = NaN, this.i1e02 = NaN, this.i1e10 = NaN, this.i1e11 = NaN, this.i1e12 = NaN, this.i1e20 = NaN, this.i1e21 = NaN, this.i1e22 = NaN, this.i2e00 = NaN, this.i2e01 = NaN, this.i2e02 = NaN, this.i2e10 = NaN, this.i2e11 = NaN, this.i2e12 = NaN, this.i2e20 = NaN, this.i2e21 = NaN, this.i2e22 = NaN, this.motorDenom = NaN, this.invMotorDenom = NaN, this.invDenom = NaN, this.ax = NaN, this.ay = NaN, this.az = NaN, this.r1x = NaN, this.r1y = NaN, this.r1z = NaN, this.r2x = NaN, this.r2y = NaN, this.r2z = NaN, this.t1x = NaN, this.t1y = NaN, this.t1z = NaN, this.t2x = NaN, this.t2y = NaN, this.t2z = NaN, this.l1x = NaN, this.l1y = NaN, this.l1z = NaN, this.l2x = NaN, this.l2y = NaN, this.l2z = NaN, this.a1x = NaN, this.a1y = NaN, this.a1z = NaN, this.a2x = NaN, this.a2y = NaN, this.a2z = NaN, this.lowerLimit = NaN, this.upperLimit = NaN, this.limitVelocity = NaN, this.limitState = 0, this.enableMotor = !1, this.motorSpeed = NaN, this.maxMotorForce = NaN, this.maxMotorImpulse = NaN, this.limitMotor = i, this.b1 = t.body1, this.b2 = t.body2, this.p1 = t.anchorPoint1, this.p2 = t.anchorPoint2, this.r1 = t.relativeAnchorPoint1, this.r2 = t.relativeAnchorPoint2, this.l1 = this.b1.linearVelocity, this.l2 = this.b2.linearVelocity, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.limitImpulse = 0, this.motorImpulse = 0 } function g(t, i, s) { v.call(this, t), this.type = Mt, this.nor = new e, this.limitMotor = new d(this.nor, !0), this.limitMotor.lowerLimit = i, this.limitMotor.upperLimit = s, this.t = new M(this, this.limitMotor) } function I(t, i) { this.joint = t, this.targetOrientation = (new a).invert(i), this.relativeOrientation = new a, this.ii1 = null, this.ii2 = null, this.dd = null, this.vel = new e, this.imp = new e, this.rn0 = new e, this.rn1 = new e, this.rn2 = new e, this.b1 = t.body1, this.b2 = t.body2, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia } function V(t, i, s, h) { this.m1 = NaN, this.m2 = NaN, this.i1e00 = NaN, this.i1e01 = NaN, this.i1e02 = NaN, this.i1e10 = NaN, this.i1e11 = NaN, this.i1e12 = NaN, this.i1e20 = NaN, this.i1e21 = NaN, this.i1e22 = NaN, this.i2e00 = NaN, this.i2e01 = NaN, this.i2e02 = NaN, this.i2e10 = NaN, this.i2e11 = NaN, this.i2e12 = NaN, this.i2e20 = NaN, this.i2e21 = NaN, this.i2e22 = NaN, this.ax1 = NaN, this.ay1 = NaN, this.az1 = NaN, this.ax2 = NaN, this.ay2 = NaN, this.az2 = NaN, this.ax3 = NaN, this.ay3 = NaN, this.az3 = NaN, this.r1x = NaN, this.r1y = NaN, this.r1z = NaN, this.r2x = NaN, this.r2y = NaN, this.r2z = NaN, this.t1x1 = NaN, this.t1y1 = NaN, this.t1z1 = NaN, this.t2x1 = NaN, this.t2y1 = NaN, this.t2z1 = NaN, this.l1x1 = NaN, this.l1y1 = NaN, this.l1z1 = NaN, this.l2x1 = NaN, this.l2y1 = NaN, this.l2z1 = NaN, this.a1x1 = NaN, this.a1y1 = NaN, this.a1z1 = NaN, this.a2x1 = NaN, this.a2y1 = NaN, this.a2z1 = NaN, this.t1x2 = NaN, this.t1y2 = NaN, this.t1z2 = NaN, this.t2x2 = NaN, this.t2y2 = NaN, this.t2z2 = NaN, this.l1x2 = NaN, this.l1y2 = NaN, this.l1z2 = NaN, this.l2x2 = NaN, this.l2y2 = NaN, this.l2z2 = NaN, this.a1x2 = NaN, this.a1y2 = NaN, this.a1z2 = NaN, this.a2x2 = NaN, this.a2y2 = NaN, this.a2z2 = NaN, this.t1x3 = NaN, this.t1y3 = NaN, this.t1z3 = NaN, this.t2x3 = NaN, this.t2y3 = NaN, this.t2z3 = NaN, this.l1x3 = NaN, this.l1y3 = NaN, this.l1z3 = NaN, this.l2x3 = NaN, this.l2y3 = NaN, this.l2z3 = NaN, this.a1x3 = NaN, this.a1y3 = NaN, this.a1z3 = NaN, this.a2x3 = NaN, this.a2y3 = NaN, this.a2z3 = NaN, this.lowerLimit1 = NaN, this.upperLimit1 = NaN, this.limitVelocity1 = NaN, this.limitState1 = 0, this.enableMotor1 = !1, this.motorSpeed1 = NaN, this.maxMotorForce1 = NaN, this.maxMotorImpulse1 = NaN, this.lowerLimit2 = NaN, this.upperLimit2 = NaN, this.limitVelocity2 = NaN, this.limitState2 = 0, this.enableMotor2 = !1, this.motorSpeed2 = NaN, this.maxMotorForce2 = NaN, this.maxMotorImpulse2 = NaN, this.lowerLimit3 = NaN, this.upperLimit3 = NaN, this.limitVelocity3 = NaN, this.limitState3 = 0, this.enableMotor3 = !1, this.motorSpeed3 = NaN, this.maxMotorForce3 = NaN, this.maxMotorImpulse3 = NaN, this.k00 = NaN, this.k01 = NaN, this.k02 = NaN, this.k10 = NaN, this.k11 = NaN, this.k12 = NaN, this.k20 = NaN, this.k21 = NaN, this.k22 = NaN, this.kv00 = NaN, this.kv11 = NaN, this.kv22 = NaN, this.dv00 = NaN, this.dv11 = NaN, this.dv22 = NaN, this.d00 = NaN, this.d01 = NaN, this.d02 = NaN, this.d10 = NaN, this.d11 = NaN, this.d12 = NaN, this.d20 = NaN, this.d21 = NaN, this.d22 = NaN, this.limitMotor1 = i, this.limitMotor2 = s, this.limitMotor3 = h, this.b1 = t.body1, this.b2 = t.body2, this.p1 = t.anchorPoint1, this.p2 = t.anchorPoint2, this.r1 = t.relativeAnchorPoint1, this.r2 = t.relativeAnchorPoint2, this.l1 = this.b1.linearVelocity, this.l2 = this.b2.linearVelocity, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.limitImpulse1 = 0, this.motorImpulse1 = 0, this.limitImpulse2 = 0, this.motorImpulse2 = 0, this.limitImpulse3 = 0, this.motorImpulse3 = 0, this.cfm1 = 0, this.cfm2 = 0, this.cfm3 = 0, this.weight = -1 } function L(t, i, s) { v.call(this, t), this.type = St, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize(), this.ax1 = new e, this.ax2 = new e, this.nor = new e, this.tan = new e, this.bin = new e, this.ac = new I(this, (new a).setFromUnitVectors(this.localAxis1, this.localAxis2)), this.limitMotor = new d(this.nor, !0), this.limitMotor.lowerLimit = i, this.limitMotor.upperLimit = s, this.t3 = new V(this, this.limitMotor, new d(this.tan, !0), new d(this.bin, !0)) } function S(t, i, s) { v.call(this, t), this.type = Lt, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize(); var h = (new o).setQuat((new a).setFromUnitVectors(this.localAxis1, this.localAxis2)); this.localAngle1 = (new e).tangent(this.localAxis1).normalize(), this.localAngle2 = this.localAngle1.clone().applyMatrix3(h, !0), this.ax1 = new e, this.ax2 = new e, this.an1 = new e, this.an2 = new e, this.tmp = new e, this.nor = new e, this.tan = new e, this.bin = new e, this.rotationalLimitMotor = new d(this.nor, !1), this.r3 = new N(this, this.rotationalLimitMotor, new d(this.tan, !0), new d(this.bin, !0)), this.translationalLimitMotor = new d(this.nor, !0), this.translationalLimitMotor.lowerLimit = i, this.translationalLimitMotor.upperLimit = s, this.t3 = new V(this, this.translationalLimitMotor, new d(this.tan, !0), new d(this.bin, !0)) } function P(t) { v.call(this, t), this.type = Vt, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize(), this.localAngle1 = new e, this.localAngle2 = new e; var i = Pt.dotVectors(this.localAxis1, this.localAxis2); if (i > -1 && i < 1) this.localAngle1.set(this.localAxis2.x - i * this.localAxis1.x, this.localAxis2.y - i * this.localAxis1.y, this.localAxis2.z - i * this.localAxis1.z).normalize(), this.localAngle2.set(this.localAxis1.x - i * this.localAxis2.x, this.localAxis1.y - i * this.localAxis2.y, this.localAxis1.z - i * this.localAxis2.z).normalize(); else { var s = (new o).setQuat((new a).setFromUnitVectors(this.localAxis1, this.localAxis2)); this.localAngle1.tangent(this.localAxis1).normalize(), this.localAngle2 = this.localAngle1.clone().applyMatrix3(s, !0) } this.ax1 = new e, this.ax2 = new e, this.an1 = new e, this.an2 = new e, this.tmp = new e, this.nor = new e, this.tan = new e, this.bin = new e, this.translationalLimitMotor = new d(this.tan, !0), this.translationalLimitMotor.frequency = 8, this.translationalLimitMotor.dampingRatio = 1, this.rotationalLimitMotor1 = new d(this.tan, !1), this.rotationalLimitMotor2 = new d(this.bin, !1), this.t3 = new V(this, new d(this.nor, !0), this.translationalLimitMotor, new d(this.bin, !0)), this.t3.weight = 1, this.r3 = new N(this, new d(this.nor, !0), this.rotationalLimitMotor1, this.rotationalLimitMotor2) } function T() { this.scale = 1, this.invScale = 1, this.body1 = null, this.body2 = null, this.localAnchorPoint1 = new e, this.localAnchorPoint2 = new e, this.localAxis1 = new e, this.localAxis2 = new e, this.allowCollision = !1 } function A() { this.mass = 0, this.inertia = new o } function j(t) { this.prev = null, this.next = null, this.shape = null, this.body = null, this.contact = t } function O() { this.lp1X = NaN, this.lp1Y = NaN, this.lp1Z = NaN, this.lp2X = NaN, this.lp2Y = NaN, this.lp2Z = NaN, this.impulse = NaN } function C() { this.warmStarted = !1, this.position = new e, this.localPoint1 = new e, this.localPoint2 = new e, this.normal = new e, this.tangent = new e, this.binormal = new e, this.normalImpulse = 0, this.tangentImpulse = 0, this.binormalImpulse = 0, this.normalDenominator = 0, this.tangentDenominator = 0, this.binormalDenominator = 0, this.penetration = 0 } function D() { this.body1 = null, this.body2 = null, this.numPoints = 0, this.points = [new C, new C, new C, new C] } function E() { this.nor = new e, this.tan = new e, this.bin = new e, this.norU1 = new e, this.tanU1 = new e, this.binU1 = new e, this.norU2 = new e, this.tanU2 = new e, this.binU2 = new e, this.norT1 = new e, this.tanT1 = new e, this.binT1 = new e, this.norT2 = new e, this.tanT2 = new e, this.binT2 = new e, this.norTU1 = new e, this.tanTU1 = new e, this.binTU1 = new e, this.norTU2 = new e, this.tanTU2 = new e, this.binTU2 = new e, this.norImp = 0, this.tanImp = 0, this.binImp = 0, this.norDen = 0, this.tanDen = 0, this.binDen = 0, this.norTar = 0, this.next = null, this.last = !1 } function B(t) { f.call(this), this.manifold = t, this.restitution = NaN, this.friction = NaN, this.p1 = null, this.p2 = null, this.lv1 = null, this.lv2 = null, this.av1 = null, this.av2 = null, this.i1 = null, this.i2 = null, this.tmp = new e, this.tmpC1 = new e, this.tmpC2 = new e, this.tmpP1 = new e, this.tmpP2 = new e, this.tmplv1 = new e, this.tmplv2 = new e, this.tmpav1 = new e, this.tmpav2 = new e, this.m1 = NaN, this.m2 = NaN, this.num = 0, this.ps = t.points, this.cs = new E, this.cs.next = new E, this.cs.next.next = new E, this.cs.next.next.next = new E } function F() { this.shape1 = null, this.shape2 = null, this.body1 = null, this.body2 = null, this.prev = null, this.next = null, this.persisting = !1, this.sleeping = !1, this.detector = null, this.constraint = null, this.touching = !1, this.close = !1, this.dist = Pt.INF, this.b1Link = new j(this), this.b2Link = new j(this), this.s1Link = new j(this), this.s2Link = new j(this), this.manifold = new D, this.buffer = [new O, new O, new O, new O], this.points = this.manifold.points, this.constraint = new B(this.manifold) } function q(t, i) { this.position = t || new e, this.orientation = i || new a, this.scale = 1, this.invScale = 1, this.mesh = null, this.id = NaN, this.name = "", this.prev = null, this.next = null, this.type = dt, this.massInfo = new A, this.newPosition = new e, this.controlPos = !1, this.newOrientation = new a, this.newRotation = new e, this.currentRotation = new e, this.controlRot = !1, this.controlRotInTime = !1, this.quaternion = new a, this.pos = new e, this.linearVelocity = new e, this.angularVelocity = new e, this.parent = null, this.contactLink = null, this.numContacts = 0, this.shapes = null, this.numShapes = 0, this.jointLink = null, this.numJoints = 0, this.sleepPosition = new e, this.sleepOrientation = new a, this.isStatic = !1, this.isDynamic = !1, this.isKinematic = !1, this.rotation = new o, this.mass = 0, this.inverseMass = 0, this.inverseInertia = new o, this.localInertia = new o, this.inverseLocalInertia = new o, this.tmpInertia = new o, this.addedToIsland = !1, this.allowSleep = !0, this.sleepTime = 0, this.sleeping = !1 } function U(t, i) { this.shape1 = t || null, this.shape2 = i || null } function R() { this.types = pt, this.numPairChecks = 0, this.numPairs = 0, this.pairs = [] } function _() { return At++ } function J(t) { this.shape = t, this.aabb = t.aabb } function W(t) { J.call(this, t), this.id = _() } function H() { R.call(this), this.types = ut, this.proxies = [] } function Q() { this.numElements = 0, this.bufferSize = 256, this.elements = [], this.elements.length = this.bufferSize, this.stack = new Float32Array(64) } function X(t, i) { this.proxy = t, this.pair = null, this.min1 = null, this.max1 = null, this.min2 = null, this.max2 = null, this.max = i, this.value = 0 } function Y(t, i) { J.call(this, i), this.belongsTo = 0, this.max = [], this.min = [], this.sap = t, this.min[0] = new X(this, !1), this.max[0] = new X(this, !0), this.min[1] = new X(this, !1), this.max[1] = new X(this, !0), this.min[2] = new X(this, !1), this.max[2] = new X(this, !0), this.max[0].pair = this.min[0], this.max[1].pair = this.min[1], this.max[2].pair = this.min[2], this.min[0].min1 = this.min[1], this.min[0].max1 = this.max[1], this.min[0].min2 = this.min[2], this.min[0].max2 = this.max[2], this.min[1].min1 = this.min[0], this.min[1].max1 = this.max[0], this.min[1].min2 = this.min[2], this.min[1].max2 = this.max[2], this.min[2].min1 = this.min[0], this.min[2].max1 = this.max[0], this.min[2].min2 = this.min[1], this.min[2].max2 = this.max[1] } function Z() { R.call(this), this.types = yt, this.numElementsD = 0, this.numElementsS = 0, this.axesD = [new Q, new Q, new Q], this.axesS = [new Q, new Q, new Q], this.index1 = 0, this.index2 = 1 } function K() { this.child1 = null, this.child2 = null, this.parent = null, this.proxy = null, this.height = 0, this.aabb = new n } function G() { this.root = null, this.freeNodes = [], this.freeNodes.length = 16384, this.numFreeNodes = 0, this.aabb = new n } function $(t) { J.call(this, t), this.leaf = new K, this.leaf.proxy = this } function tt() { R.call(this), this.types = xt, this.tree = new G, this.stack = [], this.leaves = [], this.numLeaves = 0 } function it() { this.flip = !1 } function st() { it.call(this), this.clipVertices1 = new Float32Array(24), this.clipVertices2 = new Float32Array(24), this.used = new Float32Array(8), this.INF = 1 / 0 } function ht(t) { it.call(this), this.flip = t } function et() { it.call(this) } function at(t) { it.call(this), this.flip = t } function ot(t) { it.call(this), this.flip = t } function nt() { it.call(this) } function rt(t) { it.call(this), this.flip = t, this.n = new e, this.p = new e } function lt(t) { it.call(this), this.flip = t, this.n = new e, this.p = new e, this.dix = new e, this.diy = new e, this.diz = new e, this.cc = new e, this.cc2 = new e } function ct(t) { switch (t instanceof Object || (t = {}), this.scale = t.worldscale || 1, this.invScale = 1 / this.scale, this.timeStep = t.timestep || .01666, this.timerate = 1e3 * this.timeStep, this.timer = null, this.preLoop = null, this.postLoop = null, this.numIterations = t.iterations || 8, t.broadphase || 2) { case 1: this.broadPhase = new H; break; case 2: default: this.broadPhase = new Z; break; case 3: this.broadPhase = new tt }this.Btypes = ["None", "BruteForce", "Sweep & Prune", "Bounding Volume Tree"], this.broadPhaseType = this.Btypes[t.broadphase || 2], this.performance = null, this.isStat = void 0 !== t.info && t.info, this.isStat && (this.performance = new h(this)), this.enableRandomizer = void 0 === t.random || t.random, this.rigidBodies = null, this.numRigidBodies = 0, this.contacts = null, this.unusedContacts = null, this.numContacts = 0, this.numContactPoints = 0, this.joints = null, this.numJoints = 0, this.numIslands = 0, this.gravity = new e(0, -9.8, 0), void 0 !== t.gravity && this.gravity.fromArray(t.gravity); this.detectors = [], this.detectors.length = 5; for (var i = 5; i--;)this.detectors[i] = [], this.detectors[i].length = 5; this.detectors[bt][bt] = new nt, this.detectors[bt][vt] = new at(!1), this.detectors[vt][bt] = new at(!0), this.detectors[vt][vt] = new st, this.detectors[zt][zt] = new et, this.detectors[zt][vt] = new ht(!0), this.detectors[vt][zt] = new ht(!1), this.detectors[zt][bt] = new ot(!0), this.detectors[bt][zt] = new ot(!1), this.detectors[Nt][bt] = new rt(!0), this.detectors[bt][Nt] = new rt(!1), this.detectors[Nt][vt] = new lt(!0), this.detectors[vt][Nt] = new lt(!1), this.randX = 65535, this.randA = 98765, this.randB = 123456789, this.islandRigidBodies = [], this.islandStack = [], this.islandConstraints = [] } void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function(t) { return t < 0 ? -1 : t > 0 ? 1 : +t }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", { get: function() { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1] } }), void 0 === Object.assign && function() { Object.assign = function(t) { if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object"); for (var i = Object(t), s = 1; s < arguments.length; s++) { var h = arguments[s]; if (void 0 !== h && null !== h) for (var e in h) Object.prototype.hasOwnProperty.call(h, e) && (i[e] = h[e]) } return i } }(); var mt = "1.0.9", pt = 0, ut = 1, yt = 2, xt = 3, dt = 0, ft = 0, bt = 1, vt = 2, zt = 3, Nt = 4, kt = 5, wt = 0, Mt = 1, gt = 2, It = 3, Vt = 4, Lt = 5, St = 6, Pt = { sqrt: Math.sqrt, abs: Math.abs, floor: Math.floor, cos: Math.cos, sin: Math.sin, acos: Math.acos, asin: Math.asin, atan2: Math.atan2, round: Math.round, pow: Math.pow, max: Math.max, min: Math.min, random: Math.random, degtorad: .017453292519943295, radtodeg: 57.29577951308232, PI: 3.141592653589793, TwoPI: 6.283185307179586, PI90: 1.570796326794896, PI270: 4.712388980384689, INF: 1 / 0, EPZ: 1e-5, EPZ2: 1e-6, lerp: function(t, i, s) { return (1 - s) * t + s * i }, randInt: function(t, i) { return t + Pt.floor(Pt.random() * (i - t + 1)) }, rand: function(t, i) { return t + Pt.random() * (i - t) }, generateUUID: function() { var t, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), s = new Array(36), h = 0; return function() { for (var e = 0; e < 36; e++)8 === e || 13 === e || 18 === e || 23 === e ? s[e] = "-" : 14 === e ? s[e] = "4" : (h <= 2 && (h = 33554432 + 16777216 * Math.random() | 0), t = 15 & h, h >>= 4, s[e] = i[19 === e ? 3 & t | 8 : t]); return s.join("") } }(), int: function(t) { return Pt.floor(t) }, fix: function(t, i) { return t.toFixed(i || 3, 10) }, clamp: function(t, i, s) { return Pt.max(i, Pt.min(s, t)) }, distance: function(t, i) { var s = i[0] - t[0], h = i[1] - t[1], e = i[2] - t[2]; return Pt.sqrt(s * s + h * h + e * e) }, acosClamp: function(t) { return t > 1 ? 0 : t < -1 ? Pt.PI : Pt.acos(t) }, distanceVector: function(t, i) { var s = t.x - i.x, h = t.y - i.y, e = t.z - i.z; return s * s + h * h + e * e }, dotVectors: function(t, i) { return t.x * i.x + t.y * i.y + t.z * i.z } }; Object.assign(h.prototype, { setTime: function(t) { this.times[t || 0] = performance.now() }, resetMax: function() { this.MaxBroadPhaseTime = 0, this.MaxNarrowPhaseTime = 0, this.MaxSolvingTime = 0, this.MaxTotalTime = 0, this.MaxUpdateTime = 0 }, calcBroadPhase: function() { this.setTime(2), this.broadPhaseTime = this.times[2] - this.times[1] }, calcNarrowPhase: function() { this.setTime(3), this.narrowPhaseTime = this.times[3] - this.times[2] }, calcEnd: function() { this.setTime(2), this.solvingTime = this.times[2] - this.times[1], this.totalTime = this.times[2] - this.times[0], this.updateTime = this.totalTime - (this.broadPhaseTime + this.narrowPhaseTime + this.solvingTime), 100 === this.tt && this.resetMax(), this.tt > 100 && (this.broadPhaseTime > this.MaxBroadPhaseTime && (this.MaxBroadPhaseTime = this.broadPhaseTime), this.narrowPhaseTime > this.MaxNarrowPhaseTime && (this.MaxNarrowPhaseTime = this.narrowPhaseTime), this.solvingTime > this.MaxSolvingTime && (this.MaxSolvingTime = this.solvingTime), this.totalTime > this.MaxTotalTime && (this.MaxTotalTime = this.totalTime), this.updateTime > this.MaxUpdateTime && (this.MaxUpdateTime = this.updateTime)), this.upfps(), ++this.tt > 500 && (this.tt = 0) }, upfps: function() { this.f[1] = Date.now(), this.f[1] - 1e3 > this.f[0] && (this.f[0] = this.f[1], this.fps = this.f[2], this.f[2] = 0), this.f[2]++ }, show: function() { return ["Oimo.js " + this.version + "<br>", this.broadPhase + "<br><br>", "FPS: " + this.fps + " fps<br><br>", "rigidbody " + this.parent.numRigidBodies + "<br>", "contact &nbsp;&nbsp;" + this.parent.numContacts + "<br>", "ct-point &nbsp;" + this.parent.numContactPoints + "<br>", "paircheck " + this.parent.broadPhase.numPairChecks + "<br>", "island &nbsp;&nbsp;&nbsp;" + this.parent.numIslands + "<br><br>", "Time in milliseconds<br><br>", "broadphase &nbsp;" + Pt.fix(this.broadPhaseTime) + " | " + Pt.fix(this.MaxBroadPhaseTime) + "<br>", "narrowphase " + Pt.fix(this.narrowPhaseTime) + " | " + Pt.fix(this.MaxNarrowPhaseTime) + "<br>", "solving &nbsp;&nbsp;&nbsp;&nbsp;" + Pt.fix(this.solvingTime) + " | " + Pt.fix(this.MaxSolvingTime) + "<br>", "total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Pt.fix(this.totalTime) + " | " + Pt.fix(this.MaxTotalTime) + "<br>", "updating &nbsp;&nbsp;&nbsp;" + Pt.fix(this.updateTime) + " | " + Pt.fix(this.MaxUpdateTime) + "<br>"].join("\n") }, toArray: function() { return this.infos[0] = this.parent.broadPhase.types, this.infos[1] = this.parent.numRigidBodies, this.infos[2] = this.parent.numContacts, this.infos[3] = this.parent.broadPhase.numPairChecks, this.infos[4] = this.parent.numContactPoints, this.infos[5] = this.parent.numIslands, this.infos[6] = this.broadPhaseTime, this.infos[7] = this.narrowPhaseTime, this.infos[8] = this.solvingTime, this.infos[9] = this.updateTime, this.infos[10] = this.totalTime, this.infos[11] = this.fps, this.infos } }), Object.assign(e.prototype, { Vec3: !0, set: function(t, i, s) { return this.x = t, this.y = i, this.z = s, this }, add: function(t, i) { return void 0 !== i ? this.addVectors(t, i) : (this.x += t.x, this.y += t.y, this.z += t.z, this) }, addVectors: function(t, i) { return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this }, addEqual: function(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this }, sub: function(t, i) { return void 0 !== i ? this.subVectors(t, i) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) }, subVectors: function(t, i) { return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this }, subEqual: function(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this }, scale: function(t, i) { return this.x = t.x * i, this.y = t.y * i, this.z = t.z * i, this }, scaleEqual: function(t) { return this.x *= t, this.y *= t, this.z *= t, this }, multiply: function(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this }, multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this }, addScaledVector: function(t, i) { return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this }, subScaledVector: function(t, i) { return this.x -= t.x * i, this.y -= t.y * i, this.z -= t.z * i, this }, cross: function(t, i) { if (void 0 !== i) return this.crossVectors(t, i); var s = this.x, h = this.y, e = this.z; return this.x = h * t.z - e * t.y, this.y = e * t.x - s * t.z, this.z = s * t.y - h * t.x, this }, crossVectors: function(t, i) { var s = t.x, h = t.y, e = t.z, a = i.x, o = i.y, n = i.z; return this.x = h * n - e * o, this.y = e * a - s * n, this.z = s * o - h * a, this }, tangent: function(t) { var i = t.x, s = t.y, h = t.z; return this.x = s * i - h * h, this.y = -h * s - i * i, this.z = i * h + s * s, this }, invert: function(t) { return this.x = -t.x, this.y = -t.y, this.z = -t.z, this }, negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }, dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z }, addition: function() { return this.x + this.y + this.z }, lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z }, length: function() { return Pt.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this }, applyMatrix3: function(t, i) { var s = this.x, h = this.y, e = this.z, a = t.elements; return i ? (this.x = a[0] * s + a[1] * h + a[2] * e, this.y = a[3] * s + a[4] * h + a[5] * e, this.z = a[6] * s + a[7] * h + a[8] * e) : (this.x = a[0] * s + a[3] * h + a[6] * e, this.y = a[1] * s + a[4] * h + a[7] * e, this.z = a[2] * s + a[5] * h + a[8] * e), this }, applyQuaternion: function(t) { var i = this.x, s = this.y, h = this.z, e = t.x, a = t.y, o = t.z, n = t.w, r = n * i + a * h - o * s, l = n * s + o * i - e * h, c = n * h + e * s - a * i, m = -e * i - a * s - o * h; return this.x = r * n + m * -e + l * -o - c * -a, this.y = l * n + m * -a + c * -e - r * -o, this.z = c * n + m * -o + r * -a - l * -e, this }, testZero: function() { return 0 !== this.x || 0 !== this.y || 0 !== this.z }, testDiff: function(t) { return !this.equals(t) }, equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z }, clone: function() { return new this.constructor(this.x, this.y, this.z) }, toString: function() { return "Vec3[" + this.x.toFixed(4) + ", " + this.y.toFixed(4) + ", " + this.z.toFixed(4) + "]" }, multiplyScalar: function(t) { return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this }, divideScalar: function(t) { return this.multiplyScalar(1 / t) }, normalize: function() { return this.divideScalar(this.length()) }, toArray: function(t, i) { void 0 === i && (i = 0), t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z }, fromArray: function(t, i) { return void 0 === i && (i = 0), this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this } }), Object.assign(a.prototype, { Quat: !0, set: function(t, i, s, h) { return this.x = t, this.y = i, this.z = s, this.w = h, this }, addTime: function(t, i) { var s = t.x, h = t.y, e = t.z, a = this.w, o = this.x, n = this.y, r = this.z; return i *= .5, this.x += i * (s * a + h * r - e * n), this.y += i * (h * a + e * o - s * r), this.z += i * (e * a + s * n - h * o), this.w += i * (-s * o - h * n - e * r), this.normalize(), this }, multiply: function(t, i) { return void 0 !== i ? this.multiplyQuaternions(t, i) : this.multiplyQuaternions(this, t) }, multiplyQuaternions: function(t, i) { var s = t.x, h = t.y, e = t.z, a = t.w, o = i.x, n = i.y, r = i.z, l = i.w; return this.x = s * l + a * o + h * r - e * n, this.y = h * l + a * n + e * o - s * r, this.z = e * l + a * r + s * n - h * o, this.w = a * l - s * o - h * n - e * r, this }, setFromUnitVectors: function(t, i) { var s = new e, h = t.dot(i) + 1; return h < Pt.EPS2 ? (h = 0, Pt.abs(t.x) > Pt.abs(t.z) ? s.set(-t.y, t.x, 0) : s.set(0, -t.z, t.y)) : s.crossVectors(t, i), this._x = s.x, this._y = s.y, this._z = s.z, this._w = h, this.normalize() }, arc: function(t, i) { var s = t.x, h = t.y, e = t.z, a = i.x, o = i.y, n = i.z, r = s * a + h * o + e * n; if (-1 == r) return a = h * s - e * e, o = -e * h - s * s, n = s * e + h * h, r = 1 / Pt.sqrt(a * a + o * o + n * n), this.w = 0, this.x = a * r, this.y = o * r, this.z = n * r, this; var l = h * n - e * o, c = e * a - s * n, m = s * o - h * a; return this.w = Pt.sqrt(.5 * (1 + r)), r = .5 / this.w, this.x = l * r, this.y = c * r, this.z = m * r, this }, normalize: function() { var t = this.length(); return 0 === t ? this.set(0, 0, 0, 1) : (t = 1 / t, this.x = this.x * t, this.y = this.y * t, this.z = this.z * t, this.w = this.w * t), this }, inverse: function() { return this.conjugate().normalize() }, invert: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this.conjugate().normalize(), this }, conjugate: function() { return this.x *= -1, this.y *= -1, this.z *= -1, this }, length: function() { return Pt.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) }, lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this }, clone: function(t) { return new a(this.x, this.y, this.z, this.w) }, testDiff: function(t) { return !this.equals(t) }, equals: function(t) { return this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w }, toString: function() { return "Quat[" + this.x.toFixed(4) + ", (" + this.y.toFixed(4) + ", " + this.z.toFixed(4) + ", " + this.w.toFixed(4) + ")]" }, setFromEuler: function(t, i, s) { var h = Math.cos(.5 * t), e = Math.cos(.5 * i), a = Math.cos(.5 * s), o = Math.sin(.5 * t), n = Math.sin(.5 * i), r = Math.sin(.5 * s); return this.x = o * e * a + h * n * r, this.y = h * n * a - o * e * r, this.z = h * e * r + o * n * a, this.w = h * e * a - o * n * r, this }, setFromAxis: function(t, i) { t.normalize(), i *= .5; var s = Pt.sin(i); return this.x = s * t.x, this.y = s * t.y, this.z = s * t.z, this.w = Pt.cos(i), this }, setFromMat33: function(t) { var i, s = t[0] + t[4] + t[8]; if (s > 0) i = Pt.sqrt(s + 1), this.w = .5 / i, i = .5 / i, this.x = (t[5] - t[7]) * i, this.y = (t[6] - t[2]) * i, this.z = (t[1] - t[3]) * i; else { var h = [], e = 0; t[4] > t[0] && (e = 1), t[8] > t[3 * e + e] && (e = 2); var a = (e + 1) % 3, o = (e + 2) % 3; i = Pt.sqrt(t[3 * e + e] - t[3 * a + a] - t[3 * o + o] + 1), h[e] = .5 * fRoot, i = .5 / fRoot, this.w = (t[3 * a + o] - t[3 * o + a]) * i, h[a] = (t[3 * a + e] + t[3 * e + a]) * i, h[o] = (t[3 * o + e] + t[3 * e + o]) * i, this.x = h[1], this.y = h[2], this.z = h[3] } return this }, toArray: function(t, i) { t[i = i || 0] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t[i + 3] = this.w }, fromArray: function(t, i) { return i = i || 0, this.set(t[i], t[i + 1], t[i + 2], t[i + 3]), this } }), Object.assign(o.prototype, { Mat33: !0, set: function(t, i, s, h, e, a, o, n, r) { var l = this.elements; return l[0] = t, l[1] = i, l[2] = s, l[3] = h, l[4] = e, l[5] = a, l[6] = o, l[7] = n, l[8] = r, this }, add: function(t, i) { if (void 0 !== i) return this.addMatrixs(t, i); var s = this.elements, h = t.elements; return s[0] += h[0], s[1] += h[1], s[2] += h[2], s[3] += h[3], s[4] += h[4], s[5] += h[5], s[6] += h[6], s[7] += h[7], s[8] += h[8], this }, addMatrixs: function(t, i) { var s = this.elements, h = t.elements, e = i.elements; return s[0] = h[0] + e[0], s[1] = h[1] + e[1], s[2] = h[2] + e[2], s[3] = h[3] + e[3], s[4] = h[4] + e[4], s[5] = h[5] + e[5], s[6] = h[6] + e[6], s[7] = h[7] + e[7], s[8] = h[8] + e[8], this }, addEqual: function(t) { var i = this.elements, s = t.elements; return i[0] += s[0], i[1] += s[1], i[2] += s[2], i[3] += s[3], i[4] += s[4], i[5] += s[5], i[6] += s[6], i[7] += s[7], i[8] += s[8], this }, sub: function(t, i) { if (void 0 !== i) return this.subMatrixs(t, i); var s = this.elements, h = t.elements; return s[0] -= h[0], s[1] -= h[1], s[2] -= h[2], s[3] -= h[3], s[4] -= h[4], s[5] -= h[5], s[6] -= h[6], s[7] -= h[7], s[8] -= h[8], this }, subMatrixs: function(t, i) { var s = this.elements, h = t.elements, e = i.elements; return s[0] = h[0] - e[0], s[1] = h[1] - e[1], s[2] = h[2] - e[2], s[3] = h[3] - e[3], s[4] = h[4] - e[4], s[5] = h[5] - e[5], s[6] = h[6] - e[6], s[7] = h[7] - e[7], s[8] = h[8] - e[8], this }, subEqual: function(t) { var i = this.elements, s = t.elements; return i[0] -= s[0], i[1] -= s[1], i[2] -= s[2], i[3] -= s[3], i[4] -= s[4], i[5] -= s[5], i[6] -= s[6], i[7] -= s[7], i[8] -= s[8], this }, scale: function(t, i) { var s = this.elements, h = t.elements; return s[0] = h[0] * i, s[1] = h[1] * i, s[2] = h[2] * i, s[3] = h[3] * i, s[4] = h[4] * i, s[5] = h[5] * i, s[6] = h[6] * i, s[7] = h[7] * i, s[8] = h[8] * i, this }, scaleEqual: function(t) { var i = this.elements; return i[0] *= t, i[1] *= t, i[2] *= t, i[3] *= t, i[4] *= t, i[5] *= t, i[6] *= t, i[7] *= t, i[8] *= t, this }, multiplyMatrices: function(t, i, s) { s && (i = i.clone().transpose()); var h = this.elements, e = t.elements, a = i.elements, o = e[0], n = e[3], r = e[6], l = e[1], c = e[4], m = e[7], p = e[2], u = e[5], y = e[8], x = a[0], d = a[3], f = a[6], b = a[1], v = a[4], z = a[7], N = a[2], k = a[5], w = a[8]; return h[0] = o * x + l * d + p * f, h[1] = o * b + l * v + p * z, h[2] = o * N + l * k + p * w, h[3] = n * x + c * d + u * f, h[4] = n * b + c * v + u * z, h[5] = n * N + c * k + u * w, h[6] = r * x + m * d + y * f, h[7] = r * b + m * v + y * z, h[8] = r * N + m * k + y * w, this }, transpose: function(t) { if (void 0 !== t) { var i = t.elements; return this.set(i[0], i[3], i[6], i[1], i[4], i[7], i[2], i[5], i[8]), this } var s = this.elements, h = s[1], e = s[2], a = s[5]; return s[1] = s[3], s[2] = s[6], s[3] = h, s[5] = s[7], s[6] = e, s[7] = a, this }, setQuat: function(t) { var i = this.elements, s = t.x, h = t.y, e = t.z, a = t.w, o = s + s, n = h + h, r = e + e, l = s * o, c = s * n, m = s * r, p = h * n, u = h * r, y = e * r, x = a * o, d = a * n, f = a * r; return i[0] = 1 - (p + y), i[1] = c - f, i[2] = m + d, i[3] = c + f, i[4] = 1 - (l + y), i[5] = u - x, i[6] = m - d, i[7] = u + x, i[8] = 1 - (l + p), this }, invert: function(t) { var i = this.elements, s = t.elements, h = s[0], e = s[3], a = s[6], o = s[1], n = s[4], r = s[7], l = s[2], c = s[5], m = s[8], p = m * n - c * r, u = -m * e + c * a, y = r * e - n * a, x = h * p + o * u + l * y; return 0 === x ? (console.log("can't invert matrix, determinant is 0"), this.identity()) : (x = 1 / x, i[0] = p * x, i[1] = (-m * o + l * r) * x, i[2] = (c * o - l * n) * x, i[3] = u * x, i[4] = (m * h - l * a) * x, i[5] = (-c * h + l * e) * x, i[6] = y * x, i[7] = (-r * h + o * a) * x, i[8] = (n * h - o * e) * x, this) }, addOffset: function(t, i) { var s = i.x, h = i.y, e = i.z, a = this.elements; a[0] += t * (h * h + e * e), a[4] += t * (s * s + e * e), a[8] += t * (s * s + h * h); var o = t * s * h, n = t * h * e, r = t * e * s; return a[1] -= o, a[3] -= o, a[2] -= n, a[6] -= n, a[5] -= r, a[7] -= r, this }, subOffset: function(t, i) { var s = i.x, h = i.y, e = i.z, a = this.elements; a[0] -= t * (h * h + e * e), a[4] -= t * (s * s + e * e), a[8] -= t * (s * s + h * h); var o = t * s * h, n = t * h * e, r = t * e * s; return a[1] += o, a[3] += o, a[2] += n, a[6] += n, a[5] += r, a[7] += r, this }, multiplyScalar: function(t) { var i = this.elements; return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= t, i[4] *= t, i[7] *= t, i[2] *= t, i[5] *= t, i[8] *= t, this }, identity: function() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }, clone: function() { return (new o).fromArray(this.elements) }, copy: function(t) { for (var i = 0; i < 9; i++)this.elements[i] = t.elements[i]; return this }, determinant: function() { var t = this.elements, i = t[0], s = t[1], h = t[2], e = t[3], a = t[4], o = t[5], n = t[6], r = t[7], l = t[8]; return i * a * l - i * o * r - s * e * l + s * o * n + h * e * r - h * a * n }, fromArray: function(t, i) { void 0 === i && (i = 0); for (var s = 0; s < 9; s++)this.elements[s] = t[s + i]; return this }, toArray: function(t, i) { void 0 === t && (t = []), void 0 === i && (i = 0); var s = this.elements; return t[i] = s[0], t[i + 1] = s[1], t[i + 2] = s[2], t[i + 3] = s[3], t[i + 4] = s[4], t[i + 5] = s[5], t[i + 6] = s[6], t[i + 7] = s[7], t[i + 8] = s[8], t } }), Object.assign(n.prototype, { AABB: !0, set: function(t, i, s, h, e, a) { var o = this.elements; return o[0] = t, o[3] = i, o[1] = s, o[4] = h, o[2] = e, o[5] = a, this }, intersectTest: function(t) { var i = this.elements, s = t.elements; return i[0] > s[3] || i[1] > s[4] || i[2] > s[5] || i[3] < s[0] || i[4] < s[1] || i[5] < s[2] }, intersectTestTwo: function(t) { var i = this.elements, s = t.elements; return i[0] < s[0] || i[1] < s[1] || i[2] < s[2] || i[3] > s[3] || i[4] > s[4] || i[5] > s[5] }, clone: function() { return (new this.constructor).fromArray(this.elements) }, copy: function(t, i) { var s = i || 0, h = t.elements; return this.set(h[0] - s, h[3] + s, h[1] - s, h[4] + s, h[2] - s, h[5] + s), this }, fromArray: function(t) { return this.elements.set(t), this }, combine: function(t, i) { var s = t.elements, h = i.elements, e = this.elements; return e[0] = s[0] < h[0] ? s[0] : h[0], e[1] = s[1] < h[1] ? s[1] : h[1], e[2] = s[2] < h[2] ? s[2] : h[2], e[3] = s[3] > h[3] ? s[3] : h[3], e[4] = s[4] > h[4] ? s[4] : h[4], e[5] = s[5] > h[5] ? s[5] : h[5], this }, surfaceArea: function() { var t = this.elements, i = t[3] - t[0], s = t[4] - t[1], h = t[5] - t[2]; return 2 * (i * (s + h) + s * h) }, intersectsWithPoint: function(t, i, s) { var h = this.elements; return t >= h[0] && t <= h[3] && i >= h[1] && i <= h[4] && s >= h[2] && s <= h[5] }, setFromPoints: function(t) { this.makeEmpty(); for (var i = 0; i < t.length; i++)this.expandByPoint(t[i]) }, makeEmpty: function() { this.set(-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0) }, expandByPoint: function(t) { var i = this.elements; this.set(Pt.min(i[0], t.x), Pt.min(i[1], t.y), Pt.min(i[2], t.z), Pt.max(i[3], t.x), Pt.max(i[4], t.y), Pt.max(i[5], t.z)) }, expandByScalar: function(t) { var i = this.elements; i[0] += -t, i[1] += -t, i[2] += -t, i[3] += t, i[4] += t, i[5] += t } }); var Tt = 0; Object.assign(l.prototype, { Shape: !0, calculateMassInfo: function(t) { s("Shape", "Inheritance error.") }, updateProxy: function() { s("Shape", "Inheritance error.") } }), c.prototype = Object.assign(Object.create(l.prototype), { constructor: c, calculateMassInfo: function(t) { var i = this.width * this.height * this.depth * this.density; t.mass = i, t.inertia.set(i * (this.height * this.height + this.depth * this.depth) * (1 / 12), 0, 0, 0, i * (this.width * this.width + this.depth * this.depth) * (1 / 12), 0, 0, 0, i * (this.width * this.width + this.height * this.height) * (1 / 12)) }, updateProxy: function() { var t = this.rotation.elements, i = this.dimentions; i[0] = t[0], i[1] = t[3], i[2] = t[6], i[3] = t[1], i[4] = t[4], i[5] = t[7], i[6] = t[2], i[7] = t[5], i[8] = t[8], i[9] = t[0] * this.halfWidth, i[10] = t[3] * this.halfWidth, i[11] = t[6] * this.halfWidth, i[12] = t[1] * this.halfHeight, i[13] = t[4] * this.halfHeight, i[14] = t[7] * this.halfHeight, i[15] = t[2] * this.halfDepth, i[16] = t[5] * this.halfDepth, i[17] = t[8] * this.halfDepth; var s = i[9], h = i[10], e = i[11], a = i[12], o = i[13], n = i[14], r = i[15], l = i[16], c = i[17], m = this.position.x, p = this.position.y, u = this.position.z, y = this.elements; y[0] = m + s + a + r, y[1] = p + h + o + l, y[2] = u + e + n + c, y[3] = m + s + a - r, y[4] = p + h + o - l, y[5] = u + e + n - c, y[6] = m + s - a + r, y[7] = p + h - o + l, y[8] = u + e - n + c, y[9] = m + s - a - r, y[10] = p + h - o - l, y[11] = u + e - n - c, y[12] = m - s + a + r, y[13] = p - h + o + l, y[14] = u - e + n + c, y[15] = m - s + a - r, y[16] = p - h + o - l, y[17] = u - e + n - c, y[18] = m - s - a + r, y[19] = p - h - o + l, y[20] = u - e - n + c, y[21] = m - s - a - r, y[22] = p - h - o - l, y[23] = u - e - n - c; var x = i[9] < 0 ? -i[9] : i[9], d = i[10] < 0 ? -i[10] : i[10], f = i[11] < 0 ? -i[11] : i[11]; x = i[12] < 0 ? x - i[12] : x + i[12], d = i[13] < 0 ? d - i[13] : d + i[13], f = i[14] < 0 ? f - i[14] : f + i[14], x = i[15] < 0 ? x - i[15] : x + i[15], d = i[16] < 0 ? d - i[16] : d + i[16], f = i[17] < 0 ? f - i[17] : f + i[17]; var b = .005; this.aabb.set(this.position.x - x - b, this.position.x + x + b, this.position.y - d - b, this.position.y + d + b, this.position.z - f - b, this.position.z + f + b), null != this.proxy && this.proxy.update() } }), m.prototype = Object.assign(Object.create(l.prototype), { constructor: m, volume: function() { return Pt.PI * this.radius * 1.333333 }, calculateMassInfo: function(t) { var i = this.volume() * this.radius * this.radius * this.density; t.mass = i; var s = i * this.radius * this.radius * .4; t.inertia.set(s, 0, 0, 0, s, 0, 0, 0, s) }, updateProxy: function() { var t = .005; this.aabb.set(this.position.x - this.radius - t, this.position.x + this.radius + t, this.position.y - this.radius - t, this.position.y + this.radius + t, this.position.z - this.radius - t, this.position.z + this.radius + t), null != this.proxy && this.proxy.update() } }), p.prototype = Object.assign(Object.create(l.prototype), { constructor: p, calculateMassInfo: function(t) { var i = this.radius * this.radius, s = Pt.PI * i * this.height * this.density, h = (.25 * i + .0833 * this.height * this.height) * s, e = .5 * i; t.mass = s, t.inertia.set(h, 0, 0, 0, e, 0, 0, 0, h) }, updateProxy: function() { var t, i, s, h, e, a, o, n, r, l, c, m = this.rotation.elements; e = m[1] * m[1], a = m[4] * m[4], o = m[7] * m[7], this.normalDirection.set(m[1], m[4], m[7]), this.halfDirection.scale(this.normalDirection, this.halfHeight), i = 1 - e, (t = Pt.sqrt(i * i + e * a + e * o)) > 0 && (t = this.radius / t), i *= t, s = 1 - a, (t = Pt.sqrt(a * e + s * s + a * o)) > 0 && (t = this.radius / t), s *= t, h = 1 - o, (t = Pt.sqrt(o * e + o * a + h * h)) > 0 && (t = this.radius / t), h *= t, n = this.halfDirection.x < 0 ? -this.halfDirection.x : this.halfDirection.x, r = this.halfDirection.y < 0 ? -this.halfDirection.y : this.halfDirection.y, l = this.halfDirection.z < 0 ? -this.halfDirection.z : this.halfDirection.z, n = i < 0 ? n - i : n + i, r = s < 0 ? r - s : r + s, l = h < 0 ? l - h : l + h, c = .005, this.aabb.set(this.position.x - n - c, this.position.x + n + c, this.position.y - r - c, this.position.y + r + c, this.position.z - l - c, this.position.z + l + c), null != this.proxy && this.proxy.update() } }), u.prototype = Object.assign(Object.create(l.prototype), { constructor: u, volume: function() { return Number.MAX_VALUE }, calculateMassInfo: function(t) { t.mass = this.density; t.inertia.set(1, 0, 0, 0, 1, 0, 0, 0, 1) }, updateProxy: function() { var t = .005, i = -Pt.INF, s = Pt.INF, h = this.normal; this.aabb.set(-1 === h.x ? this.position.x - t : i, 1 === h.x ? this.position.x + t : s, -1 === h.y ? this.position.y - t : i, 1 === h.y ? this.position.y + t : s, -1 === h.z ? this.position.z - t : i, 1 === h.z ? this.position.z + t : s), null != this.proxy && this.proxy.update() } }), y.prototype = Object.assign(Object.create(l.prototype), { constructor: y, volume: function() { return Number.MAX_VALUE }, calculateMassInfo: function(t) { t.inertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0) }, updateProxy: function() { this.aabb.set(this.position.x - 0, this.position.x + 0, this.position.y - 0, this.position.y + 0, this.position.z - 0, this.position.z + 0), null != this.proxy && this.proxy.update() } }), Object.assign(d.prototype, { LimitMotor: !0, setLimit: function(t, i) { this.lowerLimit = t, this.upperLimit = i }, setMotor: function(t, i) { this.motorSpeed = t, this.maxMotorForce = i }, setSpring: function(t, i) { this.frequency = t, this.dampingRatio = i } }), Object.assign(f.prototype, { Constraint: !0, preSolve: function(t, i) { s("Constraint", "Inheritance error.") }, solve: function() { s("Constraint", "Inheritance error.") }, postSolve: function() { s("Constraint", "Inheritance error.") } }), v.prototype = Object.assign(Object.create(f.prototype), { constructor: v, setId: function(t) { this.id = i }, setParent: function(t) { this.parent = t, this.scale = this.parent.scale, this.invScale = this.parent.invScale, this.id = this.parent.numJoints, this.name || (this.name = "J" + this.id) }, updateAnchorPoints: function() { this.relativeAnchorPoint1.copy(this.localAnchorPoint1).applyMatrix3(this.body1.rotation, !0), this.relativeAnchorPoint2.copy(this.localAnchorPoint2).applyMatrix3(this.body2.rotation, !0), this.anchorPoint1.add(this.relativeAnchorPoint1, this.body1.position), this.anchorPoint2.add(this.relativeAnchorPoint2, this.body2.position) }, attach: function(t) { this.b1Link.body = this.body2, this.b2Link.body = this.body1, t ? (this.body1.jointLink.push(this.b1Link), this.body2.jointLink.push(this.b2Link)) : (null != this.body1.jointLink ? (this.b1Link.next = this.body1.jointLink).prev = this.b1Link : this.b1Link.next = null, this.body1.jointLink = this.b1Link, this.body1.numJoints++ , null != this.body2.jointLink ? (this.b2Link.next = this.body2.jointLink).prev = this.b2Link : this.b2Link.next = null, this.body2.jointLink = this.b2Link, this.body2.numJoints++) }, detach: function(t) { if (t) this.body1.jointLink.splice(this.body1.jointLink.indexOf(this.b1Link), 1), this.body2.jointLink.splice(this.body2.jointLink.indexOf(this.b2Link), 1); else { var i = this.b1Link.prev, s = this.b1Link.next; null != i && (i.next = s), null != s && (s.prev = i), this.body1.jointLink == this.b1Link && (this.body1.jointLink = s), this.b1Link.prev = null, this.b1Link.next = null, this.b1Link.body = null, this.body1.numJoints-- , i = this.b2Link.prev, s = this.b2Link.next, null != i && (i.next = s), null != s && (s.prev = i), this.body2.jointLink == this.b2Link && (this.body2.jointLink = s), this.b2Link.prev = null, this.b2Link.next = null, this.b2Link.body = null, this.body2.numJoints-- } this.b1Link.body = null, this.b2Link.body = null }, awake: function() { this.body1.awake(), this.body2.awake() }, preSolve: function(t, i) { }, solve: function() { }, postSolve: function() { }, remove: function() { this.dispose() }, dispose: function() { this.parent.removeJoint(this) }, getPosition: function() { return [(new e).scale(this.anchorPoint1, this.scale), (new e).scale(this.anchorPoint2, this.scale)] } }), Object.assign(z.prototype, { LinearConstraint: !0, preSolve: function(t, i) { this.r1x = this.r1.x, this.r1y = this.r1.y, this.r1z = this.r1.z, this.r2x = this.r2.x, this.r2y = this.r2.y, this.r2z = this.r2.z, this.m1 = this.b1.inverseMass, this.m2 = this.b2.inverseMass, this.ii1 = this.i1.clone(), this.ii2 = this.i2.clone(); var s = this.ii1.elements, h = this.ii2.elements; this.ax1x = this.r1z * s[1] + -this.r1y * s[2], this.ax1y = this.r1z * s[4] + -this.r1y * s[5], this.ax1z = this.r1z * s[7] + -this.r1y * s[8], this.ay1x = -this.r1z * s[0] + this.r1x * s[2], this.ay1y = -this.r1z * s[3] + this.r1x * s[5], this.ay1z = -this.r1z * s[6] + this.r1x * s[8], this.az1x = this.r1y * s[0] + -this.r1x * s[1], this.az1y = this.r1y * s[3] + -this.r1x * s[4], this.az1z = this.r1y * s[6] + -this.r1x * s[7], this.ax2x = this.r2z * h[1] + -this.r2y * h[2], this.ax2y = this.r2z * h[4] + -this.r2y * h[5], this.ax2z = this.r2z * h[7] + -this.r2y * h[8], this.ay2x = -this.r2z * h[0] + this.r2x * h[2], this.ay2y = -this.r2z * h[3] + this.r2x * h[5], this.ay2z = -this.r2z * h[6] + this.r2x * h[8], this.az2x = this.r2y * h[0] + -this.r2x * h[1], this.az2y = this.r2y * h[3] + -this.r2x * h[4], this.az2z = this.r2y * h[6] + -this.r2x * h[7]; var e = this.m1 + this.m2, a = (new o).set(e, 0, 0, 0, e, 0, 0, 0, e).elements; a[0] += s[4] * this.r1z * this.r1z - (s[7] + s[5]) * this.r1y * this.r1z + s[8] * this.r1y * this.r1y, a[1] += (s[6] * this.r1y + s[5] * this.r1x) * this.r1z - s[3] * this.r1z * this.r1z - s[8] * this.r1x * this.r1y, a[2] += (s[3] * this.r1y - s[4] * this.r1x) * this.r1z - s[6] * this.r1y * this.r1y + s[7] * this.r1x * this.r1y, a[3] += (s[2] * this.r1y + s[7] * this.r1x) * this.r1z - s[1] * this.r1z * this.r1z - s[8] * this.r1x * this.r1y, a[4] += s[0] * this.r1z * this.r1z - (s[6] + s[2]) * this.r1x * this.r1z + s[8] * this.r1x * this.r1x, a[5] += (s[1] * this.r1x - s[0] * this.r1y) * this.r1z - s[7] * this.r1x * this.r1x + s[6] * this.r1x * this.r1y, a[6] += (s[1] * this.r1y - s[4] * this.r1x) * this.r1z - s[2] * this.r1y * this.r1y + s[5] * this.r1x * this.r1y, a[7] += (s[3] * this.r1x - s[0] * this.r1y) * this.r1z - s[5] * this.r1x * this.r1x + s[2] * this.r1x * this.r1y, a[8] += s[0] * this.r1y * this.r1y - (s[3] + s[1]) * this.r1x * this.r1y + s[4] * this.r1x * this.r1x, a[0] += h[4] * this.r2z * this.r2z - (h[7] + h[5]) * this.r2y * this.r2z + h[8] * this.r2y * this.r2y, a[1] += (h[6] * this.r2y + h[5] * this.r2x) * this.r2z - h[3] * this.r2z * this.r2z - h[8] * this.r2x * this.r2y, a[2] += (h[3] * this.r2y - h[4] * this.r2x) * this.r2z - h[6] * this.r2y * this.r2y + h[7] * this.r2x * this.r2y, a[3] += (h[2] * this.r2y + h[7] * this.r2x) * this.r2z - h[1] * this.r2z * this.r2z - h[8] * this.r2x * this.r2y, a[4] += h[0] * this.r2z * this.r2z - (h[6] + h[2]) * this.r2x * this.r2z + h[8] * this.r2x * this.r2x, a[5] += (h[1] * this.r2x - h[0] * this.r2y) * this.r2z - h[7] * this.r2x * this.r2x + h[6] * this.r2x * this.r2y, a[6] += (h[1] * this.r2y - h[4] * this.r2x) * this.r2z - h[2] * this.r2y * this.r2y + h[5] * this.r2x * this.r2y, a[7] += (h[3] * this.r2x - h[0] * this.r2y) * this.r2z - h[5] * this.r2x * this.r2x + h[2] * this.r2x * this.r2y, a[8] += h[0] * this.r2y * this.r2y - (h[3] + h[1]) * this.r2x * this.r2y + h[4] * this.r2x * this.r2x; var n = 1 / (a[0] * (a[4] * a[8] - a[7] * a[5]) + a[3] * (a[7] * a[2] - a[1] * a[8]) + a[6] * (a[1] * a[5] - a[4] * a[2])); this.dd = (new o).set(a[4] * a[8] - a[5] * a[7], a[2] * a[7] - a[1] * a[8], a[1] * a[5] - a[2] * a[4], a[5] * a[6] - a[3] * a[8], a[0] * a[8] - a[2] * a[6], a[2] * a[3] - a[0] * a[5], a[3] * a[7] - a[4] * a[6], a[1] * a[6] - a[0] * a[7], a[0] * a[4] - a[1] * a[3]).scaleEqual(n), this.velx = this.p2.x - this.p1.x, this.vely = this.p2.y - this.p1.y, this.velz = this.p2.z - this.p1.z; var r = Pt.sqrt(this.velx * this.velx + this.vely * this.vely + this.velz * this.velz); r > .005 ? (r = (.005 - r) / r * i * .05, this.velx *= r, this.vely *= r, this.velz *= r) : (this.velx = 0, this.vely = 0, this.velz = 0), this.impx *= .95, this.impy *= .95, this.impz *= .95, this.l1.x += this.impx * this.m1, this.l1.y += this.impy * this.m1, this.l1.z += this.impz * this.m1, this.a1.x += this.impx * this.ax1x + this.impy * this.ay1x + this.impz * this.az1x, this.a1.y += this.impx * this.ax1y + this.impy * this.ay1y + this.impz * this.az1y, this.a1.z += this.impx * this.ax1z + this.impy * this.ay1z + this.impz * this.az1z, this.l2.x -= this.impx * this.m2, this.l2.y -= this.impy * this.m2, this.l2.z -= this.impz * this.m2, this.a2.x -= this.impx * this.ax2x + this.impy * this.ay2x + this.impz * this.az2x, this.a2.y -= this.impx * this.ax2y + this.impy * this.ay2y + this.impz * this.az2y, this.a2.z -= this.impx * this.ax2z + this.impy * this.ay2z + this.impz * this.az2z }, solve: function() { var t = this.dd.elements, i = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y - this.velx, s = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z - this.vely, h = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x - this.velz, e = i * t[0] + s * t[1] + h * t[2], a = i * t[3] + s * t[4] + h * t[5], o = i * t[6] + s * t[7] + h * t[8]; this.impx += e, this.impy += a, this.impz += o, this.l1.x += e * this.m1, this.l1.y += a * this.m1, this.l1.z += o * this.m1, this.a1.x += e * this.ax1x + a * this.ay1x + o * this.az1x, this.a1.y += e * this.ax1y + a * this.ay1y + o * this.az1y, this.a1.z += e * this.ax1z + a * this.ay1z + o * this.az1z, this.l2.x -= e * this.m2, this.l2.y -= a * this.m2, this.l2.z -= o * this.m2, this.a2.x -= e * this.ax2x + a * this.ay2x + o * this.az2x, this.a2.y -= e * this.ax2y + a * this.ay2y + o * this.az2y, this.a2.z -= e * this.ax2z + a * this.ay2z + o * this.az2z } }), Object.assign(N.prototype, { Rotational3Constraint: !0, preSolve: function(t, i) { this.ax1 = this.limitMotor1.axis.x, this.ay1 = this.limitMotor1.axis.y, this.az1 = this.limitMotor1.axis.z, this.ax2 = this.limitMotor2.axis.x, this.ay2 = this.limitMotor2.axis.y, this.az2 = this.limitMotor2.axis.z, this.ax3 = this.limitMotor3.axis.x, this.ay3 = this.limitMotor3.axis.y, this.az3 = this.limitMotor3.axis.z, this.lowerLimit1 = this.limitMotor1.lowerLimit, this.upperLimit1 = this.limitMotor1.upperLimit, this.motorSpeed1 = this.limitMotor1.motorSpeed, this.maxMotorForce1 = this.limitMotor1.maxMotorForce, this.enableMotor1 = this.maxMotorForce1 > 0, this.lowerLimit2 = this.limitMotor2.lowerLimit, this.upperLimit2 = this.limitMotor2.upperLimit, this.motorSpeed2 = this.limitMotor2.motorSpeed, this.maxMotorForce2 = this.limitMotor2.maxMotorForce, this.enableMotor2 = this.maxMotorForce2 > 0, this.lowerLimit3 = this.limitMotor3.lowerLimit, this.upperLimit3 = this.limitMotor3.upperLimit, this.motorSpeed3 = this.limitMotor3.motorSpeed, this.maxMotorForce3 = this.limitMotor3.maxMotorForce, this.enableMotor3 = this.maxMotorForce3 > 0; var s = this.i1.elements, h = this.i2.elements; this.i1e00 = s[0], this.i1e01 = s[1], this.i1e02 = s[2], this.i1e10 = s[3], this.i1e11 = s[4], this.i1e12 = s[5], this.i1e20 = s[6], this.i1e21 = s[7], this.i1e22 = s[8], this.i2e00 = h[0], this.i2e01 = h[1], this.i2e02 = h[2], this.i2e10 = h[3], this.i2e11 = h[4], this.i2e12 = h[5], this.i2e20 = h[6], this.i2e21 = h[7], this.i2e22 = h[8]; var e = this.limitMotor1.frequency, a = this.limitMotor2.frequency, o = this.limitMotor3.frequency, n = e > 0, r = a > 0, l = o > 0, c = this.lowerLimit1 <= this.upperLimit1, m = this.lowerLimit2 <= this.upperLimit2, p = this.lowerLimit3 <= this.upperLimit3, u = this.limitMotor1.angle; c ? (this.lowerLimit1 == this.upperLimit1 ? (0 != this.limitState1 && (this.limitState1 = 0, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - u) : u < this.lowerLimit1 ? (-1 != this.limitState1 && (this.limitState1 = -1, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - u) : u > this.upperLimit1 ? (1 != this.limitState1 && (this.limitState1 = 1, this.limitImpulse1 = 0), this.limitVelocity1 = this.upperLimit1 - u) : (this.limitState1 = 2, this.limitImpulse1 = 0, this.limitVelocity1 = 0), n || (this.limitVelocity1 > .02 ? this.limitVelocity1 -= .02 : this.limitVelocity1 < -.02 ? this.limitVelocity1 += .02 : this.limitVelocity1 = 0)) : (this.limitState1 = 2, this.limitImpulse1 = 0); var y = this.limitMotor2.angle; m ? (this.lowerLimit2 == this.upperLimit2 ? (0 != this.limitState2 && (this.limitState2 = 0, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - y) : y < this.lowerLimit2 ? (-1 != this.limitState2 && (this.limitState2 = -1, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - y) : y > this.upperLimit2 ? (1 != this.limitState2 && (this.limitState2 = 1, this.limitImpulse2 = 0), this.limitVelocity2 = this.upperLimit2 - y) : (this.limitState2 = 2, this.limitImpulse2 = 0, this.limitVelocity2 = 0), r || (this.limitVelocity2 > .02 ? this.limitVelocity2 -= .02 : this.limitVelocity2 < -.02 ? this.limitVelocity2 += .02 : this.limitVelocity2 = 0)) : (this.limitState2 = 2, this.limitImpulse2 = 0); var x = this.limitMotor3.angle; if (p ? (this.lowerLimit3 == this.upperLimit3 ? (0 != this.limitState3 && (this.limitState3 = 0, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - x) : x < this.lowerLimit3 ? (-1 != this.limitState3 && (this.limitState3 = -1, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - x) : x > this.upperLimit3 ? (1 != this.limitState3 && (this.limitState3 = 1, this.limitImpulse3 = 0), this.limitVelocity3 = this.upperLimit3 - x) : (this.limitState3 = 2, this.limitImpulse3 = 0, this.limitVelocity3 = 0), l || (this.limitVelocity3 > .02 ? this.limitVelocity3 -= .02 : this.limitVelocity3 < -.02 ? this.limitVelocity3 += .02 : this.limitVelocity3 = 0)) : (this.limitState3 = 2, this.limitImpulse3 = 0), this.enableMotor1 && (0 != this.limitState1 || n) ? this.maxMotorImpulse1 = this.maxMotorForce1 * t : (this.motorImpulse1 = 0, this.maxMotorImpulse1 = 0), this.enableMotor2 && (0 != this.limitState2 || r) ? this.maxMotorImpulse2 = this.maxMotorForce2 * t : (this.motorImpulse2 = 0, this.maxMotorImpulse2 = 0), this.enableMotor3 && (0 != this.limitState3 || l) ? this.maxMotorImpulse3 = this.maxMotorForce3 * t : (this.motorImpulse3 = 0, this.maxMotorImpulse3 = 0), this.a1x1 = this.ax1 * this.i1e00 + this.ay1 * this.i1e01 + this.az1 * this.i1e02, this.a1y1 = this.ax1 * this.i1e10 + this.ay1 * this.i1e11 + this.az1 * this.i1e12, this.a1z1 = this.ax1 * this.i1e20 + this.ay1 * this.i1e21 + this.az1 * this.i1e22, this.a2x1 = this.ax1 * this.i2e00 + this.ay1 * this.i2e01 + this.az1 * this.i2e02, this.a2y1 = this.ax1 * this.i2e10 + this.ay1 * this.i2e11 + this.az1 * this.i2e12, this.a2z1 = this.ax1 * this.i2e20 + this.ay1 * this.i2e21 + this.az1 * this.i2e22, this.a1x2 = this.ax2 * this.i1e00 + this.ay2 * this.i1e01 + this.az2 * this.i1e02, this.a1y2 = this.ax2 * this.i1e10 + this.ay2 * this.i1e11 + this.az2 * this.i1e12, this.a1z2 = this.ax2 * this.i1e20 + this.ay2 * this.i1e21 + this.az2 * this.i1e22, this.a2x2 = this.ax2 * this.i2e00 + this.ay2 * this.i2e01 + this.az2 * this.i2e02, this.a2y2 = this.ax2 * this.i2e10 + this.ay2 * this.i2e11 + this.az2 * this.i2e12, this.a2z2 = this.ax2 * this.i2e20 + this.ay2 * this.i2e21 + this.az2 * this.i2e22, this.a1x3 = this.ax3 * this.i1e00 + this.ay3 * this.i1e01 + this.az3 * this.i1e02, this.a1y3 = this.ax3 * this.i1e10 + this.ay3 * this.i1e11 + this.az3 * this.i1e12, this.a1z3 = this.ax3 * this.i1e20 + this.ay3 * this.i1e21 + this.az3 * this.i1e22, this.a2x3 = this.ax3 * this.i2e00 + this.ay3 * this.i2e01 + this.az3 * this.i2e02, this.a2y3 = this.ax3 * this.i2e10 + this.ay3 * this.i2e11 + this.az3 * this.i2e12, this.a2z3 = this.ax3 * this.i2e20 + this.ay3 * this.i2e21 + this.az3 * this.i2e22, this.k00 = this.ax1 * (this.a1x1 + this.a2x1) + this.ay1 * (this.a1y1 + this.a2y1) + this.az1 * (this.a1z1 + this.a2z1), this.k01 = this.ax1 * (this.a1x2 + this.a2x2) + this.ay1 * (this.a1y2 + this.a2y2) + this.az1 * (this.a1z2 + this.a2z2), this.k02 = this.ax1 * (this.a1x3 + this.a2x3) + this.ay1 * (this.a1y3 + this.a2y3) + this.az1 * (this.a1z3 + this.a2z3), this.k10 = this.ax2 * (this.a1x1 + this.a2x1) + this.ay2 * (this.a1y1 + this.a2y1) + this.az2 * (this.a1z1 + this.a2z1), this.k11 = this.ax2 * (this.a1x2 + this.a2x2) + this.ay2 * (this.a1y2 + this.a2y2) + this.az2 * (this.a1z2 + this.a2z2), this.k12 = this.ax2 * (this.a1x3 + this.a2x3) + this.ay2 * (this.a1y3 + this.a2y3) + this.az2 * (this.a1z3 + this.a2z3), this.k20 = this.ax3 * (this.a1x1 + this.a2x1) + this.ay3 * (this.a1y1 + this.a2y1) + this.az3 * (this.a1z1 + this.a2z1), this.k21 = this.ax3 * (this.a1x2 + this.a2x2) + this.ay3 * (this.a1y2 + this.a2y2) + this.az3 * (this.a1z2 + this.a2z2), this.k22 = this.ax3 * (this.a1x3 + this.a2x3) + this.ay3 * (this.a1y3 + this.a2y3) + this.az3 * (this.a1z3 + this.a2z3), this.kv00 = this.k00, this.kv11 = this.k11, this.kv22 = this.k22, this.dv00 = 1 / this.kv00, this.dv11 = 1 / this.kv11, this.dv22 = 1 / this.kv22, n && 2 != this.limitState1) { var d = 6.2831853 * e, f = d * d * t, b = i / (f + 2 * this.limitMotor1.dampingRatio * d); this.cfm1 = this.kv00 * b, this.limitVelocity1 *= f * b } else this.cfm1 = 0, this.limitVelocity1 *= .05 * i; r && 2 != this.limitState2 ? (b = i / ((f = (d = 6.2831853 * a) * d * t) + 2 * this.limitMotor2.dampingRatio * d), this.cfm2 = this.kv11 * b, this.limitVelocity2 *= f * b) : (this.cfm2 = 0, this.limitVelocity2 *= .05 * i), l && 2 != this.limitState3 ? (b = i / ((f = (d = 6.2831853 * o) * d * t) + 2 * this.limitMotor3.dampingRatio * d), this.cfm3 = this.kv22 * b, this.limitVelocity3 *= f * b) : (this.cfm3 = 0, this.limitVelocity3 *= .05 * i), this.k00 += this.cfm1, this.k11 += this.cfm2, this.k22 += this.cfm3; var v = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02)); this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * v, this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * v, this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * v, this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * v, this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * v, this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * v, this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * v, this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * v, this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * v, this.limitImpulse1 *= .95, this.motorImpulse1 *= .95, this.limitImpulse2 *= .95, this.motorImpulse2 *= .95, this.limitImpulse3 *= .95, this.motorImpulse3 *= .95; var z = this.limitImpulse1 + this.motorImpulse1, N = this.limitImpulse2 + this.motorImpulse2, k = this.limitImpulse3 + this.motorImpulse3; this.a1.x += z * this.a1x1 + N * this.a1x2 + k * this.a1x3, this.a1.y += z * this.a1y1 + N * this.a1y2 + k * this.a1y3, this.a1.z += z * this.a1z1 + N * this.a1z2 + k * this.a1z3, this.a2.x -= z * this.a2x1 + N * this.a2x2 + k * this.a2x3, this.a2.y -= z * this.a2y1 + N * this.a2y2 + k * this.a2y3, this.a2.z -= z * this.a2z1 + N * this.a2z2 + k * this.a2z3 }, solve_: function() { var t = this.a2.x - this.a1.x, i = this.a2.y - this.a1.y, s = this.a2.z - this.a1.z; this.limitVelocity3 = 30; var h = t * this.ax1 + i * this.ay1 + s * this.az1 - this.limitVelocity1, e = t * this.ax2 + i * this.ay2 + s * this.az2 - this.limitVelocity2, a = t * this.ax3 + i * this.ay3 + s * this.az3 - this.limitVelocity3, o = h * this.d00 + e * this.d01 + a * this.d02, n = h * this.d10 + e * this.d11 + a * this.d12, r = h * this.d20 + e * this.d21 + a * this.d22; this.limitImpulse1 += o, this.limitImpulse2 += n, this.limitImpulse3 += r, this.a1.x += o * this.a1x1 + n * this.a1x2 + r * this.a1x3, this.a1.y += o * this.a1y1 + n * this.a1y2 + r * this.a1y3, this.a1.z += o * this.a1z1 + n * this.a1z2 + r * this.a1z3, this.a2.x -= o * this.a2x1 + n * this.a2x2 + r * this.a2x3, this.a2.y -= o * this.a2y1 + n * this.a2y2 + r * this.a2y3, this.a2.z -= o * this.a2z1 + n * this.a2z2 + r * this.a2z3 }, solve: function() { var t = this.a2.x - this.a1.x, i = this.a2.y - this.a1.y, s = this.a2.z - this.a1.z, h = t * this.ax1 + i * this.ay1 + s * this.az1, e = t * this.ax2 + i * this.ay2 + s * this.az2, a = t * this.ax3 + i * this.ay3 + s * this.az3, o = this.motorImpulse1, n = this.motorImpulse2, r = this.motorImpulse3, l = 0, c = 0, m = 0; this.enableMotor1 && (l = (h - this.motorSpeed1) * this.dv00, this.motorImpulse1 += l, this.motorImpulse1 > this.maxMotorImpulse1 ? this.motorImpulse1 = this.maxMotorImpulse1 : this.motorImpulse1 < -this.maxMotorImpulse1 && (this.motorImpulse1 = -this.maxMotorImpulse1), l = this.motorImpulse1 - o), this.enableMotor2 && (c = (e - this.motorSpeed2) * this.dv11, this.motorImpulse2 += c, this.motorImpulse2 > this.maxMotorImpulse2 ? this.motorImpulse2 = this.maxMotorImpulse2 : this.motorImpulse2 < -this.maxMotorImpulse2 && (this.motorImpulse2 = -this.maxMotorImpulse2), c = this.motorImpulse2 - n), this.enableMotor3 && (m = (a - this.motorSpeed3) * this.dv22, this.motorImpulse3 += m, this.motorImpulse3 > this.maxMotorImpulse3 ? this.motorImpulse3 = this.maxMotorImpulse3 : this.motorImpulse3 < -this.maxMotorImpulse3 && (this.motorImpulse3 = -this.maxMotorImpulse3), m = this.motorImpulse3 - r), h += l * this.kv00 + c * this.k01 + m * this.k02, e += l * this.k10 + c * this.kv11 + m * this.k12, a += l * this.k20 + c * this.k21 + m * this.kv22, h -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1, e -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2, a -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3; var p = this.limitImpulse1, u = this.limitImpulse2, y = this.limitImpulse3, x = h * this.d00 + e * this.d01 + a * this.d02, d = h * this.d10 + e * this.d11 + a * this.d12, f = h * this.d20 + e * this.d21 + a * this.d22; this.limitImpulse1 += x, this.limitImpulse2 += d, this.limitImpulse3 += f; var b = 0; (2 == this.limitState1 || this.limitImpulse1 * this.limitState1 < 0) && (e += (x = -p) * this.k10, a += x * this.k20, b |= 1), (2 == this.limitState2 || this.limitImpulse2 * this.limitState2 < 0) && (h += (d = -u) * this.k01, a += d * this.k21, b |= 2), (2 == this.limitState3 || this.limitImpulse3 * this.limitState3 < 0) && (h += (f = -y) * this.k02, e += f * this.k12, b |= 4); var v; switch (b) { case 1: v = 1 / (this.k11 * this.k22 - this.k12 * this.k21), d = (this.k22 * e + -this.k12 * a) * v, f = (-this.k21 * e + this.k11 * a) * v; break; case 2: v = 1 / (this.k00 * this.k22 - this.k02 * this.k20), x = (this.k22 * h + -this.k02 * a) * v, f = (-this.k20 * h + this.k00 * a) * v; break; case 3: f = a / this.k22; break; case 4: v = 1 / (this.k00 * this.k11 - this.k01 * this.k10), x = (this.k11 * h + -this.k01 * e) * v, d = (-this.k10 * h + this.k00 * e) * v; break; case 5: d = e / this.k11; break; case 6: x = h / this.k00 }this.limitImpulse1 = x + p, this.limitImpulse2 = d + u, this.limitImpulse3 = f + y; var z = l + x, N = c + d, k = m + f; this.a1.x += z * this.a1x1 + N * this.a1x2 + k * this.a1x3, this.a1.y += z * this.a1y1 + N * this.a1y2 + k * this.a1y3, this.a1.z += z * this.a1z1 + N * this.a1z2 + k * this.a1z3, this.a2.x -= z * this.a2x1 + N * this.a2x2 + k * this.a2x3, this.a2.y -= z * this.a2y1 + N * this.a2y2 + k * this.a2y3, this.a2.z -= z * this.a2z1 + N * this.a2z2 + k * this.a2z3, t = this.a2.x - this.a1.x, i = this.a2.y - this.a1.y, s = this.a2.z - this.a1.z, e = t * this.ax2 + i * this.ay2 + s * this.az2 } }), k.prototype = Object.assign(Object.create(v.prototype), { constructor: k, preSolve: function(t, i) { this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, !0), this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, !0), this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize(), this.tan.tangent(this.nor).normalize(), this.bin.crossVectors(this.nor, this.tan); var s = Pt.acosClamp(Pt.dotVectors(this.an1, this.an2)); this.tmp.crossVectors(this.an1, this.an2), Pt.dotVectors(this.nor, this.tmp) < 0 ? this.limitMotor.angle = -s : this.limitMotor.angle = s, this.tmp.crossVectors(this.ax1, this.ax2), this.r3.limitMotor2.angle = Pt.dotVectors(this.tan, this.tmp), this.r3.limitMotor3.angle = Pt.dotVectors(this.bin, this.tmp), this.r3.preSolve(t, i), this.lc.preSolve(t, i) }, solve: function() { this.r3.solve(), this.lc.solve() }, postSolve: function() { } }), w.prototype = Object.assign(Object.create(v.prototype), { constructor: w, preSolve: function(t, i) { this.updateAnchorPoints(), this.lc.preSolve(t, i) }, solve: function() { this.lc.solve() }, postSolve: function() { } }), Object.assign(M.prototype, { TranslationalConstraint: !0, preSolve: function(t, i) { this.ax = this.limitMotor.axis.x, this.ay = this.limitMotor.axis.y, this.az = this.limitMotor.axis.z, this.lowerLimit = this.limitMotor.lowerLimit, this.upperLimit = this.limitMotor.upperLimit, this.motorSpeed = this.limitMotor.motorSpeed, this.maxMotorForce = this.limitMotor.maxMotorForce, this.enableMotor = this.maxMotorForce > 0, this.m1 = this.b1.inverseMass, this.m2 = this.b2.inverseMass; var s = this.i1.elements, h = this.i2.elements; this.i1e00 = s[0], this.i1e01 = s[1], this.i1e02 = s[2], this.i1e10 = s[3], this.i1e11 = s[4], this.i1e12 = s[5], this.i1e20 = s[6], this.i1e21 = s[7], this.i1e22 = s[8], this.i2e00 = h[0], this.i2e01 = h[1], this.i2e02 = h[2], this.i2e10 = h[3], this.i2e11 = h[4], this.i2e12 = h[5], this.i2e20 = h[6], this.i2e21 = h[7], this.i2e22 = h[8]; var e = this.p2.x - this.p1.x, a = this.p2.y - this.p1.y, o = this.p2.z - this.p1.z, n = e * this.ax + a * this.ay + o * this.az, r = this.limitMotor.frequency, l = r > 0, c = this.lowerLimit <= this.upperLimit; (l && n > 20 || n < -20) && (l = !1), c ? (this.lowerLimit == this.upperLimit ? (0 != this.limitState && (this.limitState = 0, this.limitImpulse = 0), this.limitVelocity = this.lowerLimit - n, l || (n = this.lowerLimit)) : n < this.lowerLimit ? (-1 != this.limitState && (this.limitState = -1, this.limitImpulse = 0), this.limitVelocity = this.lowerLimit - n, l || (n = this.lowerLimit)) : n > this.upperLimit ? (1 != this.limitState && (this.limitState = 1, this.limitImpulse = 0), this.limitVelocity = this.upperLimit - n, l || (n = this.upperLimit)) : (this.limitState = 2, this.limitImpulse = 0, this.limitVelocity = 0), l || (this.limitVelocity > .005 ? this.limitVelocity -= .005 : this.limitVelocity < -.005 ? this.limitVelocity += .005 : this.limitVelocity = 0)) : (this.limitState = 2, this.limitImpulse = 0), this.enableMotor && (0 != this.limitState || l) ? this.maxMotorImpulse = this.maxMotorForce * t : (this.motorImpulse = 0, this.maxMotorImpulse = 0); var m = n * this.ax, p = n * this.ay, u = n * this.az, y = this.m1 / (this.m1 + this.m2), x = 1 - y; if (this.r1x = this.r1.x + m * y, this.r1y = this.r1.y + p * y, this.r1z = this.r1.z + u * y, this.r2x = this.r2.x - m * x, this.r2y = this.r2.y - p * x, this.r2z = this.r2.z - u * x, this.t1x = this.r1y * this.az - this.r1z * this.ay, this.t1y = this.r1z * this.ax - this.r1x * this.az, this.t1z = this.r1x * this.ay - this.r1y * this.ax, this.t2x = this.r2y * this.az - this.r2z * this.ay, this.t2y = this.r2z * this.ax - this.r2x * this.az, this.t2z = this.r2x * this.ay - this.r2y * this.ax, this.l1x = this.ax * this.m1, this.l1y = this.ay * this.m1, this.l1z = this.az * this.m1, this.l2x = this.ax * this.m2, this.l2y = this.ay * this.m2, this.l2z = this.az * this.m2, this.a1x = this.t1x * this.i1e00 + this.t1y * this.i1e01 + this.t1z * this.i1e02, this.a1y = this.t1x * this.i1e10 + this.t1y * this.i1e11 + this.t1z * this.i1e12, this.a1z = this.t1x * this.i1e20 + this.t1y * this.i1e21 + this.t1z * this.i1e22, this.a2x = this.t2x * this.i2e00 + this.t2y * this.i2e01 + this.t2z * this.i2e02, this.a2y = this.t2x * this.i2e10 + this.t2y * this.i2e11 + this.t2z * this.i2e12, this.a2z = this.t2x * this.i2e20 + this.t2y * this.i2e21 + this.t2z * this.i2e22, this.motorDenom = this.m1 + this.m2 + this.ax * (this.a1y * this.r1z - this.a1z * this.r1y + this.a2y * this.r2z - this.a2z * this.r2y) + this.ay * (this.a1z * this.r1x - this.a1x * this.r1z + this.a2z * this.r2x - this.a2x * this.r2z) + this.az * (this.a1x * this.r1y - this.a1y * this.r1x + this.a2x * this.r2y - this.a2y * this.r2x), this.invMotorDenom = 1 / this.motorDenom, l && 2 != this.limitState) { var d = 6.2831853 * r, f = d * d * t, b = i / (f + 2 * this.limitMotor.dampingRatio * d); this.cfm = this.motorDenom * b, this.limitVelocity *= f * b } else this.cfm = 0, this.limitVelocity *= .05 * i; this.invDenom = 1 / (this.motorDenom + this.cfm); var v = this.limitImpulse + this.motorImpulse; this.l1.x += v * this.l1x, this.l1.y += v * this.l1y, this.l1.z += v * this.l1z, this.a1.x += v * this.a1x, this.a1.y += v * this.a1y, this.a1.z += v * this.a1z, this.l2.x -= v * this.l2x, this.l2.y -= v * this.l2y, this.l2.z -= v * this.l2z, this.a2.x -= v * this.a2x, this.a2.y -= v * this.a2y, this.a2.z -= v * this.a2z }, solve: function() { var t, i = this.ax * (this.l2.x - this.l1.x) + this.ay * (this.l2.y - this.l1.y) + this.az * (this.l2.z - this.l1.z) + this.t2x * this.a2.x - this.t1x * this.a1.x + this.t2y * this.a2.y - this.t1y * this.a1.y + this.t2z * this.a2.z - this.t1z * this.a1.z; if (this.enableMotor) { t = (i - this.motorSpeed) * this.invMotorDenom; var s = this.motorImpulse; this.motorImpulse += t, this.motorImpulse > this.maxMotorImpulse ? this.motorImpulse = this.maxMotorImpulse : this.motorImpulse < -this.maxMotorImpulse && (this.motorImpulse = -this.maxMotorImpulse), i -= (t = this.motorImpulse - s) * this.motorDenom } else t = 0; var h; if (2 != this.limitState) { h = (i - this.limitVelocity - this.limitImpulse * this.cfm) * this.invDenom; var e = this.limitImpulse; this.limitImpulse += h, this.limitImpulse * this.limitState < 0 && (this.limitImpulse = 0), h = this.limitImpulse - e } else h = 0; var a = h + t; this.l1.x += a * this.l1x, this.l1.y += a * this.l1y, this.l1.z += a * this.l1z, this.a1.x += a * this.a1x, this.a1.y += a * this.a1y, this.a1.z += a * this.a1z, this.l2.x -= a * this.l2x, this.l2.y -= a * this.l2y, this.l2.z -= a * this.l2z, this.a2.x -= a * this.a2x, this.a2.y -= a * this.a2y, this.a2.z -= a * this.a2z } }), g.prototype = Object.assign(Object.create(v.prototype), { constructor: g, preSolve: function(t, i) { this.updateAnchorPoints(), this.nor.sub(this.anchorPoint2, this.anchorPoint1).normalize(), this.t.preSolve(t, i) }, solve: function() { this.t.solve() }, postSolve: function() { } }), Object.assign(I.prototype, { AngularConstraint: !0, preSolve: function(t, i) { var s, h, e; this.ii1 = this.i1.clone(), this.ii2 = this.i2.clone(), s = 1 / ((e = (new o).add(this.ii1, this.ii2).elements)[0] * (e[4] * e[8] - e[7] * e[5]) + e[3] * (e[7] * e[2] - e[1] * e[8]) + e[6] * (e[1] * e[5] - e[4] * e[2])), this.dd = (new o).set(e[4] * e[8] - e[5] * e[7], e[2] * e[7] - e[1] * e[8], e[1] * e[5] - e[2] * e[4], e[5] * e[6] - e[3] * e[8], e[0] * e[8] - e[2] * e[6], e[2] * e[3] - e[0] * e[5], e[3] * e[7] - e[4] * e[6], e[1] * e[6] - e[0] * e[7], e[0] * e[4] - e[1] * e[3]).multiplyScalar(s), this.relativeOrientation.invert(this.b1.orientation).multiply(this.targetOrientation).multiply(this.b2.orientation), s = 2 * this.relativeOrientation.w, this.vel.copy(this.relativeOrientation).multiplyScalar(s), (h = this.vel.length()) > .02 ? (h = (.02 - h) / h * i * .05, this.vel.multiplyScalar(h)) : this.vel.set(0, 0, 0), this.rn1.copy(this.imp).applyMatrix3(this.ii1, !0), this.rn2.copy(this.imp).applyMatrix3(this.ii2, !0), this.a1.add(this.rn1), this.a2.sub(this.rn2) }, solve: function() { var t = this.a2.clone().sub(this.a1).sub(this.vel); this.rn0.copy(t).applyMatrix3(this.dd, !0), this.rn1.copy(this.rn0).applyMatrix3(this.ii1, !0), this.rn2.copy(this.rn0).applyMatrix3(this.ii2, !0), this.imp.add(this.rn0), this.a1.add(this.rn1), this.a2.sub(this.rn2) } }), Object.assign(V.prototype, { Translational3Constraint: !0, preSolve: function(t, i) { this.ax1 = this.limitMotor1.axis.x, this.ay1 = this.limitMotor1.axis.y, this.az1 = this.limitMotor1.axis.z, this.ax2 = this.limitMotor2.axis.x, this.ay2 = this.limitMotor2.axis.y, this.az2 = this.limitMotor2.axis.z, this.ax3 = this.limitMotor3.axis.x, this.ay3 = this.limitMotor3.axis.y, this.az3 = this.limitMotor3.axis.z, this.lowerLimit1 = this.limitMotor1.lowerLimit, this.upperLimit1 = this.limitMotor1.upperLimit, this.motorSpeed1 = this.limitMotor1.motorSpeed, this.maxMotorForce1 = this.limitMotor1.maxMotorForce, this.enableMotor1 = this.maxMotorForce1 > 0, this.lowerLimit2 = this.limitMotor2.lowerLimit, this.upperLimit2 = this.limitMotor2.upperLimit, this.motorSpeed2 = this.limitMotor2.motorSpeed, this.maxMotorForce2 = this.limitMotor2.maxMotorForce, this.enableMotor2 = this.maxMotorForce2 > 0, this.lowerLimit3 = this.limitMotor3.lowerLimit, this.upperLimit3 = this.limitMotor3.upperLimit, this.motorSpeed3 = this.limitMotor3.motorSpeed, this.maxMotorForce3 = this.limitMotor3.maxMotorForce, this.enableMotor3 = this.maxMotorForce3 > 0, this.m1 = this.b1.inverseMass, this.m2 = this.b2.inverseMass; var s = this.i1.elements, h = this.i2.elements; this.i1e00 = s[0], this.i1e01 = s[1], this.i1e02 = s[2], this.i1e10 = s[3], this.i1e11 = s[4], this.i1e12 = s[5], this.i1e20 = s[6], this.i1e21 = s[7], this.i1e22 = s[8], this.i2e00 = h[0], this.i2e01 = h[1], this.i2e02 = h[2], this.i2e10 = h[3], this.i2e11 = h[4], this.i2e12 = h[5], this.i2e20 = h[6], this.i2e21 = h[7], this.i2e22 = h[8]; var e = this.p2.x - this.p1.x, a = this.p2.y - this.p1.y, o = this.p2.z - this.p1.z, n = e * this.ax1 + a * this.ay1 + o * this.az1, r = e * this.ax2 + a * this.ay2 + o * this.az2, l = e * this.ax3 + a * this.ay3 + o * this.az3, c = this.limitMotor1.frequency, m = this.limitMotor2.frequency, p = this.limitMotor3.frequency, u = c > 0, y = m > 0, x = p > 0, d = this.lowerLimit1 <= this.upperLimit1, f = this.lowerLimit2 <= this.upperLimit2, b = this.lowerLimit3 <= this.upperLimit3; (u && n > 20 || n < -20) && (u = !1), (y && r > 20 || r < -20) && (y = !1), (x && l > 20 || l < -20) && (x = !1), d ? (this.lowerLimit1 == this.upperLimit1 ? (0 != this.limitState1 && (this.limitState1 = 0, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - n, u || (n = this.lowerLimit1)) : n < this.lowerLimit1 ? (-1 != this.limitState1 && (this.limitState1 = -1, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - n, u || (n = this.lowerLimit1)) : n > this.upperLimit1 ? (1 != this.limitState1 && (this.limitState1 = 1, this.limitImpulse1 = 0), this.limitVelocity1 = this.upperLimit1 - n, u || (n = this.upperLimit1)) : (this.limitState1 = 2, this.limitImpulse1 = 0, this.limitVelocity1 = 0), u || (this.limitVelocity1 > .005 ? this.limitVelocity1 -= .005 : this.limitVelocity1 < -.005 ? this.limitVelocity1 += .005 : this.limitVelocity1 = 0)) : (this.limitState1 = 2, this.limitImpulse1 = 0), f ? (this.lowerLimit2 == this.upperLimit2 ? (0 != this.limitState2 && (this.limitState2 = 0, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - r, y || (r = this.lowerLimit2)) : r < this.lowerLimit2 ? (-1 != this.limitState2 && (this.limitState2 = -1, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - r, y || (r = this.lowerLimit2)) : r > this.upperLimit2 ? (1 != this.limitState2 && (this.limitState2 = 1, this.limitImpulse2 = 0), this.limitVelocity2 = this.upperLimit2 - r, y || (r = this.upperLimit2)) : (this.limitState2 = 2, this.limitImpulse2 = 0, this.limitVelocity2 = 0), y || (this.limitVelocity2 > .005 ? this.limitVelocity2 -= .005 : this.limitVelocity2 < -.005 ? this.limitVelocity2 += .005 : this.limitVelocity2 = 0)) : (this.limitState2 = 2, this.limitImpulse2 = 0), b ? (this.lowerLimit3 == this.upperLimit3 ? (0 != this.limitState3 && (this.limitState3 = 0, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - l, x || (l = this.lowerLimit3)) : l < this.lowerLimit3 ? (-1 != this.limitState3 && (this.limitState3 = -1, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - l, x || (l = this.lowerLimit3)) : l > this.upperLimit3 ? (1 != this.limitState3 && (this.limitState3 = 1, this.limitImpulse3 = 0), this.limitVelocity3 = this.upperLimit3 - l, x || (l = this.upperLimit3)) : (this.limitState3 = 2, this.limitImpulse3 = 0, this.limitVelocity3 = 0), x || (this.limitVelocity3 > .005 ? this.limitVelocity3 -= .005 : this.limitVelocity3 < -.005 ? this.limitVelocity3 += .005 : this.limitVelocity3 = 0)) : (this.limitState3 = 2, this.limitImpulse3 = 0), this.enableMotor1 && (0 != this.limitState1 || u) ? this.maxMotorImpulse1 = this.maxMotorForce1 * t : (this.motorImpulse1 = 0, this.maxMotorImpulse1 = 0), this.enableMotor2 && (0 != this.limitState2 || y) ? this.maxMotorImpulse2 = this.maxMotorForce2 * t : (this.motorImpulse2 = 0, this.maxMotorImpulse2 = 0), this.enableMotor3 && (0 != this.limitState3 || x) ? this.maxMotorImpulse3 = this.maxMotorForce3 * t : (this.motorImpulse3 = 0, this.maxMotorImpulse3 = 0); var v = n * this.ax1 + r * this.ax2 + l * this.ax2, z = n * this.ay1 + r * this.ay2 + l * this.ay2, N = n * this.az1 + r * this.az2 + l * this.az2, k = this.m2 / (this.m1 + this.m2); this.weight >= 0 && (k = this.weight); var w = 1 - k; this.r1x = this.r1.x + v * k, this.r1y = this.r1.y + z * k, this.r1z = this.r1.z + N * k, this.r2x = this.r2.x - v * w, this.r2y = this.r2.y - z * w, this.r2z = this.r2.z - N * w, this.t1x1 = this.r1y * this.az1 - this.r1z * this.ay1, this.t1y1 = this.r1z * this.ax1 - this.r1x * this.az1, this.t1z1 = this.r1x * this.ay1 - this.r1y * this.ax1, this.t2x1 = this.r2y * this.az1 - this.r2z * this.ay1, this.t2y1 = this.r2z * this.ax1 - this.r2x * this.az1, this.t2z1 = this.r2x * this.ay1 - this.r2y * this.ax1, this.l1x1 = this.ax1 * this.m1, this.l1y1 = this.ay1 * this.m1, this.l1z1 = this.az1 * this.m1, this.l2x1 = this.ax1 * this.m2, this.l2y1 = this.ay1 * this.m2, this.l2z1 = this.az1 * this.m2, this.a1x1 = this.t1x1 * this.i1e00 + this.t1y1 * this.i1e01 + this.t1z1 * this.i1e02, this.a1y1 = this.t1x1 * this.i1e10 + this.t1y1 * this.i1e11 + this.t1z1 * this.i1e12, this.a1z1 = this.t1x1 * this.i1e20 + this.t1y1 * this.i1e21 + this.t1z1 * this.i1e22, this.a2x1 = this.t2x1 * this.i2e00 + this.t2y1 * this.i2e01 + this.t2z1 * this.i2e02, this.a2y1 = this.t2x1 * this.i2e10 + this.t2y1 * this.i2e11 + this.t2z1 * this.i2e12, this.a2z1 = this.t2x1 * this.i2e20 + this.t2y1 * this.i2e21 + this.t2z1 * this.i2e22, this.t1x2 = this.r1y * this.az2 - this.r1z * this.ay2, this.t1y2 = this.r1z * this.ax2 - this.r1x * this.az2, this.t1z2 = this.r1x * this.ay2 - this.r1y * this.ax2, this.t2x2 = this.r2y * this.az2 - this.r2z * this.ay2, this.t2y2 = this.r2z * this.ax2 - this.r2x * this.az2, this.t2z2 = this.r2x * this.ay2 - this.r2y * this.ax2, this.l1x2 = this.ax2 * this.m1, this.l1y2 = this.ay2 * this.m1, this.l1z2 = this.az2 * this.m1, this.l2x2 = this.ax2 * this.m2, this.l2y2 = this.ay2 * this.m2, this.l2z2 = this.az2 * this.m2, this.a1x2 = this.t1x2 * this.i1e00 + this.t1y2 * this.i1e01 + this.t1z2 * this.i1e02, this.a1y2 = this.t1x2 * this.i1e10 + this.t1y2 * this.i1e11 + this.t1z2 * this.i1e12, this.a1z2 = this.t1x2 * this.i1e20 + this.t1y2 * this.i1e21 + this.t1z2 * this.i1e22, this.a2x2 = this.t2x2 * this.i2e00 + this.t2y2 * this.i2e01 + this.t2z2 * this.i2e02, this.a2y2 = this.t2x2 * this.i2e10 + this.t2y2 * this.i2e11 + this.t2z2 * this.i2e12, this.a2z2 = this.t2x2 * this.i2e20 + this.t2y2 * this.i2e21 + this.t2z2 * this.i2e22, this.t1x3 = this.r1y * this.az3 - this.r1z * this.ay3, this.t1y3 = this.r1z * this.ax3 - this.r1x * this.az3, this.t1z3 = this.r1x * this.ay3 - this.r1y * this.ax3, this.t2x3 = this.r2y * this.az3 - this.r2z * this.ay3, this.t2y3 = this.r2z * this.ax3 - this.r2x * this.az3, this.t2z3 = this.r2x * this.ay3 - this.r2y * this.ax3, this.l1x3 = this.ax3 * this.m1, this.l1y3 = this.ay3 * this.m1, this.l1z3 = this.az3 * this.m1, this.l2x3 = this.ax3 * this.m2, this.l2y3 = this.ay3 * this.m2, this.l2z3 = this.az3 * this.m2, this.a1x3 = this.t1x3 * this.i1e00 + this.t1y3 * this.i1e01 + this.t1z3 * this.i1e02, this.a1y3 = this.t1x3 * this.i1e10 + this.t1y3 * this.i1e11 + this.t1z3 * this.i1e12, this.a1z3 = this.t1x3 * this.i1e20 + this.t1y3 * this.i1e21 + this.t1z3 * this.i1e22, this.a2x3 = this.t2x3 * this.i2e00 + this.t2y3 * this.i2e01 + this.t2z3 * this.i2e02, this.a2y3 = this.t2x3 * this.i2e10 + this.t2y3 * this.i2e11 + this.t2z3 * this.i2e12, this.a2z3 = this.t2x3 * this.i2e20 + this.t2y3 * this.i2e21 + this.t2z3 * this.i2e22; var M = this.m1 + this.m2; if (this.k00 = (this.ax1 * this.ax1 + this.ay1 * this.ay1 + this.az1 * this.az1) * M, this.k01 = (this.ax1 * this.ax2 + this.ay1 * this.ay2 + this.az1 * this.az2) * M, this.k02 = (this.ax1 * this.ax3 + this.ay1 * this.ay3 + this.az1 * this.az3) * M, this.k10 = (this.ax2 * this.ax1 + this.ay2 * this.ay1 + this.az2 * this.az1) * M, this.k11 = (this.ax2 * this.ax2 + this.ay2 * this.ay2 + this.az2 * this.az2) * M, this.k12 = (this.ax2 * this.ax3 + this.ay2 * this.ay3 + this.az2 * this.az3) * M, this.k20 = (this.ax3 * this.ax1 + this.ay3 * this.ay1 + this.az3 * this.az1) * M, this.k21 = (this.ax3 * this.ax2 + this.ay3 * this.ay2 + this.az3 * this.az2) * M, this.k22 = (this.ax3 * this.ax3 + this.ay3 * this.ay3 + this.az3 * this.az3) * M, this.k00 += this.t1x1 * this.a1x1 + this.t1y1 * this.a1y1 + this.t1z1 * this.a1z1, this.k01 += this.t1x1 * this.a1x2 + this.t1y1 * this.a1y2 + this.t1z1 * this.a1z2, this.k02 += this.t1x1 * this.a1x3 + this.t1y1 * this.a1y3 + this.t1z1 * this.a1z3, this.k10 += this.t1x2 * this.a1x1 + this.t1y2 * this.a1y1 + this.t1z2 * this.a1z1, this.k11 += this.t1x2 * this.a1x2 + this.t1y2 * this.a1y2 + this.t1z2 * this.a1z2, this.k12 += this.t1x2 * this.a1x3 + this.t1y2 * this.a1y3 + this.t1z2 * this.a1z3, this.k20 += this.t1x3 * this.a1x1 + this.t1y3 * this.a1y1 + this.t1z3 * this.a1z1, this.k21 += this.t1x3 * this.a1x2 + this.t1y3 * this.a1y2 + this.t1z3 * this.a1z2, this.k22 += this.t1x3 * this.a1x3 + this.t1y3 * this.a1y3 + this.t1z3 * this.a1z3, this.k00 += this.t2x1 * this.a2x1 + this.t2y1 * this.a2y1 + this.t2z1 * this.a2z1, this.k01 += this.t2x1 * this.a2x2 + this.t2y1 * this.a2y2 + this.t2z1 * this.a2z2, this.k02 += this.t2x1 * this.a2x3 + this.t2y1 * this.a2y3 + this.t2z1 * this.a2z3, this.k10 += this.t2x2 * this.a2x1 + this.t2y2 * this.a2y1 + this.t2z2 * this.a2z1, this.k11 += this.t2x2 * this.a2x2 + this.t2y2 * this.a2y2 + this.t2z2 * this.a2z2, this.k12 += this.t2x2 * this.a2x3 + this.t2y2 * this.a2y3 + this.t2z2 * this.a2z3, this.k20 += this.t2x3 * this.a2x1 + this.t2y3 * this.a2y1 + this.t2z3 * this.a2z1, this.k21 += this.t2x3 * this.a2x2 + this.t2y3 * this.a2y2 + this.t2z3 * this.a2z2, this.k22 += this.t2x3 * this.a2x3 + this.t2y3 * this.a2y3 + this.t2z3 * this.a2z3, this.kv00 = this.k00, this.kv11 = this.k11, this.kv22 = this.k22, this.dv00 = 1 / this.kv00, this.dv11 = 1 / this.kv11, this.dv22 = 1 / this.kv22, u && 2 != this.limitState1) { var g = 6.2831853 * c, I = g * g * t, V = i / (I + 2 * this.limitMotor1.dampingRatio * g); this.cfm1 = this.kv00 * V, this.limitVelocity1 *= I * V } else this.cfm1 = 0, this.limitVelocity1 *= .05 * i; y && 2 != this.limitState2 ? (V = i / ((I = (g = 6.2831853 * m) * g * t) + 2 * this.limitMotor2.dampingRatio * g), this.cfm2 = this.kv11 * V, this.limitVelocity2 *= I * V) : (this.cfm2 = 0, this.limitVelocity2 *= .05 * i), x && 2 != this.limitState3 ? (V = i / ((I = (g = 6.2831853 * p) * g * t) + 2 * this.limitMotor3.dampingRatio * g), this.cfm3 = this.kv22 * V, this.limitVelocity3 *= I * V) : (this.cfm3 = 0, this.limitVelocity3 *= .05 * i), this.k00 += this.cfm1, this.k11 += this.cfm2, this.k22 += this.cfm3; var L = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02)); this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * L, this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * L, this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * L, this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * L, this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * L, this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * L, this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * L, this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * L, this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * L; var S = this.limitImpulse1 + this.motorImpulse1, P = this.limitImpulse2 + this.motorImpulse2, T = this.limitImpulse3 + this.motorImpulse3; this.l1.x += S * this.l1x1 + P * this.l1x2 + T * this.l1x3, this.l1.y += S * this.l1y1 + P * this.l1y2 + T * this.l1y3, this.l1.z += S * this.l1z1 + P * this.l1z2 + T * this.l1z3, this.a1.x += S * this.a1x1 + P * this.a1x2 + T * this.a1x3, this.a1.y += S * this.a1y1 + P * this.a1y2 + T * this.a1y3, this.a1.z += S * this.a1z1 + P * this.a1z2 + T * this.a1z3, this.l2.x -= S * this.l2x1 + P * this.l2x2 + T * this.l2x3, this.l2.y -= S * this.l2y1 + P * this.l2y2 + T * this.l2y3, this.l2.z -= S * this.l2z1 + P * this.l2z2 + T * this.l2z3, this.a2.x -= S * this.a2x1 + P * this.a2x2 + T * this.a2x3, this.a2.y -= S * this.a2y1 + P * this.a2y2 + T * this.a2y3, this.a2.z -= S * this.a2z1 + P * this.a2z2 + T * this.a2z3 }, solve: function() { var t = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y, i = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z, s = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x, h = t * this.ax1 + i * this.ay1 + s * this.az1, e = t * this.ax2 + i * this.ay2 + s * this.az2, a = t * this.ax3 + i * this.ay3 + s * this.az3, o = this.motorImpulse1, n = this.motorImpulse2, r = this.motorImpulse3, l = 0, c = 0, m = 0; this.enableMotor1 && (l = (h - this.motorSpeed1) * this.dv00, this.motorImpulse1 += l, this.motorImpulse1 > this.maxMotorImpulse1 ? this.motorImpulse1 = this.maxMotorImpulse1 : this.motorImpulse1 < -this.maxMotorImpulse1 && (this.motorImpulse1 = -this.maxMotorImpulse1), l = this.motorImpulse1 - o), this.enableMotor2 && (c = (e - this.motorSpeed2) * this.dv11, this.motorImpulse2 += c, this.motorImpulse2 > this.maxMotorImpulse2 ? this.motorImpulse2 = this.maxMotorImpulse2 : this.motorImpulse2 < -this.maxMotorImpulse2 && (this.motorImpulse2 = -this.maxMotorImpulse2), c = this.motorImpulse2 - n), this.enableMotor3 && (m = (a - this.motorSpeed3) * this.dv22, this.motorImpulse3 += m, this.motorImpulse3 > this.maxMotorImpulse3 ? this.motorImpulse3 = this.maxMotorImpulse3 : this.motorImpulse3 < -this.maxMotorImpulse3 && (this.motorImpulse3 = -this.maxMotorImpulse3), m = this.motorImpulse3 - r), h += l * this.kv00 + c * this.k01 + m * this.k02, e += l * this.k10 + c * this.kv11 + m * this.k12, a += l * this.k20 + c * this.k21 + m * this.kv22, h -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1, e -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2, a -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3; var p = this.limitImpulse1, u = this.limitImpulse2, y = this.limitImpulse3, x = h * this.d00 + e * this.d01 + a * this.d02, d = h * this.d10 + e * this.d11 + a * this.d12, f = h * this.d20 + e * this.d21 + a * this.d22; this.limitImpulse1 += x, this.limitImpulse2 += d, this.limitImpulse3 += f; var b = 0; (2 == this.limitState1 || this.limitImpulse1 * this.limitState1 < 0) && (e += (x = -p) * this.k10, a += x * this.k20, b |= 1), (2 == this.limitState2 || this.limitImpulse2 * this.limitState2 < 0) && (h += (d = -u) * this.k01, a += d * this.k21, b |= 2), (2 == this.limitState3 || this.limitImpulse3 * this.limitState3 < 0) && (h += (f = -y) * this.k02, e += f * this.k12, b |= 4); var v; switch (b) { case 1: v = 1 / (this.k11 * this.k22 - this.k12 * this.k21), d = (this.k22 * e + -this.k12 * a) * v, f = (-this.k21 * e + this.k11 * a) * v; break; case 2: v = 1 / (this.k00 * this.k22 - this.k02 * this.k20), x = (this.k22 * h + -this.k02 * a) * v, f = (-this.k20 * h + this.k00 * a) * v; break; case 3: f = a / this.k22; break; case 4: v = 1 / (this.k00 * this.k11 - this.k01 * this.k10), x = (this.k11 * h + -this.k01 * e) * v, d = (-this.k10 * h + this.k00 * e) * v; break; case 5: d = e / this.k11; break; case 6: x = h / this.k00 }this.limitImpulse1 = p + x, this.limitImpulse2 = u + d, this.limitImpulse3 = y + f; var z = l + x, N = c + d, k = m + f; this.l1.x += z * this.l1x1 + N * this.l1x2 + k * this.l1x3, this.l1.y += z * this.l1y1 + N * this.l1y2 + k * this.l1y3, this.l1.z += z * this.l1z1 + N * this.l1z2 + k * this.l1z3, this.a1.x += z * this.a1x1 + N * this.a1x2 + k * this.a1x3, this.a1.y += z * this.a1y1 + N * this.a1y2 + k * this.a1y3, this.a1.z += z * this.a1z1 + N * this.a1z2 + k * this.a1z3, this.l2.x -= z * this.l2x1 + N * this.l2x2 + k * this.l2x3, this.l2.y -= z * this.l2y1 + N * this.l2y2 + k * this.l2y3, this.l2.z -= z * this.l2z1 + N * this.l2z2 + k * this.l2z3, this.a2.x -= z * this.a2x1 + N * this.a2x2 + k * this.a2x3, this.a2.y -= z * this.a2y1 + N * this.a2y2 + k * this.a2y3, this.a2.z -= z * this.a2z1 + N * this.a2z2 + k * this.a2z3 } }), L.prototype = Object.assign(Object.create(v.prototype), { constructor: L, preSolve: function(t, i) { this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize(), this.tan.tangent(this.nor).normalize(), this.bin.crossVectors(this.nor, this.tan), this.ac.preSolve(t, i), this.t3.preSolve(t, i) }, solve: function() { this.ac.solve(), this.t3.solve() }, postSolve: function() { } }), S.prototype = Object.assign(Object.create(v.prototype), { constructor: S, preSolve: function(t, i) { this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, !0), this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize(), this.tan.tangent(this.nor).normalize(), this.bin.crossVectors(this.nor, this.tan), this.tmp.crossVectors(this.an1, this.an2); var s = Pt.acosClamp(Pt.dotVectors(this.an1, this.an2)); Pt.dotVectors(this.nor, this.tmp) < 0 ? this.rotationalLimitMotor.angle = -s : this.rotationalLimitMotor.angle = s, this.tmp.crossVectors(this.ax1, this.ax2), this.r3.limitMotor2.angle = Pt.dotVectors(this.tan, this.tmp), this.r3.limitMotor3.angle = Pt.dotVectors(this.bin, this.tmp), this.r3.preSolve(t, i), this.t3.preSolve(t, i) }, solve: function() { this.r3.solve(), this.t3.solve() }, postSolve: function() { } }), P.prototype = Object.assign(Object.create(v.prototype), { constructor: P, preSolve: function(t, i) { this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, !0), this.r3.limitMotor1.angle = Pt.dotVectors(this.ax1, this.ax2); var s = Pt.dotVectors(this.an1, this.ax2); Pt.dotVectors(this.ax1, this.tmp.crossVectors(this.an1, this.ax2)) < 0 ? this.rotationalLimitMotor1.angle = -s : this.rotationalLimitMotor1.angle = s, s = Pt.dotVectors(this.an2, this.ax1), Pt.dotVectors(this.ax2, this.tmp.crossVectors(this.an2, this.ax1)) < 0 ? this.rotationalLimitMotor2.angle = -s : this.rotationalLimitMotor2.angle = s, this.nor.crossVectors(this.ax1, this.ax2).normalize(), this.tan.crossVectors(this.nor, this.ax2).normalize(), this.bin.crossVectors(this.nor, this.ax1).normalize(), this.r3.preSolve(t, i), this.t3.preSolve(t, i) }, solve: function() { this.r3.solve(), this.t3.solve() }, postSolve: function() { } }), D.prototype = { constructor: D, reset: function(t, i) { this.body1 = t.parent, this.body2 = i.parent, this.numPoints = 0 }, addPointVec: function(t, i, s, h) { var e = this.points[this.numPoints++]; e.position.copy(t), e.localPoint1.sub(t, this.body1.position).applyMatrix3(this.body1.rotation), e.localPoint2.sub(t, this.body2.position).applyMatrix3(this.body2.rotation), e.normal.copy(i), h && e.normal.negate(), e.normalImpulse = 0, e.penetration = s, e.warmStarted = !1 }, addPoint: function(t, i, s, h, e, a, o, n) { var r = this.points[this.numPoints++]; r.position.set(t, i, s), r.localPoint1.sub(r.position, this.body1.position).applyMatrix3(this.body1.rotation), r.localPoint2.sub(r.position, this.body2.position).applyMatrix3(this.body2.rotation), r.normalImpulse = 0, r.normal.set(h, e, a), n && r.normal.negate(), r.penetration = o, r.warmStarted = !1 } }, B.prototype = Object.assign(Object.create(f.prototype), { constructor: B, attach: function() { this.p1 = this.body1.position, this.p2 = this.body2.position, this.lv1 = this.body1.linearVelocity, this.av1 = this.body1.angularVelocity, this.lv2 = this.body2.linearVelocity, this.av2 = this.body2.angularVelocity, this.i1 = this.body1.inverseInertia, this.i2 = this.body2.inverseInertia }, detach: function() { this.p1 = null, this.p2 = null, this.lv1 = null, this.lv2 = null, this.av1 = null, this.av2 = null, this.i1 = null, this.i2 = null }, preSolve: function(t, i) { this.m1 = this.body1.inverseMass, this.m2 = this.body2.inverseMass; var s = this.m1 + this.m2; this.num = this.manifold.numPoints; for (var h, e, a, o, n, r, l, c = this.cs, m = 0; m < this.num; m++)h = this.ps[m], this.tmpP1.sub(h.position, this.p1), this.tmpP2.sub(h.position, this.p2), this.tmpC1.crossVectors(this.av1, this.tmpP1), this.tmpC2.crossVectors(this.av2, this.tmpP2), c.norImp = h.normalImpulse, c.tanImp = h.tangentImpulse, c.binImp = h.binormalImpulse, c.nor.copy(h.normal), this.tmp.set(this.lv2.x + this.tmpC2.x - (this.lv1.x + this.tmpC1.x), this.lv2.y + this.tmpC2.y - (this.lv1.y + this.tmpC1.y), this.lv2.z + this.tmpC2.z - (this.lv1.z + this.tmpC1.z)), e = Pt.dotVectors(c.nor, this.tmp), c.tan.set(this.tmp.x - e * c.nor.x, this.tmp.y - e * c.nor.y, this.tmp.z - e * c.nor.z), Pt.dotVectors(c.tan, c.tan) <= .04 && c.tan.tangent(c.nor), c.tan.normalize(), c.bin.crossVectors(c.nor, c.tan), c.norU1.scale(c.nor, this.m1), c.norU2.scale(c.nor, this.m2), c.tanU1.scale(c.tan, this.m1), c.tanU2.scale(c.tan, this.m2), c.binU1.scale(c.bin, this.m1), c.binU2.scale(c.bin, this.m2), c.norT1.crossVectors(this.tmpP1, c.nor), c.tanT1.crossVectors(this.tmpP1, c.tan), c.binT1.crossVectors(this.tmpP1, c.bin), c.norT2.crossVectors(this.tmpP2, c.nor), c.tanT2.crossVectors(this.tmpP2, c.tan), c.binT2.crossVectors(this.tmpP2, c.bin), r = this.i1, l = this.i2, c.norTU1.copy(c.norT1).applyMatrix3(r, !0), c.tanTU1.copy(c.tanT1).applyMatrix3(r, !0), c.binTU1.copy(c.binT1).applyMatrix3(r, !0), c.norTU2.copy(c.norT2).applyMatrix3(l, !0), c.tanTU2.copy(c.tanT2).applyMatrix3(l, !0), c.binTU2.copy(c.binT2).applyMatrix3(l, !0), this.tmpC1.crossVectors(c.norTU1, this.tmpP1), this.tmpC2.crossVectors(c.norTU2, this.tmpP2), this.tmp.add(this.tmpC1, this.tmpC2), c.norDen = 1 / (s + Pt.dotVectors(c.nor, this.tmp)), this.tmpC1.crossVectors(c.tanTU1, this.tmpP1), this.tmpC2.crossVectors(c.tanTU2, this.tmpP2), this.tmp.add(this.tmpC1, this.tmpC2), c.tanDen = 1 / (s + Pt.dotVectors(c.tan, this.tmp)), this.tmpC1.crossVectors(c.binTU1, this.tmpP1), this.tmpC2.crossVectors(c.binTU2, this.tmpP2), this.tmp.add(this.tmpC1, this.tmpC2), c.binDen = 1 / (s + Pt.dotVectors(c.bin, this.tmp)), h.warmStarted ? (a = h.normalImpulse, this.lv1.addScaledVector(c.norU1, a), this.av1.addScaledVector(c.norTU1, a), this.lv2.subScaledVector(c.norU2, a), this.av2.subScaledVector(c.norTU2, a), c.norImp = a, c.tanImp = 0, c.binImp = 0, e = 0) : (c.norImp = 0, c.tanImp = 0, c.binImp = 0), e > -1 && (e = 0), (o = this.restitution * -e) < (n = -(h.penetration + .005) * i * .05) && (o = n), c.norTar = o, c.last = m == this.num - 1, c = c.next }, solve: function() { this.tmplv1.copy(this.lv1), this.tmplv2.copy(this.lv2), this.tmpav1.copy(this.av1), this.tmpav2.copy(this.av2); for (var t, i, s, h, e, a, o, n, r, l, c = this.cs; ;) { if (a = c.norImp, o = c.tanImp, n = c.binImp, r = -a * this.friction, this.tmp.sub(this.tmplv2, this.tmplv1), e = Pt.dotVectors(this.tmp, c.tan) + Pt.dotVectors(this.tmpav2, c.tanT2) - Pt.dotVectors(this.tmpav1, c.tanT1), t = o, i = e * c.tanDen, o += i, e = Pt.dotVectors(this.tmp, c.bin) + Pt.dotVectors(this.tmpav2, c.binT2) - Pt.dotVectors(this.tmpav1, c.binT1), s = n, h = e * c.binDen, n += h, (l = o * o + n * n) > r * r && (o *= l = r / Pt.sqrt(l), n *= l), i = o - t, h = n - s, this.tmp.set(c.tanU1.x * i + c.binU1.x * h, c.tanU1.y * i + c.binU1.y * h, c.tanU1.z * i + c.binU1.z * h), this.tmplv1.addEqual(this.tmp), this.tmp.set(c.tanTU1.x * i + c.binTU1.x * h, c.tanTU1.y * i + c.binTU1.y * h, c.tanTU1.z * i + c.binTU1.z * h), this.tmpav1.addEqual(this.tmp), this.tmp.set(c.tanU2.x * i + c.binU2.x * h, c.tanU2.y * i + c.binU2.y * h, c.tanU2.z * i + c.binU2.z * h), this.tmplv2.subEqual(this.tmp), this.tmp.set(c.tanTU2.x * i + c.binTU2.x * h, c.tanTU2.y * i + c.binTU2.y * h, c.tanTU2.z * i + c.binTU2.z * h), this.tmpav2.subEqual(this.tmp), this.tmp.sub(this.tmplv2, this.tmplv1), e = Pt.dotVectors(this.tmp, c.nor) + Pt.dotVectors(this.tmpav2, c.norT2) - Pt.dotVectors(this.tmpav1, c.norT1), t = a, i = (e - c.norTar) * c.norDen, (a += i) > 0 && (a = 0), i = a - t, this.tmplv1.addScaledVector(c.norU1, i), this.tmpav1.addScaledVector(c.norTU1, i), this.tmplv2.subScaledVector(c.norU2, i), this.tmpav2.subScaledVector(c.norTU2, i), c.norImp = a, c.tanImp = o, c.binImp = n, c.last) break; c = c.next } this.lv1.copy(this.tmplv1), this.lv2.copy(this.tmplv2), this.av1.copy(this.tmpav1), this.av2.copy(this.tmpav2) }, postSolve: function() { for (var t, i = this.cs, s = this.num; s--;)(t = this.ps[s]).normal.copy(i.nor), t.tangent.copy(i.tan), t.binormal.copy(i.bin), t.normalImpulse = i.norImp, t.tangentImpulse = i.tanImp, t.binormalImpulse = i.binImp, t.normalDenominator = i.norDen, t.tangentDenominator = i.tanDen, t.binormalDenominator = i.binDen, i = i.next } }), Object.assign(F.prototype, { Contact: !0, mixRestitution: function(t, i) { return Pt.sqrt(t * i) }, mixFriction: function(t, i) { return Pt.sqrt(t * i) }, updateManifold: function() { this.constraint.restitution = this.mixRestitution(this.shape1.restitution, this.shape2.restitution), this.constraint.friction = this.mixFriction(this.shape1.friction, this.shape2.friction); for (var t = this.manifold.numPoints, i = t; i--;) { var s = this.buffer[i], h = this.points[i]; s.lp1X = h.localPoint1.x, s.lp1Y = h.localPoint1.y, s.lp1Z = h.localPoint1.z, s.lp2X = h.localPoint2.x, s.lp2Y = h.localPoint2.y, s.lp2Z = h.localPoint2.z, s.impulse = h.normalImpulse } this.manifold.numPoints = 0, this.detector.detectCollision(this.shape1, this.shape2, this.manifold); var e = this.manifold.numPoints; if (0 == e) return this.touching = !1, this.close = !1, void (this.dist = Pt.INF); for ((this.touching || this.dist < .001) && (this.close = !0), this.touching = !0, i = e; i--;) { for (var a = (h = this.points[i]).localPoint1.x, o = h.localPoint1.y, n = h.localPoint1.z, r = h.localPoint2.x, l = h.localPoint2.y, c = h.localPoint2.z, m = -1, p = 4e-4, u = t; u--;) { var y = (s = this.buffer[u]).lp1X - a, x = s.lp1Y - o, d = s.lp1Z - n, f = y * y + x * x + d * d, b = (y = s.lp2X - r) * y + (x = s.lp2Y - l) * x + (d = s.lp2Z - c) * d; f < b ? f < p && (p = f, m = u) : b < p && (p = b, m = u), p < this.dist && (this.dist = p) } if (-1 != m) { var v = this.buffer[m]; this.buffer[m] = this.buffer[--t], this.buffer[t] = v, h.normalImpulse = v.impulse, h.warmStarted = !0 } else h.normalImpulse = 0, h.warmStarted = !1 } }, attach: function(t, i) { this.shape1 = t, this.shape2 = i, this.body1 = t.parent, this.body2 = i.parent, this.manifold.body1 = this.body1, this.manifold.body2 = this.body2, this.constraint.body1 = this.body1, this.constraint.body2 = this.body2, this.constraint.attach(), this.s1Link.shape = i, this.s1Link.body = this.body2, this.s2Link.shape = t, this.s2Link.body = this.body1, null != t.contactLink ? (this.s1Link.next = t.contactLink).prev = this.s1Link : this.s1Link.next = null, t.contactLink = this.s1Link, t.numContacts++ , null != i.contactLink ? (this.s2Link.next = i.contactLink).prev = this.s2Link : this.s2Link.next = null, i.contactLink = this.s2Link, i.numContacts++ , this.b1Link.shape = i, this.b1Link.body = this.body2, this.b2Link.shape = t, this.b2Link.body = this.body1, null != this.body1.contactLink ? (this.b1Link.next = this.body1.contactLink).prev = this.b1Link : this.b1Link.next = null, this.body1.contactLink = this.b1Link, this.body1.numContacts++ , null != this.body2.contactLink ? (this.b2Link.next = this.body2.contactLink).prev = this.b2Link : this.b2Link.next = null, this.body2.contactLink = this.b2Link, this.body2.numContacts++ , this.prev = null, this.next = null, this.persisting = !0, this.sleeping = this.body1.sleeping && this.body2.sleeping, this.manifold.numPoints = 0 }, detach: function() { var t = this.s1Link.prev, i = this.s1Link.next; null !== t && (t.next = i), null !== i && (i.prev = t), this.shape1.contactLink == this.s1Link && (this.shape1.contactLink = i), this.s1Link.prev = null, this.s1Link.next = null, this.s1Link.shape = null, this.s1Link.body = null, this.shape1.numContacts-- , t = this.s2Link.prev, i = this.s2Link.next, null !== t && (t.next = i), null !== i && (i.prev = t), this.shape2.contactLink == this.s2Link && (this.shape2.contactLink = i), this.s2Link.prev = null, this.s2Link.next = null, this.s2Link.shape = null, this.s2Link.body = null, this.shape2.numContacts-- , t = this.b1Link.prev, i = this.b1Link.next, null !== t && (t.next = i), null !== i && (i.prev = t), this.body1.contactLink == this.b1Link && (this.body1.contactLink = i), this.b1Link.prev = null, this.b1Link.next = null, this.b1Link.shape = null, this.b1Link.body = null, this.body1.numContacts-- , t = this.b2Link.prev, i = this.b2Link.next, null !== t && (t.next = i), null !== i && (i.prev = t), this.body2.contactLink == this.b2Link && (this.body2.contactLink = i), this.b2Link.prev = null, this.b2Link.next = null, this.b2Link.shape = null, this.b2Link.body = null, this.body2.numContacts-- , this.manifold.body1 = null, this.manifold.body2 = null, this.constraint.body1 = null, this.constraint.body2 = null, this.constraint.detach(), this.shape1 = null, this.shape2 = null, this.body1 = null, this.body2 = null } }), Object.assign(q.prototype, { setParent: function(t) { this.parent = t, this.scale = this.parent.scale, this.invScale = this.parent.invScale, this.id = this.parent.numRigidBodies, this.name || (this.name = this.id), this.updateMesh() }, addShape: function(t) { t.parent && s("RigidBody", "It is not possible that you add a shape which already has an associated body."), null != this.shapes && ((this.shapes.prev = t).next = this.shapes), this.shapes = t, t.parent = this, this.parent && this.parent.addShape(t), this.numShapes++ }, removeShape: function(t) { var i = t; if (i.parent == this) { var s = i.prev, h = i.next; null != s && (s.next = h), null != h && (h.prev = s), this.shapes == i && (this.shapes = h), i.prev = null, i.next = null, i.parent = null, this.parent && this.parent.removeShape(i), this.numShapes-- } }, remove: function() { this.dispose() }, dispose: function() { this.parent.removeRigidBody(this) }, checkContact: function(t) { this.parent.checkContact(this.name, t) }, setupMass: function(t, i) { var s = void 0 === i || i; this.type = t || 2, this.isDynamic = 1 === this.type, this.isStatic = 2 === this.type, this.mass = 0, this.localInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0); for (var h = new o, a = new e, n = this.shapes; null !== n; n = n.next) { n.calculateMassInfo(this.massInfo); var r = this.massInfo.mass; a.addScaledVector(n.relativePosition, r), this.mass += r, this.rotateInertia(n.relativeRotation, this.massInfo.inertia, h), this.localInertia.add(h), this.localInertia.addOffset(r, n.relativePosition) } if (this.inverseMass = 1 / this.mass, a.scaleEqual(this.inverseMass), s) { for (this.position.add(a), n = this.shapes; null !== n; n = n.next)n.relativePosition.subEqual(a); this.localInertia.subOffset(this.mass, a) } this.inverseLocalInertia.invert(this.localInertia), 2 === this.type && (this.inverseMass = 0, this.inverseLocalInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0)), this.syncShapes(), this.awake() }, awake: function() { if (this.allowSleep && this.sleeping) { this.sleeping = !1, this.sleepTime = 0; for (var t = this.contactLink; null != t;)t.body.sleepTime = 0, t.body.sleeping = !1, t = t.next; for (var i = this.jointLink; null != i;)i.body.sleepTime = 0, i.body.sleeping = !1, i = i.next; for (var s = this.shapes; null != s; s = s.next)s.updateProxy() } }, sleep: function() { if (this.allowSleep && !this.sleeping) { this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.sleepPosition.copy(this.position), this.sleepOrientation.copy(this.orientation), this.sleepTime = 0, this.sleeping = !0; for (var t = this.shapes; null != t; t = t.next)t.updateProxy() } }, testWakeUp: function() { (this.linearVelocity.testZero() || this.angularVelocity.testZero() || this.position.testDiff(this.sleepPosition) || this.orientation.testDiff(this.sleepOrientation)) && this.awake() }, isLonely: function() { return 0 == this.numJoints && 0 == this.numContacts }, updatePosition: function(t) { switch (this.type) { case 2: this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.controlPos && (this.position.copy(this.newPosition), this.controlPos = !1), this.controlRot && (this.orientation.copy(this.newOrientation), this.controlRot = !1); break; case 1: this.isKinematic && (this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0)), this.controlPos && (this.linearVelocity.subVectors(this.newPosition, this.position).multiplyScalar(1 / t), this.controlPos = !1), this.controlRot && (this.angularVelocity.copy(this.getAxis()), this.orientation.copy(this.newOrientation), this.controlRot = !1), this.position.addScaledVector(this.linearVelocity, t), this.orientation.addTime(this.angularVelocity, t), this.updateMesh(); break; default: s("RigidBody", "Invalid type.") }this.syncShapes(), this.updateMesh() }, getAxis: function() { return new e(0, 1, 0).applyMatrix3(this.inverseLocalInertia, !0).normalize() }, rotateInertia: function(t, i, s) { this.tmpInertia.multiplyMatrices(t, i), s.multiplyMatrices(this.tmpInertia, t, !0) }, syncShapes: function() { this.rotation.setQuat(this.orientation), this.rotateInertia(this.rotation, this.inverseLocalInertia, this.inverseInertia); for (var t = this.shapes; null != t; t = t.next)t.position.copy(t.relativePosition).applyMatrix3(this.rotation, !0).add(this.position), t.rotation.multiplyMatrices(this.rotation, t.relativeRotation), t.updateProxy() }, applyImpulse: function(t, i) { this.linearVelocity.addScaledVector(i, this.inverseMass); var s = (new e).copy(t).sub(this.position).cross(i).applyMatrix3(this.inverseInertia, !0); this.angularVelocity.add(s) }, setPosition: function(t) { this.newPosition.copy(t).multiplyScalar(this.invScale), this.controlPos = !0, this.isKinematic || (this.isKinematic = !0) }, setQuaternion: function(t) { this.newOrientation.set(t.x, t.y, t.z, t.w), this.controlRot = !0, this.isKinematic || (this.isKinematic = !0) }, setRotation: function(t) { this.newOrientation = (new a).setFromEuler(t.x * Pt.degtorad, t.y * Pt.degtorad, t.z * Pt.degtorad), this.controlRot = !0 }, resetPosition: function(t, i, s) { this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.position.set(t, i, s).multiplyScalar(this.invScale), this.awake() }, resetQuaternion: function(t) { this.angularVelocity.set(0, 0, 0), this.orientation = new a(t.x, t.y, t.z, t.w), this.awake() }, resetRotation: function(t, i, s) { this.angularVelocity.set(0, 0, 0), this.orientation = (new a).setFromEuler(t * Pt.degtorad, i * Pt.degtorad, s * Pt.degtorad), this.awake() }, getPosition: function() { return this.pos }, getQuaternion: function() { return this.quaternion }, connectMesh: function(t) { this.mesh = t, this.updateMesh() }, updateMesh: function() { this.pos.scale(this.position, this.scale), this.quaternion.copy(this.orientation), null !== this.mesh && (this.mesh.position.copy(this.getPosition()), this.mesh.quaternion.copy(this.getQuaternion())) } }), Object.assign(R.prototype, { BroadPhase: !0, createProxy: function(t) { s("BroadPhase", "Inheritance error.") }, addProxy: function(t) { s("BroadPhase", "Inheritance error.") }, removeProxy: function(t) { s("BroadPhase", "Inheritance error.") }, isAvailablePair: function(t, i) { var s = t.parent, h = i.parent; if (s == h || !s.isDynamic && !h.isDynamic || 0 == (t.belongsTo & i.collidesWith) || 0 == (i.belongsTo & t.collidesWith)) return !1; var e; for (e = s.numJoints < h.numJoints ? s.jointLink : h.jointLink; null !== e;) { var a = e.joint; if (!a.allowCollision && (a.body1 == s && a.body2 == h || a.body1 == h && a.body2 == s)) return !1; e = e.next } return !0 }, detectPairs: function() { this.pairs = [], this.numPairs = 0, this.numPairChecks = 0, this.collectPairs() }, collectPairs: function() { Error("BroadPhase", "Inheritance error.") }, addPair: function(t, i) { var s = new U(t, i); this.pairs.push(s), this.numPairs++ } }); var At = 0; Object.assign(J.prototype, { Proxy: !0, update: function() { s("Proxy", "Inheritance error.") } }), W.prototype = Object.assign(Object.create(J.prototype), { constructor: W, update: function() { } }), H.prototype = Object.assign(Object.create(R.prototype), { constructor: H, createProxy: function(t) { return new W(t) }, addProxy: function(t) { this.proxies.push(t) }, removeProxy: function(t) { var i = this.proxies.indexOf(t); i > -1 && this.proxies.splice(i, 1) }, collectPairs: function() { var t, i, s, h = 0, e = this.proxies, a = e.length; for (this.numPairChecks = a * (a - 1) >> 1; h < a;)for (i = e[h++], t = h + 1; t < a;)s = e[t++], !i.aabb.intersectTest(s.aabb) && this.isAvailablePair(i.shape, s.shape) && this.addPair(i.shape, s.shape) } }), Object.assign(Q.prototype, { SAPAxis: !0, addElements: function(t, i) { if (this.numElements + 2 >= this.bufferSize) { this.bufferSize *= 2; for (var s = [], h = this.numElements; h--;)s[h] = this.elements[h] } this.elements[this.numElements++] = t, this.elements[this.numElements++] = i }, removeElements: function(t, i) { for (var s = -1, h = -1, e = 0, a = this.numElements; e < a; e++) { var o = this.elements[e]; if (o == t || o == i) { if (-1 != s) { h = e; break } s = e } } for (e = s + 1, a = h; e < a; e++)this.elements[e - 1] = this.elements[e]; for (e = h + 1, a = this.numElements; e < a; e++)this.elements[e - 2] = this.elements[e]; this.elements[--this.numElements] = null, this.elements[--this.numElements] = null }, sort: function() { for (var t = 0, i = 1; this.numElements >> i != 0;)i++; i = i * this.numElements >> 2, t = 0; for (var s = !1, h = this.elements, e = 1, a = this.numElements; e < a; e++) { var o = h[e], n = o.value, r = h[e - 1]; if (r.value > n) { var l = e; do { if (h[l] = r, 0 == --l) break; r = h[l - 1] } while (r.value > n); if (h[l] = o, (t += e - l) > i) { s = !0; break } } } if (s) { t = 2; var c = this.stack; for (c[0] = 0, c[1] = this.numElements - 1; t > 0;) { var m = c[--t], p = c[--t], u = m - p; if (u > 16) { var y = p + Pt.floor(.5 * u); for (o = h[y], h[y] = h[m], h[m] = o, n = o.value, e = p - 1, l = m; ;) { var x, d; do { x = h[++e] } while (x.value < n); do { d = h[--l] } while (n < d.value && l != p); if (e >= l) break; h[e] = d, h[l] = x } h[m] = h[e], h[e] = o, e - p > m - e ? (c[t++] = p, c[t++] = e - 1, c[t++] = e + 1, c[t++] = m) : (c[t++] = e + 1, c[t++] = m, c[t++] = p, c[t++] = e - 1) } else for (e = p + 1; e <= m; e++)if (o = h[e], n = o.value, (r = h[e - 1]).value > n) { l = e; do { if (h[l] = r, 0 == --l) break; r = h[l - 1] } while (r.value > n); h[l] = o } } } }, calculateTestCount: function() { for (var t = 1, i = 0, s = 1, h = this.numElements; s < h; s++)this.elements[s].max ? t-- : (i += t, t++); return i } }), Y.prototype = Object.assign(Object.create(J.prototype), { constructor: Y, isDynamic: function() { var t = this.shape.parent; return t.isDynamic && !t.sleeping }, update: function() { var t = this.aabb.elements; this.min[0].value = t[0], this.min[1].value = t[1], this.min[2].value = t[2], this.max[0].value = t[3], this.max[1].value = t[4], this.max[2].value = t[5], (1 == this.belongsTo && !this.isDynamic() || 2 == this.belongsTo && this.isDynamic()) && (this.sap.removeProxy(this), this.sap.addProxy(this)) } }), Z.prototype = Object.assign(Object.create(R.prototype), { constructor: Z, createProxy: function(t) { return new Y(this, t) }, addProxy: function(t) { var i = t; i.isDynamic() ? (this.axesD[0].addElements(i.min[0], i.max[0]), this.axesD[1].addElements(i.min[1], i.max[1]), this.axesD[2].addElements(i.min[2], i.max[2]), i.belongsTo = 1, this.numElementsD += 2) : (this.axesS[0].addElements(i.min[0], i.max[0]), this.axesS[1].addElements(i.min[1], i.max[1]), this.axesS[2].addElements(i.min[2], i.max[2]), i.belongsTo = 2, this.numElementsS += 2) }, removeProxy: function(t) { var i = t; if (0 != i.belongsTo) { switch (i.belongsTo) { case 1: this.axesD[0].removeElements(i.min[0], i.max[0]), this.axesD[1].removeElements(i.min[1], i.max[1]), this.axesD[2].removeElements(i.min[2], i.max[2]), this.numElementsD -= 2; break; case 2: this.axesS[0].removeElements(i.min[0], i.max[0]), this.axesS[1].removeElements(i.min[1], i.max[1]), this.axesS[2].removeElements(i.min[2], i.max[2]), this.numElementsS -= 2 }i.belongsTo = 0 } }, collectPairs: function() { if (0 != this.numElementsD) { var t = this.axesD[this.index1], i = this.axesD[this.index2]; t.sort(), i.sort(); var s, h; t.calculateTestCount() <= i.calculateTestCount() ? ((i = this.axesS[this.index1]).sort(), s = t.elements, h = i.elements) : ((t = this.axesS[this.index2]).sort(), s = i.elements, h = t.elements, this.index1 ^= this.index2, this.index2 ^= this.index1, this.index1 ^= this.index2); for (var e, a, o = 0, n = 0; o < this.numElementsD;) { var r, l; if (n == this.numElementsS) r = s[o], l = !0, o++; else { var c = s[o], m = h[n]; c.value < m.value ? (r = c, l = !0, o++) : (r = m, l = !1, n++) } if (r.max) { var p = r.pair; if (l) { if (p == e) { e = e.pair; continue } r = e } else { if (p == a) { a = a.pair; continue } r = a } do { if ((b = r.pair) == p) { r.pair = b.pair; break } r = b } while (null != r) } else { for (var u = r.proxy.shape, y = r.min1.value, x = r.max1.value, d = r.min2.value, f = r.max2.value, b = e; null != b; b = b.pair) { var v = b.proxy.shape; this.numPairChecks++ , y > b.max1.value || x < b.min1.value || d > b.max2.value || f < b.min2.value || !this.isAvailablePair(u, v) || this.addPair(u, v) } if (l) { for (b = a; null != b; b = b.pair)v = b.proxy.shape, this.numPairChecks++ , y > b.max1.value || x < b.min1.value || d > b.max2.value || f < b.min2.value || !this.isAvailablePair(u, v) || this.addPair(u, v); r.pair = e, e = r } else r.pair = a, a = r } } this.index2 = 3 ^ (this.index1 | this.index2) } } }), Object.assign(G.prototype, { DBVT: !0, moveLeaf: function(t) { this.deleteLeaf(t), this.insertLeaf(t) }, insertLeaf: function(t) { if (null == this.root) return void (this.root = t); for (var i, s, h = t.aabb, e = this.root; null == e.proxy;) { var a = e.child1, o = e.child2, n = e.aabb, r = a.aabb, l = o.aabb; i = n.surfaceArea(), this.aabb.combine(h, n); var c = 2 * (s = this.aabb.surfaceArea()), m = 2 * (s - i), p = m; this.aabb.combine(h, r), null != a.proxy ? p += this.aabb.surfaceArea() : p += this.aabb.surfaceArea() - r.surfaceArea(); var u = m; if (this.aabb.combine(h, l), null != o.proxy ? u += this.aabb.surfaceArea() : u += this.aabb.surfaceArea() - l.surfaceArea(), p < u) { if (c < p) break; e = a } else { if (c < u) break; e = o } } var y, x = e.parent; (y = this.numFreeNodes > 0 ? this.freeNodes[--this.numFreeNodes] : new K).parent = x, y.child1 = t, y.child2 = e, y.aabb.combine(t.aabb, e.aabb), y.height = e.height + 1, e.parent = y, t.parent = y, e == this.root ? this.root = y : x.child1 == e ? x.child1 = y : x.child2 = y; do { y = this.balance(y), this.fix(y), y = y.parent } while (null != y) }, getBalance: function(t) { return null != t.proxy ? 0 : t.child1.height - t.child2.height }, deleteLeaf: function(t) { if (t == this.root) return void (this.root = null); var i, s = t.parent; if (i = s.child1 == t ? s.child2 : s.child1, s == this.root) return this.root = i, void (i.parent = null); var h = s.parent; i.parent = h, h.child1 == s ? h.child1 = i : h.child2 = i, this.numFreeNodes < 16384 && (this.freeNodes[this.numFreeNodes++] = s); do { h = this.balance(h), this.fix(h), h = h.parent } while (null != h) }, balance: function(t) { var i = t.height; if (i < 2) return t; var s, h = t.parent, e = t.child1, a = t.child2, o = e.height, n = a.height, r = o - n; if (r > 1) { var l = e.child1, c = e.child2, m = l.height, p = c.height; return m > p ? (e.child2 = t, t.parent = e, t.child1 = c, c.parent = t, t.aabb.combine(c.aabb, a.aabb), s = p - n, t.height = p - (s & s >> 31) + 1, e.aabb.combine(l.aabb, t.aabb), s = m - i, e.height = m - (s & s >> 31) + 1) : (e.child1 = t, t.parent = e, t.child1 = l, l.parent = t, t.aabb.combine(l.aabb, a.aabb), s = m - n, t.height = m - (s & s >> 31) + 1, e.aabb.combine(t.aabb, c.aabb), s = i - p, e.height = i - (s & s >> 31) + 1), null != h ? h.child1 == t ? h.child1 = e : h.child2 = e : this.root = e, e.parent = h, e } if (r < -1) { var u = a.child1, y = a.child2, x = u.height, d = y.height; return x > d ? (a.child2 = t, t.parent = a, t.child2 = y, y.parent = t, t.aabb.combine(e.aabb, y.aabb), s = o - d, t.height = o - (s & s >> 31) + 1, a.aabb.combine(u.aabb, t.aabb), s = x - i, a.height = x - (s & s >> 31) + 1) : (a.child1 = t, t.parent = a, t.child2 = u, u.parent = t, t.aabb.combine(e.aabb, u.aabb), s = o - x, t.height = o - (s & s >> 31) + 1, a.aabb.combine(t.aabb, y.aabb), s = i - d, a.height = i - (s & s >> 31) + 1), null != h ? h.child1 == t ? h.child1 = a : h.child2 = a : this.root = a, a.parent = h, a } return t }, fix: function(t) { var i = t.child1, s = t.child2; t.aabb.combine(i.aabb, s.aabb), t.height = i.height < s.height ? s.height + 1 : i.height + 1 } }), $.prototype = Object.assign(Object.create(J.prototype), { constructor: $, update: function() { } }), tt.prototype = Object.assign(Object.create(R.prototype), { constructor: tt, createProxy: function(t) { return new $(t) }, addProxy: function(t) { this.tree.insertLeaf(t.leaf), this.leaves.push(t.leaf), this.numLeaves++ }, removeProxy: function(t) { this.tree.deleteLeaf(t.leaf); var i = this.leaves.indexOf(t.leaf); i > -1 && (this.leaves.splice(i, 1), this.numLeaves--) }, collectPairs: function() { if (!(this.numLeaves < 2)) for (var t, i = this.numLeaves; i--;)(t = this.leaves[i]).proxy.aabb.intersectTestTwo(t.aabb) && (t.aabb.copy(t.proxy.aabb, .1), this.tree.deleteLeaf(t), this.tree.insertLeaf(t), this.collide(t, this.tree.root)) }, collide: function(t, i) { var s, h, e, a, o, n, r = 2; for (this.stack[0] = t, this.stack[1] = i; r > 0;)if (e = this.stack[--r], a = this.stack[--r], o = null != e.proxy, n = null != a.proxy, this.numPairChecks++ , o && n) { if (s = e.proxy.shape, h = a.proxy.shape, s == h || s.aabb.intersectTest(h.aabb) || !this.isAvailablePair(s, h)) continue; this.addPair(s, h) } else { if (e.aabb.intersectTest(a.aabb)) continue; n || !o && e.aabb.surfaceArea() > a.aabb.surfaceArea() ? (this.stack[r++] = e.child1, this.stack[r++] = a, this.stack[r++] = e.child2, this.stack[r++] = a) : (this.stack[r++] = e, this.stack[r++] = a.child1, this.stack[r++] = e, this.stack[r++] = a.child2) } } }), Object.assign(it.prototype, { CollisionDetector: !0, detectCollision: function(t, i, h) { s("CollisionDetector", "Inheritance error.") } }), st.prototype = Object.assign(Object.create(it.prototype), { constructor: st, detectCollision: function(t, i, s) { var h, e; t.id < i.id ? (h = t, e = i) : (h = i, e = t); var a, o, n, r, l, c, m, p, u, y, x, d, f, b, v, z, N, k, w, M, g, I, V, L, S, P, T, A, j, O, C, D, E, B, F, q, U = h.elements, R = e.elements, _ = h.dimentions, J = e.dimentions, W = h.position, H = e.position, Q = W.x, X = W.y, Y = W.z, Z = H.x, K = H.y, G = H.z, $ = Z - Q, tt = K - X, it = G - Y, st = h.halfWidth, ht = h.halfHeight, et = h.halfDepth, at = e.halfWidth, ot = e.halfHeight, nt = e.halfDepth, rt = _[0], lt = _[1], ct = _[2], mt = _[3], pt = _[4], ut = _[5], yt = _[6], xt = _[7], dt = _[8], ft = _[9], bt = _[10], vt = _[11], zt = _[12], Nt = _[13], kt = _[14], wt = _[15], Mt = _[16], gt = _[17], It = J[0], Vt = J[1], Lt = J[2], St = J[3], Tt = J[4], At = J[5], jt = J[6], Ot = J[7], Ct = J[8], Dt = J[9], Et = J[10], Bt = J[11], Ft = J[12], qt = J[13], Ut = J[14], Rt = J[15], _t = J[16], Jt = J[17], Wt = lt * Lt - ct * Vt, Ht = ct * It - rt * Lt, Qt = rt * Vt - lt * It, Xt = lt * At - ct * Tt, Yt = ct * St - rt * At, Zt = rt * Tt - lt * St, Kt = lt * Ct - ct * Ot, Gt = ct * jt - rt * Ct, $t = rt * Ot - lt * jt, ti = pt * Lt - ut * Vt, ii = ut * It - mt * Lt, si = mt * Vt - pt * It, hi = pt * At - ut * Tt, ei = ut * St - mt * At, ai = mt * Tt - pt * St, oi = pt * Ct - ut * Ot, ni = ut * jt - mt * Ct, ri = mt * Ot - pt * jt, li = xt * Lt - dt * Vt, ci = dt * It - yt * Lt, mi = yt * Vt - xt * It, pi = xt * At - dt * Tt, ui = dt * St - yt * At, yi = yt * Tt - xt * St, xi = xt * Ct - dt * Ot, di = dt * jt - yt * Ct, fi = yt * Ot - xt * jt, bi = !1, vi = !1, zi = !1, Ni = !1, ki = !1, wi = !1, Mi = !1, gi = !1, Ii = !1; if (C = rt * $ + lt * tt + ct * it, (a = C > 0) || (C = -C), D = st, B = rt * It + lt * Vt + ct * Lt, F = rt * St + lt * Tt + ct * At, q = rt * jt + lt * Ot + ct * Ct, B < 0 && (B = -B), F < 0 && (F = -F), q < 0 && (q = -q), E = B * at + F * ot + q * nt, !((z = C - D - E) > 0 || (C = mt * $ + pt * tt + ut * it, (o = C > 0) || (C = -C), D = ht, B = mt * It + pt * Vt + ut * Lt, F = mt * St + pt * Tt + ut * At, q = mt * jt + pt * Ot + ut * Ct, B < 0 && (B = -B), F < 0 && (F = -F), q < 0 && (q = -q), E = B * at + F * ot + q * nt, (N = C - D - E) > 0 || (C = yt * $ + xt * tt + dt * it, (n = C > 0) || (C = -C), D = et, B = yt * It + xt * Vt + dt * Lt, F = yt * St + xt * Tt + dt * At, q = yt * jt + xt * Ot + dt * Ct, B < 0 && (B = -B), F < 0 && (F = -F), q < 0 && (q = -q), E = B * at + F * ot + q * nt, (k = C - D - E) > 0 || (C = It * $ + Vt * tt + Lt * it, (r = C > 0) || (C = -C), B = It * rt + Vt * lt + Lt * ct, F = It * mt + Vt * pt + Lt * ut, q = It * yt + Vt * xt + Lt * dt, B < 0 && (B = -B), F < 0 && (F = -F), q < 0 && (q = -q), D = B * st + F * ht + q * et, E = at, (w = 1 * (C - D - E)) > 0 || (C = St * $ + Tt * tt + At * it, (l = C > 0) || (C = -C), B = St * rt + Tt * lt + At * ct, F = St * mt + Tt * pt + At * ut, q = St * yt + Tt * xt + At * dt, B < 0 && (B = -B), F < 0 && (F = -F), q < 0 && (q = -q), D = B * st + F * ht + q * et, E = ot, (M = 1 * (C - D - E)) > 0 || (C = jt * $ + Ot * tt + Ct * it, (c = C > 0) || (C = -C), B = jt * rt + Ot * lt + Ct * ct, F = jt * mt + Ot * pt + Ct * ut, q = jt * yt + Ot * xt + Ct * dt, B < 0 && (B = -B), F < 0 && (F = -F), q < 0 && (q = -q), D = B * st + F * ht + q * et, E = nt, (g = 1 * (C - D - E)) > 0))))))) { if ((C = Wt * Wt + Ht * Ht + Qt * Qt) > 1e-5) { if (C = 1 / Pt.sqrt(C), Wt *= C, Ht *= C, Qt *= C, C = Wt * $ + Ht * tt + Qt * it, (m = C > 0) || (C = -C), B = Wt * mt + Ht * pt + Qt * ut, F = Wt * yt + Ht * xt + Qt * dt, B < 0 && (B = -B), F < 0 && (F = -F), D = B * ht + F * et, B = Wt * St + Ht * Tt + Qt * At, F = Wt * jt + Ht * Ot + Qt * Ct, B < 0 && (B = -B), F < 0 && (F = -F), E = B * ot + F * nt, (I = C - D - E) > 0) return } else m = !1, I = 0, bi = !0; if ((C = Xt * Xt + Yt * Yt + Zt * Zt) > 1e-5) { if (C = 1 / Pt.sqrt(C), Xt *= C, Yt *= C, Zt *= C, C = Xt * $ + Yt * tt + Zt * it, (p = C > 0) || (C = -C), B = Xt * mt + Yt * pt + Zt * ut, F = Xt * yt + Yt * xt + Zt * dt, B < 0 && (B = -B), F < 0 && (F = -F), D = B * ht + F * et, B = Xt * It + Yt * Vt + Zt * Lt, F = Xt * jt + Yt * Ot + Zt * Ct, B < 0 && (B = -B), F < 0 && (F = -F), E = B * at + F * nt, (V = C - D - E) > 0) return } else p = !1, V = 0, vi = !0; if ((C = Kt * Kt + Gt * Gt + $t * $t) > 1e-5) { if (C = 1 / Pt.sqrt(C), Kt *= C, Gt *= C, $t *= C, C = Kt * $ + Gt * tt + $t * it, (u = C > 0) || (C = -C), B = Kt * mt + Gt * pt + $t * ut, F = Kt * yt + Gt * xt + $t * dt, B < 0 && (B = -B), F < 0 && (F = -F), D = B * ht + F * et, B = Kt * It + Gt * Vt + $t * Lt, F = Kt * St + Gt * Tt + $t * At, B < 0 && (B = -B), F < 0 && (F = -F), E = B * at + F * ot, (L = C - D - E) > 0) return } else u = !1, L = 0, zi = !0; if ((C = ti * ti + ii * ii + si * si) > 1e-5) { if (C = 1 / Pt.sqrt(C), ti *= C, ii *= C, si *= C, C = ti * $ + ii * tt + si * it, (y = C > 0) || (C = -C), B = ti * rt + ii * lt + si * ct, F = ti * yt + ii * xt + si * dt, B < 0 && (B = -B), F < 0 && (F = -F), D = B * st + F * et, B = ti * St + ii * Tt + si * At, F = ti * jt + ii * Ot + si * Ct, B < 0 && (B = -B), F < 0 && (F = -F), E = B * ot + F * nt, (S = C - D - E) > 0) return } else y = !1, S = 0, Ni = !0; if ((C = hi * hi + ei * ei + ai * ai) > 1e-5) { if (C = 1 / Pt.sqrt(C), hi *= C, ei *= C, ai *= C, C = hi * $ + ei * tt + ai * it, (x = C > 0) || (C = -C), B = hi * rt + ei * lt + ai * ct, F = hi * yt + ei * xt + ai * dt, B < 0 && (B = -B), F < 0 && (F = -F), D = B * st + F * et, B = hi * It + ei * Vt + ai * Lt, F = hi * jt + ei * Ot + ai * Ct, B < 0 && (B = -B), F < 0 && (F = -F), E = B * at + F * nt, (P = C - D - E) > 0) return } else x = !1, P = 0, ki = !0; if ((C = oi * oi + ni * ni + ri * ri) > 1e-5) { if (C = 1 / Pt.sqrt(C), oi *= C, ni *= C, ri *= C, C = oi * $ + ni * tt + ri * it, (d = C > 0) || (C = -C), B = oi * rt + ni * lt + ri * ct, F = oi * yt + ni * xt + ri * dt, B < 0 && (B = -B), F < 0 && (F = -F), D = B * st + F * et, B = oi * It + ni * Vt + ri * Lt, F = oi * St + ni * Tt + ri * At, B < 0 && (B = -B), F < 0 && (F = -F), E = B * at + F * ot, (T = C - D - E) > 0) return } else d = !1, T = 0, wi = !0; if ((C = li * li + ci * ci + mi * mi) > 1e-5) { if (C = 1 / Pt.sqrt(C), li *= C, ci *= C, mi *= C, C = li * $ + ci * tt + mi * it, (f = C > 0) || (C = -C), B = li * rt + ci * lt + mi * ct, F = li * mt + ci * pt + mi * ut, B < 0 && (B = -B), F < 0 && (F = -F), D = B * st + F * ht, B = li * St + ci * Tt + mi * At, F = li * jt + ci * Ot + mi * Ct, B < 0 && (B = -B), F < 0 && (F = -F), E = B * ot + F * nt, (A = C - D - E) > 0) return } else f = !1, A = 0, Mi = !0; if ((C = pi * pi + ui * ui + yi * yi) > 1e-5) { if (C = 1 / Pt.sqrt(C), pi *= C, ui *= C, yi *= C, C = pi * $ + ui * tt + yi * it, (b = C > 0) || (C = -C), B = pi * rt + ui * lt + yi * ct, F = pi * mt + ui * pt + yi * ut, B < 0 && (B = -B), F < 0 && (F = -F), D = B * st + F * ht, B = pi * It + ui * Vt + yi * Lt, F = pi * jt + ui * Ot + yi * Ct, B < 0 && (B = -B), F < 0 && (F = -F), E = B * at + F * nt, (j = C - D - E) > 0) return } else b = !1, j = 0, gi = !0; if ((C = xi * xi + di * di + fi * fi) > 1e-5) { if (C = 1 / Pt.sqrt(C), xi *= C, di *= C, fi *= C, C = xi * $ + di * tt + fi * it, (v = C > 0) || (C = -C), B = xi * rt + di * lt + fi * ct, F = xi * mt + di * pt + fi * ut, B < 0 && (B = -B), F < 0 && (F = -F), D = B * st + F * ht, B = xi * It + di * Vt + fi * Lt, F = xi * St + di * Tt + fi * At, B < 0 && (B = -B), F < 0 && (F = -F), E = B * at + F * ot, (O = C - D - E) > 0) return } else v = !1, O = 0, Ii = !0; var Vi = z, Li = z, Si = 0, Pi = a; N > Li && (Vi = N, Li = N, Si = 1, Pi = o), k > Li && (Vi = k, Li = k, Si = 2, Pi = n), w > Li && (Vi = w, Li = w, Si = 3, Pi = r), M > Li && (Vi = M, Li = M, Si = 4, Pi = l), g > Li && (Vi = g, Li = g, Si = 5, Pi = c), I - .01 > Li && !bi && (Vi = I, Li = I - .01, Si = 6, Pi = m), V - .01 > Li && !vi && (Vi = V, Li = V - .01, Si = 7, Pi = p), L - .01 > Li && !zi && (Vi = L, Li = L - .01, Si = 8, Pi = u), S - .01 > Li && !Ni && (Vi = S, Li = S - .01, Si = 9, Pi = y), P - .01 > Li && !ki && (Vi = P, Li = P - .01, Si = 10, Pi = x), T - .01 > Li && !wi && (Vi = T, Li = T - .01, Si = 11, Pi = d), A - .01 > Li && !Mi && (Vi = A, Li = A - .01, Si = 12, Pi = f), j - .01 > Li && !gi && (Vi = j, Li = j - .01, Si = 13, Pi = b), O - .01 > Li && !Ii && (Vi = O, Si = 14, Pi = v); var Ti = 0, Ai = 0, ji = 0, Oi = 0, Ci = 0, Di = 0, Ei = 0, Bi = 0, Fi = 0, qi = 0, Ui = 0, Ri = 0, _i = 0, Ji = 0, Wi = 0, Hi = 0, Qi = 0, Xi = 0, Yi = !1; if (0 == Si ? (Pi ? (qi = Q + ft, Ui = X + bt, Ri = Y + vt, Ti = rt, Ai = lt, ji = ct) : (qi = Q - ft, Ui = X - bt, Ri = Y - vt, Ti = -rt, Ai = -lt, ji = -ct), _i = zt, Ji = Nt, Wi = kt, Oi = -mt, Ci = -pt, Di = -ut, Hi = wt, Qi = Mt, Xi = gt, Ei = -yt, Bi = -xt, Fi = -dt) : 1 == Si ? (Pi ? (qi = Q + zt, Ui = X + Nt, Ri = Y + kt, Ti = mt, Ai = pt, ji = ut) : (qi = Q - zt, Ui = X - Nt, Ri = Y - kt, Ti = -mt, Ai = -pt, ji = -ut), _i = ft, Ji = bt, Wi = vt, Oi = -rt, Ci = -lt, Di = -ct, Hi = wt, Qi = Mt, Xi = gt, Ei = -yt, Bi = -xt, Fi = -dt) : 2 == Si ? (Pi ? (qi = Q + wt, Ui = X + Mt, Ri = Y + gt, Ti = yt, Ai = xt, ji = dt) : (qi = Q - wt, Ui = X - Mt, Ri = Y - gt, Ti = -yt, Ai = -xt, ji = -dt), _i = ft, Ji = bt, Wi = vt, Oi = -rt, Ci = -lt, Di = -ct, Hi = zt, Qi = Nt, Xi = kt, Ei = -mt, Bi = -pt, Fi = -ut) : 3 == Si ? (Yi = !0, Pi ? (qi = Z - Dt, Ui = K - Et, Ri = G - Bt, Ti = -It, Ai = -Vt, ji = -Lt) : (qi = Z + Dt, Ui = K + Et, Ri = G + Bt, Ti = It, Ai = Vt, ji = Lt), _i = Ft, Ji = qt, Wi = Ut, Oi = -St, Ci = -Tt, Di = -At, Hi = Rt, Qi = _t, Xi = Jt, Ei = -jt, Bi = -Ot, Fi = -Ct) : 4 == Si ? (Yi = !0, Pi ? (qi = Z - Ft, Ui = K - qt, Ri = G - Ut, Ti = -St, Ai = -Tt, ji = -At) : (qi = Z + Ft, Ui = K + qt, Ri = G + Ut, Ti = St, Ai = Tt, ji = At), _i = Dt, Ji = Et, Wi = Bt, Oi = -It, Ci = -Vt, Di = -Lt, Hi = Rt, Qi = _t, Xi = Jt, Ei = -jt, Bi = -Ot, Fi = -Ct) : 5 == Si ? (Yi = !0, Pi ? (qi = Z - Rt, Ui = K - _t, Ri = G - Jt, Ti = -jt, Ai = -Ot, ji = -Ct) : (qi = Z + Rt, Ui = K + _t, Ri = G + Jt, Ti = jt, Ai = Ot, ji = Ct), _i = Dt, Ji = Et, Wi = Bt, Oi = -It, Ci = -Vt, Di = -Lt, Hi = Ft, Qi = qt, Xi = Ut, Ei = -St, Bi = -Tt, Fi = -At) : 6 == Si ? (Ti = Wt, Ai = Ht, ji = Qt, Oi = rt, Ci = lt, Di = ct, Ei = It, Bi = Vt, Fi = Lt) : 7 == Si ? (Ti = Xt, Ai = Yt, ji = Zt, Oi = rt, Ci = lt, Di = ct, Ei = St, Bi = Tt, Fi = At) : 8 == Si ? (Ti = Kt, Ai = Gt, ji = $t, Oi = rt, Ci = lt, Di = ct, Ei = jt, Bi = Ot, Fi = Ct) : 9 == Si ? (Ti = ti, Ai = ii, ji = si, Oi = mt, Ci = pt, Di = ut, Ei = It, Bi = Vt, Fi = Lt) : 10 == Si ? (Ti = hi, Ai = ei, ji = ai, Oi = mt, Ci = pt, Di = ut, Ei = St, Bi = Tt, Fi = At) : 11 == Si ? (Ti = oi, Ai = ni, ji = ri, Oi = mt, Ci = pt, Di = ut, Ei = jt, Bi = Ot, Fi = Ct) : 12 == Si ? (Ti = li, Ai = ci, ji = mi, Oi = yt, Ci = xt, Di = dt, Ei = It, Bi = Vt, Fi = Lt) : 13 == Si ? (Ti = pi, Ai = ui, ji = yi, Oi = yt, Ci = xt, Di = dt, Ei = St, Bi = Tt, Fi = At) : 14 == Si && (Ti = xi, Ai = di, ji = fi, Oi = yt, Ci = xt, Di = dt, Ei = jt, Bi = Ot, Fi = Ct), Si > 5) { Pi || (Ti = -Ti, Ai = -Ai, ji = -ji); var Zi, Ki, Gi, $i, ts, is, ss, hs, es, as, os; Ki = Ti * (is = U[0]) + Ai * (ss = U[1]) + ji * (hs = U[2]), (Zi = Ti * (Gi = U[3]) + Ai * ($i = U[4]) + ji * (ts = U[5])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), (Zi = Ti * (Gi = U[6]) + Ai * ($i = U[7]) + ji * (ts = U[8])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), (Zi = Ti * (Gi = U[9]) + Ai * ($i = U[10]) + ji * (ts = U[11])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), (Zi = Ti * (Gi = U[12]) + Ai * ($i = U[13]) + ji * (ts = U[14])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), (Zi = Ti * (Gi = U[15]) + Ai * ($i = U[16]) + ji * (ts = U[17])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), (Zi = Ti * (Gi = U[18]) + Ai * ($i = U[19]) + ji * (ts = U[20])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), (Zi = Ti * (Gi = U[21]) + Ai * ($i = U[22]) + ji * (ts = U[23])) > Ki && (Ki = Zi, is = Gi, ss = $i, hs = ts), Ki = Ti * (es = R[0]) + Ai * (as = R[1]) + ji * (os = R[2]), (Zi = Ti * (Gi = R[3]) + Ai * ($i = R[4]) + ji * (ts = R[5])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts), (Zi = Ti * (Gi = R[6]) + Ai * ($i = R[7]) + ji * (ts = R[8])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts), (Zi = Ti * (Gi = R[9]) + Ai * ($i = R[10]) + ji * (ts = R[11])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts), (Zi = Ti * (Gi = R[12]) + Ai * ($i = R[13]) + ji * (ts = R[14])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts), (Zi = Ti * (Gi = R[15]) + Ai * ($i = R[16]) + ji * (ts = R[17])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts), (Zi = Ti * (Gi = R[18]) + Ai * ($i = R[19]) + ji * (ts = R[20])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts), (Zi = Ti * (Gi = R[21]) + Ai * ($i = R[22]) + ji * (ts = R[23])) < Ki && (Ki = Zi, es = Gi, as = $i, os = ts); var ns = ((Gi = es - is) * (Oi - Ei * (B = Oi * Ei + Ci * Bi + Di * Fi)) + ($i = as - ss) * (Ci - Bi * B) + (ts = os - hs) * (Di - Fi * B)) / (1 - B * B); return void s.addPoint(is + Oi * ns + Ti * Vi * .5, ss + Ci * ns + Ai * Vi * .5, hs + Di * ns + ji * Vi * .5, Ti, Ai, ji, Vi, !1) } var rs, ls, cs, ms, ps, us, ys, xs, ds, fs, bs, vs, zs = 1, Ns = 0, ks = 0; Yi ? ((Ns = rt * Ti + lt * Ai + ct * ji) < zs && (zs = Ns, ks = 0), -Ns < zs && (zs = -Ns, ks = 1), (Ns = mt * Ti + pt * Ai + ut * ji) < zs && (zs = Ns, ks = 2), -Ns < zs && (zs = -Ns, ks = 3), (Ns = yt * Ti + xt * Ai + dt * ji) < zs && (zs = Ns, ks = 4), -Ns < zs && (zs = -Ns, ks = 5), 0 == ks ? (rs = U[0], ls = U[1], cs = U[2], ms = U[6], ps = U[7], us = U[8], ys = U[9], xs = U[10], ds = U[11], fs = U[3], bs = U[4], vs = U[5]) : 1 == ks ? (rs = U[15], ls = U[16], cs = U[17], ms = U[21], ps = U[22], us = U[23], ys = U[18], xs = U[19], ds = U[20], fs = U[12], bs = U[13], vs = U[14]) : 2 == ks ? (rs = U[12], ls = U[13], cs = U[14], ms = U[0], ps = U[1], us = U[2], ys = U[3], xs = U[4], ds = U[5], fs = U[15], bs = U[16], vs = U[17]) : 3 == ks ? (rs = U[21], ls = U[22], cs = U[23], ms = U[9], ps = U[10], us = U[11], ys = U[6], xs = U[7], ds = U[8], fs = U[18], bs = U[19], vs = U[20]) : 4 == ks ? (rs = U[12], ls = U[13], cs = U[14], ms = U[18], ps = U[19], us = U[20], ys = U[6], xs = U[7], ds = U[8], fs = U[0], bs = U[1], vs = U[2]) : 5 == ks && (rs = U[3], ls = U[4], cs = U[5], ms = R[9], ps = R[10], us = R[11], ys = U[21], xs = U[22], ds = U[23], fs = U[15], bs = U[16], vs = U[17])) : ((Ns = It * Ti + Vt * Ai + Lt * ji) < zs && (zs = Ns, ks = 0), -Ns < zs && (zs = -Ns, ks = 1), (Ns = St * Ti + Tt * Ai + At * ji) < zs && (zs = Ns, ks = 2), -Ns < zs && (zs = -Ns, ks = 3), (Ns = jt * Ti + Ot * Ai + Ct * ji) < zs && (zs = Ns, ks = 4), -Ns < zs && (zs = -Ns, ks = 5), 0 == ks ? (rs = R[0], ls = R[1], cs = R[2], ms = R[6], ps = R[7], us = R[8], ys = R[9], xs = R[10], ds = R[11], fs = R[3], bs = R[4], vs = R[5]) : 1 == ks ? (rs = R[15], ls = R[16], cs = R[17], ms = R[21], ps = R[22], us = R[23], ys = R[18], xs = R[19], ds = R[20], fs = R[12], bs = R[13], vs = R[14]) : 2 == ks ? (rs = R[12], ls = R[13], cs = R[14], ms = R[0], ps = R[1], us = R[2], ys = R[3], xs = R[4], ds = R[5], fs = R[15], bs = R[16], vs = R[17]) : 3 == ks ? (rs = R[21], ls = R[22], cs = R[23], ms = R[9], ps = R[10], us = R[11], ys = R[6], xs = R[7], ds = R[8], fs = R[18], bs = R[19], vs = R[20]) : 4 == ks ? (rs = R[12], ls = R[13], cs = R[14], ms = R[18], ps = R[19], us = R[20], ys = R[6], xs = R[7], ds = R[8], fs = R[0], bs = R[1], vs = R[2]) : 5 == ks && (rs = R[3], ls = R[4], cs = R[5], ms = R[9], ps = R[10], us = R[11], ys = R[21], xs = R[22], ds = R[23], fs = R[15], bs = R[16], vs = R[17])); var ws, Ms, gs, Is, Vs, Ls, Ss, Ps, Ts; this.clipVertices1[0] = rs, this.clipVertices1[1] = ls, this.clipVertices1[2] = cs, this.clipVertices1[3] = ms, this.clipVertices1[4] = ps, this.clipVertices1[5] = us, this.clipVertices1[6] = ys, this.clipVertices1[7] = xs, this.clipVertices1[8] = ds, this.clipVertices1[9] = fs, this.clipVertices1[10] = bs, this.clipVertices1[11] = vs, Ms = 0, B = ((Is = this.clipVertices1[9]) - qi - _i) * Oi + ((Vs = this.clipVertices1[10]) - Ui - Ji) * Ci + ((Ls = this.clipVertices1[11]) - Ri - Wi) * Di; for (var As = 0; As < 4; As++)gs = 3 * As, F = ((Ss = this.clipVertices1[gs]) - qi - _i) * Oi + ((Ps = this.clipVertices1[gs + 1]) - Ui - Ji) * Ci + ((Ts = this.clipVertices1[gs + 2]) - Ri - Wi) * Di, B > 0 ? F > 0 ? (gs = 3 * Ms, Ms++ , this.clipVertices2[gs] = Ss, this.clipVertices2[gs + 1] = Ps, this.clipVertices2[gs + 2] = Ts) : (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices2[gs] = Is + (Ss - Is) * ns, this.clipVertices2[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices2[gs + 2] = Ls + (Ts - Ls) * ns) : F > 0 && (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices2[gs] = Is + (Ss - Is) * ns, this.clipVertices2[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices2[gs + 2] = Ls + (Ts - Ls) * ns, gs = 3 * Ms, Ms++ , this.clipVertices2[gs] = Ss, this.clipVertices2[gs + 1] = Ps, this.clipVertices2[gs + 2] = Ts), Is = Ss, Vs = Ps, Ls = Ts, B = F; if (0 != (ws = Ms)) { for (Ms = 0, gs = 3 * (ws - 1), B = ((Is = this.clipVertices2[gs]) - qi - Hi) * Ei + ((Vs = this.clipVertices2[gs + 1]) - Ui - Qi) * Bi + ((Ls = this.clipVertices2[gs + 2]) - Ri - Xi) * Fi, As = 0; As < ws; As++)gs = 3 * As, F = ((Ss = this.clipVertices2[gs]) - qi - Hi) * Ei + ((Ps = this.clipVertices2[gs + 1]) - Ui - Qi) * Bi + ((Ts = this.clipVertices2[gs + 2]) - Ri - Xi) * Fi, B > 0 ? F > 0 ? (gs = 3 * Ms, Ms++ , this.clipVertices1[gs] = Ss, this.clipVertices1[gs + 1] = Ps, this.clipVertices1[gs + 2] = Ts) : (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices1[gs] = Is + (Ss - Is) * ns, this.clipVertices1[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices1[gs + 2] = Ls + (Ts - Ls) * ns) : F > 0 && (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices1[gs] = Is + (Ss - Is) * ns, this.clipVertices1[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices1[gs + 2] = Ls + (Ts - Ls) * ns, gs = 3 * Ms, Ms++ , this.clipVertices1[gs] = Ss, this.clipVertices1[gs + 1] = Ps, this.clipVertices1[gs + 2] = Ts), Is = Ss, Vs = Ps, Ls = Ts, B = F; if (0 != (ws = Ms)) { for (Ms = 0, gs = 3 * (ws - 1), B = ((Is = this.clipVertices1[gs]) - qi + _i) * -Oi + ((Vs = this.clipVertices1[gs + 1]) - Ui + Ji) * -Ci + ((Ls = this.clipVertices1[gs + 2]) - Ri + Wi) * -Di, As = 0; As < ws; As++)gs = 3 * As, F = ((Ss = this.clipVertices1[gs]) - qi + _i) * -Oi + ((Ps = this.clipVertices1[gs + 1]) - Ui + Ji) * -Ci + ((Ts = this.clipVertices1[gs + 2]) - Ri + Wi) * -Di, B > 0 ? F > 0 ? (gs = 3 * Ms, Ms++ , this.clipVertices2[gs] = Ss, this.clipVertices2[gs + 1] = Ps, this.clipVertices2[gs + 2] = Ts) : (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices2[gs] = Is + (Ss - Is) * ns, this.clipVertices2[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices2[gs + 2] = Ls + (Ts - Ls) * ns) : F > 0 && (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices2[gs] = Is + (Ss - Is) * ns, this.clipVertices2[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices2[gs + 2] = Ls + (Ts - Ls) * ns, gs = 3 * Ms, Ms++ , this.clipVertices2[gs] = Ss, this.clipVertices2[gs + 1] = Ps, this.clipVertices2[gs + 2] = Ts), Is = Ss, Vs = Ps, Ls = Ts, B = F; if (0 != (ws = Ms)) { for (Ms = 0, gs = 3 * (ws - 1), B = ((Is = this.clipVertices2[gs]) - qi + Hi) * -Ei + ((Vs = this.clipVertices2[gs + 1]) - Ui + Qi) * -Bi + ((Ls = this.clipVertices2[gs + 2]) - Ri + Xi) * -Fi, As = 0; As < ws; As++)gs = 3 * As, F = ((Ss = this.clipVertices2[gs]) - qi + Hi) * -Ei + ((Ps = this.clipVertices2[gs + 1]) - Ui + Qi) * -Bi + ((Ts = this.clipVertices2[gs + 2]) - Ri + Xi) * -Fi, B > 0 ? F > 0 ? (gs = 3 * Ms, Ms++ , this.clipVertices1[gs] = Ss, this.clipVertices1[gs + 1] = Ps, this.clipVertices1[gs + 2] = Ts) : (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices1[gs] = Is + (Ss - Is) * ns, this.clipVertices1[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices1[gs + 2] = Ls + (Ts - Ls) * ns) : F > 0 && (gs = 3 * Ms, Ms++ , ns = B / (B - F), this.clipVertices1[gs] = Is + (Ss - Is) * ns, this.clipVertices1[gs + 1] = Vs + (Ps - Vs) * ns, this.clipVertices1[gs + 2] = Ls + (Ts - Ls) * ns, gs = 3 * Ms, Ms++ , this.clipVertices1[gs] = Ss, this.clipVertices1[gs + 1] = Ps, this.clipVertices1[gs + 2] = Ts), Is = Ss, Vs = Ps, Ls = Ts, B = F; if (ws = Ms, Yi) { var js = h; h = e, e = js } if (0 != ws) { var Os = h != t; if (ws > 4) { Oi = rs - (Is = .25 * (rs + ms + ys + fs)), Ci = ls - (Vs = .25 * (ls + ps + xs + bs)), Di = cs - (Ls = .25 * (cs + us + ds + vs)), Ei = ms - Is, Bi = ps - Vs, Fi = us - Ls; var Cs = 0, Ds = 0, Es = 0, Bs = 0, Fs = -this.INF; for (zs = this.INF, As = 0; As < ws; As++)this.used[As] = !1, gs = 3 * As, (Ns = (Is = this.clipVertices1[gs]) * Oi + (Vs = this.clipVertices1[gs + 1]) * Ci + (Ls = this.clipVertices1[gs + 2]) * Di) < zs && (zs = Ns, Cs = As), Ns > Fs && (Fs = Ns, Es = As); for (this.used[Cs] = !0, this.used[Es] = !0, Fs = -this.INF, zs = this.INF, As = 0; As < ws; As++)this.used[As] || (gs = 3 * As, (Ns = (Is = this.clipVertices1[gs]) * Ei + (Vs = this.clipVertices1[gs + 1]) * Bi + (Ls = this.clipVertices1[gs + 2]) * Fi) < zs && (zs = Ns, Ds = As), Ns > Fs && (Fs = Ns, Bs = As)); gs = 3 * Cs, (Ns = ((Is = this.clipVertices1[gs]) - qi) * Ti + ((Vs = this.clipVertices1[gs + 1]) - Ui) * Ai + ((Ls = this.clipVertices1[gs + 2]) - Ri) * ji) < 0 && s.addPoint(Is, Vs, Ls, Ti, Ai, ji, Ns, Os), gs = 3 * Ds, (Ns = ((Is = this.clipVertices1[gs]) - qi) * Ti + ((Vs = this.clipVertices1[gs + 1]) - Ui) * Ai + ((Ls = this.clipVertices1[gs + 2]) - Ri) * ji) < 0 && s.addPoint(Is, Vs, Ls, Ti, Ai, ji, Ns, Os), gs = 3 * Es, (Ns = ((Is = this.clipVertices1[gs]) - qi) * Ti + ((Vs = this.clipVertices1[gs + 1]) - Ui) * Ai + ((Ls = this.clipVertices1[gs + 2]) - Ri) * ji) < 0 && s.addPoint(Is, Vs, Ls, Ti, Ai, ji, Ns, Os), gs = 3 * Bs, (Ns = ((Is = this.clipVertices1[gs]) - qi) * Ti + ((Vs = this.clipVertices1[gs + 1]) - Ui) * Ai + ((Ls = this.clipVertices1[gs + 2]) - Ri) * ji) < 0 && s.addPoint(Is, Vs, Ls, Ti, Ai, ji, Ns, Os) } else for (As = 0; As < ws; As++)gs = 3 * As, (Ns = ((Is = this.clipVertices1[gs]) - qi) * Ti + ((Vs = this.clipVertices1[gs + 1]) - Ui) * Ai + ((Ls = this.clipVertices1[gs + 2]) - Ri) * ji) < 0 && s.addPoint(Is, Vs, Ls, Ti, Ai, ji, Ns, Os) } } } } } } }), ht.prototype = Object.assign(Object.create(it.prototype), { constructor: ht, getSep: function(t, i, s, h, a) { var o, n, r, l, c, m, p, u, y, x, d, f, b, v = new e, z = t.position.x, N = t.position.y, k = t.position.z, w = i.position.x, M = i.position.y, g = i.position.z, I = w - z, V = M - N, L = g - k; I * I + V * V + L * L == 0 && (V = .001); var S = -I, P = -V, T = -L; this.supportPointB(t, -S, -P, -T, v); var A = v.x, j = v.y, O = v.z; this.supportPointC(i, S, P, T, v); var C = v.x, D = v.y, E = v.z, B = C - A, F = D - j, q = E - O; if (B * S + F * P + q * T <= 0) return !1; if (S = F * L - q * V, P = q * I - B * L, T = B * V - F * I, S * S + P * P + T * T == 0) return s.set(B - I, F - V, q - L).normalize(), h.set(.5 * (A + C), .5 * (j + D), .5 * (O + E)), !0; this.supportPointB(t, -S, -P, -T, v); var U = v.x, R = v.y, _ = v.z; this.supportPointC(i, S, P, T, v); var J = v.x, W = v.y, H = v.z, Q = J - U, X = W - R, Y = H - _; if (Q * S + X * P + Y * T <= 0) return !1; (S = (n = F - V) * (m = Y - L) - (r = q - L) * (c = X - V)) * I + (P = r * (l = Q - I) - (o = B - I) * m) * V + (T = o * c - n * l) * L > 0 && (o = B, n = F, r = q, B = Q, F = X, q = Y, Q = o, X = n, Y = r, o = A, n = j, r = O, A = U, j = R, O = _, U = o, R = n, _ = r, o = C, n = D, r = E, C = J, D = W, E = H, J = o, W = n, H = r, S = -S, P = -P, T = -T); for (var Z = 0; ;) { if (++Z > 100) return !1; this.supportPointB(t, -S, -P, -T, v); var K = v.x, G = v.y, $ = v.z; this.supportPointC(i, S, P, T, v); var tt = v.x, it = v.y, st = v.z, ht = tt - K, et = it - G, at = st - $; if (ht * S + et * P + at * T <= 0) return !1; if ((F * at - q * et) * I + (q * ht - B * at) * V + (B * et - F * ht) * L < 0) Q = ht, X = et, Y = at, U = K, R = G, _ = $, J = tt, W = it, H = st, S = (n = F - V) * (m = at - L) - (r = q - L) * (c = et - V), P = r * (l = ht - I) - (o = B - I) * m, T = o * c - n * l; else if ((et * Y - at * X) * I + (at * Q - ht * Y) * V + (ht * X - et * Q) * L < 0) B = ht, F = et, q = at, A = K, j = G, O = $, C = tt, D = it, E = st, S = (n = et - V) * (m = Y - L) - (r = at - L) * (c = X - V), P = r * (l = Q - I) - (o = ht - I) * m, T = o * c - n * l; else for (var ot = !1; ;) { if (o = Q - B, n = X - F, r = Y - q, l = ht - B, c = et - F, m = at - q, S = n * m - r * c, P = r * l - o * m, T = o * c - n * l, p = 1 / Pt.sqrt(S * S + P * P + T * T), S *= p, P *= p, T *= p, S * B + P * F + T * q >= 0 && !ot) { var nt = (F * Y - q * X) * ht + (q * Q - B * Y) * et + (B * X - F * Q) * at, rt = (et * Y - at * X) * I + (at * Q - ht * Y) * V + (ht * X - et * Q) * L, lt = (V * q - L * F) * ht + (L * B - I * q) * et + (I * F - V * B) * at, ct = (X * q - Y * F) * I + (Y * B - Q * q) * V + (Q * F - X * B) * L, mt = nt + rt + lt + ct; mt <= 0 && (nt = 0, mt = (rt = (X * at - Y * et) * S + (Y * ht - Q * at) * P + (Q * et - X * ht) * T) + (lt = (et * Y - at * X) * S + (at * Q - ht * Y) * P + (ht * X - et * Q) * T) + (ct = (F * Y - q * X) * S + (q * Q - B * Y) * P + (B * X - F * Q) * T)); var pt = 1 / mt; u = (z * nt + A * rt + U * lt + K * ct) * pt, y = (N * nt + j * rt + R * lt + G * ct) * pt, x = (k * nt + O * rt + _ * lt + $ * ct) * pt, d = (w * nt + C * rt + J * lt + tt * ct) * pt, f = (M * nt + D * rt + W * lt + it * ct) * pt, b = (g * nt + E * rt + H * lt + st * ct) * pt, ot = !0 } this.supportPointB(t, -S, -P, -T, v); var ut = v.x, yt = v.y, xt = v.z; this.supportPointC(i, S, P, T, v); var dt = v.x, ft = v.y, bt = v.z, vt = dt - ut, zt = ft - yt, Nt = bt - xt, kt = -(vt * S + zt * P + Nt * T); if ((vt - ht) * S + (zt - et) * P + (Nt - at) * T <= .01 || kt >= 0) return !!ot && (s.set(-S, -P, -T), h.set(.5 * (u + d), .5 * (y + f), .5 * (x + b)), a.x = kt, !0); (zt * q - Nt * F) * I + (Nt * B - vt * q) * V + (vt * F - zt * B) * L < 0 ? (zt * Y - Nt * X) * I + (Nt * Q - vt * Y) * V + (vt * X - zt * Q) * L < 0 ? (B = vt, F = zt, q = Nt, A = ut, j = yt, O = xt, C = dt, D = ft, E = bt) : (ht = vt, et = zt, at = Nt, K = ut, G = yt, $ = xt, tt = dt, it = ft, st = bt) : (zt * at - Nt * et) * I + (Nt * ht - vt * at) * V + (vt * et - zt * ht) * L < 0 ? (Q = vt, X = zt, Y = Nt, U = ut, R = yt, _ = xt, J = dt, W = ft, H = bt) : (B = vt, F = zt, q = Nt, A = ut, j = yt, O = xt, C = dt, D = ft, E = bt) } } }, supportPointB: function(t, i, s, h, e) { var a, o, n, r = t.rotation.elements, l = r[0] * i + r[3] * s + r[6] * h, c = r[1] * i + r[4] * s + r[7] * h, m = r[2] * i + r[5] * s + r[8] * h, p = t.halfWidth, u = t.halfHeight, y = t.halfDepth; a = l < 0 ? -p : p, o = c < 0 ? -u : u, n = m < 0 ? -y : y, l = r[0] * a + r[1] * o + r[2] * n + t.position.x, c = r[3] * a + r[4] * o + r[5] * n + t.position.y, m = r[6] * a + r[7] * o + r[8] * n + t.position.z, e.set(l, c, m) }, supportPointC: function(t, i, s, h, e) { var a, o, n, r = t.rotation.elements, l = r[0] * i + r[3] * s + r[6] * h, c = r[1] * i + r[4] * s + r[7] * h, m = r[2] * i + r[5] * s + r[8] * h, p = l, u = m, y = p * p + u * u, x = t.radius, d = t.halfHeight; 0 == y ? c < 0 ? (a = x, o = -d, n = 0) : (a = x, o = d, n = 0) : (y = t.radius / Pt.sqrt(y), c < 0 ? (a = p * y, o = -d, n = u * y) : (a = p * y, o = d, n = u * y)), l = r[0] * a + r[1] * o + r[2] * n + t.position.x, c = r[3] * a + r[4] * o + r[5] * n + t.position.y, m = r[6] * a + r[7] * o + r[8] * n + t.position.z, e.set(l, c, m) }, detectCollision: function(t, i, s) { var h, a; this.flip ? (h = i, a = t) : (h = t, a = i); var o = new e, n = new e, r = new e; if (this.getSep(h, a, o, n, r)) { var l = h.position.x, c = h.position.y, m = h.position.z, p = a.position.x, u = a.position.y, y = a.position.z, x = h.halfWidth, d = h.halfHeight, f = h.halfDepth, b = a.halfHeight, v = a.radius, z = h.dimentions, N = z[0], k = z[1], w = z[2], M = z[3], g = z[4], I = z[5], V = z[6], L = z[7], S = z[8], P = z[9], T = z[10], A = z[11], j = z[12], O = z[13], C = z[14], D = z[15], E = z[16], B = z[17], F = a.normalDirection.x, q = a.normalDirection.y, U = a.normalDirection.z, R = a.halfDirection.x, _ = a.halfDirection.y, J = a.halfDirection.z, W = o.x, H = o.y, Q = o.z, X = W * N + H * k + Q * w, Y = W * M + H * g + Q * I, Z = W * V + H * L + Q * S, K = W * F + H * q + Q * U, G = X > 0, $ = Y > 0, tt = Z > 0, it = K > 0; G || (X = -X), $ || (Y = -Y), tt || (Z = -Z), it || (K = -K); var st = 0; K > .999 ? st = X > .999 ? X > K ? 1 : 4 : Y > .999 ? Y > K ? 2 : 4 : Z > .999 && Z > K ? 3 : 4 : X > .999 ? st = 1 : Y > .999 ? st = 2 : Z > .999 && (st = 3); var ht, et, at, ot, nt, rt, lt, ct, mt, pt, ut, yt, xt, dt, ft, bt, vt, zt, Nt, kt, wt, Mt, gt, It, Vt, Lt, St, Tt, At, jt, Ot, Ct, Dt, Et, Bt, Ft, qt, Ut, Rt, _t, Jt, Wt, Ht, Qt, Xt, Yt, Zt, Kt, Gt, $t, ti, ii, si; if (0 == st) s.addPoint(n.x, n.y, n.z, W, H, Q, r.x, this.flip); else if (4 == st) { it ? (ot = p - R, nt = u - _, rt = y - J, W = -F, H = -q, Q = -U) : (ot = p + R, nt = u + _, rt = y + J, W = F, H = q, Q = U); var hi, ei, ai, oi, ni, ri, li, ci, mi, pi, ui, yi; st = 0, (Ht = N * W + k * H + w * Q) < (kt = 1) && (kt = Ht, st = 0), -Ht < kt && (kt = -Ht, st = 1), (Ht = M * W + g * H + I * Q) < kt && (kt = Ht, st = 2), -Ht < kt && (kt = -Ht, st = 3), (Ht = V * W + L * H + S * Q) < kt && (kt = Ht, st = 4), -Ht < kt && (kt = -Ht, st = 5); var xi = h.elements; switch (st) { case 0: hi = xi[0], ei = xi[1], ai = xi[2], oi = xi[6], ni = xi[7], ri = xi[8], li = xi[9], ci = xi[10], mi = xi[11], pi = xi[3], ui = xi[4], yi = xi[5]; break; case 1: hi = xi[15], ei = xi[16], ai = xi[17], oi = xi[21], ni = xi[22], ri = xi[23], li = xi[18], ci = xi[19], mi = xi[20], pi = xi[12], ui = xi[13], yi = xi[14]; break; case 2: hi = xi[12], ei = xi[13], ai = xi[14], oi = xi[0], ni = xi[1], ri = xi[2], li = xi[3], ci = xi[4], mi = xi[5], pi = xi[15], ui = xi[16], yi = xi[17]; break; case 3: hi = xi[21], ei = xi[22], ai = xi[23], oi = xi[9], ni = xi[10], ri = xi[11], li = xi[6], ci = xi[7], mi = xi[8], pi = xi[18], ui = xi[19], yi = xi[20]; break; case 4: hi = xi[12], ei = xi[13], ai = xi[14], oi = xi[18], ni = xi[19], ri = xi[20], li = xi[6], ci = xi[7], mi = xi[8], pi = xi[0], ui = xi[1], yi = xi[2]; break; case 5: hi = xi[3], ei = xi[4], ai = xi[5], oi = xi[9], ni = xi[10], ri = xi[11], li = xi[21], ci = xi[22], mi = xi[23], pi = xi[15], ui = xi[16], yi = xi[17] }(Nt = W * (hi - ot) + H * (ei - nt) + Q * (ai - rt)) <= 0 && s.addPoint(hi, ei, ai, -W, -H, -Q, Nt, this.flip), (Nt = W * (oi - ot) + H * (ni - nt) + Q * (ri - rt)) <= 0 && s.addPoint(oi, ni, ri, -W, -H, -Q, Nt, this.flip), (Nt = W * (li - ot) + H * (ci - nt) + Q * (mi - rt)) <= 0 && s.addPoint(li, ci, mi, -W, -H, -Q, Nt, this.flip), (Nt = W * (pi - ot) + H * (ui - nt) + Q * (yi - rt)) <= 0 && s.addPoint(pi, ui, yi, -W, -H, -Q, Nt, this.flip) } else { switch (st) { case 1: G ? (ht = l + P, et = c + T, at = m + A, W = N, H = k, Q = w) : (ht = l - P, et = c - T, at = m - A, W = -N, H = -k, Q = -w), Yt = M, Zt = g, Kt = I, ii = d, Gt = V, $t = L, ti = S, si = f; break; case 2: $ ? (ht = l + j, et = c + O, at = m + C, W = M, H = g, Q = I) : (ht = l - j, et = c - O, at = m - C, W = -M, H = -g, Q = -I), Yt = N, Zt = k, Kt = w, ii = x, Gt = V, $t = L, ti = S, si = f; break; case 3: tt ? (ht = l + D, et = c + E, at = m + B, W = V, H = L, Q = S) : (ht = l - D, et = c - E, at = m - B, W = -V, H = -L, Q = -S), Yt = N, Zt = k, Kt = w, ii = x, Gt = M, $t = g, ti = I, si = d }if (kt = W * F + H * q + Q * U, wt = kt < 0 ? b : -b, ot = p + wt * F, nt = u + wt * q, rt = y + wt * U, K >= .999999 ? (Mt = -H, gt = Q, It = W) : (Mt = W, gt = H, It = Q), wt = Mt * F + gt * q + It * U, Lt = wt * F - Mt, St = wt * q - gt, Tt = wt * U - It, 0 == (wt = Pt.sqrt(Lt * Lt + St * St + Tt * Tt))) return; if (wt = v / wt, Lt *= wt, St *= wt, Tt *= wt, Mt = ot + Lt, gt = nt + St, It = rt + Tt, kt < -.96 || kt > .96) lt = F * F * 1.5 - .5, ct = F * q * 1.5 - .866025403 * U, mt = F * U * 1.5 + .866025403 * q, pt = q * F * 1.5 + .866025403 * U, ut = q * q * 1.5 - .5, yt = q * U * 1.5 - .866025403 * F, xt = U * F * 1.5 - .866025403 * q, dt = U * q * 1.5 + .866025403 * F, ft = U * U * 1.5 - .5, Wt = Gt * (Mt = (bt = Mt) - (Nt = W * (bt - ht) + H * ((vt = gt) - et) + Q * ((zt = It) - at)) * W - ht) + $t * (gt = vt - Nt * H - et) + ti * (It = zt - Nt * Q - at), (Ut = Yt * Mt + Zt * gt + Kt * It) < -ii ? Ut = -ii : Ut > ii && (Ut = ii), Wt < -si ? Wt = -si : Wt > si && (Wt = si), bt = ht + (Mt = Ut * Yt + Wt * Gt), vt = et + (gt = Ut * Zt + Wt * $t), zt = at + (It = Ut * Kt + Wt * ti), s.addPoint(bt, vt, zt, W, H, Q, Nt, this.flip), vt = Lt * pt + St * ut + Tt * yt, zt = Lt * xt + St * dt + Tt * ft, (Nt = W * ((bt = (Lt = bt = Lt * lt + St * ct + Tt * mt) + ot) - ht) + H * ((vt = (St = vt) + nt) - et) + Q * ((zt = (Tt = zt) + rt) - at)) <= 0 && (Wt = Gt * (Mt = bt - Nt * W - ht) + $t * (gt = vt - Nt * H - et) + ti * (It = zt - Nt * Q - at), (Ut = Yt * Mt + Zt * gt + Kt * It) < -ii ? Ut = -ii : Ut > ii && (Ut = ii), Wt < -si ? Wt = -si : Wt > si && (Wt = si), bt = ht + (Mt = Ut * Yt + Wt * Gt), vt = et + (gt = Ut * Zt + Wt * $t), zt = at + (It = Ut * Kt + Wt * ti), s.addPoint(bt, vt, zt, W, H, Q, Nt, this.flip)), vt = Lt * pt + St * ut + Tt * yt, zt = Lt * xt + St * dt + Tt * ft, (Nt = W * ((bt = (Lt = bt = Lt * lt + St * ct + Tt * mt) + ot) - ht) + H * ((vt = (St = vt) + nt) - et) + Q * ((zt = (Tt = zt) + rt) - at)) <= 0 && (Wt = Gt * (Mt = bt - Nt * W - ht) + $t * (gt = vt - Nt * H - et) + ti * (It = zt - Nt * Q - at), (Ut = Yt * Mt + Zt * gt + Kt * It) < -ii ? Ut = -ii : Ut > ii && (Ut = ii), Wt < -si ? Wt = -si : Wt > si && (Wt = si), bt = ht + (Mt = Ut * Yt + Wt * Gt), vt = et + (gt = Ut * Zt + Wt * $t), zt = at + (It = Ut * Kt + Wt * ti), s.addPoint(bt, vt, zt, W, H, Q, Nt, this.flip)); else { if (Bt = Mt, Ft = gt, qt = It, Ut = W * (Bt - ht) + H * (Ft - et) + Q * (qt - at), Bt -= Ut * W, Ft -= Ut * H, qt -= Ut * Q, kt > 0 ? (Rt = Mt + 2 * R, _t = gt + 2 * _, Jt = It + 2 * J) : (Rt = Mt - 2 * R, _t = gt - 2 * _, Jt = It - 2 * J), Wt = W * (Rt - ht) + H * (_t - et) + Q * (Jt - at), Rt -= Wt * W, _t -= Wt * H, Jt -= Wt * Q, At = Bt - ht, jt = Ft - et, Ot = qt - at, Ct = Rt - ht, Dt = _t - et, Et = Jt - at, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = Wt - Ut, X = At * Yt + jt * Zt + Ot * Kt, Y = Ct * Yt + Dt * Zt + Et * Kt, Ht = X - ii, Qt = Y - ii, Ht > 0) { if (Qt > 0) return; X = (At = (Bt += Mt * (Xt = Ht / (Ht - Qt))) - ht) * Yt + (jt = (Ft += gt * Xt) - et) * Zt + (Ot = (qt += It * Xt) - at) * Kt, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = Wt - (Ut += Vt * Xt) } else Qt > 0 && (Y = (Ct = (Rt = Bt + Mt * (Xt = Ht / (Ht - Qt))) - ht) * Yt + (Dt = (_t = Ft + gt * Xt) - et) * Zt + (Et = (Jt = qt + It * Xt) - at) * Kt, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = (Wt = Ut + Vt * Xt) - Ut); if (Ht = X + ii, Qt = Y + ii, Ht < 0) { if (Qt < 0) return; At = (Bt += Mt * (Xt = Ht / (Ht - Qt))) - ht, jt = (Ft += gt * Xt) - et, Ot = (qt += It * Xt) - at, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = Wt - (Ut += Vt * Xt) } else Qt < 0 && (Ct = (Rt = Bt + Mt * (Xt = Ht / (Ht - Qt))) - ht, Dt = (_t = Ft + gt * Xt) - et, Et = (Jt = qt + It * Xt) - at, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = (Wt = Ut + Vt * Xt) - Ut); if (X = At * Gt + jt * $t + Ot * ti, Y = Ct * Gt + Dt * $t + Et * ti, Ht = X - si, Qt = Y - si, Ht > 0) { if (Qt > 0) return; X = (At = (Bt += Mt * (Xt = Ht / (Ht - Qt))) - ht) * Gt + (jt = (Ft += gt * Xt) - et) * $t + (Ot = (qt += It * Xt) - at) * ti, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = Wt - (Ut += Vt * Xt) } else Qt > 0 && (Y = (Ct = (Rt = Bt + Mt * (Xt = Ht / (Ht - Qt))) - ht) * Gt + (Dt = (_t = Ft + gt * Xt) - et) * $t + (Et = (Jt = qt + It * Xt) - at) * ti, Mt = Rt - Bt, gt = _t - Ft, It = Jt - qt, Vt = (Wt = Ut + Vt * Xt) - Ut); if (Ht = X + si, Qt = Y + si, Ht < 0) { if (Qt < 0) return; Bt += Mt * (Xt = Ht / (Ht - Qt)), Ft += gt * Xt, qt += It * Xt, Ut += Vt * Xt } else Qt < 0 && (Rt = Bt + Mt * (Xt = Ht / (Ht - Qt)), _t = Ft + gt * Xt, Jt = qt + It * Xt, Wt = Ut + Vt * Xt); Ut < 0 && s.addPoint(Bt, Ft, qt, W, H, Q, Ut, this.flip), Wt < 0 && s.addPoint(Rt, _t, Jt, W, H, Q, Wt, this.flip) } } } } }), et.prototype = Object.assign(Object.create(it.prototype), { constructor: et, getSep: function(t, i, s, h, a) { var o, n, r, l, c, m, p, u, y, x, d, f, b, v = new e, z = t.position.x, N = t.position.y, k = t.position.z, w = i.position.x, M = i.position.y, g = i.position.z, I = w - z, V = M - N, L = g - k; I * I + V * V + L * L == 0 && (V = .001); var S = -I, P = -V, T = -L; this.supportPoint(t, -S, -P, -T, v); var A = v.x, j = v.y, O = v.z; this.supportPoint(i, S, P, T, v); var C = v.x, D = v.y, E = v.z, B = C - A, F = D - j, q = E - O; if (B * S + F * P + q * T <= 0) return !1; if (S = F * L - q * V, P = q * I - B * L, T = B * V - F * I, S * S + P * P + T * T == 0) return s.set(B - I, F - V, q - L).normalize(), h.set(.5 * (A + C), .5 * (j + D), .5 * (O + E)), !0; this.supportPoint(t, -S, -P, -T, v); var U = v.x, R = v.y, _ = v.z; this.supportPoint(i, S, P, T, v); var J = v.x, W = v.y, H = v.z, Q = J - U, X = W - R, Y = H - _; if (Q * S + X * P + Y * T <= 0) return !1; (S = (n = F - V) * (m = Y - L) - (r = q - L) * (c = X - V)) * I + (P = r * (l = Q - I) - (o = B - I) * m) * V + (T = o * c - n * l) * L > 0 && (o = B, n = F, r = q, B = Q, F = X, q = Y, Q = o, X = n, Y = r, o = A, n = j, r = O, A = U, j = R, O = _, U = o, R = n, _ = r, o = C, n = D, r = E, C = J, D = W, E = H, J = o, W = n, H = r, S = -S, P = -P, T = -T); for (var Z = 0; ;) { if (++Z > 100) return !1; this.supportPoint(t, -S, -P, -T, v); var K = v.x, G = v.y, $ = v.z; this.supportPoint(i, S, P, T, v); var tt = v.x, it = v.y, st = v.z, ht = tt - K, et = it - G, at = st - $; if (ht * S + et * P + at * T <= 0) return !1; if ((F * at - q * et) * I + (q * ht - B * at) * V + (B * et - F * ht) * L < 0) Q = ht, X = et, Y = at, U = K, R = G, _ = $, J = tt, W = it, H = st, S = (n = F - V) * (m = at - L) - (r = q - L) * (c = et - V), P = r * (l = ht - I) - (o = B - I) * m, T = o * c - n * l; else if ((et * Y - at * X) * I + (at * Q - ht * Y) * V + (ht * X - et * Q) * L < 0) B = ht, F = et, q = at, A = K, j = G, O = $, C = tt, D = it, E = st, S = (n = et - V) * (m = Y - L) - (r = at - L) * (c = X - V), P = r * (l = Q - I) - (o = ht - I) * m, T = o * c - n * l; else for (var ot = !1; ;) { if (o = Q - B, n = X - F, r = Y - q, l = ht - B, c = et - F, m = at - q, S = n * m - r * c, P = r * l - o * m, T = o * c - n * l, p = 1 / Pt.sqrt(S * S + P * P + T * T), S *= p, P *= p, T *= p, S * B + P * F + T * q >= 0 && !ot) { var nt = (F * Y - q * X) * ht + (q * Q - B * Y) * et + (B * X - F * Q) * at, rt = (et * Y - at * X) * I + (at * Q - ht * Y) * V + (ht * X - et * Q) * L, lt = (V * q - L * F) * ht + (L * B - I * q) * et + (I * F - V * B) * at, ct = (X * q - Y * F) * I + (Y * B - Q * q) * V + (Q * F - X * B) * L, mt = nt + rt + lt + ct; mt <= 0 && (nt = 0, mt = (rt = (X * at - Y * et) * S + (Y * ht - Q * at) * P + (Q * et - X * ht) * T) + (lt = (et * Y - at * X) * S + (at * Q - ht * Y) * P + (ht * X - et * Q) * T) + (ct = (F * Y - q * X) * S + (q * Q - B * Y) * P + (B * X - F * Q) * T)); var pt = 1 / mt; u = (z * nt + A * rt + U * lt + K * ct) * pt, y = (N * nt + j * rt + R * lt + G * ct) * pt, x = (k * nt + O * rt + _ * lt + $ * ct) * pt, d = (w * nt + C * rt + J * lt + tt * ct) * pt, f = (M * nt + D * rt + W * lt + it * ct) * pt, b = (g * nt + E * rt + H * lt + st * ct) * pt, ot = !0 } this.supportPoint(t, -S, -P, -T, v); var ut = v.x, yt = v.y, xt = v.z; this.supportPoint(i, S, P, T, v); var dt = v.x, ft = v.y, bt = v.z, vt = dt - ut, zt = ft - yt, Nt = bt - xt, kt = -(vt * S + zt * P + Nt * T); if ((vt - ht) * S + (zt - et) * P + (Nt - at) * T <= .01 || kt >= 0) return !!ot && (s.set(-S, -P, -T), h.set(.5 * (u + d), .5 * (y + f), .5 * (x + b)), a.x = kt, !0); (zt * q - Nt * F) * I + (Nt * B - vt * q) * V + (vt * F - zt * B) * L < 0 ? (zt * Y - Nt * X) * I + (Nt * Q - vt * Y) * V + (vt * X - zt * Q) * L < 0 ? (B = vt, F = zt, q = Nt, A = ut, j = yt, O = xt, C = dt, D = ft, E = bt) : (ht = vt, et = zt, at = Nt, K = ut, G = yt, $ = xt, tt = dt, it = ft, st = bt) : (zt * at - Nt * et) * I + (Nt * ht - vt * at) * V + (vt * et - zt * ht) * L < 0 ? (Q = vt, X = zt, Y = Nt, U = ut, R = yt, _ = xt, J = dt, W = ft, H = bt) : (B = vt, F = zt, q = Nt, A = ut, j = yt, O = xt, C = dt, D = ft, E = bt) } } }, supportPoint: function(t, i, s, h, e) { var a, o, n, r = t.rotation.elements, l = r[0] * i + r[3] * s + r[6] * h, c = r[1] * i + r[4] * s + r[7] * h, m = r[2] * i + r[5] * s + r[8] * h, p = l, u = m, y = p * p + u * u, x = t.radius, d = t.halfHeight; 0 == y ? c < 0 ? (a = x, o = -d, n = 0) : (a = x, o = d, n = 0) : (y = t.radius / Pt.sqrt(y), c < 0 ? (a = p * y, o = -d, n = u * y) : (a = p * y, o = d, n = u * y)), l = r[0] * a + r[1] * o + r[2] * n + t.position.x, c = r[3] * a + r[4] * o + r[5] * n + t.position.y, m = r[6] * a + r[7] * o + r[8] * n + t.position.z, e.set(l, c, m) }, detectCollision: function(t, i, s) { var h, a; t.id < i.id ? (h = t, a = i) : (h = i, a = t); var o, n, r, l, c, m, p, u, y, x, d, f, b, v, z, N, k, w, M, g, I, V = h.position, L = a.position, S = V.x, P = V.y, T = V.z, A = L.x, j = L.y, O = L.z, C = h.halfHeight, D = a.halfHeight, E = h.normalDirection, B = a.normalDirection, F = h.halfDirection, q = a.halfDirection, U = h.radius, R = a.radius, _ = E.x, J = E.y, W = E.z, H = B.x, Q = B.y, X = B.z, Y = F.x, Z = F.y, K = F.z, G = q.x, $ = q.y, tt = q.z, it = S - A, st = P - j, ht = T - O, et = new e, at = new e, ot = new e; if (this.getSep(h, a, et, at, ot)) { var nt = et.x * _ + et.y * J + et.z * W, rt = et.x * H + et.y * Q + et.z * X, lt = nt > 0, ct = rt > 0; lt || (nt = -nt), ct || (rt = -rt); var mt = 0; (nt > .999 || rt > .999) && (mt = nt > rt ? 1 : 2); var pt, ut, yt, xt, dt, ft, bt, vt, zt, Nt, kt, wt, Mt, gt, It, Vt, Lt, St, Tt, At, jt = ot.x; switch (pt = et.x, ut = et.y, yt = et.z, mt) { case 0: s.addPoint(at.x, at.y, at.z, pt, ut, yt, jt, !1); break; case 1: if (lt ? (n = S + Y, r = P + Z, l = T + K, pt = _, ut = J, yt = W) : (n = S - Y, r = P - Z, l = T - K, pt = -_, ut = -J, yt = -W), M = pt * H + ut * Q + yt * X, o = M < 0 ? D : -D, c = A + o * H, m = j + o * Q, p = O + o * X, rt >= .999999 ? (u = -ut, y = yt, x = pt) : (u = pt, y = ut, x = yt), o = u * H + y * Q + x * X, it = o * H - u, st = o * Q - y, ht = o * X - x, 0 == (o = Pt.sqrt(it * it + st * st + ht * ht))) break; if (o = R / o, it *= o, st *= o, ht *= o, u = c + it, y = m + st, x = p + ht, M < -.96 || M > .96) xt = H * H * 1.5 - .5, dt = H * Q * 1.5 - .866025403 * X, ft = H * X * 1.5 + .866025403 * Q, bt = Q * H * 1.5 + .866025403 * X, vt = Q * Q * 1.5 - .5, zt = Q * X * 1.5 - .866025403 * H, Nt = X * H * 1.5 - .866025403 * Q, kt = X * Q * 1.5 + .866025403 * H, wt = X * X * 1.5 - .5, (o = (u = (Mt = u) - (Vt = pt * (Mt - n) + ut * ((gt = y) - r) + yt * ((It = x) - l)) * pt - n) * u + (y = gt - Vt * ut - r) * y + (x = It - Vt * yt - l) * x) > U * U && (u *= o = U / Pt.sqrt(o), y *= o, x *= o), Mt = n + u, gt = r + y, It = l + x, s.addPoint(Mt, gt, It, pt, ut, yt, Vt, !1), gt = it * bt + st * vt + ht * zt, It = it * Nt + st * kt + ht * wt, (Vt = pt * ((Mt = (it = Mt = it * xt + st * dt + ht * ft) + c) - n) + ut * ((gt = (st = gt) + m) - r) + yt * ((It = (ht = It) + p) - l)) <= 0 && ((o = (u = Mt - Vt * pt - n) * u + (y = gt - Vt * ut - r) * y + (x = It - Vt * yt - l) * x) > U * U && (u *= o = U / Pt.sqrt(o), y *= o, x *= o), Mt = n + u, gt = r + y, It = l + x, s.addPoint(Mt, gt, It, pt, ut, yt, Vt, !1)), gt = it * bt + st * vt + ht * zt, It = it * Nt + st * kt + ht * wt, (Vt = pt * ((Mt = (it = Mt = it * xt + st * dt + ht * ft) + c) - n) + ut * ((gt = (st = gt) + m) - r) + yt * ((It = (ht = It) + p) - l)) <= 0 && ((o = (u = Mt - Vt * pt - n) * u + (y = gt - Vt * ut - r) * y + (x = It - Vt * yt - l) * x) > U * U && (u *= o = U / Pt.sqrt(o), y *= o, x *= o), Mt = n + u, gt = r + y, It = l + x, s.addPoint(Mt, gt, It, pt, ut, yt, Vt, !1)); else { if (d = u, f = y, b = x, k = pt * (d - n) + ut * (f - r) + yt * (b - l), d -= k * pt, f -= k * ut, b -= k * yt, M > 0 ? (v = u + H * D * 2, z = y + Q * D * 2, N = x + X * D * 2) : (v = u - H * D * 2, z = y - Q * D * 2, N = x - X * D * 2), w = pt * (v - n) + ut * (z - r) + yt * (N - l), v -= w * pt, z -= w * ut, N -= w * yt, it = n - d, st = r - f, ht = l - b, u = v - d, y = z - f, x = N - b, Lt = it * it + st * st + ht * ht, St = it * u + st * y + ht * x, Tt = u * u + y * y + x * x, (At = St * St - Tt * (Lt - U * U)) < 0) break; (I = (St - (At = Pt.sqrt(At))) / Tt) < (g = (St + At) / Tt) && (o = g, g = I, I = o), I > 1 && (I = 1), g < 0 && (g = 0), u = d + (v - d) * g, y = f + (z - f) * g, x = b + (N - b) * g, v = d + (v - d) * I, z = f + (z - f) * I, N = b + (N - b) * I, d = u, f = y, b = x, o = k + (w - k) * g, w = k + (w - k) * I, (k = o) < 0 && s.addPoint(d, f, b, pt, ut, yt, Vt, !1), w < 0 && s.addPoint(v, z, N, pt, ut, yt, Vt, !1) } break; case 2: if (ct ? (c = A - G, m = j - $, p = O - tt, pt = -H, ut = -Q, yt = -X) : (c = A + G, m = j + $, p = O + tt, pt = H, ut = Q, yt = X), M = pt * _ + ut * J + yt * W, o = M < 0 ? C : -C, n = S + o * _, r = P + o * J, l = T + o * W, nt >= .999999 ? (u = -ut, y = yt, x = pt) : (u = pt, y = ut, x = yt), o = u * _ + y * J + x * W, it = o * _ - u, st = o * J - y, ht = o * W - x, 0 == (o = Pt.sqrt(it * it + st * st + ht * ht))) break; if (o = U / o, it *= o, st *= o, ht *= o, u = n + it, y = r + st, x = l + ht, M < -.96 || M > .96) xt = _ * _ * 1.5 - .5, dt = _ * J * 1.5 - .866025403 * W, ft = _ * W * 1.5 + .866025403 * J, bt = J * _ * 1.5 + .866025403 * W, vt = J * J * 1.5 - .5, zt = J * W * 1.5 - .866025403 * _, Nt = W * _ * 1.5 - .866025403 * J, kt = W * J * 1.5 + .866025403 * _, wt = W * W * 1.5 - .5, (o = (u = (Mt = u) - (Vt = pt * (Mt - c) + ut * ((gt = y) - m) + yt * ((It = x) - p)) * pt - c) * u + (y = gt - Vt * ut - m) * y + (x = It - Vt * yt - p) * x) > R * R && (u *= o = R / Pt.sqrt(o), y *= o, x *= o), Mt = c + u, gt = m + y, It = p + x, s.addPoint(Mt, gt, It, -pt, -ut, -yt, Vt, !1), gt = it * bt + st * vt + ht * zt, It = it * Nt + st * kt + ht * wt, (Vt = pt * ((Mt = (it = Mt = it * xt + st * dt + ht * ft) + n) - c) + ut * ((gt = (st = gt) + r) - m) + yt * ((It = (ht = It) + l) - p)) <= 0 && ((o = (u = Mt - Vt * pt - c) * u + (y = gt - Vt * ut - m) * y + (x = It - Vt * yt - p) * x) > R * R && (u *= o = R / Pt.sqrt(o), y *= o, x *= o), Mt = c + u, gt = m + y, It = p + x, s.addPoint(Mt, gt, It, -pt, -ut, -yt, Vt, !1)), gt = it * bt + st * vt + ht * zt, It = it * Nt + st * kt + ht * wt, (Vt = pt * ((Mt = (it = Mt = it * xt + st * dt + ht * ft) + n) - c) + ut * ((gt = (st = gt) + r) - m) + yt * ((It = (ht = It) + l) - p)) <= 0 && ((o = (u = Mt - Vt * pt - c) * u + (y = gt - Vt * ut - m) * y + (x = It - Vt * yt - p) * x) > R * R && (u *= o = R / Pt.sqrt(o), y *= o, x *= o), Mt = c + u, gt = m + y, It = p + x, s.addPoint(Mt, gt, It, -pt, -ut, -yt, Vt, !1)); else { if (d = u, f = y, b = x, k = pt * (d - c) + ut * (f - m) + yt * (b - p), d -= k * pt, f -= k * ut, b -= k * yt, M > 0 ? (v = u + _ * C * 2, z = y + J * C * 2, N = x + W * C * 2) : (v = u - _ * C * 2, z = y - J * C * 2, N = x - W * C * 2), w = pt * (v - c) + ut * (z - m) + yt * (N - p), v -= w * pt, z -= w * ut, N -= w * yt, it = c - d, st = m - f, ht = p - b, u = v - d, y = z - f, x = N - b, Lt = it * it + st * st + ht * ht, St = it * u + st * y + ht * x, Tt = u * u + y * y + x * x, (At = St * St - Tt * (Lt - R * R)) < 0) break; (I = (St - (At = Pt.sqrt(At))) / Tt) < (g = (St + At) / Tt) && (o = g, g = I, I = o), I > 1 && (I = 1), g < 0 && (g = 0), u = d + (v - d) * g, y = f + (z - f) * g, x = b + (N - b) * g, v = d + (v - d) * I, z = f + (z - f) * I, N = b + (N - b) * I, d = u, f = y, b = x, o = k + (w - k) * g, w = k + (w - k) * I, (k = o) < 0 && s.addPoint(d, f, b, -pt, -ut, -yt, k, !1), w < 0 && s.addPoint(v, z, N, -pt, -ut, -yt, w, !1) } } } } }), at.prototype = Object.assign(Object.create(it.prototype), { constructor: at, detectCollision: function(t, i, s) { var h, e; this.flip ? (h = i, e = t) : (h = t, e = i); var a, o, n, r, l, c = e.dimentions, m = h.position, p = m.x, u = m.y, y = m.z, x = e.position, d = x.x, f = x.y, b = x.z, v = h.radius, z = e.halfWidth, N = e.halfHeight, k = e.halfDepth, w = p - d, M = u - f, g = y - b, I = c[0] * w + c[1] * M + c[2] * g, V = c[3] * w + c[4] * M + c[5] * g, L = c[6] * w + c[7] * M + c[8] * g, S = 0; I > z ? I = z : I < -z ? I = -z : S = 1, V > N ? V = N : V < -N ? V = -N : S |= 2, L > k ? L = k : L < -k ? L = -k : S |= 4, 7 == S ? (w = I < 0 ? z + I : z - I, M = V < 0 ? N + V : N - V, g = L < 0 ? k + L : k - L, w < M ? w < g ? (r = w - z, I < 0 ? (I = -z, w = c[0], M = c[1], g = c[2]) : (I = z, w = -c[0], M = -c[1], g = -c[2])) : (r = g - k, L < 0 ? (L = -k, w = c[6], M = c[7], g = c[8]) : (L = k, w = -c[6], M = -c[7], g = -c[8])) : M < g ? (r = M - N, V < 0 ? (V = -N, w = c[3], M = c[4], g = c[5]) : (V = N, w = -c[3], M = -c[4], g = -c[5])) : (r = g - k, L < 0 ? (L = -k, w = c[6], M = c[7], g = c[8]) : (L = k, w = -c[6], M = -c[7], g = -c[8])), a = d + I * c[0] + V * c[3] + L * c[6], o = f + I * c[1] + V * c[4] + L * c[7], n = b + I * c[2] + V * c[5] + L * c[8], s.addPoint(p + v * w, u + v * M, y + v * g, w, M, g, r - v, this.flip)) : (a = d + I * c[0] + V * c[3] + L * c[6], o = f + I * c[1] + V * c[4] + L * c[7], n = b + I * c[2] + V * c[5] + L * c[8], (r = (w = a - m.x) * w + (M = o - m.y) * M + (g = n - m.z) * g) > 0 && r < v * v && (w *= l = 1 / (r = Pt.sqrt(r)), M *= l, g *= l, s.addPoint(p + v * w, u + v * M, y + v * g, w, M, g, r - v, this.flip))) } }), ot.prototype = Object.assign(Object.create(it.prototype), { constructor: ot, detectCollision: function(t, i, s) { var h, e; this.flip ? (h = i, e = t) : (h = t, e = i); var a = h.position, o = a.x, n = a.y, r = a.z, l = e.position, c = l.x, m = l.y, p = l.z, u = e.normalDirection.x, y = e.normalDirection.y, x = e.normalDirection.z, d = h.radius, f = e.radius, b = d + f, v = e.halfHeight, z = o - c, N = n - m, k = r - p, w = z * u + N * y + k * x; if (!(w < -v - d || w > v + d)) { var M = c + w * u, g = m + w * y, I = p + w * x, V = o - M, L = n - g, S = r - I, P = V * V + L * L + S * S; if (!(P > b * b)) { P > f * f && (V *= P = f / Pt.sqrt(P), L *= P, S *= P), w < -v ? w = -v : w > v && (w = v); var T; (P = (z = (M = c + w * u + V) - o) * z + (N = (g = m + w * y + L) - n) * N + (k = (I = p + w * x + S) - r) * k) > 0 && P < d * d && (z *= T = 1 / (P = Pt.sqrt(P)), N *= T, k *= T, s.addPoint(o + z * d, n + N * d, r + k * d, z, N, k, P - d, this.flip)) } } } }), nt.prototype = Object.assign(Object.create(it.prototype), { constructor: nt, detectCollision: function(t, i, s) { var h = t, e = i, a = h.position, o = e.position, n = o.x - a.x, r = o.y - a.y, l = o.z - a.z, c = n * n + r * r + l * l, m = h.radius, p = m + e.radius; if (c > 0 && c < p * p) { var u = 1 / (c = Pt.sqrt(c)); n *= u, r *= u, l *= u, s.addPoint(a.x + n * m, a.y + r * m, a.z + l * m, n, r, l, c - p, !1) } } }), rt.prototype = Object.assign(Object.create(it.prototype), { constructor: rt, detectCollision: function(t, i, s) { var h, e = this.n, a = this.p, o = this.flip ? i : t, n = this.flip ? t : i, r = o.radius; e.sub(o.position, n.position), e.x *= n.normal.x, e.y *= n.normal.y, e.z *= n.normal.z, (h = e.lengthSq()) > 0 && h < r * r && (h = Pt.sqrt(h), e.copy(n.normal).negate(), a.copy(o.position).addScaledVector(e, r), s.addPointVec(a, e, h - r, this.flip)) } }), lt.prototype = Object.assign(Object.create(it.prototype), { constructor: lt, detectCollision: function(t, i, s) { var h, e = this.n, a = this.p, o = this.cc, n = this.flip ? i : t, r = this.flip ? t : i, l = n.dimentions, c = n.halfWidth, m = n.halfHeight, p = n.halfDepth, u = 0; this.dix.set(l[0], l[1], l[2]), this.diy.set(l[3], l[4], l[5]), this.diz.set(l[6], l[7], l[8]), e.sub(n.position, r.position), e.x *= r.normal.x, e.y *= r.normal.y, e.z *= r.normal.z, o.set(Pt.dotVectors(this.dix, e), Pt.dotVectors(this.diy, e), Pt.dotVectors(this.diz, e)), o.x > c ? o.x = c : o.x < -c ? o.x = -c : u = 1, o.y > m ? o.y = m : o.y < -m ? o.y = -m : u |= 2, o.z > p ? o.z = p : o.z < -p ? o.z = -p : u |= 4, 7 === u && (e.set(o.x < 0 ? c + o.x : c - o.x, o.y < 0 ? m + o.y : m - o.y, o.z < 0 ? p + o.z : p - o.z), e.x < e.y ? e.x < e.z ? (h = e.x - c, o.x < 0 ? (o.x = -c, e.copy(this.dix)) : (o.x = c, e.subEqual(this.dix))) : (h = e.z - p, o.z < 0 ? (o.z = -p, e.copy(this.diz)) : (o.z = p, e.subEqual(this.diz))) : e.y < e.z ? (h = e.y - m, o.y < 0 ? (o.y = -m, e.copy(this.diy)) : (o.y = m, e.subEqual(this.diy))) : (h = e.z - p, o.z < 0 ? (o.z = -p, e.copy(this.diz)) : (o.z = p, e.subEqual(this.diz))), a.copy(r.position).addScaledVector(e, 1), s.addPointVec(a, e, h, this.flip)) } }), Object.assign(ct.prototype, { World: !0, play: function() { if (null === this.timer) { var t = this; this.timer = setInterval(function() { t.step() }, this.timerate) } }, stop: function() { null !== this.timer && (clearInterval(this.timer), this.timer = null) }, setGravity: function(t) { this.gravity.fromArray(t) }, getInfo: function() { return this.isStat ? this.performance.show() : "" }, clear: function() { for (this.stop(), this.preLoop = null, this.postLoop = null, this.randX = 65535; null !== this.joints;)this.removeJoint(this.joints); for (; null !== this.contacts;)this.removeContact(this.contacts); for (; null !== this.rigidBodies;)this.removeRigidBody(this.rigidBodies) }, addRigidBody: function(t) { t.parent && s("World", "It is not possible to be added to more than one world one of the rigid body"), t.setParent(this); for (var i = t.shapes; null !== i; i = i.next)this.addShape(i); null !== this.rigidBodies && ((this.rigidBodies.prev = t).next = this.rigidBodies), this.rigidBodies = t, this.numRigidBodies++ }, removeRigidBody: function(t) { var i = t; if (i.parent === this) { i.awake(); for (var s = i.jointLink; null != s;) { var h = s.joint; s = s.next, this.removeJoint(h) } for (var e = t.shapes; null !== e; e = e.next)this.removeShape(e); var a = i.prev, o = i.next; null !== a && (a.next = o), null !== o && (o.prev = a), this.rigidBodies == i && (this.rigidBodies = o), i.prev = null, i.next = null, i.parent = null, this.numRigidBodies-- } }, getByName: function(t) { for (var i = this.rigidBodies; null !== i;) { if (i.name === t) return i; i = i.next } for (var s = this.joints; null !== s;) { if (s.name === t) return s; s = s.next } return null }, addShape: function(t) { t.parent && t.parent.parent || s("World", "It is not possible to be added alone to shape world"), t.proxy = this.broadPhase.createProxy(t), t.updateProxy(), this.broadPhase.addProxy(t.proxy) }, removeShape: function(t) { this.broadPhase.removeProxy(t.proxy), t.proxy = null }, addJoint: function(t) { t.parent && s("World", "It is not possible to be added to more than one world one of the joint"), null != this.joints && ((this.joints.prev = t).next = this.joints), this.joints = t, t.setParent(this), this.numJoints++ , t.awake(), t.attach() }, removeJoint: function(t) { var i = t, s = i.prev, h = i.next; null !== s && (s.next = h), null !== h && (h.prev = s), this.joints == i && (this.joints = h), i.prev = null, i.next = null, this.numJoints-- , i.awake(), i.detach(), i.parent = null }, addContact: function(t, i) { var s; null !== this.unusedContacts ? (s = this.unusedContacts, this.unusedContacts = this.unusedContacts.next) : s = new F, s.attach(t, i), s.detector = this.detectors[t.type][i.type], this.contacts && ((this.contacts.prev = s).next = this.contacts), this.contacts = s, this.numContacts++ }, removeContact: function(t) { var i = t.prev, s = t.next; s && (s.prev = i), i && (i.next = s), this.contacts == t && (this.contacts = s), t.prev = null, t.next = null, t.detach(), t.next = this.unusedContacts, this.unusedContacts = t, this.numContacts-- }, getContact: function(t, i) { t = t.constructor === q ? t.name : t, i = i.constructor === q ? i.name : i; for (var s, h, e = this.contacts; null !== e;) { if (s = e.body1.name, h = e.body2.name, s === t && h === i || h === t && s === i) return e.touching ? e : null; e = e.next } return null }, checkContact: function(t, i) { for (var s, h, e = this.contacts; null !== e;) { if (s = e.body1.name || " ", h = e.body2.name || " ", s == t && h == i || h == t && s == i) return !!e.touching; e = e.next } }, callSleep: function(t) { return !!t.allowSleep && (!(t.linearVelocity.lengthSq() > .04) && !(t.angularVelocity.lengthSq() > .25)) }, step: function() { var t = this.isStat; t && this.performance.setTime(0); for (var i = this.rigidBodies; null !== i;)i.addedToIsland = !1, i.sleeping && i.testWakeUp(), i = i.next; t && this.performance.setTime(1), this.broadPhase.detectPairs(); for (var s = this.broadPhase.pairs, h = this.broadPhase.numPairs; h--;) { var a, o, n = s[h]; n.shape1.id < n.shape2.id ? (a = n.shape1, o = n.shape2) : (a = n.shape2, o = n.shape1); var r; r = a.numContacts < o.numContacts ? a.contactLink : o.contactLink; for (var l = !1; r;) { if ((N = r.contact).shape1 == a && N.shape2 == o) { N.persisting = !0, l = !0; break } r = r.next } l || this.addContact(a, o) } for (t && this.performance.calcBroadPhase(), this.numContactPoints = 0, N = this.contacts; null !== N;)if (N.persisting || !N.shape1.aabb.intersectTest(N.shape2.aabb)) { var c = N.body1, m = N.body2; (c.isDynamic && !c.sleeping || m.isDynamic && !m.sleeping) && N.updateManifold(), this.numContactPoints += N.manifold.numPoints, N.persisting = !1, N.constraint.addedToIsland = !1, N = N.next } else { var p = N.next; this.removeContact(N), N = p } t && this.performance.calcNarrowPhase(); var u, y, x = 1 / this.timeStep; for (u = this.joints; null !== u; u = u.next)u.addedToIsland = !1; this.islandRigidBodies = [], this.islandConstraints = [], this.islandStack = [], t && this.performance.setTime(1), this.numIslands = 0; for (var d = this.rigidBodies; null !== d; d = d.next)if (!(d.addedToIsland || d.isStatic || d.sleeping)) if (d.isLonely()) d.isDynamic && d.linearVelocity.addScaledVector(this.gravity, this.timeStep), this.callSleep(d) ? (d.sleepTime += this.timeStep, d.sleepTime > .5 ? d.sleep() : d.updatePosition(this.timeStep)) : (d.sleepTime = 0, d.updatePosition(this.timeStep)), this.numIslands++; else { var f = 0, b = 0, v = 1; this.islandStack[0] = d, d.addedToIsland = !0; do { if (i = this.islandStack[--v], this.islandStack[v] = null, i.sleeping = !1, this.islandRigidBodies[f++] = i, !i.isStatic) { for (var z = i.contactLink; null !== z; z = z.next) { var N = z.contact; !(y = N.constraint).addedToIsland && N.touching && (this.islandConstraints[b++] = y, y.addedToIsland = !0, (p = z.body).addedToIsland || (this.islandStack[v++] = p, p.addedToIsland = !0)) } for (var k = i.jointLink; null !== k; k = k.next)(y = k.joint).addedToIsland || (this.islandConstraints[b++] = y, y.addedToIsland = !0, !(p = k.body).addedToIsland && p.isDynamic && (this.islandStack[v++] = p, p.addedToIsland = !0)) } } while (0 != v); for (var w = (new e).addScaledVector(this.gravity, this.timeStep), M = f; M--;)(i = this.islandRigidBodies[M]).isDynamic && i.linearVelocity.addEqual(w); if (this.enableRandomizer) for (M = b; M--;)if (0 !== M) { var g = (this.randX = this.randX * this.randA + this.randB & 2147483647) / 2147483648 * M | 0; y = this.islandConstraints[M], this.islandConstraints[M] = this.islandConstraints[g], this.islandConstraints[g] = y } for (M = b; M--;)this.islandConstraints[M].preSolve(this.timeStep, x); for (var I = this.numIterations; I--;)for (M = b; M--;)this.islandConstraints[M].solve(); for (M = b; M--;)this.islandConstraints[M].postSolve(), this.islandConstraints[M] = null; var V = 10; for (M = f; M--;)i = this.islandRigidBodies[M], this.callSleep(i) ? (i.sleepTime += this.timeStep, i.sleepTime < V && (V = i.sleepTime)) : (i.sleepTime = 0, V = 0); if (V > .5) for (M = f; M--;)this.islandRigidBodies[M].sleep(), this.islandRigidBodies[M] = null; else for (M = f; M--;)this.islandRigidBodies[M].updatePosition(this.timeStep), this.islandRigidBodies[M] = null; this.numIslands++ } t && this.performance.calcEnd(), null !== this.postLoop && this.postLoop() }, remove: function(t) { }, add: function(t) { var i = (t = t || {}).type || "box"; return i.constructor === String && (i = [i]), "joint" === i[0].substring(0, 5) ? this.initJoint(i[0], t) : this.initBody(i, t) }, initBody: function(t, i) { var s = this.invScale, h = i.move || !1, o = i.kinematic || !1, n = i.pos || [0, 0, 0]; n = n.map(function(t) { return t * s }); var r = i.posShape || [0, 0, 0]; r = r.map(function(t) { return t * s }); var l = i.rot || [0, 0, 0]; l = l.map(function(t) { return t * Pt.degtorad }); var y = i.rotShape || [0, 0, 0]; y = l.map(function(t) { return t * Pt.degtorad }); var d = void 0 === i.size ? [1, 1, 1] : i.size; 1 === d.length && (d[1] = d[0]), 2 === d.length && (d[2] = d[0]), d = d.map(function(t) { return t * s }); var f = new x; void 0 !== i.density && (f.density = i.density), void 0 !== i.friction && (f.friction = i.friction), void 0 !== i.restitution && (f.restitution = i.restitution), void 0 !== i.belongsTo && (f.belongsTo = i.belongsTo), void 0 !== i.collidesWith && (f.collidesWith = i.collidesWith), void 0 !== i.config && (void 0 !== i.config[0] && (f.density = i.config[0]), void 0 !== i.config[1] && (f.friction = i.config[1]), void 0 !== i.config[2] && (f.restitution = i.config[2]), void 0 !== i.config[3] && (f.belongsTo = i.config[3]), void 0 !== i.config[4] && (f.collidesWith = i.config[4])); for (var b, v, z = new q(new e(n[0], n[1], n[2]), (new a).setFromEuler(l[0], l[1], l[2])), N = 0; N < t.length; N++) { switch (v = 3 * N, void 0 !== r[v] && f.relativePosition.set(r[v], r[v + 1], r[v + 2]), void 0 !== y[v] && f.relativeRotation.setQuat((new a).setFromEuler(y[v], y[v + 1], y[v + 2])), t[N]) { case "sphere": b = new m(f, d[v]); break; case "cylinder": b = new p(f, d[v], d[v + 1]); break; case "box": b = new c(f, d[v], d[v + 1], d[v + 2]); break; case "plane": b = new u(f) }z.addShape(b) } return i.neverSleep || o ? z.allowSleep = !1 : z.allowSleep = !0, z.isKinematic = o, h ? i.massPos || i.massRot ? z.setupMass(1, !1) : z.setupMass(1, !0) : z.setupMass(2), void 0 !== i.name && (z.name = i.name), this.addRigidBody(z), h && (i.sleep ? z.sleep() : z.awake()), z }, initJoint: function(t, i) { var h = this.invScale, e = i.axe1 || [1, 0, 0], a = i.axe2 || [1, 0, 0], o = i.pos1 || [0, 0, 0], n = i.pos2 || [0, 0, 0]; o = o.map(function(t) { return t * h }), n = n.map(function(t) { return t * h }); var r, l; "jointDistance" === t ? (r = i.min || 0, l = i.max || 10, r *= h, l *= h) : (r = i.min || 57.29578, l = i.max || 0, r *= Pt.degtorad, l *= Pt.degtorad); var c = i.limit || null, m = i.spring || null, p = i.motor || null, u = new T; u.scale = this.scale, u.invScale = this.invScale, u.allowCollision = i.collision || !1, u.localAxis1.set(e[0], e[1], e[2]), u.localAxis2.set(a[0], a[1], a[2]), u.localAnchorPoint1.set(o[0], o[1], o[2]), u.localAnchorPoint2.set(n[0], n[1], n[2]); var y = null, x = null; if (void 0 === i.body1 || void 0 === i.body2) return s("World", "Can't add joint if attach rigidbodys not define !"); if (i.body1.constructor === String ? y = this.getByName(i.body1) : i.body1.constructor === Number ? y = this.getByName(i.body1) : i.body1.constructor === q && (y = i.body1), i.body2.constructor === String ? x = this.getByName(i.body2) : i.body2.constructor === Number ? x = this.getByName(i.body2) : i.body2.constructor === q && (x = i.body2), null === y || null === x) return s("World", "Can't add joint attach rigidbodys not find !"); u.body1 = y, u.body2 = x; var d; switch (t) { case "jointDistance": d = new g(u, r, l), null !== m && d.limitMotor.setSpring(m[0], m[1]), null !== p && d.limitMotor.setMotor(p[0], p[1]); break; case "jointHinge": case "joint": d = new k(u, r, l), null !== m && d.limitMotor.setSpring(m[0], m[1]), null !== p && d.limitMotor.setMotor(p[0], p[1]); break; case "jointPrisme": d = new L(u, r, l); break; case "jointSlide": d = new S(u, r, l); break; case "jointBall": d = new w(u); break; case "jointWheel": d = new P(u), null !== c && d.rotationalLimitMotor1.setLimit(c[0], c[1]), null !== m && d.rotationalLimitMotor1.setSpring(m[0], m[1]), null !== p && d.rotationalLimitMotor1.setMotor(p[0], p[1]) }return d.name = i.name || "", this.addJoint(d), d } }), t.Math = Pt, t.Vec3 = e, t.Quat = a, t.Mat33 = o, t.Shape = l, t.Box = c, t.Sphere = m, t.Cylinder = p, t.Plane = u, t.Particle = y, t.ShapeConfig = x, t.LimitMotor = d, t.HingeJoint = k, t.BallAndSocketJoint = w, t.DistanceJoint = g, t.PrismaticJoint = L, t.SliderJoint = S, t.WheelJoint = P, t.JointConfig = T, t.RigidBody = q, t.World = ct, t.REVISION = mt, t.BR_NULL = pt, t.BR_BRUTE_FORCE = ut, t.BR_SWEEP_AND_PRUNE = yt, t.BR_BOUNDING_VOLUME_TREE = xt, t.BODY_NULL = dt, t.BODY_DYNAMIC = 1, t.BODY_STATIC = 2, t.BODY_KINEMATIC = 3, t.BODY_GHOST = 4, t.SHAPE_NULL = ft, t.SHAPE_SPHERE = bt, t.SHAPE_BOX = vt, t.SHAPE_CYLINDER = zt, t.SHAPE_PLANE = Nt, t.SHAPE_PARTICLE = kt, t.SHAPE_TETRA = 6, t.JOINT_NULL = wt, t.JOINT_DISTANCE = Mt, t.JOINT_BALL_AND_SOCKET = gt, t.JOINT_HINGE = It, t.JOINT_WHEEL = Vt, t.JOINT_SLIDER = Lt, t.JOINT_PRISMATIC = St, t.AABB_PROX = .005, t.printError = s, t.InfoDisplay = h, Object.defineProperty(t, "__esModule", { value: !0 }) });

/*
 * Copyright (c) 2015 cannon.js Authors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&false)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.CANNON=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports={
  "name": "cannon",
  "version": "0.6.2",
  "description": "A lightweight 3D physics engine written in JavaScript.",
  "homepage": "https://github.com/schteppe/cannon.js",
  "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
  "keywords": [
    "cannon.js",
    "cannon",
    "physics",
    "engine",
    "3d"
  ],
  "main": "./build/cannon.js",
  "engines": {
    "node": "*"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/schteppe/cannon.js.git"
  },
  "bugs": {
    "url": "https://github.com/schteppe/cannon.js/issues"
  },
  "licenses": [
    {
      "type": "MIT"
    }
  ],
  "devDependencies": {
    "jshint": "latest",
    "uglify-js": "latest",
    "nodeunit": "^0.9.0",
    "grunt": "~0.4.0",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-nodeunit": "^0.4.1",
    "grunt-contrib-concat": "~0.1.3",
    "grunt-contrib-uglify": "^0.5.1",
    "grunt-browserify": "^2.1.4",
    "grunt-contrib-yuidoc": "^0.5.2",
    "browserify": "*"
  },
  "dependencies": {}
}

},{}],2:[function(_dereq_,module,exports){
// Export classes
module.exports = {
    version :                       _dereq_('../package.json').version,

    AABB :                          _dereq_('./collision/AABB'),
    ArrayCollisionMatrix :          _dereq_('./collision/ArrayCollisionMatrix'),
    Body :                          _dereq_('./objects/Body'),
    Box :                           _dereq_('./shapes/Box'),
    Broadphase :                    _dereq_('./collision/Broadphase'),
    Constraint :                    _dereq_('./constraints/Constraint'),
    ContactEquation :               _dereq_('./equations/ContactEquation'),
    Narrowphase :                   _dereq_('./world/Narrowphase'),
    ConeTwistConstraint :           _dereq_('./constraints/ConeTwistConstraint'),
    ContactMaterial :               _dereq_('./material/ContactMaterial'),
    ConvexPolyhedron :              _dereq_('./shapes/ConvexPolyhedron'),
    Cylinder :                      _dereq_('./shapes/Cylinder'),
    DistanceConstraint :            _dereq_('./constraints/DistanceConstraint'),
    Equation :                      _dereq_('./equations/Equation'),
    EventTarget :                   _dereq_('./utils/EventTarget'),
    FrictionEquation :              _dereq_('./equations/FrictionEquation'),
    GSSolver :                      _dereq_('./solver/GSSolver'),
    GridBroadphase :                _dereq_('./collision/GridBroadphase'),
    Heightfield :                   _dereq_('./shapes/Heightfield'),
    HingeConstraint :               _dereq_('./constraints/HingeConstraint'),
    LockConstraint :                _dereq_('./constraints/LockConstraint'),
    Mat3 :                          _dereq_('./math/Mat3'),
    Material :                      _dereq_('./material/Material'),
    NaiveBroadphase :               _dereq_('./collision/NaiveBroadphase'),
    ObjectCollisionMatrix :         _dereq_('./collision/ObjectCollisionMatrix'),
    Pool :                          _dereq_('./utils/Pool'),
    Particle :                      _dereq_('./shapes/Particle'),
    Plane :                         _dereq_('./shapes/Plane'),
    PointToPointConstraint :        _dereq_('./constraints/PointToPointConstraint'),
    Quaternion :                    _dereq_('./math/Quaternion'),
    Ray :                           _dereq_('./collision/Ray'),
    RaycastVehicle :                _dereq_('./objects/RaycastVehicle'),
    RaycastResult :                 _dereq_('./collision/RaycastResult'),
    RigidVehicle :                  _dereq_('./objects/RigidVehicle'),
    RotationalEquation :            _dereq_('./equations/RotationalEquation'),
    RotationalMotorEquation :       _dereq_('./equations/RotationalMotorEquation'),
    SAPBroadphase :                 _dereq_('./collision/SAPBroadphase'),
    SPHSystem :                     _dereq_('./objects/SPHSystem'),
    Shape :                         _dereq_('./shapes/Shape'),
    Solver :                        _dereq_('./solver/Solver'),
    Sphere :                        _dereq_('./shapes/Sphere'),
    SplitSolver :                   _dereq_('./solver/SplitSolver'),
    Spring :                        _dereq_('./objects/Spring'),
    Trimesh :                       _dereq_('./shapes/Trimesh'),
    Vec3 :                          _dereq_('./math/Vec3'),
    Vec3Pool :                      _dereq_('./utils/Vec3Pool'),
    World :                         _dereq_('./world/World'),
};

},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');
var Utils = _dereq_('../utils/Utils');

module.exports = AABB;

/**
 * Axis aligned bounding box class.
 * @class AABB
 * @constructor
 * @param {Object} [options]
 * @param {Vec3}   [options.upperBound]
 * @param {Vec3}   [options.lowerBound]
 */
function AABB(options){
    options = options || {};

    /**
     * The lower bound of the bounding box.
     * @property lowerBound
     * @type {Vec3}
     */
    this.lowerBound = new Vec3();
    if(options.lowerBound){
        this.lowerBound.copy(options.lowerBound);
    }

    /**
     * The upper bound of the bounding box.
     * @property upperBound
     * @type {Vec3}
     */
    this.upperBound = new Vec3();
    if(options.upperBound){
        this.upperBound.copy(options.upperBound);
    }
}

var tmp = new Vec3();

/**
 * Set the AABB bounds from a set of points.
 * @method setFromPoints
 * @param {Array} points An array of Vec3's.
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {number} skinSize
 * @return {AABB} The self object
 */
AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize){
    var l = this.lowerBound,
        u = this.upperBound,
        q = quaternion;

    // Set to the first point
    l.copy(points[0]);
    if(q){
        q.vmult(l, l);
    }
    u.copy(l);

    for(var i = 1; i<points.length; i++){
        var p = points[i];

        if(q){
            q.vmult(p, tmp);
            p = tmp;
        }

        if(p.x > u.x){ u.x = p.x; }
        if(p.x < l.x){ l.x = p.x; }
        if(p.y > u.y){ u.y = p.y; }
        if(p.y < l.y){ l.y = p.y; }
        if(p.z > u.z){ u.z = p.z; }
        if(p.z < l.z){ l.z = p.z; }
    }

    // Add offset
    if (position) {
        position.vadd(l, l);
        position.vadd(u, u);
    }

    if(skinSize){
        l.x -= skinSize;
        l.y -= skinSize;
        l.z -= skinSize;
        u.x += skinSize;
        u.y += skinSize;
        u.z += skinSize;
    }

    return this;
};

/**
 * Copy bounds from an AABB to this AABB
 * @method copy
 * @param  {AABB} aabb Source to copy from
 * @return {AABB} The this object, for chainability
 */
AABB.prototype.copy = function(aabb){
    this.lowerBound.copy(aabb.lowerBound);
    this.upperBound.copy(aabb.upperBound);
    return this;
};

/**
 * Clone an AABB
 * @method clone
 */
AABB.prototype.clone = function(){
    return new AABB().copy(this);
};

/**
 * Extend this AABB so that it covers the given AABB too.
 * @method extend
 * @param  {AABB} aabb
 */
AABB.prototype.extend = function(aabb){
    // Extend lower bound
    var l = aabb.lowerBound.x;
    if(this.lowerBound.x > l){
        this.lowerBound.x = l;
    }

    // Upper
    var u = aabb.upperBound.x;
    if(this.upperBound.x < u){
        this.upperBound.x = u;
    }

    // Extend lower bound
    var l = aabb.lowerBound.y;
    if(this.lowerBound.y > l){
        this.lowerBound.y = l;
    }

    // Upper
    var u = aabb.upperBound.y;
    if(this.upperBound.y < u){
        this.upperBound.y = u;
    }

    // Extend lower bound
    var l = aabb.lowerBound.z;
    if(this.lowerBound.z > l){
        this.lowerBound.z = l;
    }

    // Upper
    var u = aabb.upperBound.z;
    if(this.upperBound.z < u){
        this.upperBound.z = u;
    }
};

/**
 * Returns true if the given AABB overlaps this AABB.
 * @method overlaps
 * @param  {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.overlaps = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |--------|
    // l1       u1

    return ((l2.x <= u1.x && u1.x <= u2.x) || (l1.x <= u2.x && u2.x <= u1.x)) &&
           ((l2.y <= u1.y && u1.y <= u2.y) || (l1.y <= u2.y && u2.y <= u1.y)) &&
           ((l2.z <= u1.z && u1.z <= u2.z) || (l1.z <= u2.z && u2.z <= u1.z));
};

/**
 * Returns true if the given AABB is fully contained in this AABB.
 * @method contains
 * @param {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.contains = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |---------------|
    // l1              u1

    return (
        (l1.x <= l2.x && u1.x >= u2.x) &&
        (l1.y <= l2.y && u1.y >= u2.y) &&
        (l1.z <= l2.z && u1.z >= u2.z)
    );
};

/**
 * @method getCorners
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 * @param {Vec3} d
 * @param {Vec3} e
 * @param {Vec3} f
 * @param {Vec3} g
 * @param {Vec3} h
 */
AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h){
    var l = this.lowerBound,
        u = this.upperBound;

    a.copy(l);
    b.set( u.x, l.y, l.z );
    c.set( u.x, u.y, l.z );
    d.set( l.x, u.y, u.z );
    e.set( u.x, l.y, l.z );
    f.set( l.x, u.y, l.z );
    g.set( l.x, l.y, u.z );
    h.copy(u);
};

var transformIntoFrame_corners = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];

/**
 * Get the representation of an AABB in another frame.
 * @method toLocalFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toLocalFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToLocal(corner, corner);
    }

    return target.setFromPoints(corners);
};

/**
 * Get the representation of an AABB in the global frame.
 * @method toWorldFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toWorldFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToWorld(corner, corner);
    }

    return target.setFromPoints(corners);
};

},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(_dereq_,module,exports){
module.exports = ArrayCollisionMatrix;

/**
 * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
 * @class ArrayCollisionMatrix
 * @constructor
 */
function ArrayCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Array}
     */
	this.matrix = [];
}

/**
 * Get an element
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ArrayCollisionMatrix.prototype.get = function(i, j) {
	i = i.index;
	j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	return this.matrix[(i*(i + 1)>>1) + j-1];
};

/**
 * Set an element
 * @method set
 * @param {Number} i
 * @param {Number} j
 * @param {Number} value
 */
ArrayCollisionMatrix.prototype.set = function(i, j, value) {
	i = i.index;
	j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	this.matrix[(i*(i + 1)>>1) + j-1] = value ? 1 : 0;
};

/**
 * Sets all elements to zero
 * @method reset
 */
ArrayCollisionMatrix.prototype.reset = function() {
	for (var i=0, l=this.matrix.length; i!==l; i++) {
		this.matrix[i]=0;
	}
};

/**
 * Sets the max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
	this.matrix.length = n*(n-1)>>1;
};

},{}],5:[function(_dereq_,module,exports){
var Body = _dereq_('../objects/Body');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Shape = _dereq_('../shapes/Shape');
var Plane = _dereq_('../shapes/Plane');

module.exports = Broadphase;

/**
 * Base class for broadphase implementations
 * @class Broadphase
 * @constructor
 * @author schteppe
 */
function Broadphase(){
    /**
    * The world to search for collisions in.
    * @property world
    * @type {World}
    */
    this.world = null;

    /**
     * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
     * @property useBoundingBoxes
     * @type {Boolean}
     */
    this.useBoundingBoxes = false;

    /**
     * Set to true if the objects in the world moved.
     * @property {Boolean} dirty
     */
    this.dirty = true;
}

/**
 * Get the collision pairs from the world
 * @method collisionPairs
 * @param {World} world The world to search in
 * @param {Array} p1 Empty array to be filled with body objects
 * @param {Array} p2 Empty array to be filled with body objects
 */
Broadphase.prototype.collisionPairs = function(world,p1,p2){
    throw new Error("collisionPairs not implemented for this BroadPhase class!");
};

/**
 * Check if a body pair needs to be intersection tested at all.
 * @method needBroadphaseCollision
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {bool}
 */
var Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC = Body.STATIC | Body.KINEMATIC;
Broadphase.prototype.needBroadphaseCollision = function(bodyA,bodyB){

    // Check collision filter masks
    if( (bodyA.collisionFilterGroup & bodyB.collisionFilterMask)===0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)===0){
        return false;
    }

    // Check types
    if(((bodyA.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC)!==0 || bodyA.sleepState === Body.SLEEPING) &&
       ((bodyB.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC)!==0 || bodyB.sleepState === Body.SLEEPING)) {
        // Both bodies are static, kinematic or sleeping. Skip.
        return false;
    }

    return true;
};

/**
 * Check if the bounding volumes of two bodies intersect.
 * @method intersectionTest
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {array} pairs1
 * @param {array} pairs2
  */
Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2){
    if(this.useBoundingBoxes){
        this.doBoundingBoxBroadphase(bodyA,bodyB,pairs1,pairs2);
    } else {
        this.doBoundingSphereBroadphase(bodyA,bodyB,pairs1,pairs2);
    }
};

/**
 * Check if the bounding spheres of two bodies are intersecting.
 * @method doBoundingSphereBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1 bodyA is appended to this array if intersection
 * @param {Array} pairs2 bodyB is appended to this array if intersection
 */
var Broadphase_collisionPairs_r = new Vec3(), // Temp objects
    Broadphase_collisionPairs_normal =  new Vec3(),
    Broadphase_collisionPairs_quat =  new Quaternion(),
    Broadphase_collisionPairs_relpos  =  new Vec3();
Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    var r = Broadphase_collisionPairs_r;
    bodyB.position.vsub(bodyA.position,r);
    var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
    var norm2 = r.norm2();
    if(norm2 < boundingRadiusSum2){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Check if the bounding boxes of two bodies are intersecting.
 * @method doBoundingBoxBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    if(bodyA.aabbNeedsUpdate){
        bodyA.computeAABB();
    }
    if(bodyB.aabbNeedsUpdate){
        bodyB.computeAABB();
    }

    // Check AABB / AABB
    if(bodyA.aabb.overlaps(bodyB.aabb)){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Removes duplicate pairs from the pair arrays.
 * @method makePairsUnique
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var Broadphase_makePairsUnique_temp = { keys:[] },
    Broadphase_makePairsUnique_p1 = [],
    Broadphase_makePairsUnique_p2 = [];
Broadphase.prototype.makePairsUnique = function(pairs1,pairs2){
    var t = Broadphase_makePairsUnique_temp,
        p1 = Broadphase_makePairsUnique_p1,
        p2 = Broadphase_makePairsUnique_p2,
        N = pairs1.length;

    for(var i=0; i!==N; i++){
        p1[i] = pairs1[i];
        p2[i] = pairs2[i];
    }

    pairs1.length = 0;
    pairs2.length = 0;

    for(var i=0; i!==N; i++){
        var id1 = p1[i].id,
            id2 = p2[i].id;
        var key = id1 < id2 ? id1+","+id2 :  id2+","+id1;
        t[key] = i;
        t.keys.push(key);
    }

    for(var i=0; i!==t.keys.length; i++){
        var key = t.keys.pop(),
            pairIndex = t[key];
        pairs1.push(p1[pairIndex]);
        pairs2.push(p2[pairIndex]);
        delete t[key];
    }
};

/**
 * To be implemented by subcasses
 * @method setWorld
 * @param {World} world
 */
Broadphase.prototype.setWorld = function(world){
};

/**
 * Check if the bounding spheres of two bodies overlap.
 * @method boundingSphereCheck
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {boolean}
 */
var bsc_dist = new Vec3();
Broadphase.boundingSphereCheck = function(bodyA,bodyB){
    var dist = bsc_dist;
    bodyA.position.vsub(bodyB.position,dist);
    return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius,2) > dist.norm2();
};

/**
 * Returns all the bodies within the AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param  {array} result An array to store resulting bodies in.
 * @return {array}
 */
Broadphase.prototype.aabbQuery = function(world, aabb, result){
    console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
    return [];
};
},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(_dereq_,module,exports){
module.exports = GridBroadphase;

var Broadphase = _dereq_('./Broadphase');
var Vec3 = _dereq_('../math/Vec3');
var Shape = _dereq_('../shapes/Shape');

/**
 * Axis aligned uniform grid broadphase.
 * @class GridBroadphase
 * @constructor
 * @extends Broadphase
 * @todo Needs support for more than just planes and spheres.
 * @param {Vec3} aabbMin
 * @param {Vec3} aabbMax
 * @param {Number} nx Number of boxes along x
 * @param {Number} ny Number of boxes along y
 * @param {Number} nz Number of boxes along z
 */
function GridBroadphase(aabbMin,aabbMax,nx,ny,nz){
    Broadphase.apply(this);
    this.nx = nx || 10;
    this.ny = ny || 10;
    this.nz = nz || 10;
    this.aabbMin = aabbMin || new Vec3(100,100,100);
    this.aabbMax = aabbMax || new Vec3(-100,-100,-100);
	var nbins = this.nx * this.ny * this.nz;
	if (nbins <= 0) {
		throw "GridBroadphase: Each dimension's n must be >0";
	}
    this.bins = [];
	this.binLengths = []; //Rather than continually resizing arrays (thrashing the memory), just record length and allow them to grow
	this.bins.length = nbins;
	this.binLengths.length = nbins;
	for (var i=0;i<nbins;i++) {
		this.bins[i]=[];
		this.binLengths[i]=0;
	}
}
GridBroadphase.prototype = new Broadphase();
GridBroadphase.prototype.constructor = GridBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var GridBroadphase_collisionPairs_d = new Vec3();
var GridBroadphase_collisionPairs_binPos = new Vec3();
GridBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var N = world.numObjects(),
        bodies = world.bodies;

    var max = this.aabbMax,
        min = this.aabbMin,
        nx = this.nx,
        ny = this.ny,
        nz = this.nz;

	var xstep = ny*nz;
	var ystep = nz;
	var zstep = 1;

    var xmax = max.x,
        ymax = max.y,
        zmax = max.z,
        xmin = min.x,
        ymin = min.y,
        zmin = min.z;

    var xmult = nx / (xmax-xmin),
        ymult = ny / (ymax-ymin),
        zmult = nz / (zmax-zmin);

    var binsizeX = (xmax - xmin) / nx,
        binsizeY = (ymax - ymin) / ny,
        binsizeZ = (zmax - zmin) / nz;

	var binRadius = Math.sqrt(binsizeX*binsizeX + binsizeY*binsizeY + binsizeZ*binsizeZ) * 0.5;

    var types = Shape.types;
    var SPHERE =            types.SPHERE,
        PLANE =             types.PLANE,
        BOX =               types.BOX,
        COMPOUND =          types.COMPOUND,
        CONVEXPOLYHEDRON =  types.CONVEXPOLYHEDRON;

    var bins=this.bins,
		binLengths=this.binLengths,
        Nbins=this.bins.length;

    // Reset bins
    for(var i=0; i!==Nbins; i++){
        binLengths[i] = 0;
    }

    var ceil = Math.ceil;
	var min = Math.min;
	var max = Math.max;

	function addBoxToBins(x0,y0,z0,x1,y1,z1,bi) {
		var xoff0 = ((x0 - xmin) * xmult)|0,
			yoff0 = ((y0 - ymin) * ymult)|0,
			zoff0 = ((z0 - zmin) * zmult)|0,
			xoff1 = ceil((x1 - xmin) * xmult),
			yoff1 = ceil((y1 - ymin) * ymult),
			zoff1 = ceil((z1 - zmin) * zmult);

		if (xoff0 < 0) { xoff0 = 0; } else if (xoff0 >= nx) { xoff0 = nx - 1; }
		if (yoff0 < 0) { yoff0 = 0; } else if (yoff0 >= ny) { yoff0 = ny - 1; }
		if (zoff0 < 0) { zoff0 = 0; } else if (zoff0 >= nz) { zoff0 = nz - 1; }
		if (xoff1 < 0) { xoff1 = 0; } else if (xoff1 >= nx) { xoff1 = nx - 1; }
		if (yoff1 < 0) { yoff1 = 0; } else if (yoff1 >= ny) { yoff1 = ny - 1; }
		if (zoff1 < 0) { zoff1 = 0; } else if (zoff1 >= nz) { zoff1 = nz - 1; }

		xoff0 *= xstep;
		yoff0 *= ystep;
		zoff0 *= zstep;
		xoff1 *= xstep;
		yoff1 *= ystep;
		zoff1 *= zstep;

		for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
			for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
				for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
					var idx = xoff+yoff+zoff;
					bins[idx][binLengths[idx]++] = bi;
				}
			}
		}
	}

    // Put all bodies into the bins
    for(var i=0; i!==N; i++){
        var bi = bodies[i];
        var si = bi.shape;

        switch(si.type){
        case SPHERE:
            // Put in bin
            // check if overlap with other bins
            var x = bi.position.x,
                y = bi.position.y,
                z = bi.position.z;
            var r = si.radius;

			addBoxToBins(x-r, y-r, z-r, x+r, y+r, z+r, bi);
            break;

        case PLANE:
            if(si.worldNormalNeedsUpdate){
                si.computeWorldNormal(bi.quaternion);
            }
            var planeNormal = si.worldNormal;

			//Relative position from origin of plane object to the first bin
			//Incremented as we iterate through the bins
			var xreset = xmin + binsizeX*0.5 - bi.position.x,
				yreset = ymin + binsizeY*0.5 - bi.position.y,
				zreset = zmin + binsizeZ*0.5 - bi.position.z;

            var d = GridBroadphase_collisionPairs_d;
			d.set(xreset, yreset, zreset);

			for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
				for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
					for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
						if (d.dot(planeNormal) < binRadius) {
							var idx = xoff + yoff + zoff;
							bins[idx][binLengths[idx]++] = bi;
						}
					}
				}
			}
            break;

        default:
			if (bi.aabbNeedsUpdate) {
				bi.computeAABB();
			}

			addBoxToBins(
				bi.aabb.lowerBound.x,
				bi.aabb.lowerBound.y,
				bi.aabb.lowerBound.z,
				bi.aabb.upperBound.x,
				bi.aabb.upperBound.y,
				bi.aabb.upperBound.z,
				bi);
            break;
        }
    }

    // Check each bin
    for(var i=0; i!==Nbins; i++){
		var binLength = binLengths[i];
		//Skip bins with no potential collisions
		if (binLength > 1) {
			var bin = bins[i];

			// Do N^2 broadphase inside
			for(var xi=0; xi!==binLength; xi++){
				var bi = bin[xi];
				for(var yi=0; yi!==xi; yi++){
					var bj = bin[yi];
					if(this.needBroadphaseCollision(bi,bj)){
						this.intersectionTest(bi,bj,pairs1,pairs2);
					}
				}
			}
		}
    }

//	for (var zi = 0, zoff=0; zi < nz; zi++, zoff+= zstep) {
//		console.log("layer "+zi);
//		for (var yi = 0, yoff=0; yi < ny; yi++, yoff += ystep) {
//			var row = '';
//			for (var xi = 0, xoff=0; xi < nx; xi++, xoff += xstep) {
//				var idx = xoff + yoff + zoff;
//				row += ' ' + binLengths[idx];
//			}
//			console.log(row);
//		}
//	}

    this.makePairsUnique(pairs1,pairs2);
};

},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(_dereq_,module,exports){
module.exports = NaiveBroadphase;

var Broadphase = _dereq_('./Broadphase');
var AABB = _dereq_('./AABB');

/**
 * Naive broadphase implementation, used in lack of better ones.
 * @class NaiveBroadphase
 * @constructor
 * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
 * @extends Broadphase
 */
function NaiveBroadphase(){
    Broadphase.apply(this);
}
NaiveBroadphase.prototype = new Broadphase();
NaiveBroadphase.prototype.constructor = NaiveBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
NaiveBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var bodies = world.bodies,
        n = bodies.length,
        i,j,bi,bj;

    // Naive N^2 ftw!
    for(i=0; i!==n; i++){
        for(j=0; j!==i; j++){

            bi = bodies[i];
            bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            this.intersectionTest(bi,bj,pairs1,pairs2);
        }
    }
};

var tmpAABB = new AABB();

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    for(var i = 0; i < world.bodies.length; i++){
        var b = world.bodies[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        // Ugly hack until Body gets aabb
        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"./AABB":3,"./Broadphase":5}],8:[function(_dereq_,module,exports){
module.exports = ObjectCollisionMatrix;

/**
 * Records what objects are colliding with each other
 * @class ObjectCollisionMatrix
 * @constructor
 */
function ObjectCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Object}
     */
	this.matrix = {};
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ObjectCollisionMatrix.prototype.get = function(i, j) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	return i+'-'+j in this.matrix;
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
ObjectCollisionMatrix.prototype.set = function(i, j, value) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
	}
	if (value) {
		this.matrix[i+'-'+j] = true;
	}
	else {
		delete this.matrix[i+'-'+j];
	}
};

/**
 * Empty the matrix
 * @method reset
 */
ObjectCollisionMatrix.prototype.reset = function() {
	this.matrix = {};
};

/**
 * Set max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
};

},{}],9:[function(_dereq_,module,exports){
module.exports = Ray;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');
var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
var Box = _dereq_('../shapes/Box');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Shape = _dereq_('../shapes/Shape');
var AABB = _dereq_('../collision/AABB');

/**
 * A line in 3D space that intersects bodies and return points.
 * @class Ray
 * @constructor
 * @param {Vec3} from
 * @param {Vec3} to
 */
function Ray(from, to){
    /**
     * @property {Vec3} from
     */
    this.from = from ? from.clone() : new Vec3();

    /**
     * @property {Vec3} to
     */
    this.to = to ? to.clone() : new Vec3();

    /**
     * @private
     * @property {Vec3} _direction
     */
    this._direction = new Vec3();

    /**
     * The precision of the ray. Used when checking parallelity etc.
     * @property {Number} precision
     */
    this.precision = 0.0001;

    /**
     * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
     * @property {Boolean} checkCollisionResponse
     */
    this.checkCollisionResponse = true;

    /**
     * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
     * @property {Boolean} skipBackfaces
     */
    this.skipBackfaces = false;

    /**
     * @property {number} collisionFilterMask
     * @default -1
     */
    this.collisionFilterMask = -1;

    /**
     * @property {number} collisionFilterGroup
     * @default -1
     */
    this.collisionFilterGroup = -1;

    /**
     * The intersection mode. Should be Ray.ANY, Ray.ALL or Ray.CLOSEST.
     * @property {number} mode
     */
    this.mode = Ray.ANY;

    /**
     * Current result object.
     * @property {RaycastResult} result
     */
    this.result = new RaycastResult();

    /**
     * Will be set to true during intersectWorld() if the ray hit anything.
     * @property {Boolean} hasHit
     */
    this.hasHit = false;

    /**
     * Current, user-provided result callback. Will be used if mode is Ray.ALL.
     * @property {Function} callback
     */
    this.callback = function(result){};
}
Ray.prototype.constructor = Ray;

Ray.CLOSEST = 1;
Ray.ANY = 2;
Ray.ALL = 4;

var tmpAABB = new AABB();
var tmpArray = [];

/**
 * Do itersection against all bodies in the given World.
 * @method intersectWorld
 * @param  {World} world
 * @param  {object} options
 * @return {Boolean} True if the ray hit anything, otherwise false.
 */
Ray.prototype.intersectWorld = function (world, options) {
    this.mode = options.mode || Ray.ANY;
    this.result = options.result || new RaycastResult();
    this.skipBackfaces = !!options.skipBackfaces;
    this.collisionFilterMask = typeof(options.collisionFilterMask) !== 'undefined' ? options.collisionFilterMask : -1;
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) !== 'undefined' ? options.collisionFilterGroup : -1;
    if(options.from){
        this.from.copy(options.from);
    }
    if(options.to){
        this.to.copy(options.to);
    }
    this.callback = options.callback || function(){};
    this.hasHit = false;

    this.result.reset();
    this._updateDirection();

    this.getAABB(tmpAABB);
    tmpArray.length = 0;
    world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
    this.intersectBodies(tmpArray);

    return this.hasHit;
};

var v1 = new Vec3(),
    v2 = new Vec3();

/*
 * As per "Barycentric Technique" as named here http://www.blackpawn.com/texts/pointinpoly/default.html But without the division
 */
Ray.pointInTriangle = pointInTriangle;
function pointInTriangle(p, a, b, c) {
    c.vsub(a,v0);
    b.vsub(a,v1);
    p.vsub(a,v2);

    var dot00 = v0.dot( v0 );
    var dot01 = v0.dot( v1 );
    var dot02 = v0.dot( v2 );
    var dot11 = v1.dot( v1 );
    var dot12 = v1.dot( v2 );

    var u,v;

    return  ( (u = dot11 * dot02 - dot01 * dot12) >= 0 ) &&
            ( (v = dot00 * dot12 - dot01 * dot02) >= 0 ) &&
            ( u + v < ( dot00 * dot11 - dot01 * dot01 ) );
}

/**
 * Shoot a ray at a body, get back information about the hit.
 * @method intersectBody
 * @private
 * @param {Body} body
 * @param {RaycastResult} [result] Deprecated - set the result property of the Ray instead.
 */
var intersectBody_xi = new Vec3();
var intersectBody_qi = new Quaternion();
Ray.prototype.intersectBody = function (body, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }
    var checkCollisionResponse = this.checkCollisionResponse;

    if(checkCollisionResponse && !body.collisionResponse){
        return;
    }

    if((this.collisionFilterGroup & body.collisionFilterMask)===0 || (body.collisionFilterGroup & this.collisionFilterMask)===0){
        return;
    }

    var xi = intersectBody_xi;
    var qi = intersectBody_qi;

    for (var i = 0, N = body.shapes.length; i < N; i++) {
        var shape = body.shapes[i];

        if(checkCollisionResponse && !shape.collisionResponse){
            continue; // Skip
        }

        body.quaternion.mult(body.shapeOrientations[i], qi);
        body.quaternion.vmult(body.shapeOffsets[i], xi);
        xi.vadd(body.position, xi);

        this.intersectShape(
            shape,
            qi,
            xi,
            body
        );

        if(this.result._shouldStop){
            break;
        }
    }
};

/**
 * @method intersectBodies
 * @param {Array} bodies An array of Body objects.
 * @param {RaycastResult} [result] Deprecated
 */
Ray.prototype.intersectBodies = function (bodies, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }

    for ( var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i ++ ) {
        this.intersectBody(bodies[i]);
    }
};

/**
 * Updates the _direction vector.
 * @private
 * @method _updateDirection
 */
Ray.prototype._updateDirection = function(){
    this.to.vsub(this.from, this._direction);
    this._direction.normalize();
};

/**
 * @method intersectShape
 * @private
 * @param {Shape} shape
 * @param {Quaternion} quat
 * @param {Vec3} position
 * @param {Body} body
 */
Ray.prototype.intersectShape = function(shape, quat, position, body){
    var from = this.from;


    // Checking boundingSphere
    var distance = distanceFromIntersection(from, this._direction, position);
    if ( distance > shape.boundingSphereRadius ) {
        return;
    }

    var intersectMethod = this[shape.type];
    if(intersectMethod){
        intersectMethod.call(this, shape, quat, position, body);
    }
};

var vector = new Vec3();
var normal = new Vec3();
var intersectPoint = new Vec3();

var a = new Vec3();
var b = new Vec3();
var c = new Vec3();
var d = new Vec3();

var tmpRaycastResult = new RaycastResult();

/**
 * @method intersectBox
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectBox = function(shape, quat, position, body){
    return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body);
};
Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;

/**
 * @method intersectPlane
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectPlane = function(shape, quat, position, body){
    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    // Get plane normal
    var worldNormal = new Vec3(0, 0, 1);
    quat.vmult(worldNormal, worldNormal);

    var len = new Vec3();
    from.vsub(position, len);
    var planeToFrom = len.dot(worldNormal);
    to.vsub(position, len);
    var planeToTo = len.dot(worldNormal);

    if(planeToFrom * planeToTo > 0){
        // "from" and "to" are on the same side of the plane... bail out
        return;
    }

    if(from.distanceTo(to) < planeToFrom){
        return;
    }

    var n_dot_dir = worldNormal.dot(direction);

    if (Math.abs(n_dot_dir) < this.precision) {
        // No intersection
        return;
    }

    var planePointToFrom = new Vec3();
    var dir_scaled_with_t = new Vec3();
    var hitPointWorld = new Vec3();

    from.vsub(position, planePointToFrom);
    var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
    direction.scale(t, dir_scaled_with_t);
    from.vadd(dir_scaled_with_t, hitPointWorld);

    this.reportIntersection(worldNormal, hitPointWorld, shape, body, -1);
};
Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;

/**
 * Get the world AABB of the ray.
 * @method getAABB
 * @param  {AABB} aabb
 */
Ray.prototype.getAABB = function(result){
    var to = this.to;
    var from = this.from;
    result.lowerBound.x = Math.min(to.x, from.x);
    result.lowerBound.y = Math.min(to.y, from.y);
    result.lowerBound.z = Math.min(to.z, from.z);
    result.upperBound.x = Math.max(to.x, from.x);
    result.upperBound.y = Math.max(to.y, from.y);
    result.upperBound.z = Math.max(to.z, from.z);
};

var intersectConvexOptions = {
    faceList: [0]
};

/**
 * @method intersectHeightfield
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectHeightfield = function(shape, quat, position, body){
    var data = shape.data,
        w = shape.elementSize,
        worldPillarOffset = new Vec3();

    // Convert the ray to local heightfield coordinates
    var localRay = new Ray(this.from, this.to);
    Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
    Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);

    // Get the index of the data points to test against
    var index = [];
    var iMinX = null;
    var iMinY = null;
    var iMaxX = null;
    var iMaxY = null;

    var inside = shape.getIndexOfPosition(localRay.from.x, localRay.from.y, index, false);
    if(inside){
        iMinX = index[0];
        iMinY = index[1];
        iMaxX = index[0];
        iMaxY = index[1];
    }
    inside = shape.getIndexOfPosition(localRay.to.x, localRay.to.y, index, false);
    if(inside){
        if (iMinX === null || index[0] < iMinX) { iMinX = index[0]; }
        if (iMaxX === null || index[0] > iMaxX) { iMaxX = index[0]; }
        if (iMinY === null || index[1] < iMinY) { iMinY = index[1]; }
        if (iMaxY === null || index[1] > iMaxY) { iMaxY = index[1]; }
    }

    if(iMinX === null){
        return;
    }

    var minMax = [];
    shape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // // Bail out if the ray can't touch the bounding box
    // // TODO
    // var aabb = new AABB();
    // this.getAABB(aabb);
    // if(aabb.intersects()){
    //     return;
    // }

    for(var i = iMinX; i <= iMaxX; i++){
        for(var j = iMinY; j <= iMaxY; j++){

            if(this.result._shouldStop){
                return;
            }

            // Lower triangle
            shape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);

            if(this.result._shouldStop){
                return;
            }

            // Upper triangle
            shape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
        }
    }
};
Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;

var Ray_intersectSphere_intersectionPoint = new Vec3();
var Ray_intersectSphere_normal = new Vec3();

/**
 * @method intersectSphere
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectSphere = function(shape, quat, position, body){
    var from = this.from,
        to = this.to,
        r = shape.radius;

    var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
    var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
    var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);

    var delta = Math.pow(b, 2) - 4 * a * c;

    var intersectionPoint = Ray_intersectSphere_intersectionPoint;
    var normal = Ray_intersectSphere_normal;

    if(delta < 0){
        // No intersection
        return;

    } else if(delta === 0){
        // single intersection point
        from.lerp(to, delta, intersectionPoint);

        intersectionPoint.vsub(position, normal);
        normal.normalize();

        this.reportIntersection(normal, intersectionPoint, shape, body, -1);

    } else {
        var d1 = (- b - Math.sqrt(delta)) / (2 * a);
        var d2 = (- b + Math.sqrt(delta)) / (2 * a);

        if(d1 >= 0 && d1 <= 1){
            from.lerp(to, d1, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, shape, body, -1);
        }

        if(this.result._shouldStop){
            return;
        }

        if(d2 >= 0 && d2 <= 1){
            from.lerp(to, d2, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, shape, body, -1);
        }
    }
};
Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;


var intersectConvex_normal = new Vec3();
var intersectConvex_minDistNormal = new Vec3();
var intersectConvex_minDistIntersect = new Vec3();
var intersectConvex_vector = new Vec3();

/**
 * @method intersectConvex
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @param {array} [options.faceList]
 */
Ray.prototype.intersectConvex = function intersectConvex(
    shape,
    quat,
    position,
    body,
    options
){
    var minDistNormal = intersectConvex_minDistNormal;
    var normal = intersectConvex_normal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var faces = shape.faces,
        vertices = shape.vertices,
        normals = shape.faceNormals;
    var direction = this._direction;

    var from = this.from;
    var to = this.to;
    var fromToDistance = from.distanceTo(to);

    var minDist = -1;
    var Nfaces = faceList ? faceList.length : faces.length;
    var result = this.result;

    for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
        var fi = faceList ? faceList[j] : j;

        var face = faces[fi];
        var faceNormal = normals[fi];
        var q = quat;
        var x = position;

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        vector.copy(vertices[face[0]]);
        q.vmult(vector,vector);
        vector.vadd(x,vector);

        // ...but make it relative to the ray from. We'll fix this later.
        vector.vsub(from,vector);

        // Get plane normal
        q.vmult(faceNormal,normal);

        // If this dot product is negative, we have something interesting
        var dot = direction.dot(normal);

        // Bail out if ray and plane are parallel
        if ( Math.abs( dot ) < this.precision ){
            continue;
        }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // if (dot < 0) {

        // Intersection point is from + direction * scalar
        direction.mult(scalar,intersectPoint);
        intersectPoint.vadd(from,intersectPoint);

        // a is the point we compare points b and c with.
        a.copy(vertices[face[0]]);
        q.vmult(a,a);
        x.vadd(a,a);

        for(var i = 1; !result._shouldStop && i < face.length - 1; i++){
            // Transform 3 vertices to world coords
            b.copy(vertices[face[i]]);
            c.copy(vertices[face[i+1]]);
            q.vmult(b,b);
            q.vmult(c,c);
            x.vadd(b,b);
            x.vadd(c,c);

            var distance = intersectPoint.distanceTo(from);

            if(!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance){
                continue;
            }

            this.reportIntersection(normal, intersectPoint, shape, body, fi);
        }
        // }
    }
};
Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;

var intersectTrimesh_normal = new Vec3();
var intersectTrimesh_localDirection = new Vec3();
var intersectTrimesh_localFrom = new Vec3();
var intersectTrimesh_localTo = new Vec3();
var intersectTrimesh_worldNormal = new Vec3();
var intersectTrimesh_worldIntersectPoint = new Vec3();
var intersectTrimesh_localAABB = new AABB();
var intersectTrimesh_triangles = [];
var intersectTrimesh_treeTransform = new Transform();

/**
 * @method intersectTrimesh
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @todo Optimize by transforming the world to local space first.
 * @todo Use Octree lookup
 */
Ray.prototype.intersectTrimesh = function intersectTrimesh(
    mesh,
    quat,
    position,
    body,
    options
){
    var normal = intersectTrimesh_normal;
    var triangles = intersectTrimesh_triangles;
    var treeTransform = intersectTrimesh_treeTransform;
    var minDistNormal = intersectConvex_minDistNormal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var localAABB = intersectTrimesh_localAABB;
    var localDirection = intersectTrimesh_localDirection;
    var localFrom = intersectTrimesh_localFrom;
    var localTo = intersectTrimesh_localTo;
    var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
    var worldNormal = intersectTrimesh_worldNormal;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var indices = mesh.indices,
        vertices = mesh.vertices,
        normals = mesh.faceNormals;

    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    var minDist = -1;
    treeTransform.position.copy(position);
    treeTransform.quaternion.copy(quat);

    // Transform ray to local space!
    Transform.vectorToLocalFrame(position, quat, direction, localDirection);
    //body.vectorToLocalFrame(direction, localDirection);
    Transform.pointToLocalFrame(position, quat, from, localFrom);
    //body.pointToLocalFrame(from, localFrom);
    Transform.pointToLocalFrame(position, quat, to, localTo);
    //body.pointToLocalFrame(to, localTo);
    var fromToDistanceSquared = localFrom.distanceSquared(localTo);

    mesh.tree.rayQuery(this, treeTransform, triangles);

    for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
        var trianglesIndex = triangles[i];

        mesh.getNormal(trianglesIndex, normal);

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        mesh.getVertex(indices[trianglesIndex * 3], a);

        // ...but make it relative to the ray from. We'll fix this later.
        a.vsub(localFrom,vector);

        // Get plane normal
        // quat.vmult(normal, normal);

        // If this dot product is negative, we have something interesting
        var dot = localDirection.dot(normal);

        // Bail out if ray and plane are parallel
        // if (Math.abs( dot ) < this.precision){
        //     continue;
        // }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // Intersection point is from + direction * scalar
        localDirection.scale(scalar,intersectPoint);
        intersectPoint.vadd(localFrom,intersectPoint);

        // Get triangle vertices
        mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
        mesh.getVertex(indices[trianglesIndex * 3 + 2], c);

        var squaredDistance = intersectPoint.distanceSquared(localFrom);

        if(!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared){
            continue;
        }

        // transform intersectpoint and normal to world
        Transform.vectorToWorldFrame(quat, normal, worldNormal);
        //body.vectorToWorldFrame(normal, worldNormal);
        Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
        //body.pointToWorldFrame(intersectPoint, worldIntersectPoint);
        this.reportIntersection(worldNormal, worldIntersectPoint, mesh, body, trianglesIndex);
    }
    triangles.length = 0;
};
Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;


/**
 * @method reportIntersection
 * @private
 * @param  {Vec3} normal
 * @param  {Vec3} hitPointWorld
 * @param  {Shape} shape
 * @param  {Body} body
 * @return {boolean} True if the intersections should continue
 */
Ray.prototype.reportIntersection = function(normal, hitPointWorld, shape, body, hitFaceIndex){
    var from = this.from;
    var to = this.to;
    var distance = from.distanceTo(hitPointWorld);
    var result = this.result;

    // Skip back faces?
    if(this.skipBackfaces && normal.dot(this._direction) > 0){
        return;
    }

    result.hitFaceIndex = typeof(hitFaceIndex) !== 'undefined' ? hitFaceIndex : -1;

    switch(this.mode){
    case Ray.ALL:
        this.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result.hasHit = true;
        this.callback(result);
        break;

    case Ray.CLOSEST:

        // Store if closer than current closest
        if(distance < result.distance || !result.hasHit){
            this.hasHit = true;
            result.hasHit = true;
            result.set(
                from,
                to,
                normal,
                hitPointWorld,
                shape,
                body,
                distance
            );
        }
        break;

    case Ray.ANY:

        // Report and stop.
        this.hasHit = true;
        result.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result._shouldStop = true;
        break;
    }
};

var v0 = new Vec3(),
    intersect = new Vec3();
function distanceFromIntersection(from, direction, position) {

    // v0 is vector from from to position
    position.vsub(from,v0);
    var dot = v0.dot(direction);

    // intersect = direction*dot + from
    direction.mult(dot,intersect);
    intersect.vadd(from,intersect);

    var distance = position.distanceTo(intersect);

    return distance;
}


},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');

module.exports = RaycastResult;

/**
 * Storage for Ray casting data.
 * @class RaycastResult
 * @constructor
 */
function RaycastResult(){

	/**
	 * @property {Vec3} rayFromWorld
	 */
	this.rayFromWorld = new Vec3();

	/**
	 * @property {Vec3} rayToWorld
	 */
	this.rayToWorld = new Vec3();

	/**
	 * @property {Vec3} hitNormalWorld
	 */
	this.hitNormalWorld = new Vec3();

	/**
	 * @property {Vec3} hitPointWorld
	 */
	this.hitPointWorld = new Vec3();

	/**
	 * @property {boolean} hasHit
	 */
	this.hasHit = false;

	/**
	 * The hit shape, or null.
	 * @property {Shape} shape
	 */
	this.shape = null;

	/**
	 * The hit body, or null.
	 * @property {Body} body
	 */
	this.body = null;

	/**
	 * The index of the hit triangle, if the hit shape was a trimesh.
	 * @property {number} hitFaceIndex
	 * @default -1
	 */
	this.hitFaceIndex = -1;

	/**
	 * Distance to the hit. Will be set to -1 if there was no hit.
	 * @property {number} distance
	 * @default -1
	 */
	this.distance = -1;

	/**
	 * If the ray should stop traversing the bodies.
	 * @private
	 * @property {Boolean} _shouldStop
	 * @default false
	 */
	this._shouldStop = false;
}

/**
 * Reset all result data.
 * @method reset
 */
RaycastResult.prototype.reset = function () {
	this.rayFromWorld.setZero();
	this.rayToWorld.setZero();
	this.hitNormalWorld.setZero();
	this.hitPointWorld.setZero();
	this.hasHit = false;
	this.shape = null;
	this.body = null;
	this.hitFaceIndex = -1;
	this.distance = -1;
	this._shouldStop = false;
};

/**
 * @method abort
 */
RaycastResult.prototype.abort = function(){
	this._shouldStop = true;
};

/**
 * @method set
 * @param {Vec3} rayFromWorld
 * @param {Vec3} rayToWorld
 * @param {Vec3} hitNormalWorld
 * @param {Vec3} hitPointWorld
 * @param {Shape} shape
 * @param {Body} body
 * @param {number} distance
 */
RaycastResult.prototype.set = function(
	rayFromWorld,
	rayToWorld,
	hitNormalWorld,
	hitPointWorld,
	shape,
	body,
	distance
){
	this.rayFromWorld.copy(rayFromWorld);
	this.rayToWorld.copy(rayToWorld);
	this.hitNormalWorld.copy(hitNormalWorld);
	this.hitPointWorld.copy(hitPointWorld);
	this.shape = shape;
	this.body = body;
	this.distance = distance;
};
},{"../math/Vec3":30}],11:[function(_dereq_,module,exports){
var Shape = _dereq_('../shapes/Shape');
var Broadphase = _dereq_('../collision/Broadphase');

module.exports = SAPBroadphase;

/**
 * Sweep and prune broadphase along one axis.
 *
 * @class SAPBroadphase
 * @constructor
 * @param {World} [world]
 * @extends Broadphase
 */
function SAPBroadphase(world){
    Broadphase.apply(this);

    /**
     * List of bodies currently in the broadphase.
     * @property axisList
     * @type {Array}
     */
    this.axisList = [];

    /**
     * The world to search in.
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Axis to sort the bodies along. Set to 0 for x axis, and 1 for y axis. For best performance, choose an axis that the bodies are spread out more on.
     * @property axisIndex
     * @type {Number}
     */
    this.axisIndex = 0;

    var axisList = this.axisList;

    this._addBodyHandler = function(e){
        axisList.push(e.body);
    };

    this._removeBodyHandler = function(e){
        var idx = axisList.indexOf(e.body);
        if(idx !== -1){
            axisList.splice(idx,1);
        }
    };

    if(world){
        this.setWorld(world);
    }
}
SAPBroadphase.prototype = new Broadphase();

/**
 * Change the world
 * @method setWorld
 * @param  {World} world
 */
SAPBroadphase.prototype.setWorld = function(world){
    // Clear the old axis array
    this.axisList.length = 0;

    // Add all bodies from the new world
    for(var i=0; i<world.bodies.length; i++){
        this.axisList.push(world.bodies[i]);
    }

    // Remove old handlers, if any
    world.removeEventListener("addBody", this._addBodyHandler);
    world.removeEventListener("removeBody", this._removeBodyHandler);

    // Add handlers to update the list of bodies.
    world.addEventListener("addBody", this._addBodyHandler);
    world.addEventListener("removeBody", this._removeBodyHandler);

    this.world = world;
    this.dirty = true;
};

/**
 * @static
 * @method insertionSortX
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortX = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortY
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortY = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortZ
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortZ = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * Collect all collision pairs
 * @method collisionPairs
 * @param  {World} world
 * @param  {Array} p1
 * @param  {Array} p2
 */
SAPBroadphase.prototype.collisionPairs = function(world,p1,p2){
    var bodies = this.axisList,
        N = bodies.length,
        axisIndex = this.axisIndex,
        i, j;

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    // Look through the list
    for(i=0; i !== N; i++){
        var bi = bodies[i];

        for(j=i+1; j < N; j++){
            var bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            if(!SAPBroadphase.checkBounds(bi,bj,axisIndex)){
                break;
            }

            this.intersectionTest(bi,bj,p1,p2);
        }
    }
};

SAPBroadphase.prototype.sortList = function(){
    var axisList = this.axisList;
    var axisIndex = this.axisIndex;
    var N = axisList.length;

    // Update AABBs
    for(var i = 0; i!==N; i++){
        var bi = axisList[i];
        if(bi.aabbNeedsUpdate){
            bi.computeAABB();
        }
    }

    // Sort the list
    if(axisIndex === 0){
        SAPBroadphase.insertionSortX(axisList);
    } else if(axisIndex === 1){
        SAPBroadphase.insertionSortY(axisList);
    } else if(axisIndex === 2){
        SAPBroadphase.insertionSortZ(axisList);
    }
};

/**
 * Check if the bounds of two bodies overlap, along the given SAP axis.
 * @static
 * @method checkBounds
 * @param  {Body} bi
 * @param  {Body} bj
 * @param  {Number} axisIndex
 * @return {Boolean}
 */
SAPBroadphase.checkBounds = function(bi, bj, axisIndex){
    var biPos;
    var bjPos;

    if(axisIndex === 0){
        biPos = bi.position.x;
        bjPos = bj.position.x;
    } else if(axisIndex === 1){
        biPos = bi.position.y;
        bjPos = bj.position.y;
    } else if(axisIndex === 2){
        biPos = bi.position.z;
        bjPos = bj.position.z;
    }

    var ri = bi.boundingRadius,
        rj = bj.boundingRadius,
        boundA1 = biPos - ri,
        boundA2 = biPos + ri,
        boundB1 = bjPos - rj,
        boundB2 = bjPos + rj;

    return boundB1 < boundA2;
};

/**
 * Computes the variance of the body positions and estimates the best
 * axis to use. Will automatically set property .axisIndex.
 * @method autoDetectAxis
 */
SAPBroadphase.prototype.autoDetectAxis = function(){
    var sumX=0,
        sumX2=0,
        sumY=0,
        sumY2=0,
        sumZ=0,
        sumZ2=0,
        bodies = this.axisList,
        N = bodies.length,
        invN=1/N;

    for(var i=0; i!==N; i++){
        var b = bodies[i];

        var centerX = b.position.x;
        sumX += centerX;
        sumX2 += centerX*centerX;

        var centerY = b.position.y;
        sumY += centerY;
        sumY2 += centerY*centerY;

        var centerZ = b.position.z;
        sumZ += centerZ;
        sumZ2 += centerZ*centerZ;
    }

    var varianceX = sumX2 - sumX*sumX*invN,
        varianceY = sumY2 - sumY*sumY*invN,
        varianceZ = sumZ2 - sumZ*sumZ*invN;

    if(varianceX > varianceY){
        if(varianceX > varianceZ){
            this.axisIndex = 0;
        } else{
            this.axisIndex = 2;
        }
    } else if(varianceY > varianceZ){
        this.axisIndex = 1;
    } else{
        this.axisIndex = 2;
    }
};

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
SAPBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    var axisIndex = this.axisIndex, axis = 'x';
    if(axisIndex === 1){ axis = 'y'; }
    if(axisIndex === 2){ axis = 'z'; }

    var axisList = this.axisList;
    var lower = aabb.lowerBound[axis];
    var upper = aabb.upperBound[axis];
    for(var i = 0; i < axisList.length; i++){
        var b = axisList[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(_dereq_,module,exports){
module.exports = ConeTwistConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var ConeEquation = _dereq_('../equations/ConeEquation');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * @class ConeTwistConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA]
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function ConeTwistConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
    this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    this.collideConnected = !!options.collideConnected;

    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;

    /**
     * @property {ConeEquation} coneEquation
     */
    var c = this.coneEquation = new ConeEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} twistEquation
     */
    var t = this.twistEquation = new RotationalEquation(bodyA,bodyB,options);
    this.twistAngle = typeof(options.twistAngle) !== 'undefined' ? options.twistAngle : 0;

    // Make the cone equation push the bodies toward the cone axis, not outward
    c.maxForce = 0;
    c.minForce = -maxForce;

    // Make the twist equation add torque toward the initial position
    t.maxForce = 0;
    t.minForce = -maxForce;

    this.equations.push(c, t);
}
ConeTwistConstraint.prototype = new PointToPointConstraint();
ConeTwistConstraint.constructor = ConeTwistConstraint;

var ConeTwistConstraint_update_tmpVec1 = new Vec3();
var ConeTwistConstraint_update_tmpVec2 = new Vec3();

ConeTwistConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        cone = this.coneEquation,
        twist = this.twistEquation;

    PointToPointConstraint.prototype.update.call(this);

    // Update the axes to the cone constraint
    bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
    bodyB.vectorToWorldFrame(this.axisB, cone.axisB);

    // Update the world axes in the twist constraint
    this.axisA.tangents(twist.axisA, twist.axisA);
    bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);

    this.axisB.tangents(twist.axisB, twist.axisB);
    bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);

    cone.angle = this.angle;
    twist.maxAngle = this.twistAngle;
};


},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(_dereq_,module,exports){
module.exports = Constraint;

var Utils = _dereq_('../utils/Utils');

/**
 * Constraint base class
 * @class Constraint
 * @author schteppe
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {boolean} [options.collideConnected=true]
 * @param {boolean} [options.wakeUpBodies=true]
 */
function Constraint(bodyA, bodyB, options){
    options = Utils.defaults(options,{
        collideConnected : true,
        wakeUpBodies : true,
    });

    /**
     * Equations to be solved in this constraint
     * @property equations
     * @type {Array}
     */
    this.equations = [];

    /**
     * @property {Body} bodyA
     */
    this.bodyA = bodyA;

    /**
     * @property {Body} bodyB
     */
    this.bodyB = bodyB;

    /**
     * @property {Number} id
     */
    this.id = Constraint.idCounter++;

    /**
     * Set to true if you want the bodies to collide when they are connected.
     * @property collideConnected
     * @type {boolean}
     */
    this.collideConnected = options.collideConnected;

    if(options.wakeUpBodies){
        if(bodyA){
            bodyA.wakeUp();
        }
        if(bodyB){
            bodyB.wakeUp();
        }
    }
}

/**
 * Update all the equations with data.
 * @method update
 */
Constraint.prototype.update = function(){
    throw new Error("method update() not implmemented in this Constraint subclass!");
};

/**
 * Enables all equations in the constraint.
 * @method enable
 */
Constraint.prototype.enable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = true;
    }
};

/**
 * Disables all equations in the constraint.
 * @method disable
 */
Constraint.prototype.disable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = false;
    }
};

Constraint.idCounter = 0;

},{"../utils/Utils":53}],14:[function(_dereq_,module,exports){
module.exports = DistanceConstraint;

var Constraint = _dereq_('./Constraint');
var ContactEquation = _dereq_('../equations/ContactEquation');

/**
 * Constrains two bodies to be at a constant distance from each others center of mass.
 * @class DistanceConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
 * @param {Number} [maxForce=1e6]
 * @extends Constraint
 */
function DistanceConstraint(bodyA,bodyB,distance,maxForce){
    Constraint.call(this,bodyA,bodyB);

    if(typeof(distance)==="undefined") {
        distance = bodyA.position.distanceTo(bodyB.position);
    }

    if(typeof(maxForce)==="undefined") {
        maxForce = 1e6;
    }

    /**
     * @property {number} distance
     */
    this.distance = distance;

    /**
     * @property {ContactEquation} distanceEquation
     */
    var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
    this.equations.push(eq);

    // Make it bidirectional
    eq.minForce = -maxForce;
    eq.maxForce =  maxForce;
}
DistanceConstraint.prototype = new Constraint();

DistanceConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var eq = this.distanceEquation;
    var halfDist = this.distance * 0.5;
    var normal = eq.ni;

    bodyB.position.vsub(bodyA.position, normal);
    normal.normalize();
    normal.mult(halfDist, eq.ri);
    normal.mult(-halfDist, eq.rj);
};
},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(_dereq_,module,exports){
module.exports = HingeConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
 * @class HingeConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
 * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function HingeConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    /**
     * Rotation axis, defined locally in bodyA.
     * @property {Vec3} axisA
     */
    var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1,0,0);
    axisA.normalize();

    /**
     * Rotation axis, defined locally in bodyB.
     * @property {Vec3} axisB
     */
    var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1,0,0);
    axisB.normalize();

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalMotorEquation} motorEquation
     */
    var motor = this.motorEquation = new RotationalMotorEquation(bodyA,bodyB,maxForce);
    motor.enabled = false; // Not enabled by default

    // Equations to be fed to the solver
    this.equations.push(
        r1, // rotational1
        r2, // rotational2
        motor
    );
}
HingeConstraint.prototype = new PointToPointConstraint();
HingeConstraint.constructor = HingeConstraint;

/**
 * @method enableMotor
 */
HingeConstraint.prototype.enableMotor = function(){
    this.motorEquation.enabled = true;
};

/**
 * @method disableMotor
 */
HingeConstraint.prototype.disableMotor = function(){
    this.motorEquation.enabled = false;
};

/**
 * @method setMotorSpeed
 * @param {number} speed
 */
HingeConstraint.prototype.setMotorSpeed = function(speed){
    this.motorEquation.targetVelocity = speed;
};

/**
 * @method setMotorMaxForce
 * @param {number} maxForce
 */
HingeConstraint.prototype.setMotorMaxForce = function(maxForce){
    this.motorEquation.maxForce = maxForce;
    this.motorEquation.minForce = -maxForce;
};

var HingeConstraint_update_tmpVec1 = new Vec3();
var HingeConstraint_update_tmpVec2 = new Vec3();

HingeConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        worldAxisA = HingeConstraint_update_tmpVec1,
        worldAxisB = HingeConstraint_update_tmpVec2;

    var axisA = this.axisA;
    var axisB = this.axisB;

    PointToPointConstraint.prototype.update.call(this);

    // Get world axes
    bodyA.quaternion.vmult(axisA, worldAxisA);
    bodyB.quaternion.vmult(axisB, worldAxisB);

    worldAxisA.tangents(r1.axisA, r2.axisA);
    r1.axisB.copy(worldAxisB);
    r2.axisB.copy(worldAxisB);

    if(this.motorEquation.enabled){
        bodyA.quaternion.vmult(this.axisA, motor.axisA);
        bodyB.quaternion.vmult(this.axisB, motor.axisB);
    }
};


},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(_dereq_,module,exports){
module.exports = LockConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Lock constraint. Will remove all degrees of freedom between the bodies.
 * @class LockConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function LockConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = new Vec3();
    var pivotB = new Vec3();
    var halfWay = new Vec3();
    bodyA.position.vadd(bodyB.position, halfWay);
    halfWay.scale(0.5, halfWay);
    bodyB.pointToLocalFrame(halfWay, pivotB);
    bodyA.pointToLocalFrame(halfWay, pivotA);
    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation3
     */
    var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA,bodyB,options);

    this.equations.push(r1, r2, r3);
}
LockConstraint.prototype = new PointToPointConstraint();
LockConstraint.constructor = LockConstraint;

var LockConstraint_update_tmpVec1 = new Vec3();
var LockConstraint_update_tmpVec2 = new Vec3();

LockConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        r3 = this.rotationalEquation3,
        worldAxisA = LockConstraint_update_tmpVec1,
        worldAxisB = LockConstraint_update_tmpVec2;

    PointToPointConstraint.prototype.update.call(this);

    bodyA.vectorToWorldFrame(Vec3.UNIT_X, r1.axisA);
    bodyB.vectorToWorldFrame(Vec3.UNIT_Y, r1.axisB);

    bodyA.vectorToWorldFrame(Vec3.UNIT_Y, r2.axisA);
    bodyB.vectorToWorldFrame(Vec3.UNIT_Z, r2.axisB);

    bodyA.vectorToWorldFrame(Vec3.UNIT_Z, r3.axisA);
    bodyB.vectorToWorldFrame(Vec3.UNIT_X, r3.axisB);
};


},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(_dereq_,module,exports){
module.exports = PointToPointConstraint;

var Constraint = _dereq_('./Constraint');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Connects two bodies at given offset points.
 * @class PointToPointConstraint
 * @extends Constraint
 * @constructor
 * @param {Body} bodyA
 * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
 * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
 * @param {Vec3} pivotB See pivotA.
 * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
 *
 * @example
 *     var bodyA = new Body({ mass: 1 });
 *     var bodyB = new Body({ mass: 1 });
 *     bodyA.position.set(-1, 0, 0);
 *     bodyB.position.set(1, 0, 0);
 *     bodyA.addShape(shapeA);
 *     bodyB.addShape(shapeB);
 *     world.addBody(bodyA);
 *     world.addBody(bodyB);
 *     var localPivotA = new Vec3(1, 0, 0);
 *     var localPivotB = new Vec3(-1, 0, 0);
 *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
 *     world.addConstraint(constraint);
 */
function PointToPointConstraint(bodyA,pivotA,bodyB,pivotB,maxForce){
    Constraint.call(this,bodyA,bodyB);

    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;

    /**
     * Pivot, defined locally in bodyA.
     * @property {Vec3} pivotA
     */
    this.pivotA = pivotA ? pivotA.clone() : new Vec3();

    /**
     * Pivot, defined locally in bodyB.
     * @property {Vec3} pivotB
     */
    this.pivotB = pivotB ? pivotB.clone() : new Vec3();

    /**
     * @property {ContactEquation} equationX
     */
    var x = this.equationX = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationY
     */
    var y = this.equationY = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationZ
     */
    var z = this.equationZ = new ContactEquation(bodyA,bodyB);

    // Equations to be fed to the solver
    this.equations.push(x, y, z);

    // Make the equations bidirectional
    x.minForce = y.minForce = z.minForce = -maxForce;
    x.maxForce = y.maxForce = z.maxForce =  maxForce;

    x.ni.set(1, 0, 0);
    y.ni.set(0, 1, 0);
    z.ni.set(0, 0, 1);
}
PointToPointConstraint.prototype = new Constraint();

PointToPointConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var x = this.equationX;
    var y = this.equationY;
    var z = this.equationZ;

    // Rotate the pivots to world space
    bodyA.quaternion.vmult(this.pivotA,x.ri);
    bodyB.quaternion.vmult(this.pivotB,x.rj);

    y.ri.copy(x.ri);
    y.rj.copy(x.rj);
    z.ri.copy(x.ri);
    z.rj.copy(x.rj);
};
},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(_dereq_,module,exports){
module.exports = ConeEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
 * @class ConeEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA] Local axis in A
 * @param {Vec3} [options.axisB] Local axis in B
 * @param {Vec3} [options.angle] The "cone angle" to keep
 * @param {number} [options.maxForce=1e6]
 * @extends Equation
 */
function ConeEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    /**
     * The cone angle to keep
     * @property {number} angle
     */
    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;
}

ConeEquation.prototype = new Equation();
ConeEquation.prototype.constructor = ConeEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

ConeEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // The angle between two vector is:
    // cos(theta) = a * b / (length(a) * length(b) = { len(a) = len(b) = 1 } = a * b

    // g = a * b
    // gdot = (b x a) * wi + (a x b) * wj
    // G = [0 bxa 0 axb]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.angle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(_dereq_,module,exports){
module.exports = ContactEquation;

var Equation = _dereq_('./Equation');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');

/**
 * Contact/non-penetration constraint equation
 * @class ContactEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @extends Equation
 */
function ContactEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;
    Equation.call(this, bodyA, bodyB, 0, maxForce);

    /**
     * @property restitution
     * @type {Number}
     */
    this.restitution = 0.0; // "bounciness": u1 = -e*u0

    /**
     * World-oriented vector that goes from the center of bi to the contact point.
     * @property {Vec3} ri
     */
    this.ri = new Vec3();

    /**
     * World-oriented vector that starts in body j position and goes to the contact point.
     * @property {Vec3} rj
     */
    this.rj = new Vec3();

    /**
     * Contact normal, pointing out of body i.
     * @property {Vec3} ni
     */
    this.ni = new Vec3();
}

ContactEquation.prototype = new Equation();
ContactEquation.prototype.constructor = ContactEquation;

var ContactEquation_computeB_temp1 = new Vec3(); // Temp vectors
var ContactEquation_computeB_temp2 = new Vec3();
var ContactEquation_computeB_temp3 = new Vec3();
ContactEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixn = ContactEquation_computeB_temp1,
        rjxn = ContactEquation_computeB_temp2,

        vi = bi.velocity,
        wi = bi.angularVelocity,
        fi = bi.force,
        taui = bi.torque,

        vj = bj.velocity,
        wj = bj.angularVelocity,
        fj = bj.force,
        tauj = bj.torque,

        penetrationVec = ContactEquation_computeB_temp3,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB,

        n = this.ni;

    // Caluclate cross products
    ri.cross(n,rixn);
    rj.cross(n,rjxn);

    // g = xj+rj -(xi+ri)
    // G = [ -ni  -rixn  ni  rjxn ]
    n.negate(GA.spatial);
    rixn.negate(GA.rotational);
    GB.spatial.copy(n);
    GB.rotational.copy(rjxn);

    // Calculate the penetration vector
    penetrationVec.copy(bj.position);
    penetrationVec.vadd(rj,penetrationVec);
    penetrationVec.vsub(bi.position,penetrationVec);
    penetrationVec.vsub(ri,penetrationVec);

    var g = n.dot(penetrationVec);

    // Compute iteration
    var ePlusOne = this.restitution + 1;
    var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
    var GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h*GiMf;

    return B;
};

var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();

/**
 * Get the current relative velocity in the contact point.
 * @method getImpactVelocityAlongNormal
 * @return {number}
 */
ContactEquation.prototype.getImpactVelocityAlongNormal = function(){
    var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
    var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
    var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
    var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
    var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;

    this.bi.position.vadd(this.ri, xi);
    this.bj.position.vadd(this.rj, xj);

    this.bi.getVelocityAtWorldPoint(xi, vi);
    this.bj.getVelocityAtWorldPoint(xj, vj);

    vi.vsub(vj, relVel);

    return this.ni.dot(relVel);
};


},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(_dereq_,module,exports){
module.exports = Equation;

var JacobianElement = _dereq_('../math/JacobianElement'),
    Vec3 = _dereq_('../math/Vec3');

/**
 * Equation base class
 * @class Equation
 * @constructor
 * @author schteppe
 * @param {Body} bi
 * @param {Body} bj
 * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
 * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
 */
function Equation(bi,bj,minForce,maxForce){
    this.id = Equation.id++;

    /**
     * @property {number} minForce
     */
    this.minForce = typeof(minForce)==="undefined" ? -1e6 : minForce;

    /**
     * @property {number} maxForce
     */
    this.maxForce = typeof(maxForce)==="undefined" ? 1e6 : maxForce;

    /**
     * @property bi
     * @type {Body}
     */
    this.bi = bi;

    /**
     * @property bj
     * @type {Body}
     */
    this.bj = bj;

    /**
     * SPOOK parameter
     * @property {number} a
     */
    this.a = 0.0;

    /**
     * SPOOK parameter
     * @property {number} b
     */
    this.b = 0.0;

    /**
     * SPOOK parameter
     * @property {number} eps
     */
    this.eps = 0.0;

    /**
     * @property {JacobianElement} jacobianElementA
     */
    this.jacobianElementA = new JacobianElement();

    /**
     * @property {JacobianElement} jacobianElementB
     */
    this.jacobianElementB = new JacobianElement();

    /**
     * @property {boolean} enabled
     * @default true
     */
    this.enabled = true;

    // Set typical spook params
    this.setSpookParams(1e7,4,1/60);
}
Equation.prototype.constructor = Equation;

Equation.id = 0;

/**
 * Recalculates a,b,eps.
 * @method setSpookParams
 */
Equation.prototype.setSpookParams = function(stiffness,relaxation,timeStep){
    var d = relaxation,
        k = stiffness,
        h = timeStep;
    this.a = 4.0 / (h * (1 + 4 * d));
    this.b = (4.0 * d) / (1 + 4 * d);
    this.eps = 4.0 / (h * h * k * (1 + 4 * d));
};

/**
 * Computes the RHS of the SPOOK equation
 * @method computeB
 * @return {Number}
 */
Equation.prototype.computeB = function(a,b,h){
    var GW = this.computeGW(),
        Gq = this.computeGq(),
        GiMf = this.computeGiMf();
    return - Gq * a - GW * b - GiMf*h;
};

/**
 * Computes G*q, where q are the generalized body coordinates
 * @method computeGq
 * @return {Number}
 */
Equation.prototype.computeGq = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        xi = bi.position,
        xj = bj.position;
    return GA.spatial.dot(xi) + GB.spatial.dot(xj);
};

var zero = new Vec3();

/**
 * Computes G*W, where W are the body velocities
 * @method computeGW
 * @return {Number}
 */
Equation.prototype.computeGW = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.velocity,
        vj = bj.velocity,
        wi = bi.angularVelocity || zero,
        wj = bj.angularVelocity || zero;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};


/**
 * Computes G*Wlambda, where W are the body velocities
 * @method computeGWlambda
 * @return {Number}
 */
Equation.prototype.computeGWlambda = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.vlambda,
        vj = bj.vlambda,
        wi = bi.wlambda || zero,
        wj = bj.wlambda || zero;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};

/**
 * Computes G*inv(M)*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.
 * @method computeGiMf
 * @return {Number}
 */
var iMfi = new Vec3(),
    iMfj = new Vec3(),
    invIi_vmult_taui = new Vec3(),
    invIj_vmult_tauj = new Vec3();
Equation.prototype.computeGiMf = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        fi = bi.force,
        ti = bi.torque,
        fj = bj.force,
        tj = bj.torque,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve;

    if(bi.invInertiaWorldSolve){ bi.invInertiaWorldSolve.vmult(ti,invIi_vmult_taui); }
    else { invIi_vmult_taui.set(0,0,0); }
    if(bj.invInertiaWorldSolve){ bj.invInertiaWorldSolve.vmult(tj,invIj_vmult_tauj); }
    else { invIj_vmult_tauj.set(0,0,0); }

    fi.mult(invMassi,iMfi);
    fj.mult(invMassj,iMfj);

    return GA.multiplyVectors(iMfi,invIi_vmult_taui) + GB.multiplyVectors(iMfj,invIj_vmult_tauj);
};

/**
 * Computes G*inv(M)*G'
 * @method computeGiMGt
 * @return {Number}
 */
var tmp = new Vec3();
Equation.prototype.computeGiMGt = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve,
        invIi = bi.invInertiaWorldSolve,
        invIj = bj.invInertiaWorldSolve,
        result = invMassi + invMassj;

    if(invIi){
        invIi.vmult(GA.rotational,tmp);
        result += tmp.dot(GA.rotational);
    }

    if(invIj){
        invIj.vmult(GB.rotational,tmp);
        result += tmp.dot(GB.rotational);
    }

    return  result;
};

var addToWlambda_temp = new Vec3(),
    addToWlambda_Gi = new Vec3(),
    addToWlambda_Gj = new Vec3(),
    addToWlambda_ri = new Vec3(),
    addToWlambda_rj = new Vec3(),
    addToWlambda_Mdiag = new Vec3();

/**
 * Add constraint velocity to the bodies.
 * @method addToWlambda
 * @param {Number} deltalambda
 */
Equation.prototype.addToWlambda = function(deltalambda){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        temp = addToWlambda_temp;

    // Add to linear velocity
    // v_lambda += inv(M) * delta_lamba * G
    GA.spatial.mult(bi.invMassSolve * deltalambda,temp);
    bi.vlambda.vadd(temp, bi.vlambda);

    GB.spatial.mult(bj.invMassSolve * deltalambda,temp);
    bj.vlambda.vadd(temp, bj.vlambda);

    // Add to angular velocity
    if(bi.invInertiaWorldSolve){
        bi.invInertiaWorldSolve.vmult(GA.rotational,temp);
        temp.mult(deltalambda,temp);
        bi.wlambda.vadd(temp,bi.wlambda);
    }

    if(bj.invInertiaWorldSolve){
        bj.invInertiaWorldSolve.vmult(GB.rotational,temp);
        temp.mult(deltalambda,temp);
        bj.wlambda.vadd(temp,bj.wlambda);
    }
};

/**
 * Compute the denominator part of the SPOOK equation: C = G*inv(M)*G' + eps
 * @method computeInvC
 * @param  {Number} eps
 * @return {Number}
 */
Equation.prototype.computeC = function(){
    return this.computeGiMGt() + this.eps;
};

},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(_dereq_,module,exports){
module.exports = FrictionEquation;

var Equation = _dereq_('./Equation');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');

/**
 * Constrains the slipping in a contact along a tangent
 * @class FrictionEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
 * @extends Equation
 */
function FrictionEquation(bodyA, bodyB, slipForce){
    Equation.call(this,bodyA, bodyB, -slipForce, slipForce);
    this.ri = new Vec3();
    this.rj = new Vec3();
    this.t = new Vec3(); // tangent
}

FrictionEquation.prototype = new Equation();
FrictionEquation.prototype.constructor = FrictionEquation;

var FrictionEquation_computeB_temp1 = new Vec3();
var FrictionEquation_computeB_temp2 = new Vec3();
FrictionEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixt = FrictionEquation_computeB_temp1,
        rjxt = FrictionEquation_computeB_temp2,
        t = this.t;

    // Caluclate cross products
    ri.cross(t,rixt);
    rj.cross(t,rjxt);

    // G = [-t -rixt t rjxt]
    // And remember, this is a pure velocity constraint, g is always zero!
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB;
    t.negate(GA.spatial);
    rixt.negate(GA.rotational);
    GB.spatial.copy(t);
    GB.rotational.copy(rjxt);

    var GW = this.computeGW();
    var GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(_dereq_,module,exports){
module.exports = RotationalEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
 * @class RotationalEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {number} [options.maxForce]
 * @extends Equation
 */
function RotationalEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    this.maxAngle = Math.PI / 2;
}

RotationalEquation.prototype = new Equation();
RotationalEquation.prototype.constructor = RotationalEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

RotationalEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // g = ni * nj
    // gdot = (nj x ni) * wi + (ni x nj) * wj
    // G = [0 njxni 0 nixnj]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.maxAngle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(_dereq_,module,exports){
module.exports = RotationalMotorEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
 * @class RotationalMotorEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} maxForce
 * @extends Equation
 */
function RotationalMotorEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce)!=='undefined' ? maxForce : 1e6;
    Equation.call(this,bodyA,bodyB,-maxForce,maxForce);

    /**
     * World oriented rotational axis
     * @property {Vec3} axisA
     */
    this.axisA = new Vec3();

    /**
     * World oriented rotational axis
     * @property {Vec3} axisB
     */
    this.axisB = new Vec3(); // World oriented rotational axis

    /**
     * Motor velocity
     * @property {Number} targetVelocity
     */
    this.targetVelocity = 0;
}

RotationalMotorEquation.prototype = new Equation();
RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;

RotationalMotorEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,

        axisA = this.axisA,
        axisB = this.axisB,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // g = 0
    // gdot = axisA * wi - axisB * wj
    // gdot = G * W = G * [vi wi vj wj]
    // =>
    // G = [0 axisA 0 -axisB]

    GA.rotational.copy(axisA);
    axisB.negate(GB.rotational);

    var GW = this.computeGW() - this.targetVelocity,
        GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(_dereq_,module,exports){
var Utils = _dereq_('../utils/Utils');

module.exports = ContactMaterial;

/**
 * Defines what happens when two materials meet.
 * @class ContactMaterial
 * @constructor
 * @param {Material} m1
 * @param {Material} m2
 * @param {object} [options]
 * @param {Number} [options.friction=0.3]
 * @param {Number} [options.restitution=0.3]
 * @param {number} [options.contactEquationStiffness=1e7]
 * @param {number} [options.contactEquationRelaxation=3]
 * @param {number} [options.frictionEquationStiffness=1e7]
 * @param {Number} [options.frictionEquationRelaxation=3]
 */
function ContactMaterial(m1, m2, options){
    options = Utils.defaults(options, {
        friction: 0.3,
        restitution: 0.3,
        contactEquationStiffness: 1e7,
        contactEquationRelaxation: 3,
        frictionEquationStiffness: 1e7,
        frictionEquationRelaxation: 3
    });

    /**
     * Identifier of this material
     * @property {Number} id
     */
    this.id = ContactMaterial.idCounter++;

    /**
     * Participating materials
     * @property {Array} materials
     * @todo  Should be .materialA and .materialB instead
     */
    this.materials = [m1, m2];

    /**
     * Friction coefficient
     * @property {Number} friction
     */
    this.friction = options.friction;

    /**
     * Restitution coefficient
     * @property {Number} restitution
     */
    this.restitution = options.restitution;

    /**
     * Stiffness of the produced contact equations
     * @property {Number} contactEquationStiffness
     */
    this.contactEquationStiffness = options.contactEquationStiffness;

    /**
     * Relaxation time of the produced contact equations
     * @property {Number} contactEquationRelaxation
     */
    this.contactEquationRelaxation = options.contactEquationRelaxation;

    /**
     * Stiffness of the produced friction equations
     * @property {Number} frictionEquationStiffness
     */
    this.frictionEquationStiffness = options.frictionEquationStiffness;

    /**
     * Relaxation time of the produced friction equations
     * @property {Number} frictionEquationRelaxation
     */
    this.frictionEquationRelaxation = options.frictionEquationRelaxation;
}

ContactMaterial.idCounter = 0;

},{"../utils/Utils":53}],25:[function(_dereq_,module,exports){
module.exports = Material;

/**
 * Defines a physics material.
 * @class Material
 * @constructor
 * @param {object} [options]
 * @author schteppe
 */
function Material(options){
    var name = '';
    options = options || {};

    // Backwards compatibility fix
    if(typeof(options) === 'string'){
        name = options;
        options = {};
    } else if(typeof(options) === 'object') {
        name = '';
    }

    /**
     * @property name
     * @type {String}
     */
    this.name = name;

    /**
     * material id.
     * @property id
     * @type {number}
     */
    this.id = Material.idCounter++;

    /**
     * Friction for this material. If non-negative, it will be used instead of the friction given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} friction
     */
    this.friction = typeof(options.friction) !== 'undefined' ? options.friction : -1;

    /**
     * Restitution for this material. If non-negative, it will be used instead of the restitution given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} restitution
     */
    this.restitution = typeof(options.restitution) !== 'undefined' ? options.restitution : -1;
}

Material.idCounter = 0;

},{}],26:[function(_dereq_,module,exports){
module.exports = JacobianElement;

var Vec3 = _dereq_('./Vec3');

/**
 * An element containing 6 entries, 3 spatial and 3 rotational degrees of freedom.
 * @class JacobianElement
 * @constructor
 */
function JacobianElement(){

    /**
     * @property {Vec3} spatial
     */
    this.spatial = new Vec3();

    /**
     * @property {Vec3} rotational
     */
    this.rotational = new Vec3();
}

/**
 * Multiply with other JacobianElement
 * @method multiplyElement
 * @param  {JacobianElement} element
 * @return {Number}
 */
JacobianElement.prototype.multiplyElement = function(element){
    return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
};

/**
 * Multiply with two vectors
 * @method multiplyVectors
 * @param  {Vec3} spatial
 * @param  {Vec3} rotational
 * @return {Number}
 */
JacobianElement.prototype.multiplyVectors = function(spatial,rotational){
    return spatial.dot(this.spatial) + rotational.dot(this.rotational);
};

},{"./Vec3":30}],27:[function(_dereq_,module,exports){
module.exports = Mat3;

var Vec3 = _dereq_('./Vec3');

/**
 * A 3x3 matrix.
 * @class Mat3
 * @constructor
 * @param array elements Array of nine elements. Optional.
 * @author schteppe / http://github.com/schteppe
 */
function Mat3(elements){
    /**
     * A vector of length 9, containing all matrix elements
     * @property {Array} elements
     */
    if(elements){
        this.elements = elements;
    } else {
        this.elements = [0,0,0,0,0,0,0,0,0];
    }
}

/**
 * Sets the matrix to identity
 * @method identity
 * @todo Should perhaps be renamed to setIdentity() to be more clear.
 * @todo Create another function that immediately creates an identity matrix eg. eye()
 */
Mat3.prototype.identity = function(){
    var e = this.elements;
    e[0] = 1;
    e[1] = 0;
    e[2] = 0;

    e[3] = 0;
    e[4] = 1;
    e[5] = 0;

    e[6] = 0;
    e[7] = 0;
    e[8] = 1;
};

/**
 * Set all elements to zero
 * @method setZero
 */
Mat3.prototype.setZero = function(){
    var e = this.elements;
    e[0] = 0;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 0;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
};

/**
 * Sets the matrix diagonal elements from a Vec3
 * @method setTrace
 * @param {Vec3} vec3
 */
Mat3.prototype.setTrace = function(vec3){
    var e = this.elements;
    e[0] = vec3.x;
    e[4] = vec3.y;
    e[8] = vec3.z;
};

/**
 * Gets the matrix diagonal elements
 * @method getTrace
 * @return {Vec3}
 */
Mat3.prototype.getTrace = function(target){
    var target = target || new Vec3();
    var e = this.elements;
    target.x = e[0];
    target.y = e[4];
    target.z = e[8];
};

/**
 * Matrix-Vector multiplication
 * @method vmult
 * @param {Vec3} v The vector to multiply with
 * @param {Vec3} target Optional, target to save the result in.
 */
Mat3.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var e = this.elements,
        x = v.x,
        y = v.y,
        z = v.z;
    target.x = e[0]*x + e[1]*y + e[2]*z;
    target.y = e[3]*x + e[4]*y + e[5]*z;
    target.z = e[6]*x + e[7]*y + e[8]*z;

    return target;
};

/**
 * Matrix-scalar multiplication
 * @method smult
 * @param {Number} s
 */
Mat3.prototype.smult = function(s){
    for(var i=0; i<this.elements.length; i++){
        this.elements[i] *= s;
    }
};

/**
 * Matrix multiplication
 * @method mmult
 * @param {Mat3} m Matrix to multiply with from left side.
 * @return {Mat3} The result.
 */
Mat3.prototype.mmult = function(m,target){
    var r = target || new Mat3();
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var sum = 0.0;
            for(var k=0; k<3; k++){
                sum += m.elements[i+k*3] * this.elements[k+j*3];
            }
            r.elements[i+j*3] = sum;
        }
    }
    return r;
};

/**
 * Scale each column of the matrix
 * @method scale
 * @param {Vec3} v
 * @return {Mat3} The result.
 */
Mat3.prototype.scale = function(v,target){
    target = target || new Mat3();
    var e = this.elements,
        t = target.elements;
    for(var i=0; i!==3; i++){
        t[3*i + 0] = v.x * e[3*i + 0];
        t[3*i + 1] = v.y * e[3*i + 1];
        t[3*i + 2] = v.z * e[3*i + 2];
    }
    return target;
};

/**
 * Solve Ax=b
 * @method solve
 * @param {Vec3} b The right hand side
 * @param {Vec3} target Optional. Target vector to save in.
 * @return {Vec3} The solution x
 * @todo should reuse arrays
 */
Mat3.prototype.solve = function(b,target){
    target = target || new Vec3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 4; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+4*0] = b.x;
    eqns[3+4*1] = b.y;
    eqns[3+4*2] = b.z;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = 4; // num rows
    var p, els;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do {  // do ligne( i ) = ligne( i ) + ligne( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do {  // do ligne( k ) = ligne( k ) - multiplier * ligne( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // Get the solution
    target.z = eqns[2*nc+3] / eqns[2*nc+2];
    target.y = (eqns[1*nc+3] - eqns[1*nc+2]*target.z) / eqns[1*nc+1];
    target.x = (eqns[0*nc+3] - eqns[0*nc+2]*target.z - eqns[0*nc+1]*target.y) / eqns[0*nc+0];

    if(isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x===Infinity || target.y===Infinity || target.z===Infinity){
        throw "Could not solve equation! Got x=["+target.toString()+"], b=["+b.toString()+"], A=["+this.toString()+"]";
    }

    return target;
};

/**
 * Get an element in the matrix by index. Index starts at 0, not 1!!!
 * @method e
 * @param {Number} row
 * @param {Number} column
 * @param {Number} value Optional. If provided, the matrix element will be set to this value.
 * @return {Number}
 */
Mat3.prototype.e = function( row , column ,value){
    if(value===undefined){
        return this.elements[column+3*row];
    } else {
        // Set value
        this.elements[column+3*row] = value;
    }
};

/**
 * Copy another matrix into this matrix object.
 * @method copy
 * @param {Mat3} source
 * @return {Mat3} this
 */
Mat3.prototype.copy = function(source){
    for(var i=0; i < source.elements.length; i++){
        this.elements[i] = source.elements[i];
    }
    return this;
};

/**
 * Returns a string representation of the matrix.
 * @method toString
 * @return string
 */
Mat3.prototype.toString = function(){
    var r = "";
    var sep = ",";
    for(var i=0; i<9; i++){
        r += this.elements[i] + sep;
    }
    return r;
};

/**
 * reverse the matrix
 * @method reverse
 * @param {Mat3} target Optional. Target matrix to save in.
 * @return {Mat3} The solution x
 */
Mat3.prototype.reverse = function(target){

    target = target || new Mat3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 6; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+6*0] = 1;
    eqns[3+6*1] = 0;
    eqns[3+6*2] = 0;
    eqns[4+6*0] = 0;
    eqns[4+6*1] = 1;
    eqns[4+6*2] = 0;
    eqns[5+6*0] = 0;
    eqns[5+6*1] = 0;
    eqns[5+6*2] = 1;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = nc; // num rows
    var p;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do { // do line( i ) = line( i ) + line( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do { // do line( k ) = line( k ) - multiplier * line( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // eliminate the upper left triangle of the matrix
    i = 2;
    do {
        j = i-1;
        do {
            var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
            np = nc;
            do {
                p = nc - np;
                eqns[p+nc*j] =  eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
            } while (--np);
        } while (j--);
    } while (--i);

    // operations on the diagonal
    i = 2;
    do {
        var multiplier = 1 / eqns[i+nc*i];
        np = nc;
        do {
            p = nc - np;
            eqns[p+nc*i] = eqns[p+nc*i] * multiplier ;
        } while (--np);
    } while (i--);

    i = 2;
    do {
        j = 2;
        do {
            p = eqns[nr+j+nc*i];
            if( isNaN( p ) || p ===Infinity ){
                throw "Could not reverse! A=["+this.toString()+"]";
            }
            target.e( i , j , p );
        } while (j--);
    } while (i--);

    return target;
};

/**
 * Set the matrix from a quaterion
 * @method setRotationFromQuaternion
 * @param {Quaternion} q
 */
Mat3.prototype.setRotationFromQuaternion = function( q ) {
    var x = q.x, y = q.y, z = q.z, w = q.w,
        x2 = x + x, y2 = y + y, z2 = z + z,
        xx = x * x2, xy = x * y2, xz = x * z2,
        yy = y * y2, yz = y * z2, zz = z * z2,
        wx = w * x2, wy = w * y2, wz = w * z2,
        e = this.elements;

    e[3*0 + 0] = 1 - ( yy + zz );
    e[3*0 + 1] = xy - wz;
    e[3*0 + 2] = xz + wy;

    e[3*1 + 0] = xy + wz;
    e[3*1 + 1] = 1 - ( xx + zz );
    e[3*1 + 2] = yz - wx;

    e[3*2 + 0] = xz - wy;
    e[3*2 + 1] = yz + wx;
    e[3*2 + 2] = 1 - ( xx + yy );

    return this;
};

/**
 * Transpose the matrix
 * @method transpose
 * @param  {Mat3} target Where to store the result.
 * @return {Mat3} The target Mat3, or a new Mat3 if target was omitted.
 */
Mat3.prototype.transpose = function( target ) {
    target = target || new Mat3();

    var Mt = target.elements,
        M = this.elements;

    for(var i=0; i!==3; i++){
        for(var j=0; j!==3; j++){
            Mt[3*i + j] = M[3*j + i];
        }
    }

    return target;
};

},{"./Vec3":30}],28:[function(_dereq_,module,exports){
module.exports = Quaternion;

var Vec3 = _dereq_('./Vec3');

/**
 * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
 * @class Quaternion
 * @constructor
 * @param {Number} x Multiplier of the imaginary basis vector i.
 * @param {Number} y Multiplier of the imaginary basis vector j.
 * @param {Number} z Multiplier of the imaginary basis vector k.
 * @param {Number} w Multiplier of the real part.
 * @see http://en.wikipedia.org/wiki/Quaternion
 */
function Quaternion(x,y,z,w){
    /**
     * @property {Number} x
     */
    this.x = x!==undefined ? x : 0;

    /**
     * @property {Number} y
     */
    this.y = y!==undefined ? y : 0;

    /**
     * @property {Number} z
     */
    this.z = z!==undefined ? z : 0;

    /**
     * The multiplier of the real quaternion basis vector.
     * @property {Number} w
     */
    this.w = w!==undefined ? w : 1;
}

/**
 * Set the value of the quaternion.
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} w
 */
Quaternion.prototype.set = function(x,y,z,w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
};

/**
 * Convert to a readable format
 * @method toString
 * @return string
 */
Quaternion.prototype.toString = function(){
    return this.x+","+this.y+","+this.z+","+this.w;
};

/**
 * Convert to an Array
 * @method toArray
 * @return Array
 */
Quaternion.prototype.toArray = function(){
    return [this.x, this.y, this.z, this.w];
};

/**
 * Set the quaternion components given an axis and an angle.
 * @method setFromAxisAngle
 * @param {Vec3} axis
 * @param {Number} angle in radians
 */
Quaternion.prototype.setFromAxisAngle = function(axis,angle){
    var s = Math.sin(angle*0.5);
    this.x = axis.x * s;
    this.y = axis.y * s;
    this.z = axis.z * s;
    this.w = Math.cos(angle*0.5);
};

/**
 * Converts the quaternion to axis/angle representation.
 * @method toAxisAngle
 * @param {Vec3} targetAxis Optional. A vector object to reuse for storing the axis.
 * @return Array An array, first elemnt is the axis and the second is the angle in radians.
 */
Quaternion.prototype.toAxisAngle = function(targetAxis){
    targetAxis = targetAxis || new Vec3();
    this.normalize(); // if w>1 acos and sqrt will produce errors, this cant happen if quaternion is normalised
    var angle = 2 * Math.acos(this.w);
    var s = Math.sqrt(1-this.w*this.w); // assuming quaternion normalised then w is less than 1, so term always positive.
    if (s < 0.001) { // test to avoid divide by zero, s is always positive due to sqrt
        // if s close to zero then direction of axis not important
        targetAxis.x = this.x; // if it is important that axis is normalised then replace with x=1; y=z=0;
        targetAxis.y = this.y;
        targetAxis.z = this.z;
    } else {
        targetAxis.x = this.x / s; // normalise axis
        targetAxis.y = this.y / s;
        targetAxis.z = this.z / s;
    }
    return [targetAxis,angle];
};

var sfv_t1 = new Vec3(),
    sfv_t2 = new Vec3();

/**
 * Set the quaternion value given two vectors. The resulting rotation will be the needed rotation to rotate u to v.
 * @method setFromVectors
 * @param {Vec3} u
 * @param {Vec3} v
 */
Quaternion.prototype.setFromVectors = function(u,v){
    if(u.isAntiparallelTo(v)){
        var t1 = sfv_t1;
        var t2 = sfv_t2;

        u.tangents(t1,t2);
        this.setFromAxisAngle(t1,Math.PI);
    } else {
        var a = u.cross(v);
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = Math.sqrt(Math.pow(u.norm(),2) * Math.pow(v.norm(),2)) + u.dot(v);
        this.normalize();
    }
};

/**
 * Quaternion multiplication
 * @method mult
 * @param {Quaternion} q
 * @param {Quaternion} target Optional.
 * @return {Quaternion}
 */
var Quaternion_mult_va = new Vec3();
var Quaternion_mult_vb = new Vec3();
var Quaternion_mult_vaxvb = new Vec3();
Quaternion.prototype.mult = function(q,target){
    target = target || new Quaternion();
    var w = this.w,
        va = Quaternion_mult_va,
        vb = Quaternion_mult_vb,
        vaxvb = Quaternion_mult_vaxvb;

    va.set(this.x,this.y,this.z);
    vb.set(q.x,q.y,q.z);
    target.w = w*q.w - va.dot(vb);
    va.cross(vb,vaxvb);

    target.x = w * vb.x + q.w*va.x + vaxvb.x;
    target.y = w * vb.y + q.w*va.y + vaxvb.y;
    target.z = w * vb.z + q.w*va.z + vaxvb.z;

    return target;
};

/**
 * Get the inverse quaternion rotation.
 * @method inverse
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.inverse = function(target){
    var x = this.x, y = this.y, z = this.z, w = this.w;
    target = target || new Quaternion();

    this.conjugate(target);
    var inorm2 = 1/(x*x + y*y + z*z + w*w);
    target.x *= inorm2;
    target.y *= inorm2;
    target.z *= inorm2;
    target.w *= inorm2;

    return target;
};

/**
 * Get the quaternion conjugate
 * @method conjugate
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.conjugate = function(target){
    target = target || new Quaternion();

    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    target.w = this.w;

    return target;
};

/**
 * Normalize the quaternion. Note that this changes the values of the quaternion.
 * @method normalize
 */
Quaternion.prototype.normalize = function(){
    var l = Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);
    if ( l === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        l = 1 / l;
        this.x *= l;
        this.y *= l;
        this.z *= l;
        this.w *= l;
    }
};

/**
 * Approximation of quaternion normalization. Works best when quat is already almost-normalized.
 * @method normalizeFast
 * @see http://jsperf.com/fast-quaternion-normalization
 * @author unphased, https://github.com/unphased
 */
Quaternion.prototype.normalizeFast = function () {
    var f = (3.0-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2.0;
    if ( f === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        this.x *= f;
        this.y *= f;
        this.z *= f;
        this.w *= f;
    }
};

/**
 * Multiply the quaternion by a vector
 * @method vmult
 * @param {Vec3} v
 * @param {Vec3} target Optional
 * @return {Vec3}
 */
Quaternion.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var x = v.x,
        y = v.y,
        z = v.z;

    var qx = this.x,
        qy = this.y,
        qz = this.z,
        qw = this.w;

    // q*v
    var ix =  qw * x + qy * z - qz * y,
    iy =  qw * y + qz * x - qx * z,
    iz =  qw * z + qx * y - qy * x,
    iw = -qx * x - qy * y - qz * z;

    target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return target;
};

/**
 * Copies value of source to this quaternion.
 * @method copy
 * @param {Quaternion} source
 * @return {Quaternion} this
 */
Quaternion.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    this.w = source.w;
    return this;
};

/**
 * Convert the quaternion to euler angle representation. Order: YZX, as this page describes: http://www.euclideanspace.com/maths/standards/index.htm
 * @method toEuler
 * @param {Vec3} target
 * @param string order Three-character string e.g. "YZX", which also is default.
 */
Quaternion.prototype.toEuler = function(target,order){
    order = order || "YZX";

    var heading, attitude, bank;
    var x = this.x, y = this.y, z = this.z, w = this.w;

    switch(order){
    case "YZX":
        var test = x*y + z*w;
        if (test > 0.499) { // singularity at north pole
            heading = 2 * Math.atan2(x,w);
            attitude = Math.PI/2;
            bank = 0;
        }
        if (test < -0.499) { // singularity at south pole
            heading = -2 * Math.atan2(x,w);
            attitude = - Math.PI/2;
            bank = 0;
        }
        if(isNaN(heading)){
            var sqx = x*x;
            var sqy = y*y;
            var sqz = z*z;
            heading = Math.atan2(2*y*w - 2*x*z , 1 - 2*sqy - 2*sqz); // Heading
            attitude = Math.asin(2*test); // attitude
            bank = Math.atan2(2*x*w - 2*y*z , 1 - 2*sqx - 2*sqz); // bank
        }
        break;
    default:
        throw new Error("Euler order "+order+" not supported yet.");
    }

    target.y = heading;
    target.z = attitude;
    target.x = bank;
};

/**
 * See http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m
 * @method setFromEuler
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {String} order The order to apply angles: 'XYZ' or 'YXZ' or any other combination
 */
Quaternion.prototype.setFromEuler = function ( x, y, z, order ) {
    order = order || "XYZ";

    var c1 = Math.cos( x / 2 );
    var c2 = Math.cos( y / 2 );
    var c3 = Math.cos( z / 2 );
    var s1 = Math.sin( x / 2 );
    var s2 = Math.sin( y / 2 );
    var s3 = Math.sin( z / 2 );

    if ( order === 'XYZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'YXZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'ZXY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'ZYX' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'YZX' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'XZY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    }

    return this;

};

Quaternion.prototype.clone = function(){
    return new Quaternion(this.x, this.y, this.z, this.w);
};
},{"./Vec3":30}],29:[function(_dereq_,module,exports){
var Vec3 = _dereq_('./Vec3');
var Quaternion = _dereq_('./Quaternion');

module.exports = Transform;

/**
 * @class Transform
 * @constructor
 */
function Transform(options) {
    options = options || {};

	/**
	 * @property {Vec3} position
	 */
	this.position = new Vec3();
    if(options.position){
        this.position.copy(options.position);
    }

	/**
	 * @property {Quaternion} quaternion
	 */
	this.quaternion = new Quaternion();
    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
    }
}

var tmpQuat = new Quaternion();

/**
 * @static
 * @method pointToLocaFrame
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {Vec3} worldPoint
 * @param {Vec3} result
 */
Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result){
    var result = result || new Vec3();
    worldPoint.vsub(position, result);
    quaternion.conjugate(tmpQuat);
    tmpQuat.vmult(result, result);
    return result;
};

/**
 * Get a global point in local transform coordinates.
 * @method pointToLocal
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToLocal = function(worldPoint, result){
    return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
};

/**
 * @static
 * @method pointToWorldFrame
 * @param {Vec3} position
 * @param {Vec3} quaternion
 * @param {Vec3} localPoint
 * @param {Vec3} result
 */
Transform.pointToWorldFrame = function(position, quaternion, localPoint, result){
    var result = result || new Vec3();
    quaternion.vmult(localPoint, result);
    result.vadd(position, result);
    return result;
};

/**
 * Get a local point in global transform coordinates.
 * @method pointToWorld
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToWorld = function(localPoint, result){
    return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
};


Transform.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToWorldFrame = function(quaternion, localVector, result){
    quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result){
    var result = result || new Vec3();
    quaternion.w *= -1;
    quaternion.vmult(worldVector, result);
    quaternion.w *= -1;
    return result;
};

},{"./Quaternion":28,"./Vec3":30}],30:[function(_dereq_,module,exports){
module.exports = Vec3;

var Mat3 = _dereq_('./Mat3');

/**
 * 3-dimensional vector
 * @class Vec3
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @author schteppe
 * @example
 *     var v = new Vec3(1, 2, 3);
 *     console.log('x=' + v.x); // x=1
 */
function Vec3(x,y,z){
    /**
     * @property x
     * @type {Number}
     */
    this.x = x||0.0;

    /**
     * @property y
     * @type {Number}
     */
    this.y = y||0.0;

    /**
     * @property z
     * @type {Number}
     */
    this.z = z||0.0;
}

/**
 * @static
 * @property {Vec3} ZERO
 */
Vec3.ZERO = new Vec3(0, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_X
 */
Vec3.UNIT_X = new Vec3(1, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_Y
 */
Vec3.UNIT_Y = new Vec3(0, 1, 0);

/**
 * @static
 * @property {Vec3} UNIT_Z
 */
Vec3.UNIT_Z = new Vec3(0, 0, 1);

/**
 * Vector cross product
 * @method cross
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.cross = function(v,target){
    var vx=v.x, vy=v.y, vz=v.z, x=this.x, y=this.y, z=this.z;
    target = target || new Vec3();

    target.x = (y * vz) - (z * vy);
    target.y = (z * vx) - (x * vz);
    target.z = (x * vy) - (y * vx);

    return target;
};

/**
 * Set the vectors' 3 elements
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return Vec3
 */
Vec3.prototype.set = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};

/**
 * Set all components of the vector to zero.
 * @method setZero
 */
Vec3.prototype.setZero = function(){
    this.x = this.y = this.z = 0;
};

/**
 * Vector addition
 * @method vadd
 * @param {Vec3} v
 * @param {Vec3} target Optional.
 * @return {Vec3}
 */
Vec3.prototype.vadd = function(v,target){
    if(target){
        target.x = v.x + this.x;
        target.y = v.y + this.y;
        target.z = v.z + this.z;
    } else {
        return new Vec3(this.x + v.x,
                               this.y + v.y,
                               this.z + v.z);
    }
};

/**
 * Vector subtraction
 * @method vsub
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.vsub = function(v,target){
    if(target){
        target.x = this.x - v.x;
        target.y = this.y - v.y;
        target.z = this.z - v.z;
    } else {
        return new Vec3(this.x-v.x,
                               this.y-v.y,
                               this.z-v.z);
    }
};

/**
 * Get the cross product matrix a_cross from a vector, such that a x b = a_cross * b = c
 * @method crossmat
 * @see http://www8.cs.umu.se/kurser/TDBD24/VT06/lectures/Lecture6.pdf
 * @return {Mat3}
 */
Vec3.prototype.crossmat = function(){
    return new Mat3([     0,  -this.z,   this.y,
                            this.z,        0,  -this.x,
                           -this.y,   this.x,        0]);
};

/**
 * Normalize the vector. Note that this changes the values in the vector.
 * @method normalize
 * @return {Number} Returns the norm of the vector
 */
Vec3.prototype.normalize = function(){
    var x=this.x, y=this.y, z=this.z;
    var n = Math.sqrt(x*x + y*y + z*z);
    if(n>0.0){
        var invN = 1/n;
        this.x *= invN;
        this.y *= invN;
        this.z *= invN;
    } else {
        // Make something up
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    return n;
};

/**
 * Get the version of this vector that is of length 1.
 * @method unit
 * @param {Vec3} target Optional target to save in
 * @return {Vec3} Returns the unit vector
 */
Vec3.prototype.unit = function(target){
    target = target || new Vec3();
    var x=this.x, y=this.y, z=this.z;
    var ninv = Math.sqrt(x*x + y*y + z*z);
    if(ninv>0.0){
        ninv = 1.0/ninv;
        target.x = x * ninv;
        target.y = y * ninv;
        target.z = z * ninv;
    } else {
        target.x = 1;
        target.y = 0;
        target.z = 0;
    }
    return target;
};

/**
 * Get the length of the vector
 * @method norm
 * @return {Number}
 * @deprecated Use .length() instead
 */
Vec3.prototype.norm = function(){
    var x=this.x, y=this.y, z=this.z;
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Get the length of the vector
 * @method length
 * @return {Number}
 */
Vec3.prototype.length = Vec3.prototype.norm;

/**
 * Get the squared length of the vector
 * @method norm2
 * @return {Number}
 * @deprecated Use .lengthSquared() instead.
 */
Vec3.prototype.norm2 = function(){
    return this.dot(this);
};

/**
 * Get the squared length of the vector.
 * @method lengthSquared
 * @return {Number}
 */
Vec3.prototype.lengthSquared = Vec3.prototype.norm2;

/**
 * Get distance from this point to another point
 * @method distanceTo
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceTo = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return Math.sqrt((px-x)*(px-x)+
                     (py-y)*(py-y)+
                     (pz-z)*(pz-z));
};

/**
 * Get squared distance from this point to another point
 * @method distanceSquared
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceSquared = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return (px-x)*(px-x) + (py-y)*(py-y) + (pz-z)*(pz-z);
};

/**
 * Multiply all the components of the vector with a scalar.
 * @deprecated Use .scale instead
 * @method mult
 * @param {Number} scalar
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 * @deprecated Use .scale() instead
 */
Vec3.prototype.mult = function(scalar,target){
    target = target || new Vec3();
    var x = this.x,
        y = this.y,
        z = this.z;
    target.x = scalar * x;
    target.y = scalar * y;
    target.z = scalar * z;
    return target;
};

/**
 * Multiply the vector with a scalar.
 * @method scale
 * @param {Number} scalar
 * @param {Vec3} target
 * @return {Vec3}
 */
Vec3.prototype.scale = Vec3.prototype.mult;

/**
 * Calculate dot product
 * @method dot
 * @param {Vec3} v
 * @return {Number}
 */
Vec3.prototype.dot = function(v){
    return this.x * v.x + this.y * v.y + this.z * v.z;
};

/**
 * @method isZero
 * @return bool
 */
Vec3.prototype.isZero = function(){
    return this.x===0 && this.y===0 && this.z===0;
};

/**
 * Make the vector point in the opposite direction.
 * @method negate
 * @param {Vec3} target Optional target to save in
 * @return {Vec3}
 */
Vec3.prototype.negate = function(target){
    target = target || new Vec3();
    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    return target;
};

/**
 * Compute two artificial tangents to the vector
 * @method tangents
 * @param {Vec3} t1 Vector object to save the first tangent in
 * @param {Vec3} t2 Vector object to save the second tangent in
 */
var Vec3_tangents_n = new Vec3();
var Vec3_tangents_randVec = new Vec3();
Vec3.prototype.tangents = function(t1,t2){
    var norm = this.norm();
    if(norm>0.0){
        var n = Vec3_tangents_n;
        var inorm = 1/norm;
        n.set(this.x*inorm,this.y*inorm,this.z*inorm);
        var randVec = Vec3_tangents_randVec;
        if(Math.abs(n.x) < 0.9){
            randVec.set(1,0,0);
            n.cross(randVec,t1);
        } else {
            randVec.set(0,1,0);
            n.cross(randVec,t1);
        }
        n.cross(t1,t2);
    } else {
        // The normal length is zero, make something up
        t1.set(1, 0, 0);
        t2.set(0, 1, 0);
    }
};

/**
 * Converts to a more readable format
 * @method toString
 * @return string
 */
Vec3.prototype.toString = function(){
    return this.x+","+this.y+","+this.z;
};

/**
 * Converts to an array
 * @method toArray
 * @return Array
 */
Vec3.prototype.toArray = function(){
    return [this.x, this.y, this.z];
};

/**
 * Copies value of source to this vector.
 * @method copy
 * @param {Vec3} source
 * @return {Vec3} this
 */
Vec3.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    return this;
};


/**
 * Do a linear interpolation between two vectors
 * @method lerp
 * @param {Vec3} v
 * @param {Number} t A number between 0 and 1. 0 will make this function return u, and 1 will make it return v. Numbers in between will generate a vector in between them.
 * @param {Vec3} target
 */
Vec3.prototype.lerp = function(v,t,target){
    var x=this.x, y=this.y, z=this.z;
    target.x = x + (v.x-x)*t;
    target.y = y + (v.y-y)*t;
    target.z = z + (v.z-z)*t;
};

/**
 * Check if a vector equals is almost equal to another one.
 * @method almostEquals
 * @param {Vec3} v
 * @param {Number} precision
 * @return bool
 */
Vec3.prototype.almostEquals = function(v,precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x-v.x)>precision ||
        Math.abs(this.y-v.y)>precision ||
        Math.abs(this.z-v.z)>precision){
        return false;
    }
    return true;
};

/**
 * Check if a vector is almost zero
 * @method almostZero
 * @param {Number} precision
 */
Vec3.prototype.almostZero = function(precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x)>precision ||
        Math.abs(this.y)>precision ||
        Math.abs(this.z)>precision){
        return false;
    }
    return true;
};

var antip_neg = new Vec3();

/**
 * Check if the vector is anti-parallel to another vector.
 * @method isAntiparallelTo
 * @param  {Vec3}  v
 * @param  {Number}  precision Set to zero for exact comparisons
 * @return {Boolean}
 */
Vec3.prototype.isAntiparallelTo = function(v,precision){
    this.negate(antip_neg);
    return antip_neg.almostEquals(v,precision);
};

/**
 * Clone the vector
 * @method clone
 * @return {Vec3}
 */
Vec3.prototype.clone = function(){
    return new Vec3(this.x, this.y, this.z);
};
},{"./Mat3":27}],31:[function(_dereq_,module,exports){
module.exports = Body;

var EventTarget = _dereq_('../utils/EventTarget');
var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Quaternion = _dereq_('../math/Quaternion');
var Material = _dereq_('../material/Material');
var AABB = _dereq_('../collision/AABB');
var Box = _dereq_('../shapes/Box');

/**
 * Base class for all body types.
 * @class Body
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.position]
 * @param {Vec3} [options.velocity]
 * @param {Vec3} [options.angularVelocity]
 * @param {Quaternion} [options.quaternion]
 * @param {number} [options.mass]
 * @param {Material} [options.material]
 * @param {number} [options.type]
 * @param {number} [options.linearDamping=0.01]
 * @param {number} [options.angularDamping=0.01]
 * @param {boolean} [options.allowSleep=true]
 * @param {number} [options.sleepSpeedLimit=0.1]
 * @param {number} [options.sleepTimeLimit=1]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=1]
 * @param {boolean} [options.fixedRotation=false]
 * @param {Body} [options.shape]
 * @example
 *     var body = new Body({
 *         mass: 1
 *     });
 *     var shape = new Sphere(1);
 *     body.addShape(shape);
 *     world.add(body);
 */
function Body(options){
    options = options || {};

    EventTarget.apply(this);

    this.id = Body.idCounter++;

    /**
     * Reference to the world the body is living in
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Callback function that is used BEFORE stepping the system. Use it to apply forces, for example. Inside the function, "this" will refer to this Body object.
     * @property preStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.preStep = null;

    /**
     * Callback function that is used AFTER stepping the system. Inside the function, "this" will refer to this Body object.
     * @property postStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.postStep = null;

    this.vlambda = new Vec3();

    /**
     * @property {Number} collisionFilterGroup
     */
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) === 'number' ? options.collisionFilterGroup : 1;

    /**
     * @property {Number} collisionFilterMask
     */
    this.collisionFilterMask = typeof(options.collisionFilterMask) === 'number' ? options.collisionFilterMask : 1;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {Number} collisionResponse
     */
	this.collisionResponse = true;

    /**
     * @property position
     * @type {Vec3}
     */
    this.position = new Vec3();

    if(options.position){
        this.position.copy(options.position);
    }

    /**
     * @property {Vec3} previousPosition
     */
    this.previousPosition = new Vec3();

    /**
     * Initial position of the body
     * @property initPosition
     * @type {Vec3}
     */
    this.initPosition = new Vec3();

    /**
     * @property velocity
     * @type {Vec3}
     */
    this.velocity = new Vec3();

    if(options.velocity){
        this.velocity.copy(options.velocity);
    }

    /**
     * @property initVelocity
     * @type {Vec3}
     */
    this.initVelocity = new Vec3();

    /**
     * Linear force on the body
     * @property force
     * @type {Vec3}
     */
    this.force = new Vec3();

    var mass = typeof(options.mass) === 'number' ? options.mass : 0;

    /**
     * @property mass
     * @type {Number}
     * @default 0
     */
    this.mass = mass;

    /**
     * @property invMass
     * @type {Number}
     */
    this.invMass = mass > 0 ? 1.0 / mass : 0;

    /**
     * @property material
     * @type {Material}
     */
    this.material = options.material || null;

    /**
     * @property linearDamping
     * @type {Number}
     */
    this.linearDamping = typeof(options.linearDamping) === 'number' ? options.linearDamping : 0.01;

    /**
     * One of: Body.DYNAMIC, Body.STATIC and Body.KINEMATIC.
     * @property type
     * @type {Number}
     */
    this.type = (mass <= 0.0 ? Body.STATIC : Body.DYNAMIC);
    if(typeof(options.type) === typeof(Body.STATIC)){
        this.type = options.type;
    }

    /**
     * If true, the body will automatically fall to sleep.
     * @property allowSleep
     * @type {Boolean}
     * @default true
     */
    this.allowSleep = typeof(options.allowSleep) !== 'undefined' ? options.allowSleep : true;

    /**
     * Current sleep state.
     * @property sleepState
     * @type {Number}
     */
    this.sleepState = 0;

    /**
     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
     * @property sleepSpeedLimit
     * @type {Number}
     * @default 0.1
     */
    this.sleepSpeedLimit = typeof(options.sleepSpeedLimit) !== 'undefined' ? options.sleepSpeedLimit : 0.1;

    /**
     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
     * @property sleepTimeLimit
     * @type {Number}
     * @default 1
     */
    this.sleepTimeLimit = typeof(options.sleepTimeLimit) !== 'undefined' ? options.sleepTimeLimit : 1;

    this.timeLastSleepy = 0;

    this._wakeUpAfterNarrowphase = false;


    /**
     * Rotational force on the body, around center of mass
     * @property {Vec3} torque
     */
    this.torque = new Vec3();

    /**
     * Orientation of the body
     * @property quaternion
     * @type {Quaternion}
     */
    this.quaternion = new Quaternion();

    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
    }

    /**
     * @property initQuaternion
     * @type {Quaternion}
     */
    this.initQuaternion = new Quaternion();

    /**
     * @property angularVelocity
     * @type {Vec3}
     */
    this.angularVelocity = new Vec3();

    if(options.angularVelocity){
        this.angularVelocity.copy(options.angularVelocity);
    }

    /**
     * @property initAngularVelocity
     * @type {Vec3}
     */
    this.initAngularVelocity = new Vec3();

    this.interpolatedPosition = new Vec3();
    this.interpolatedQuaternion = new Quaternion();

    /**
     * @property shapes
     * @type {array}
     */
    this.shapes = [];

    /**
     * @property shapeOffsets
     * @type {array}
     */
    this.shapeOffsets = [];

    /**
     * @property shapeOrientations
     * @type {array}
     */
    this.shapeOrientations = [];

    /**
     * @property inertia
     * @type {Vec3}
     */
    this.inertia = new Vec3();

    /**
     * @property {Vec3} invInertia
     */
    this.invInertia = new Vec3();

    /**
     * @property {Mat3} invInertiaWorld
     */
    this.invInertiaWorld = new Mat3();

    this.invMassSolve = 0;

    /**
     * @property {Vec3} invInertiaSolve
     */
    this.invInertiaSolve = new Vec3();

    /**
     * @property {Mat3} invInertiaWorldSolve
     */
    this.invInertiaWorldSolve = new Mat3();

    /**
     * Set to true if you don't want the body to rotate. Make sure to run .updateMassProperties() after changing this.
     * @property {Boolean} fixedRotation
     * @default false
     */
    this.fixedRotation = typeof(options.fixedRotation) !== "undefined" ? options.fixedRotation : false;

    /**
     * @property {Number} angularDamping
     */
    this.angularDamping = typeof(options.angularDamping) !== 'undefined' ? options.angularDamping : 0.01;

    /**
     * @property aabb
     * @type {AABB}
     */
    this.aabb = new AABB();

    /**
     * Indicates if the AABB needs to be updated before use.
     * @property aabbNeedsUpdate
     * @type {Boolean}
     */
    this.aabbNeedsUpdate = true;

    this.wlambda = new Vec3();

    if(options.shape){
        this.addShape(options.shape);
    }

    this.updateMassProperties();
}
Body.prototype = new EventTarget();
Body.prototype.constructor = Body;

/**
 * A dynamic body is fully simulated. Can be moved manually by the user, but normally they move according to forces. A dynamic body can collide with all body types. A dynamic body always has finite, non-zero mass.
 * @static
 * @property DYNAMIC
 * @type {Number}
 */
Body.DYNAMIC = 1;

/**
 * A static body does not move during simulation and behaves as if it has infinite mass. Static bodies can be moved manually by setting the position of the body. The velocity of a static body is always zero. Static bodies do not collide with other static or kinematic bodies.
 * @static
 * @property STATIC
 * @type {Number}
 */
Body.STATIC = 2;

/**
 * A kinematic body moves under simulation according to its velocity. They do not respond to forces. They can be moved manually, but normally a kinematic body is moved by setting its velocity. A kinematic body behaves as if it has infinite mass. Kinematic bodies do not collide with other static or kinematic bodies.
 * @static
 * @property KINEMATIC
 * @type {Number}
 */
Body.KINEMATIC = 4;



/**
 * @static
 * @property AWAKE
 * @type {number}
 */
Body.AWAKE = 0;

/**
 * @static
 * @property SLEEPY
 * @type {number}
 */
Body.SLEEPY = 1;

/**
 * @static
 * @property SLEEPING
 * @type {number}
 */
Body.SLEEPING = 2;

Body.idCounter = 0;

/**
 * Wake the body up.
 * @method wakeUp
 */
Body.prototype.wakeUp = function(){
    var s = this.sleepState;
    this.sleepState = 0;
    if(s === Body.SLEEPING){
        this.dispatchEvent({type:"wakeup"});
    }
};

/**
 * Force body sleep
 * @method sleep
 */
Body.prototype.sleep = function(){
    this.sleepState = Body.SLEEPING;
    this.velocity.set(0,0,0);
    this.angularVelocity.set(0,0,0);
};

Body.sleepyEvent = {
    type: "sleepy"
};

Body.sleepEvent = {
    type: "sleep"
};

/**
 * Called every timestep to update internal sleep timer and change sleep state if needed.
 * @method sleepTick
 * @param {Number} time The world time in seconds
 */
Body.prototype.sleepTick = function(time){
    if(this.allowSleep){
        var sleepState = this.sleepState;
        var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
        var speedLimitSquared = Math.pow(this.sleepSpeedLimit,2);
        if(sleepState===Body.AWAKE && speedSquared < speedLimitSquared){
            this.sleepState = Body.SLEEPY; // Sleepy
            this.timeLastSleepy = time;
            this.dispatchEvent(Body.sleepyEvent);
        } else if(sleepState===Body.SLEEPY && speedSquared > speedLimitSquared){
            this.wakeUp(); // Wake up
        } else if(sleepState===Body.SLEEPY && (time - this.timeLastSleepy ) > this.sleepTimeLimit){
            this.sleep(); // Sleeping
            this.dispatchEvent(Body.sleepEvent);
        }
    }
};

/**
 * If the body is sleeping, it should be immovable / have infinite mass during solve. We solve it by having a separate "solve mass".
 * @method updateSolveMassProperties
 */
Body.prototype.updateSolveMassProperties = function(){
    if(this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC){
        this.invMassSolve = 0;
        this.invInertiaSolve.setZero();
        this.invInertiaWorldSolve.setZero();
    } else {
        this.invMassSolve = this.invMass;
        this.invInertiaSolve.copy(this.invInertia);
        this.invInertiaWorldSolve.copy(this.invInertiaWorld);
    }
};

/**
 * Convert a world point to local body frame.
 * @method pointToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToLocalFrame = function(worldPoint,result){
    var result = result || new Vec3();
    worldPoint.vsub(this.position,result);
    this.quaternion.conjugate().vmult(result,result);
    return result;
};

/**
 * Convert a world vector to local body frame.
 * @method vectorToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToLocalFrame = function(worldVector, result){
    var result = result || new Vec3();
    this.quaternion.conjugate().vmult(worldVector,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method pointToWorldFrame
 * @param  {Vec3} localPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToWorldFrame = function(localPoint,result){
    var result = result || new Vec3();
    this.quaternion.vmult(localPoint,result);
    result.vadd(this.position,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method vectorToWorldFrame
 * @param  {Vec3} localVector
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

var tmpVec = new Vec3();
var tmpQuat = new Quaternion();

/**
 * Add a shape to the body with a local offset and orientation.
 * @method addShape
 * @param {Shape} shape
 * @param {Vec3} offset
 * @param {Quaternion} quaternion
 * @return {Body} The body object, for chainability.
 */
Body.prototype.addShape = function(shape, _offset, _orientation){
    var offset = new Vec3();
    var orientation = new Quaternion();

    if(_offset){
        offset.copy(_offset);
    }
    if(_orientation){
        orientation.copy(_orientation);
    }

    this.shapes.push(shape);
    this.shapeOffsets.push(offset);
    this.shapeOrientations.push(orientation);
    this.updateMassProperties();
    this.updateBoundingRadius();

    this.aabbNeedsUpdate = true;

    return this;
};

/**
 * Update the bounding radius of the body. Should be done if any of the shapes are changed.
 * @method updateBoundingRadius
 */
Body.prototype.updateBoundingRadius = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        N = shapes.length,
        radius = 0;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];
        shape.updateBoundingSphereRadius();
        var offset = shapeOffsets[i].norm(),
            r = shape.boundingSphereRadius;
        if(offset + r > radius){
            radius = offset + r;
        }
    }

    this.boundingRadius = radius;
};

var computeAABB_shapeAABB = new AABB();

/**
 * Updates the .aabb
 * @method computeAABB
 * @todo rename to updateAABB()
 */
Body.prototype.computeAABB = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        shapeOrientations = this.shapeOrientations,
        N = shapes.length,
        offset = tmpVec,
        orientation = tmpQuat,
        bodyQuat = this.quaternion,
        aabb = this.aabb,
        shapeAABB = computeAABB_shapeAABB;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];

        // Get shape world quaternion
        shapeOrientations[i].mult(bodyQuat, orientation);

        // Get shape world position
        orientation.vmult(shapeOffsets[i], offset);
        offset.vadd(this.position, offset);

        // vec2.rotate(offset, shapeOffsets[i], bodyAngle);
        // vec2.add(offset, offset, this.position);

        // Get shape AABB
        shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);

        if(i === 0){
            aabb.copy(shapeAABB);
        } else {
            aabb.extend(shapeAABB);
        }
    }

    this.aabbNeedsUpdate = false;
};

var uiw_m1 = new Mat3(),
    uiw_m2 = new Mat3(),
    uiw_m3 = new Mat3();

/**
 * Update .inertiaWorld and .invInertiaWorld
 * @method updateInertiaWorld
 */
Body.prototype.updateInertiaWorld = function(force){
    var I = this.invInertia;
    if (I.x === I.y && I.y === I.z && !force) {
        // If inertia M = s*I, where I is identity and s a scalar, then
        //    R*M*R' = R*(s*I)*R' = s*R*I*R' = s*R*R' = s*I = M
        // where R is the rotation matrix.
        // In other words, we don't have to transform the inertia if all
        // inertia diagonal entries are equal.
    } else {
        var m1 = uiw_m1,
            m2 = uiw_m2,
            m3 = uiw_m3;
        m1.setRotationFromQuaternion(this.quaternion);
        m1.transpose(m2);
        m1.scale(I,m1);
        m1.mmult(m2,this.invInertiaWorld);
        //m3.getTrace(this.invInertiaWorld);
    }

    /*
    this.quaternion.vmult(this.inertia,this.inertiaWorld);
    this.quaternion.vmult(this.invInertia,this.invInertiaWorld);
    */
};

/**
 * Apply force to a world point. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.torque.
 * @method applyForce
 * @param  {Vec3} force The amount of force to add.
 * @param  {Vec3} worldPoint A world point to apply the force on.
 */
var Body_applyForce_r = new Vec3();
var Body_applyForce_rotForce = new Vec3();
Body.prototype.applyForce = function(force,worldPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    // Compute point position relative to the body center
    var r = Body_applyForce_r;
    worldPoint.vsub(this.position,r);

    // Compute produced rotational force
    var rotForce = Body_applyForce_rotForce;
    r.cross(force,rotForce);

    // Add linear force
    this.force.vadd(force,this.force);

    // Add rotational force
    this.torque.vadd(rotForce,this.torque);
};

/**
 * Apply force to a local point in the body.
 * @method applyLocalForce
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalForce_worldForce = new Vec3();
var Body_applyLocalForce_worldPoint = new Vec3();
Body.prototype.applyLocalForce = function(localForce, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldForce = Body_applyLocalForce_worldForce;
    var worldPoint = Body_applyLocalForce_worldPoint;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localForce, worldForce);
    this.pointToWorldFrame(localPoint, worldPoint);

    this.applyForce(worldForce, worldPoint);
};

/**
 * Apply impulse to a world point. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
 * @method applyImpulse
 * @param  {Vec3} impulse The amount of impulse to add.
 * @param  {Vec3} worldPoint A world point to apply the force on.
 */
var Body_applyImpulse_r = new Vec3();
var Body_applyImpulse_velo = new Vec3();
var Body_applyImpulse_rotVelo = new Vec3();
Body.prototype.applyImpulse = function(impulse, worldPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    // Compute point position relative to the body center
    var r = Body_applyImpulse_r;
    worldPoint.vsub(this.position,r);

    // Compute produced central impulse velocity
    var velo = Body_applyImpulse_velo;
    velo.copy(impulse);
    velo.mult(this.invMass,velo);

    // Add linear impulse
    this.velocity.vadd(velo, this.velocity);

    // Compute produced rotational impulse velocity
    var rotVelo = Body_applyImpulse_rotVelo;
    r.cross(impulse,rotVelo);

    /*
    rotVelo.x *= this.invInertia.x;
    rotVelo.y *= this.invInertia.y;
    rotVelo.z *= this.invInertia.z;
    */
    this.invInertiaWorld.vmult(rotVelo,rotVelo);

    // Add rotational Impulse
    this.angularVelocity.vadd(rotVelo, this.angularVelocity);
};

/**
 * Apply locally-defined impulse to a local point in the body.
 * @method applyLocalImpulse
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalImpulse_worldImpulse = new Vec3();
var Body_applyLocalImpulse_worldPoint = new Vec3();
Body.prototype.applyLocalImpulse = function(localImpulse, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldImpulse = Body_applyLocalImpulse_worldImpulse;
    var worldPoint = Body_applyLocalImpulse_worldPoint;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localImpulse, worldImpulse);
    this.pointToWorldFrame(localPoint, worldPoint);

    this.applyImpulse(worldImpulse, worldPoint);
};

var Body_updateMassProperties_halfExtents = new Vec3();

/**
 * Should be called whenever you change the body shape or mass.
 * @method updateMassProperties
 */
Body.prototype.updateMassProperties = function(){
    var halfExtents = Body_updateMassProperties_halfExtents;

    this.invMass = this.mass > 0 ? 1.0 / this.mass : 0;
    var I = this.inertia;
    var fixed = this.fixedRotation;

    // Approximate with AABB box
    this.computeAABB();
    halfExtents.set(
        (this.aabb.upperBound.x-this.aabb.lowerBound.x) / 2,
        (this.aabb.upperBound.y-this.aabb.lowerBound.y) / 2,
        (this.aabb.upperBound.z-this.aabb.lowerBound.z) / 2
    );
    Box.calculateInertia(halfExtents, this.mass, I);

    this.invInertia.set(
        I.x > 0 && !fixed ? 1.0 / I.x : 0,
        I.y > 0 && !fixed ? 1.0 / I.y : 0,
        I.z > 0 && !fixed ? 1.0 / I.z : 0
    );
    this.updateInertiaWorld(true);
};

/**
 * Get world velocity of a point in the body.
 * @method getVelocityAtWorldPoint
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3} The result vector.
 */
Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result){
    var r = new Vec3();
    worldPoint.vsub(this.position, r);
    this.angularVelocity.cross(r, result);
    this.velocity.vadd(result, result);
    return result;
};

},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(_dereq_,module,exports){
var Body = _dereq_('./Body');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Ray = _dereq_('../collision/Ray');
var WheelInfo = _dereq_('../objects/WheelInfo');

module.exports = RaycastVehicle;

/**
 * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
 * @class RaycastVehicle
 * @constructor
 * @param {object} [options]
 * @param {Body} [options.chassisBody] The car chassis body.
 * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
 * @param {integer} [options.indexLeftAxis]
 * @param {integer} [options.indexUpAxis]
 */
function RaycastVehicle(options){

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    /**
     * An array of WheelInfo objects.
     * @property {array} wheelInfos
     */
    this.wheelInfos = [];

    /**
     * Will be set to true if the car is sliding.
     * @property {boolean} sliding
     */
    this.sliding = false;

    /**
     * @property {World} world
     */
    this.world = null;

    /**
     * Index of the right axis, 0=x, 1=y, 2=z
     * @property {integer} indexRightAxis
     * @default 1
     */
    this.indexRightAxis = typeof(options.indexRightAxis) !== 'undefined' ? options.indexRightAxis : 1;

    /**
     * Index of the forward axis, 0=x, 1=y, 2=z
     * @property {integer} indexForwardAxis
     * @default 0
     */
    this.indexForwardAxis = typeof(options.indexForwardAxis) !== 'undefined' ? options.indexForwardAxis : 0;

    /**
     * Index of the up axis, 0=x, 1=y, 2=z
     * @property {integer} indexUpAxis
     * @default 2
     */
    this.indexUpAxis = typeof(options.indexUpAxis) !== 'undefined' ? options.indexUpAxis : 2;
}

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpVec3 = new Vec3();
var tmpVec4 = new Vec3();
var tmpVec5 = new Vec3();
var tmpVec6 = new Vec3();
var tmpRay = new Ray();

/**
 * Add a wheel. For information about the options, see WheelInfo.
 * @method addWheel
 * @param {object} [options]
 */
RaycastVehicle.prototype.addWheel = function(options){
    options = options || {};

    var info = new WheelInfo(options);
    var index = this.wheelInfos.length;
    this.wheelInfos.push(info);

    return index;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    var wheel = this.wheelInfos[wheelIndex];
    wheel.steering = value;
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method applyEngineForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex){
    this.wheelInfos[wheelIndex].engineForce = value;
};

/**
 * Set the braking force of a wheel
 * @method setBrake
 * @param {number} brake
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setBrake = function(brake, wheelIndex){
    this.wheelInfos[wheelIndex].brake = brake;
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RaycastVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    world.add(this.chassisBody);
    var that = this;
    this.preStepCallback = function(){
        that.updateVehicle(world.dt);
    };
    world.addEventListener('preStep', this.preStepCallback);
    this.world = world;
};

/**
 * Get one of the wheel axles, world-oriented.
 * @private
 * @method getVehicleAxisWorld
 * @param  {integer} axisIndex
 * @param  {Vec3} result
 */
RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result){
    result.set(
        axisIndex === 0 ? 1 : 0,
        axisIndex === 1 ? 1 : 0,
        axisIndex === 2 ? 1 : 0
    );
    this.chassisBody.vectorToWorldFrame(result, result);
};

RaycastVehicle.prototype.updateVehicle = function(timeStep){
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;

    for (var i = 0; i < numWheels; i++) {
        this.updateWheelTransform(i);
    }

    this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();

    var forwardWorld = new Vec3();
    this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);

    if (forwardWorld.dot(chassisBody.velocity) < 0){
        this.currentVehicleSpeedKmHour *= -1;
    }

    // simulate suspension
    for (var i = 0; i < numWheels; i++) {
        this.castRay(wheelInfos[i]);
    }

    this.updateSuspension(timeStep);

    var impulse = new Vec3();
    var relpos = new Vec3();
    for (var i = 0; i < numWheels; i++) {
        //apply suspension force
        var wheel = wheelInfos[i];
        var suspensionForce = wheel.suspensionForce;
        if (suspensionForce > wheel.maxSuspensionForce) {
            suspensionForce = wheel.maxSuspensionForce;
        }
        wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);

        wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.applyImpulse(impulse, wheel.raycastResult.hitPointWorld/*relpos*/);
    }

    this.updateFriction(timeStep);

    var hitNormalWorldScaledWithProj = new Vec3();
    var fwd  = new Vec3();
    var vel = new Vec3();
    for (i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        //var relpos = new Vec3();
        //wheel.chassisConnectionPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);

        // Hack to get the rotation in the correct direction
        var m = 1;
        switch(this.indexUpAxis){
        case 1:
            m = -1;
            break;
        }

        if (wheel.isInContact) {

            this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
            var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
            wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);

            fwd.vsub(hitNormalWorldScaledWithProj, fwd);

            var proj2 = fwd.dot(vel);
            wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
        }

        if((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed){
            // Apply custom rotation when accelerating and sliding
            wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
        }

        // Lock wheels
        if(Math.abs(wheel.brake) > Math.abs(wheel.engineForce)){
            wheel.deltaRotation = 0;
        }

        wheel.rotation += wheel.deltaRotation; // Use the old value
        wheel.deltaRotation *= 0.99; // damping of rotation when not in contact
    }
};

RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
    var chassisBody = this.chassisBody;
    var chassisMass = chassisBody.mass;
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;

    for (var w_it = 0; w_it < numWheels; w_it++){
        var wheel = wheelInfos[w_it];

        if (wheel.isInContact){
            var force;

            // Spring
            var susp_length = wheel.suspensionRestLength;
            var current_length = wheel.suspensionLength;
            var length_diff = (susp_length - current_length);

            force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;

            // Damper
            var projected_rel_vel = wheel.suspensionRelativeVelocity;
            var susp_damping;
            if (projected_rel_vel < 0) {
                susp_damping = wheel.dampingCompression;
            } else {
                susp_damping = wheel.dampingRelaxation;
            }
            force -= susp_damping * projected_rel_vel;

            wheel.suspensionForce = force * chassisMass;
            if (wheel.suspensionForce < 0) {
                wheel.suspensionForce = 0;
            }
        } else {
            wheel.suspensionForce = 0;
        }
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RaycastVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    world.remove(this.chassisBody);
    world.removeEventListener('preStep', this.preStepCallback);
    this.world = null;
};

var castRay_rayvector = new Vec3();
var castRay_target = new Vec3();
RaycastVehicle.prototype.castRay = function(wheel) {
    var rayvector = castRay_rayvector;
    var target = castRay_target;

    this.updateWheelTransformWorld(wheel);
    var chassisBody = this.chassisBody;

    var depth = -1;

    var raylen = wheel.suspensionRestLength + wheel.radius;

    wheel.directionWorld.scale(raylen, rayvector);
    var source = wheel.chassisConnectionPointWorld;
    source.vadd(rayvector, target);
    var raycastResult = wheel.raycastResult;

    var param = 0;

    raycastResult.reset();
    // Turn off ray collision with the chassis temporarily
    var oldState = chassisBody.collisionResponse;
    chassisBody.collisionResponse = false;

    // Cast ray against world
    this.world.rayTest(source, target, raycastResult);
    chassisBody.collisionResponse = oldState;

    var object = raycastResult.body;

    wheel.raycastResult.groundObject = 0;

    if (object) {
        depth = raycastResult.distance;
        wheel.raycastResult.hitNormalWorld  = raycastResult.hitNormalWorld;
        wheel.isInContact = true;

        var hitDistance = raycastResult.distance;
        wheel.suspensionLength = hitDistance - wheel.radius;

        // clamp on max suspension travel
        var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
        var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
        if (wheel.suspensionLength < minSuspensionLength) {
            wheel.suspensionLength = minSuspensionLength;
        }
        if (wheel.suspensionLength > maxSuspensionLength) {
            wheel.suspensionLength = maxSuspensionLength;
            wheel.raycastResult.reset();
        }

        var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);

        var chassis_velocity_at_contactPoint = new Vec3();
        chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);

        var projVel = wheel.raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );

        if (denominator >= -0.1) {
            wheel.suspensionRelativeVelocity = 0;
            wheel.clippedInvContactDotSuspension = 1 / 0.1;
        } else {
            var inv = -1 / denominator;
            wheel.suspensionRelativeVelocity = projVel * inv;
            wheel.clippedInvContactDotSuspension = inv;
        }

    } else {

        //put wheel info as in rest position
        wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
        wheel.suspensionRelativeVelocity = 0.0;
        wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
        wheel.clippedInvContactDotSuspension = 1.0;
    }

    return depth;
};

RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel){
    wheel.isInContact = false;
    var chassisBody = this.chassisBody;
    chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
    chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
    chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
};


/**
 * Update one of the wheel transform.
 * Note when rendering wheels: during each step, wheel transforms are updated BEFORE the chassis; ie. their position becomes invalid after the step. Thus when you render wheels, you must update wheel transforms before rendering them. See raycastVehicle demo for an example.
 * @method updateWheelTransform
 * @param {integer} wheelIndex The wheel index to update.
 */
RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex){
    var up = tmpVec4;
    var right = tmpVec5;
    var fwd = tmpVec6;

    var wheel = this.wheelInfos[wheelIndex];
    this.updateWheelTransformWorld(wheel);

    wheel.directionLocal.scale(-1, up);
    right.copy(wheel.axleLocal);
    up.cross(right, fwd);
    fwd.normalize();
    right.normalize();

    // Rotate around steering over the wheelAxle
    var steering = wheel.steering;
    var steeringOrn = new Quaternion();
    steeringOrn.setFromAxisAngle(up, steering);

    var rotatingOrn = new Quaternion();
    rotatingOrn.setFromAxisAngle(right, wheel.rotation);

    // World rotation of the wheel
    var q = wheel.worldTransform.quaternion;
    this.chassisBody.quaternion.mult(steeringOrn, q);
    q.mult(rotatingOrn, q);

    q.normalize();

    // world position of the wheel
    var p = wheel.worldTransform.position;
    p.copy(wheel.directionWorld);
    p.scale(wheel.suspensionLength, p);
    p.vadd(wheel.chassisConnectionPointWorld, p);
};

var directions = [
    new Vec3(1, 0, 0),
    new Vec3(0, 1, 0),
    new Vec3(0, 0, 1)
];

/**
 * Get the world transform of one of the wheels
 * @method getWheelTransformWorld
 * @param  {integer} wheelIndex
 * @return {Transform}
 */
RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
    return this.wheelInfos[wheelIndex].worldTransform;
};


var updateFriction_surfNormalWS_scaled_proj = new Vec3();
var updateFriction_axle = [];
var updateFriction_forwardWS = [];
var sideFrictionStiffness2 = 1;
RaycastVehicle.prototype.updateFriction = function(timeStep) {
    var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;

    //calculate the impulse, so that the wheels don't move sidewards
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;
    var forwardWS = updateFriction_forwardWS;
    var axle = updateFriction_axle;

    var numWheelsOnGround = 0;

    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;
        if (groundObject){
            numWheelsOnGround++;
        }

        wheel.sideImpulse = 0;
        wheel.forwardImpulse = 0;
        if(!forwardWS[i]){
            forwardWS[i] = new Vec3();
        }
        if(!axle[i]){
            axle[i] = new Vec3();
        }
    }

    for (var i = 0; i < numWheels; i++){
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;

        if (groundObject) {
            var axlei = axle[i];
            var wheelTrans = this.getWheelTransformWorld(i);

            // Get world axle
            wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);

            var surfNormalWS = wheel.raycastResult.hitNormalWorld;
            var proj = axlei.dot(surfNormalWS);
            surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
            axlei.vsub(surfNormalWS_scaled_proj, axlei);
            axlei.normalize();

            surfNormalWS.cross(axlei, forwardWS[i]);
            forwardWS[i].normalize();

            wheel.sideImpulse = resolveSingleBilateral(
                chassisBody,
                wheel.raycastResult.hitPointWorld,
                groundObject,
                wheel.raycastResult.hitPointWorld,
                axlei
            );

            wheel.sideImpulse *= sideFrictionStiffness2;
        }
    }

    var sideFactor = 1;
    var fwdFactor = 0.5;

    this.sliding = false;
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        var groundObject = wheel.raycastResult.body;

        var rollingFriction = 0;

        wheel.slipInfo = 1;
        if (groundObject) {
            var defaultRollingFrictionImpulse = 0;
            var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;

            // btWheelContactPoint contactPt(chassisBody,groundObject,wheelInfraycastInfo.hitPointWorld,forwardWS[wheel],maxImpulse);
            // rollingFriction = calcRollingFriction(contactPt);
            rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);

            rollingFriction += wheel.engineForce * timeStep;

            // rollingFriction = 0;
            var factor = maxImpulse / rollingFriction;
            wheel.slipInfo *= factor;
        }

        //switch between active rolling (throttle), braking and non-active rolling friction (nthrottle/break)

        wheel.forwardImpulse = 0;
        wheel.skidInfo = 1;

        if (groundObject) {
            wheel.skidInfo = 1;

            var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
            var maximpSide = maximp;

            var maximpSquared = maximp * maximpSide;

            wheel.forwardImpulse = rollingFriction;//wheelInfo.engineForce* timeStep;

            var x = wheel.forwardImpulse * fwdFactor;
            var y = wheel.sideImpulse * sideFactor;

            var impulseSquared = x * x + y * y;

            wheel.sliding = false;
            if (impulseSquared > maximpSquared) {
                this.sliding = true;
                wheel.sliding = true;

                var factor = maximp / Math.sqrt(impulseSquared);

                wheel.skidInfo *= factor;
            }
        }
    }

    if (this.sliding) {
        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            if (wheel.sideImpulse !== 0) {
                if (wheel.skidInfo < 1){
                    wheel.forwardImpulse *= wheel.skidInfo;
                    wheel.sideImpulse *= wheel.skidInfo;
                }
            }
        }
    }

    // apply the impulses
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var rel_pos = new Vec3();
        //wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, rel_pos);
        // cannons applyimpulse is using world coord for the position
        rel_pos.copy(wheel.raycastResult.hitPointWorld);

        if (wheel.forwardImpulse !== 0) {
            var impulse = new Vec3();
            forwardWS[i].scale(wheel.forwardImpulse, impulse);
            chassisBody.applyImpulse(impulse, rel_pos);
        }

        if (wheel.sideImpulse !== 0){
            var groundObject = wheel.raycastResult.body;

            var rel_pos2 = new Vec3();
            //wheel.raycastResult.hitPointWorld.vsub(groundObject.position, rel_pos2);
            rel_pos2.copy(wheel.raycastResult.hitPointWorld);
            var sideImp = new Vec3();
            axle[i].scale(wheel.sideImpulse, sideImp);

            // Scale the relative position in the up direction with rollInfluence.
            // If rollInfluence is 1, the impulse will be applied on the hitPoint (easy to roll over), if it is zero it will be applied in the same plane as the center of mass (not easy to roll over).
            chassisBody.pointToLocalFrame(rel_pos, rel_pos);
            rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
            chassisBody.pointToWorldFrame(rel_pos, rel_pos);
            chassisBody.applyImpulse(sideImp, rel_pos);

            //apply friction impulse on the ground
            sideImp.scale(-1, sideImp);
            groundObject.applyImpulse(sideImp, rel_pos2);
        }
    }
};

var calcRollingFriction_vel1 = new Vec3();
var calcRollingFriction_vel2 = new Vec3();
var calcRollingFriction_vel = new Vec3();

function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
    var j1 = 0;
    var contactPosWorld = frictionPosWorld;

    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    var vel1 = calcRollingFriction_vel1;
    var vel2 = calcRollingFriction_vel2;
    var vel = calcRollingFriction_vel;
    // contactPosWorld.vsub(body0.position, rel_pos1);
    // contactPosWorld.vsub(body1.position, rel_pos2);

    body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
    body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
    vel1.vsub(vel2, vel);

    var vrel = frictionDirectionWorld.dot(vel);

    var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
    var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
    var relaxation = 1;
    var jacDiagABInv = relaxation / (denom0 + denom1);

    // calculate j that moves us to zero relative velocity
    j1 = -vrel * jacDiagABInv;

    if (maxImpulse < j1) {
        j1 = maxImpulse;
    }
    if (j1 < -maxImpulse) {
        j1 = -maxImpulse;
    }

    return j1;
}

var computeImpulseDenominator_r0 = new Vec3();
var computeImpulseDenominator_c0 = new Vec3();
var computeImpulseDenominator_vec = new Vec3();
var computeImpulseDenominator_m = new Vec3();
function computeImpulseDenominator(body, pos, normal) {
    var r0 = computeImpulseDenominator_r0;
    var c0 = computeImpulseDenominator_c0;
    var vec = computeImpulseDenominator_vec;
    var m = computeImpulseDenominator_m;

    pos.vsub(body.position, r0);
    r0.cross(normal, c0);
    body.invInertiaWorld.vmult(c0, m);
    m.cross(r0, vec);

    return body.invMass + normal.dot(vec);
}


var resolveSingleBilateral_vel1 = new Vec3();
var resolveSingleBilateral_vel2 = new Vec3();
var resolveSingleBilateral_vel = new Vec3();

//bilateral constraint between two dynamic objects
function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse){
    var normalLenSqr = normal.norm2();
    if (normalLenSqr > 1.1){
        return 0; // no impulse
    }
    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    // pos1.vsub(body1.position, rel_pos1);
    // pos2.vsub(body2.position, rel_pos2);

    var vel1 = resolveSingleBilateral_vel1;
    var vel2 = resolveSingleBilateral_vel2;
    var vel = resolveSingleBilateral_vel;
    body1.getVelocityAtWorldPoint(pos1, vel1);
    body2.getVelocityAtWorldPoint(pos2, vel2);

    vel1.vsub(vel2, vel);

    var rel_vel = normal.dot(vel);

    var contactDamping = 0.2;
    var massTerm = 1 / (body1.invMass + body2.invMass);
    var impulse = - contactDamping * rel_vel * massTerm;

    return impulse;
}
},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(_dereq_,module,exports){
var Body = _dereq_('./Body');
var Sphere = _dereq_('../shapes/Sphere');
var Box = _dereq_('../shapes/Box');
var Vec3 = _dereq_('../math/Vec3');
var HingeConstraint = _dereq_('../constraints/HingeConstraint');

module.exports = RigidVehicle;

/**
 * Simple vehicle helper class with spherical rigid body wheels.
 * @class RigidVehicle
 * @constructor
 * @param {Body} [options.chassisBody]
 */
function RigidVehicle(options){
    this.wheelBodies = [];

    /**
     * @property coordinateSystem
     * @type {Vec3}
     */
    this.coordinateSystem = typeof(options.coordinateSystem)==='undefined' ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    if(!this.chassisBody){
        // No chassis body given. Create it!
        var chassisShape = new Box(new Vec3(5, 2, 0.5));
        this.chassisBody = new Body(1, chassisShape);
    }

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    this.wheelAxes = [];
    this.wheelForces = [];
}

/**
 * Add a wheel
 * @method addWheel
 * @param {object} options
 * @param {boolean} [options.isFrontWheel]
 * @param {Vec3} [options.position] Position of the wheel, locally in the chassis body.
 * @param {Vec3} [options.direction] Slide direction of the wheel along the suspension.
 * @param {Vec3} [options.axis] Axis of rotation of the wheel, locally defined in the chassis.
 * @param {Body} [options.body] The wheel body.
 */
RigidVehicle.prototype.addWheel = function(options){
    options = options || {};
    var wheelBody = options.body;
    if(!wheelBody){
        wheelBody =  new Body(1, new Sphere(1.2));
    }
    this.wheelBodies.push(wheelBody);
    this.wheelForces.push(0);

    // Position constrain wheels
    var zero = new Vec3();
    var position = typeof(options.position) !== 'undefined' ? options.position.clone() : new Vec3();

    // Set position locally to the chassis
    var worldPosition = new Vec3();
    this.chassisBody.pointToWorldFrame(position, worldPosition);
    wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);

    // Constrain wheel
    var axis = typeof(options.axis) !== 'undefined' ? options.axis.clone() : new Vec3(0, 1, 0);
    this.wheelAxes.push(axis);

    var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
        pivotA: position,
        axisA: axis,
        pivotB: Vec3.ZERO,
        axisB: axis,
        collideConnected: false
    });
    this.constraints.push(hingeConstraint);

    return this.wheelBodies.length - 1;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 * @todo check coordinateSystem
 */
RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    // Set angle of the hinge axis
    var axis = this.wheelAxes[wheelIndex];

    var c = Math.cos(value),
        s = Math.sin(value),
        x = axis.x,
        y = axis.y;
    this.constraints[wheelIndex].axisA.set(
        c*x -s*y,
        s*x +c*y,
        0
    );
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method setMotorSpeed
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.enableMotor();
    hingeConstraint.motorTargetVelocity = value;
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method disableMotor
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.disableMotor = function(wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.disableMotor();
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method setWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.setWheelForce = function(value, wheelIndex){
    this.wheelForces[wheelIndex] = value;
};

/**
 * Apply a torque on one of the wheels.
 * @method applyWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var bodyTorque = wheelBody.torque;

    axis.scale(value, torque);
    wheelBody.vectorToWorldFrame(torque, torque);
    bodyTorque.vadd(torque, bodyTorque);
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RigidVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.add(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.addConstraint(constraints[i]);
    }

    world.addEventListener('preStep', this._update.bind(this));
};

RigidVehicle.prototype._update = function(){
    var wheelForces = this.wheelForces;
    for (var i = 0; i < wheelForces.length; i++) {
        this.applyWheelForce(wheelForces[i], i);
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RigidVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.remove(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.removeConstraint(constraints[i]);
    }
};

var worldAxis = new Vec3();

/**
 * Get current rotational velocity of a wheel
 * @method getWheelSpeed
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.getWheelSpeed = function(wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var w = wheelBody.angularVelocity;
    this.chassisBody.vectorToWorldFrame(axis, worldAxis);
    return w.dot(worldAxis);
};

},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(_dereq_,module,exports){
module.exports = SPHSystem;

var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Particle = _dereq_('../shapes/Particle');
var Body = _dereq_('../objects/Body');
var Material = _dereq_('../material/Material');

/**
 * Smoothed-particle hydrodynamics system
 * @class SPHSystem
 * @constructor
 */
function SPHSystem(){
    this.particles = [];
	
    /**
     * Density of the system (kg/m3).
     * @property {number} density
     */
    this.density = 1;
	
    /**
     * Distance below which two particles are considered to be neighbors.
     * It should be adjusted so there are about 15-20 neighbor particles within this radius.
     * @property {number} smoothingRadius
     */
    this.smoothingRadius = 1;
    this.speedOfSound = 1;
	
    /**
     * Viscosity of the system.
     * @property {number} viscosity
     */
    this.viscosity = 0.01;
    this.eps = 0.000001;

    // Stuff Computed per particle
    this.pressures = [];
    this.densities = [];
    this.neighbors = [];
}

/**
 * Add a particle to the system.
 * @method add
 * @param {Body} particle
 */
SPHSystem.prototype.add = function(particle){
    this.particles.push(particle);
    if(this.neighbors.length < this.particles.length){
        this.neighbors.push([]);
    }
};

/**
 * Remove a particle from the system.
 * @method remove
 * @param {Body} particle
 */
SPHSystem.prototype.remove = function(particle){
    var idx = this.particles.indexOf(particle);
    if(idx !== -1){
        this.particles.splice(idx,1);
        if(this.neighbors.length > this.particles.length){
            this.neighbors.pop();
        }
    }
};

/**
 * Get neighbors within smoothing volume, save in the array neighbors
 * @method getNeighbors
 * @param {Body} particle
 * @param {Array} neighbors
 */
var SPHSystem_getNeighbors_dist = new Vec3();
SPHSystem.prototype.getNeighbors = function(particle,neighbors){
    var N = this.particles.length,
        id = particle.id,
        R2 = this.smoothingRadius * this.smoothingRadius,
        dist = SPHSystem_getNeighbors_dist;
    for(var i=0; i!==N; i++){
        var p = this.particles[i];
        p.position.vsub(particle.position,dist);
        if(id!==p.id && dist.norm2() < R2){
            neighbors.push(p);
        }
    }
};

// Temp vectors for calculation
var SPHSystem_update_dist = new Vec3(),
    SPHSystem_update_a_pressure = new Vec3(),
    SPHSystem_update_a_visc = new Vec3(),
    SPHSystem_update_gradW = new Vec3(),
    SPHSystem_update_r_vec = new Vec3(),
    SPHSystem_update_u = new Vec3(); // Relative velocity
SPHSystem.prototype.update = function(){
    var N = this.particles.length,
        dist = SPHSystem_update_dist,
        cs = this.speedOfSound,
        eps = this.eps;

    for(var i=0; i!==N; i++){
        var p = this.particles[i]; // Current particle
        var neighbors = this.neighbors[i];

        // Get neighbors
        neighbors.length = 0;
        this.getNeighbors(p,neighbors);
        neighbors.push(this.particles[i]); // Add current too
        var numNeighbors = neighbors.length;

        // Accumulate density for the particle
        var sum = 0.0;
        for(var j=0; j!==numNeighbors; j++){

            //printf("Current particle has position %f %f %f\n",objects[id].pos.x(),objects[id].pos.y(),objects[id].pos.z());
            p.position.vsub(neighbors[j].position, dist);
            var len = dist.norm();

            var weight = this.w(len);
            sum += neighbors[j].mass * weight;
        }

        // Save
        this.densities[i] = sum;
        this.pressures[i] = cs * cs * (this.densities[i] - this.density);
    }

    // Add forces

    // Sum to these accelerations
    var a_pressure= SPHSystem_update_a_pressure;
    var a_visc =    SPHSystem_update_a_visc;
    var gradW =     SPHSystem_update_gradW;
    var r_vec =     SPHSystem_update_r_vec;
    var u =         SPHSystem_update_u;

    for(var i=0; i!==N; i++){

        var particle = this.particles[i];

        a_pressure.set(0,0,0);
        a_visc.set(0,0,0);

        // Init vars
        var Pij;
        var nabla;
        var Vij;

        // Sum up for all other neighbors
        var neighbors = this.neighbors[i];
        var numNeighbors = neighbors.length;

        //printf("Neighbors: ");
        for(var j=0; j!==numNeighbors; j++){

            var neighbor = neighbors[j];
            //printf("%d ",nj);

            // Get r once for all..
            particle.position.vsub(neighbor.position,r_vec);
            var r = r_vec.norm();

            // Pressure contribution
            Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i]*this.densities[i] + eps) + this.pressures[j] / (this.densities[j]*this.densities[j] + eps));
            this.gradw(r_vec, gradW);
            // Add to pressure acceleration
            gradW.mult(Pij , gradW);
            a_pressure.vadd(gradW, a_pressure);

            // Viscosity contribution
            neighbor.velocity.vsub(particle.velocity, u);
            u.mult( 1.0 / (0.0001+this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass , u );
            nabla = this.nablaw(r);
            u.mult(nabla,u);
            // Add to viscosity acceleration
            a_visc.vadd( u, a_visc );
        }

        // Calculate force
        a_visc.mult(particle.mass, a_visc);
        a_pressure.mult(particle.mass, a_pressure);

        // Add force to particles
        particle.force.vadd(a_visc, particle.force);
        particle.force.vadd(a_pressure, particle.force);
    }
};

// Calculate the weight using the W(r) weightfunction
SPHSystem.prototype.w = function(r){
    // 315
    var h = this.smoothingRadius;
    return 315.0/(64.0*Math.PI*Math.pow(h,9)) * Math.pow(h*h-r*r,3);
};

// calculate gradient of the weight function
SPHSystem.prototype.gradw = function(rVec,resultVec){
    var r = rVec.norm(),
        h = this.smoothingRadius;
    rVec.mult(945.0/(32.0*Math.PI*Math.pow(h,9)) * Math.pow((h*h-r*r),2) , resultVec);
};

// Calculate nabla(W)
SPHSystem.prototype.nablaw = function(r){
    var h = this.smoothingRadius;
    var nabla = 945.0/(32.0*Math.PI*Math.pow(h,9)) * (h*h-r*r)*(7*r*r - 3*h*h);
    return nabla;
};

},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');

module.exports = Spring;

/**
 * A spring, connecting two bodies.
 *
 * @class Spring
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Object} [options]
 * @param {number} [options.restLength]   A number > 0. Default: 1
 * @param {number} [options.stiffness]    A number >= 0. Default: 100
 * @param {number} [options.damping]      A number >= 0. Default: 1
 * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
 * @param {Vec3}  [options.worldAnchorB]
 * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
 * @param {Vec3}  [options.localAnchorB]
 */
function Spring(bodyA,bodyB,options){
    options = options || {};

    /**
     * Rest length of the spring.
     * @property restLength
     * @type {number}
     */
    this.restLength = typeof(options.restLength) === "number" ? options.restLength : 1;

    /**
     * Stiffness of the spring.
     * @property stiffness
     * @type {number}
     */
    this.stiffness = options.stiffness || 100;

    /**
     * Damping of the spring.
     * @property damping
     * @type {number}
     */
    this.damping = options.damping || 1;

    /**
     * First connected body.
     * @property bodyA
     * @type {Body}
     */
    this.bodyA = bodyA;

    /**
     * Second connected body.
     * @property bodyB
     * @type {Body}
     */
    this.bodyB = bodyB;

    /**
     * Anchor for bodyA in local bodyA coordinates.
     * @property localAnchorA
     * @type {Vec3}
     */
    this.localAnchorA = new Vec3();

    /**
     * Anchor for bodyB in local bodyB coordinates.
     * @property localAnchorB
     * @type {Vec3}
     */
    this.localAnchorB = new Vec3();

    if(options.localAnchorA){
        this.localAnchorA.copy(options.localAnchorA);
    }
    if(options.localAnchorB){
        this.localAnchorB.copy(options.localAnchorB);
    }
    if(options.worldAnchorA){
        this.setWorldAnchorA(options.worldAnchorA);
    }
    if(options.worldAnchorB){
        this.setWorldAnchorB(options.worldAnchorB);
    }
}

/**
 * Set the anchor point on body A, using world coordinates.
 * @method setWorldAnchorA
 * @param {Vec3} worldAnchorA
 */
Spring.prototype.setWorldAnchorA = function(worldAnchorA){
    this.bodyA.pointToLocalFrame(worldAnchorA,this.localAnchorA);
};

/**
 * Set the anchor point on body B, using world coordinates.
 * @method setWorldAnchorB
 * @param {Vec3} worldAnchorB
 */
Spring.prototype.setWorldAnchorB = function(worldAnchorB){
    this.bodyB.pointToLocalFrame(worldAnchorB,this.localAnchorB);
};

/**
 * Get the anchor point on body A, in world coordinates.
 * @method getWorldAnchorA
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorA = function(result){
    this.bodyA.pointToWorldFrame(this.localAnchorA,result);
};

/**
 * Get the anchor point on body B, in world coordinates.
 * @method getWorldAnchorB
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorB = function(result){
    this.bodyB.pointToWorldFrame(this.localAnchorB,result);
};

var applyForce_r =              new Vec3(),
    applyForce_r_unit =         new Vec3(),
    applyForce_u =              new Vec3(),
    applyForce_f =              new Vec3(),
    applyForce_worldAnchorA =   new Vec3(),
    applyForce_worldAnchorB =   new Vec3(),
    applyForce_ri =             new Vec3(),
    applyForce_rj =             new Vec3(),
    applyForce_ri_x_f =         new Vec3(),
    applyForce_rj_x_f =         new Vec3(),
    applyForce_tmp =            new Vec3();

/**
 * Apply the spring force to the connected bodies.
 * @method applyForce
 */
Spring.prototype.applyForce = function(){
    var k = this.stiffness,
        d = this.damping,
        l = this.restLength,
        bodyA = this.bodyA,
        bodyB = this.bodyB,
        r = applyForce_r,
        r_unit = applyForce_r_unit,
        u = applyForce_u,
        f = applyForce_f,
        tmp = applyForce_tmp;

    var worldAnchorA = applyForce_worldAnchorA,
        worldAnchorB = applyForce_worldAnchorB,
        ri = applyForce_ri,
        rj = applyForce_rj,
        ri_x_f = applyForce_ri_x_f,
        rj_x_f = applyForce_rj_x_f;

    // Get world anchors
    this.getWorldAnchorA(worldAnchorA);
    this.getWorldAnchorB(worldAnchorB);

    // Get offset points
    worldAnchorA.vsub(bodyA.position,ri);
    worldAnchorB.vsub(bodyB.position,rj);

    // Compute distance vector between world anchor points
    worldAnchorB.vsub(worldAnchorA,r);
    var rlen = r.norm();
    r_unit.copy(r);
    r_unit.normalize();

    // Compute relative velocity of the anchor points, u
    bodyB.velocity.vsub(bodyA.velocity,u);
    // Add rotational velocity

    bodyB.angularVelocity.cross(rj,tmp);
    u.vadd(tmp,u);
    bodyA.angularVelocity.cross(ri,tmp);
    u.vsub(tmp,u);

    // F = - k * ( x - L ) - D * ( u )
    r_unit.mult(-k*(rlen-l) - d*u.dot(r_unit), f);

    // Add forces to bodies
    bodyA.force.vsub(f,bodyA.force);
    bodyB.force.vadd(f,bodyB.force);

    // Angular force
    ri.cross(f,ri_x_f);
    rj.cross(f,rj_x_f);
    bodyA.torque.vsub(ri_x_f,bodyA.torque);
    bodyB.torque.vadd(rj_x_f,bodyB.torque);
};

},{"../math/Vec3":30}],36:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');
var Transform = _dereq_('../math/Transform');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Utils = _dereq_('../utils/Utils');

module.exports = WheelInfo;

/**
 * @class WheelInfo
 * @constructor
 * @param {Object} [options]
 *
 * @param {Vec3} [options.chassisConnectionPointLocal]
 * @param {Vec3} [options.chassisConnectionPointWorld]
 * @param {Vec3} [options.directionLocal]
 * @param {Vec3} [options.directionWorld]
 * @param {Vec3} [options.axleLocal]
 * @param {Vec3} [options.axleWorld]
 * @param {number} [options.suspensionRestLength=1]
 * @param {number} [options.suspensionMaxLength=2]
 * @param {number} [options.radius=1]
 * @param {number} [options.suspensionStiffness=100]
 * @param {number} [options.dampingCompression=10]
 * @param {number} [options.dampingRelaxation=10]
 * @param {number} [options.frictionSlip=10000]
 * @param {number} [options.steering=0]
 * @param {number} [options.rotation=0]
 * @param {number} [options.deltaRotation=0]
 * @param {number} [options.rollInfluence=0.01]
 * @param {number} [options.maxSuspensionForce]
 * @param {boolean} [options.isFrontWheel=true]
 * @param {number} [options.clippedInvContactDotSuspension=1]
 * @param {number} [options.suspensionRelativeVelocity=0]
 * @param {number} [options.suspensionForce=0]
 * @param {number} [options.skidInfo=0]
 * @param {number} [options.suspensionLength=0]
 * @param {number} [options.maxSuspensionTravel=1]
 * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
 * @param {number} [options.customSlidingRotationalSpeed=-0.1]
 */
function WheelInfo(options){
    options = Utils.defaults(options, {
        chassisConnectionPointLocal: new Vec3(),
        chassisConnectionPointWorld: new Vec3(),
        directionLocal: new Vec3(),
        directionWorld: new Vec3(),
        axleLocal: new Vec3(),
        axleWorld: new Vec3(),
        suspensionRestLength: 1,
        suspensionMaxLength: 2,
        radius: 1,
        suspensionStiffness: 100,
        dampingCompression: 10,
        dampingRelaxation: 10,
        frictionSlip: 10000,
        steering: 0,
        rotation: 0,
        deltaRotation: 0,
        rollInfluence: 0.01,
        maxSuspensionForce: Number.MAX_VALUE,
        isFrontWheel: true,
        clippedInvContactDotSuspension: 1,
        suspensionRelativeVelocity: 0,
        suspensionForce: 0,
        skidInfo: 0,
        suspensionLength: 0,
        maxSuspensionTravel: 1,
        useCustomSlidingRotationalSpeed: false,
        customSlidingRotationalSpeed: -0.1
    });

    /**
     * Max travel distance of the suspension, in meters.
     * @property {number} maxSuspensionTravel
     */
    this.maxSuspensionTravel = options.maxSuspensionTravel;

    /**
     * Speed to apply to the wheel rotation when the wheel is sliding.
     * @property {number} customSlidingRotationalSpeed
     */
    this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;

    /**
     * If the customSlidingRotationalSpeed should be used.
     * @property {Boolean} useCustomSlidingRotationalSpeed
     */
    this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;

    /**
     * @property {Boolean} sliding
     */
    this.sliding = false;

    /**
     * Connection point, defined locally in the chassis body frame.
     * @property {Vec3} chassisConnectionPointLocal
     */
    this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();

    /**
     * @property {Vec3} chassisConnectionPointWorld
     */
    this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();

    /**
     * @property {Vec3} directionLocal
     */
    this.directionLocal = options.directionLocal.clone();

    /**
     * @property {Vec3} directionWorld
     */
    this.directionWorld = options.directionWorld.clone();

    /**
     * @property {Vec3} axleLocal
     */
    this.axleLocal = options.axleLocal.clone();

    /**
     * @property {Vec3} axleWorld
     */
    this.axleWorld = options.axleWorld.clone();

    /**
     * @property {number} suspensionRestLength
     */
    this.suspensionRestLength = options.suspensionRestLength;

    /**
     * @property {number} suspensionMaxLength
     */
    this.suspensionMaxLength = options.suspensionMaxLength;

    /**
     * @property {number} radius
     */
    this.radius = options.radius;

    /**
     * @property {number} suspensionStiffness
     */
    this.suspensionStiffness = options.suspensionStiffness;

    /**
     * @property {number} dampingCompression
     */
    this.dampingCompression = options.dampingCompression;

    /**
     * @property {number} dampingRelaxation
     */
    this.dampingRelaxation = options.dampingRelaxation;

    /**
     * @property {number} frictionSlip
     */
    this.frictionSlip = options.frictionSlip;

    /**
     * @property {number} steering
     */
    this.steering = 0;

    /**
     * Rotation value, in radians.
     * @property {number} rotation
     */
    this.rotation = 0;

    /**
     * @property {number} deltaRotation
     */
    this.deltaRotation = 0;

    /**
     * @property {number} rollInfluence
     */
    this.rollInfluence = options.rollInfluence;

    /**
     * @property {number} maxSuspensionForce
     */
    this.maxSuspensionForce = options.maxSuspensionForce;

    /**
     * @property {number} engineForce
     */
    this.engineForce = 0;

    /**
     * @property {number} brake
     */
    this.brake = 0;

    /**
     * @property {number} isFrontWheel
     */
    this.isFrontWheel = options.isFrontWheel;

    /**
     * @property {number} clippedInvContactDotSuspension
     */
    this.clippedInvContactDotSuspension = 1;

    /**
     * @property {number} suspensionRelativeVelocity
     */
    this.suspensionRelativeVelocity = 0;

    /**
     * @property {number} suspensionForce
     */
    this.suspensionForce = 0;

    /**
     * @property {number} skidInfo
     */
    this.skidInfo = 0;

    /**
     * @property {number} suspensionLength
     */
    this.suspensionLength = 0;

    /**
     * @property {number} sideImpulse
     */
    this.sideImpulse = 0;

    /**
     * @property {number} forwardImpulse
     */
    this.forwardImpulse = 0;

    /**
     * The result from raycasting
     * @property {RaycastResult} raycastResult
     */
    this.raycastResult = new RaycastResult();

    /**
     * Wheel world transform
     * @property {Transform} worldTransform
     */
    this.worldTransform = new Transform();

    /**
     * @property {boolean} isInContact
     */
    this.isInContact = false;
}

var chassis_velocity_at_contactPoint = new Vec3();
var relpos = new Vec3();
var chassis_velocity_at_contactPoint = new Vec3();
WheelInfo.prototype.updateWheel = function(chassis){
    var raycastResult = this.raycastResult;

    if (this.isInContact){
        var project= raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
        raycastResult.hitPointWorld.vsub(chassis.position, relpos);
        chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
        var projVel = raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );
        if (project >= -0.1) {
            this.suspensionRelativeVelocity = 0.0;
            this.clippedInvContactDotSuspension = 1.0 / 0.1;
        } else {
            var inv = -1 / project;
            this.suspensionRelativeVelocity = projVel * inv;
            this.clippedInvContactDotSuspension = inv;
        }

    } else {
        // Not in contact : position wheel in a nice (rest length) position
        raycastResult.suspensionLength = this.suspensionRestLength;
        this.suspensionRelativeVelocity = 0.0;
        raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
        this.clippedInvContactDotSuspension = 1.0;
    }
};
},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(_dereq_,module,exports){
module.exports = Box;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

/**
 * A 3d box shape.
 * @class Box
 * @constructor
 * @param {Vec3} halfExtents
 * @author schteppe
 * @extends Shape
 */
function Box(halfExtents){
    Shape.call(this);

    this.type = Shape.types.BOX;

    /**
     * @property halfExtents
     * @type {Vec3}
     */
    this.halfExtents = halfExtents;

    /**
     * Used by the contact generator to make contacts with other convex polyhedra for example
     * @property convexPolyhedronRepresentation
     * @type {ConvexPolyhedron}
     */
    this.convexPolyhedronRepresentation = null;

    this.updateConvexPolyhedronRepresentation();
    this.updateBoundingSphereRadius();
}
Box.prototype = new Shape();
Box.prototype.constructor = Box;

/**
 * Updates the local convex polyhedron representation used for some collisions.
 * @method updateConvexPolyhedronRepresentation
 */
Box.prototype.updateConvexPolyhedronRepresentation = function(){
    var sx = this.halfExtents.x;
    var sy = this.halfExtents.y;
    var sz = this.halfExtents.z;
    var V = Vec3;

    var vertices = [
        new V(-sx,-sy,-sz),
        new V( sx,-sy,-sz),
        new V( sx, sy,-sz),
        new V(-sx, sy,-sz),
        new V(-sx,-sy, sz),
        new V( sx,-sy, sz),
        new V( sx, sy, sz),
        new V(-sx, sy, sz)
    ];

    var indices = [
        [3,2,1,0], // -z
        [4,5,6,7], // +z
        [5,4,0,1], // -y
        [2,3,7,6], // +y
        [0,4,7,3], // -x
        [1,2,6,5], // +x
    ];

    var axes = [
        new V(0, 0, 1),
        new V(0, 1, 0),
        new V(1, 0, 0)
    ];

    var h = new ConvexPolyhedron(vertices, indices);
    this.convexPolyhedronRepresentation = h;
    h.material = this.material;
};

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Box.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    Box.calculateInertia(this.halfExtents, mass, target);
    return target;
};

Box.calculateInertia = function(halfExtents,mass,target){
    var e = halfExtents;
    target.x = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.z*2*e.z );
    target.y = 1.0 / 12.0 * mass * (   2*e.x*2*e.x + 2*e.z*2*e.z );
    target.z = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.x*2*e.x );
};

/**
 * Get the box 6 side normals
 * @method getSideNormals
 * @param {array}      sixTargetVectors An array of 6 vectors, to store the resulting side normals in.
 * @param {Quaternion} quat             Orientation to apply to the normal vectors. If not provided, the vectors will be in respect to the local frame.
 * @return {array}
 */
Box.prototype.getSideNormals = function(sixTargetVectors,quat){
    var sides = sixTargetVectors;
    var ex = this.halfExtents;
    sides[0].set(  ex.x,     0,     0);
    sides[1].set(     0,  ex.y,     0);
    sides[2].set(     0,     0,  ex.z);
    sides[3].set( -ex.x,     0,     0);
    sides[4].set(     0, -ex.y,     0);
    sides[5].set(     0,     0, -ex.z);

    if(quat!==undefined){
        for(var i=0; i!==sides.length; i++){
            quat.vmult(sides[i],sides[i]);
        }
    }

    return sides;
};

Box.prototype.volume = function(){
    return 8.0 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
};

Box.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.halfExtents.norm();
};

var worldCornerTempPos = new Vec3();
var worldCornerTempNeg = new Vec3();
Box.prototype.forEachWorldCorner = function(pos,quat,callback){

    var e = this.halfExtents;
    var corners = [[  e.x,  e.y,  e.z],
                   [ -e.x,  e.y,  e.z],
                   [ -e.x, -e.y,  e.z],
                   [ -e.x, -e.y, -e.z],
                   [  e.x, -e.y, -e.z],
                   [  e.x,  e.y, -e.z],
                   [ -e.x,  e.y, -e.z],
                   [  e.x, -e.y,  e.z]];
    for(var i=0; i<corners.length; i++){
        worldCornerTempPos.set(corners[i][0],corners[i][1],corners[i][2]);
        quat.vmult(worldCornerTempPos,worldCornerTempPos);
        pos.vadd(worldCornerTempPos,worldCornerTempPos);
        callback(worldCornerTempPos.x,
                 worldCornerTempPos.y,
                 worldCornerTempPos.z);
    }
};

var worldCornersTemp = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];
Box.prototype.calculateWorldAABB = function(pos,quat,min,max){

    var e = this.halfExtents;
    worldCornersTemp[0].set(e.x, e.y, e.z);
    worldCornersTemp[1].set(-e.x,  e.y, e.z);
    worldCornersTemp[2].set(-e.x, -e.y, e.z);
    worldCornersTemp[3].set(-e.x, -e.y, -e.z);
    worldCornersTemp[4].set(e.x, -e.y, -e.z);
    worldCornersTemp[5].set(e.x,  e.y, -e.z);
    worldCornersTemp[6].set(-e.x,  e.y, -e.z);
    worldCornersTemp[7].set(e.x, -e.y,  e.z);

    var wc = worldCornersTemp[0];
    quat.vmult(wc, wc);
    pos.vadd(wc, wc);
    max.copy(wc);
    min.copy(wc);
    for(var i=1; i<8; i++){
        var wc = worldCornersTemp[i];
        quat.vmult(wc, wc);
        pos.vadd(wc, wc);
        var x = wc.x;
        var y = wc.y;
        var z = wc.z;
        if(x > max.x){
            max.x = x;
        }
        if(y > max.y){
            max.y = y;
        }
        if(z > max.z){
            max.z = z;
        }

        if(x < min.x){
            min.x = x;
        }
        if(y < min.y){
            min.y = y;
        }
        if(z < min.z){
            min.z = z;
        }
    }

    // Get each axis max
    // min.set(Infinity,Infinity,Infinity);
    // max.set(-Infinity,-Infinity,-Infinity);
    // this.forEachWorldCorner(pos,quat,function(x,y,z){
    //     if(x > max.x){
    //         max.x = x;
    //     }
    //     if(y > max.y){
    //         max.y = y;
    //     }
    //     if(z > max.z){
    //         max.z = z;
    //     }

    //     if(x < min.x){
    //         min.x = x;
    //     }
    //     if(y < min.y){
    //         min.y = y;
    //     }
    //     if(z < min.z){
    //         min.z = z;
    //     }
    // });
};

},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(_dereq_,module,exports){
module.exports = ConvexPolyhedron;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');

/**
 * A set of polygons describing a convex shape.
 * @class ConvexPolyhedron
 * @constructor
 * @extends Shape
 * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
 * in the same 3D plane), instead these should be merged into one polygon.
 *
 * @param {array} points An array of Vec3's
 * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
 *
 * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
 * @author schteppe / https://github.com/schteppe
 * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 *
 * @todo Move the clipping functions to ContactGenerator?
 * @todo Automatically merge coplanar polygons in constructor.
 */
function ConvexPolyhedron(points, faces, uniqueAxes) {
    var that = this;
    Shape.call(this);
    this.type = Shape.types.CONVEXPOLYHEDRON;

    /**
     * Array of Vec3
     * @property vertices
     * @type {Array}
     */
    this.vertices = points||[];

    this.worldVertices = []; // World transformed version of .vertices
    this.worldVerticesNeedsUpdate = true;

    /**
     * Array of integer arrays, indicating which vertices each face consists of
     * @property faces
     * @type {Array}
     */
    this.faces = faces||[];

    /**
     * Array of Vec3
     * @property faceNormals
     * @type {Array}
     */
    this.faceNormals = [];
    this.computeNormals();

    this.worldFaceNormalsNeedsUpdate = true;
    this.worldFaceNormals = []; // World transformed version of .faceNormals

    /**
     * Array of Vec3
     * @property uniqueEdges
     * @type {Array}
     */
    this.uniqueEdges = [];

    /**
     * If given, these locally defined, normalized axes are the only ones being checked when doing separating axis check.
     * @property {Array} uniqueAxes
     */
    this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;

    this.computeEdges();
    this.updateBoundingSphereRadius();
}
ConvexPolyhedron.prototype = new Shape();
ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;

var computeEdges_tmpEdge = new Vec3();
/**
 * Computes uniqueEdges
 * @method computeEdges
 */
ConvexPolyhedron.prototype.computeEdges = function(){
    var faces = this.faces;
    var vertices = this.vertices;
    var nv = vertices.length;
    var edges = this.uniqueEdges;

    edges.length = 0;

    var edge = computeEdges_tmpEdge;

    for(var i=0; i !== faces.length; i++){
        var face = faces[i];
        var numVertices = face.length;
        for(var j = 0; j !== numVertices; j++){
            var k = ( j+1 ) % numVertices;
            vertices[face[j]].vsub(vertices[face[k]], edge);
            edge.normalize();
            var found = false;
            for(var p=0; p !== edges.length; p++){
                if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)){
                    found = true;
                    break;
                }
            }

            if (!found){
                edges.push(edge.clone());
            }
        }
    }
};

/**
 * Compute the normals of the faces. Will reuse existing Vec3 objects in the .faceNormals array if they exist.
 * @method computeNormals
 */
ConvexPolyhedron.prototype.computeNormals = function(){
    this.faceNormals.length = this.faces.length;

    // Generate normals
    for(var i=0; i<this.faces.length; i++){

        // Check so all vertices exists for this face
        for(var j=0; j<this.faces[i].length; j++){
            if(!this.vertices[this.faces[i][j]]){
                throw new Error("Vertex "+this.faces[i][j]+" not found!");
            }
        }

        var n = this.faceNormals[i] || new Vec3();
        this.getFaceNormal(i,n);
        n.negate(n);
        this.faceNormals[i] = n;
        var vertex = this.vertices[this.faces[i][0]];
        if(n.dot(vertex) < 0){
            console.error(".faceNormals[" + i + "] = Vec3("+n.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
            for(var j=0; j<this.faces[i].length; j++){
                console.warn(".vertices["+this.faces[i][j]+"] = Vec3("+this.vertices[this.faces[i][j]].toString()+")");
            }
        }
    }
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method getFaceNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
ConvexPolyhedron.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

/**
 * Compute the normal of a face from its vertices
 * @method getFaceNormal
 * @param  {Number} i
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.getFaceNormal = function(i,target){
    var f = this.faces[i];
    var va = this.vertices[f[0]];
    var vb = this.vertices[f[1]];
    var vc = this.vertices[f[2]];
    return ConvexPolyhedron.computeNormal(va,vb,vc,target);
};

/**
 * @method clipAgainstHull
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} separatingNormal
 * @param {Number} minDist Clamp distance
 * @param {Number} maxDist
 * @param {array} result The an array of contact point objects, see clipFaceAgainstHull
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 */
var cah_WorldNormal = new Vec3();
ConvexPolyhedron.prototype.clipAgainstHull = function(posA,quatA,hullB,posB,quatB,separatingNormal,minDist,maxDist,result){
    var WorldNormal = cah_WorldNormal;
    var hullA = this;
    var curMaxDist = maxDist;
    var closestFaceB = -1;
    var dmax = -Number.MAX_VALUE;
    for(var face=0; face < hullB.faces.length; face++){
        WorldNormal.copy(hullB.faceNormals[face]);
        quatB.vmult(WorldNormal,WorldNormal);
        //posB.vadd(WorldNormal,WorldNormal);
        var d = WorldNormal.dot(separatingNormal);
        if (d > dmax){
            dmax = d;
            closestFaceB = face;
        }
    }
    var worldVertsB1 = [];
    var polyB = hullB.faces[closestFaceB];
    var numVertices = polyB.length;
    for(var e0=0; e0<numVertices; e0++){
        var b = hullB.vertices[polyB[e0]];
        var worldb = new Vec3();
        worldb.copy(b);
        quatB.vmult(worldb,worldb);
        posB.vadd(worldb,worldb);
        worldVertsB1.push(worldb);
    }

    if (closestFaceB>=0){
        this.clipFaceAgainstHull(separatingNormal,
                                 posA,
                                 quatA,
                                 worldVertsB1,
                                 minDist,
                                 maxDist,
                                 result);
    }
};

/**
 * Find the separating axis between this hull and another
 * @method findSeparatingAxis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} target The target vector to save the axis in
 * @return {bool} Returns false if a separation is found, else true
 */
var fsa_faceANormalWS3 = new Vec3(),
    fsa_Worldnormal1 = new Vec3(),
    fsa_deltaC = new Vec3(),
    fsa_worldEdge0 = new Vec3(),
    fsa_worldEdge1 = new Vec3(),
    fsa_Cross = new Vec3();
ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB,posA,quatA,posB,quatB,target, faceListA, faceListB){
    var faceANormalWS3 = fsa_faceANormalWS3,
        Worldnormal1 = fsa_Worldnormal1,
        deltaC = fsa_deltaC,
        worldEdge0 = fsa_worldEdge0,
        worldEdge1 = fsa_worldEdge1,
        Cross = fsa_Cross;

    var dmin = Number.MAX_VALUE;
    var hullA = this;
    var curPlaneTests=0;

    if(!hullA.uniqueAxes){

        var numFacesA = faceListA ? faceListA.length : hullA.faces.length;

        // Test face normals from hullA
        for(var i=0; i<numFacesA; i++){
            var fi = faceListA ? faceListA[i] : i;

            // Get world face normal
            faceANormalWS3.copy(hullA.faceNormals[fi]);
            quatA.vmult(faceANormalWS3,faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }

    } else {

        // Test unique axes
        for(var i = 0; i !== hullA.uniqueAxes.length; i++){

            // Get world axis
            quatA.vmult(hullA.uniqueAxes[i],faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }
    }

    if(!hullB.uniqueAxes){

        // Test face normals from hullB
        var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
        for(var i=0;i<numFacesB;i++){

            var fi = faceListB ? faceListB[i] : i;

            Worldnormal1.copy(hullB.faceNormals[fi]);
            quatB.vmult(Worldnormal1,Worldnormal1);
            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    } else {

        // Test unique axes in B
        for(var i = 0; i !== hullB.uniqueAxes.length; i++){
            quatB.vmult(hullB.uniqueAxes[i],Worldnormal1);

            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    }

    // Test edges
    for(var e0=0; e0 !== hullA.uniqueEdges.length; e0++){

        // Get world edge
        quatA.vmult(hullA.uniqueEdges[e0],worldEdge0);

        for(var e1=0; e1 !== hullB.uniqueEdges.length; e1++){

            // Get world edge 2
            quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
            worldEdge0.cross(worldEdge1,Cross);

            if(!Cross.almostZero()){
                Cross.normalize();
                var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                if(dist === false){
                    return false;
                }
                if(dist < dmin){
                    dmin = dist;
                    target.copy(Cross);
                }
            }
        }
    }

    posB.vsub(posA,deltaC);
    if((deltaC.dot(target))>0.0){
        target.negate(target);
    }

    return true;
};

var maxminA=[], maxminB=[];

/**
 * Test separating axis against two hulls. Both hulls are projected onto the axis and the overlap size is returned if there is one.
 * @method testSepAxis
 * @param {Vec3} axis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @return {number} The overlap depth, or FALSE if no penetration.
 */
ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB){
    var hullA=this;
    ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
    ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
    var maxA = maxminA[0];
    var minA = maxminA[1];
    var maxB = maxminB[0];
    var minB = maxminB[1];
    if(maxA<minB || maxB<minA){
        return false; // Separated
    }
    var d0 = maxA - minB;
    var d1 = maxB - minA;
    var depth = d0<d1 ? d0:d1;
    return depth;
};

var cli_aabbmin = new Vec3(),
    cli_aabbmax = new Vec3();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabbmin,cli_aabbmax);
    var x = cli_aabbmax.x - cli_aabbmin.x,
        y = cli_aabbmax.y - cli_aabbmin.y,
        z = cli_aabbmax.z - cli_aabbmin.z;
    target.x = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z );
    target.y = 1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z );
    target.z = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x );
};

/**
 * @method getPlaneConstantOfFace
 * @param  {Number} face_i Index of the face
 * @return {Number}
 */
ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i){
    var f = this.faces[face_i];
    var n = this.faceNormals[face_i];
    var v = this.vertices[f[0]];
    var c = -n.dot(v);
    return c;
};

/**
 * Clip a face against a hull.
 * @method clipFaceAgainstHull
 * @param {Vec3} separatingNormal
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Array} worldVertsB1 An array of Vec3 with vertices in the world frame.
 * @param {Number} minDist Distance clamping
 * @param {Number} maxDist
 * @param Array result Array to store resulting contact points in. Will be objects with properties: point, depth, normal. These are represented in world coordinates.
 */
var cfah_faceANormalWS = new Vec3(),
    cfah_edge0 = new Vec3(),
    cfah_WorldEdge0 = new Vec3(),
    cfah_worldPlaneAnormal1 = new Vec3(),
    cfah_planeNormalWS1 = new Vec3(),
    cfah_worldA1 = new Vec3(),
    cfah_localPlaneNormal = new Vec3(),
    cfah_planeNormalWS = new Vec3();
ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist,result){
    var faceANormalWS = cfah_faceANormalWS,
        edge0 = cfah_edge0,
        WorldEdge0 = cfah_WorldEdge0,
        worldPlaneAnormal1 = cfah_worldPlaneAnormal1,
        planeNormalWS1 = cfah_planeNormalWS1,
        worldA1 = cfah_worldA1,
        localPlaneNormal = cfah_localPlaneNormal,
        planeNormalWS = cfah_planeNormalWS;

    var hullA = this;
    var worldVertsB2 = [];
    var pVtxIn = worldVertsB1;
    var pVtxOut = worldVertsB2;
    // Find the face with normal closest to the separating axis
    var closestFaceA = -1;
    var dmin = Number.MAX_VALUE;
    for(var face=0; face<hullA.faces.length; face++){
        faceANormalWS.copy(hullA.faceNormals[face]);
        quatA.vmult(faceANormalWS,faceANormalWS);
        //posA.vadd(faceANormalWS,faceANormalWS);
        var d = faceANormalWS.dot(separatingNormal);
        if (d < dmin){
            dmin = d;
            closestFaceA = face;
        }
    }
    if (closestFaceA < 0){
        // console.log("--- did not find any closest face... ---");
        return;
    }
    //console.log("closest A: ",closestFaceA);
    // Get the face and construct connected faces
    var polyA = hullA.faces[closestFaceA];
    polyA.connectedFaces = [];
    for(var i=0; i<hullA.faces.length; i++){
        for(var j=0; j<hullA.faces[i].length; j++){
            if(polyA.indexOf(hullA.faces[i][j])!==-1 /* Sharing a vertex*/ && i!==closestFaceA /* Not the one we are looking for connections from */ && polyA.connectedFaces.indexOf(i)===-1 /* Not already added */ ){
                polyA.connectedFaces.push(i);
            }
        }
    }
    // Clip the polygon to the back of the planes of all faces of hull A, that are adjacent to the witness face
    var numContacts = pVtxIn.length;
    var numVerticesA = polyA.length;
    var res = [];
    for(var e0=0; e0<numVerticesA; e0++){
        var a = hullA.vertices[polyA[e0]];
        var b = hullA.vertices[polyA[(e0+1)%numVerticesA]];
        a.vsub(b,edge0);
        WorldEdge0.copy(edge0);
        quatA.vmult(WorldEdge0,WorldEdge0);
        posA.vadd(WorldEdge0,WorldEdge0);
        worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);//transA.getBasis()* btVector3(polyA.m_plane[0],polyA.m_plane[1],polyA.m_plane[2]);
        quatA.vmult(worldPlaneAnormal1,worldPlaneAnormal1);
        posA.vadd(worldPlaneAnormal1,worldPlaneAnormal1);
        WorldEdge0.cross(worldPlaneAnormal1,planeNormalWS1);
        planeNormalWS1.negate(planeNormalWS1);
        worldA1.copy(a);
        quatA.vmult(worldA1,worldA1);
        posA.vadd(worldA1,worldA1);
        var planeEqWS1 = -worldA1.dot(planeNormalWS1);
        var planeEqWS;
        if(true){
            var otherFace = polyA.connectedFaces[e0];
            localPlaneNormal.copy(this.faceNormals[otherFace]);
            var localPlaneEq = this.getPlaneConstantOfFace(otherFace);

            planeNormalWS.copy(localPlaneNormal);
            quatA.vmult(planeNormalWS,planeNormalWS);
            //posA.vadd(planeNormalWS,planeNormalWS);
            var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
        } else  {
            planeNormalWS.copy(planeNormalWS1);
            planeEqWS = planeEqWS1;
        }

        // Clip face against our constructed plane
        this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);

        // Throw away all clipped points, but save the reamining until next clip
        while(pVtxIn.length){
            pVtxIn.shift();
        }
        while(pVtxOut.length){
            pVtxIn.push(pVtxOut.shift());
        }
    }

    //console.log("Resulting points after clip:",pVtxIn);

    // only keep contact points that are behind the witness face
    localPlaneNormal.copy(this.faceNormals[closestFaceA]);

    var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
    planeNormalWS.copy(localPlaneNormal);
    quatA.vmult(planeNormalWS,planeNormalWS);

    var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
    for (var i=0; i<pVtxIn.length; i++){
        var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS; //???
        /*console.log("depth calc from normal=",planeNormalWS.toString()," and constant "+planeEqWS+" and vertex ",pVtxIn[i].toString()," gives "+depth);*/
        if (depth <=minDist){
            console.log("clamped: depth="+depth+" to minDist="+(minDist+""));
            depth = minDist;
        }

        if (depth <=maxDist){
            var point = pVtxIn[i];
            if(depth<=0){
                /*console.log("Got contact point ",point.toString(),
                  ", depth=",depth,
                  "contact normal=",separatingNormal.toString(),
                  "plane",planeNormalWS.toString(),
                  "planeConstant",planeEqWS);*/
                var p = {
                    point:point,
                    normal:planeNormalWS,
                    depth: depth,
                };
                result.push(p);
            }
        }
    }
};

/**
 * Clip a face in a hull against the back of a plane.
 * @method clipFaceAgainstPlane
 * @param {Array} inVertices
 * @param {Array} outVertices
 * @param {Vec3} planeNormal
 * @param {Number} planeConstant The constant in the mathematical plane equation
 */
ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices,outVertices, planeNormal, planeConstant){
    var n_dot_first, n_dot_last;
    var numVerts = inVertices.length;

    if(numVerts < 2){
        return outVertices;
    }

    var firstVertex = inVertices[inVertices.length-1],
        lastVertex =   inVertices[0];

    n_dot_first = planeNormal.dot(firstVertex) + planeConstant;

    for(var vi = 0; vi < numVerts; vi++){
        lastVertex = inVertices[vi];
        n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
        if(n_dot_first < 0){
            if(n_dot_last < 0){
                // Start < 0, end < 0, so output lastVertex
                var newv = new Vec3();
                newv.copy(lastVertex);
                outVertices.push(newv);
            } else {
                // Start < 0, end >= 0, so output intersection
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
            }
        } else {
            if(n_dot_last<0){
                // Start >= 0, end < 0 so output intersection and end
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
                outVertices.push(lastVertex);
            }
        }
        firstVertex = lastVertex;
        n_dot_first = n_dot_last;
    }
    return outVertices;
};

// Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
ConvexPolyhedron.prototype.computeWorldVertices = function(position,quat){
    var N = this.vertices.length;
    while(this.worldVertices.length < N){
        this.worldVertices.push( new Vec3() );
    }

    var verts = this.vertices,
        worldVerts = this.worldVertices;
    for(var i=0; i!==N; i++){
        quat.vmult( verts[i] , worldVerts[i] );
        position.vadd( worldVerts[i] , worldVerts[i] );
    }

    this.worldVerticesNeedsUpdate = false;
};

var computeLocalAABB_worldVert = new Vec3();
ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin,aabbmax){
    var n = this.vertices.length,
        vertices = this.vertices,
        worldVert = computeLocalAABB_worldVert;

    aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);

    for(var i=0; i<n; i++){
        var v = vertices[i];
        if     (v.x < aabbmin.x){
            aabbmin.x = v.x;
        } else if(v.x > aabbmax.x){
            aabbmax.x = v.x;
        }
        if     (v.y < aabbmin.y){
            aabbmin.y = v.y;
        } else if(v.y > aabbmax.y){
            aabbmax.y = v.y;
        }
        if     (v.z < aabbmin.z){
            aabbmin.z = v.z;
        } else if(v.z > aabbmax.z){
            aabbmax.z = v.z;
        }
    }
};

/**
 * Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
 * @method computeWorldFaceNormals
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat){
    var N = this.faceNormals.length;
    while(this.worldFaceNormals.length < N){
        this.worldFaceNormals.push( new Vec3() );
    }

    var normals = this.faceNormals,
        worldNormals = this.worldFaceNormals;
    for(var i=0; i!==N; i++){
        quat.vmult( normals[i] , worldNormals[i] );
    }

    this.worldFaceNormalsNeedsUpdate = false;
};

/**
 * @method updateBoundingSphereRadius
 */
ConvexPolyhedron.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var verts = this.vertices;
    for(var i=0, N=verts.length; i!==N; i++) {
        var norm2 = verts[i].norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
ConvexPolyhedron.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var n = this.vertices.length, verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;
    for(var i=0; i<n; i++){
        tempWorldVertex.copy(verts[i]);
        quat.vmult(tempWorldVertex,tempWorldVertex);
        pos.vadd(tempWorldVertex,tempWorldVertex);
        var v = tempWorldVertex;
        if     (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if     (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if     (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
};

/**
 * Get approximate convex volume
 * @method volume
 * @return {Number}
 */
ConvexPolyhedron.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Get an average of all the vertices positions
 * @method getAveragePointLocal
 * @param  {Vec3} target
 * @return {Vec3}
 */
ConvexPolyhedron.prototype.getAveragePointLocal = function(target){
    target = target || new Vec3();
    var n = this.vertices.length,
        verts = this.vertices;
    for(var i=0; i<n; i++){
        target.vadd(verts[i],target);
    }
    target.mult(1/n,target);
    return target;
};

/**
 * Transform all local points. Will change the .vertices
 * @method transformAllPoints
 * @param  {Vec3} offset
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.transformAllPoints = function(offset,quat){
    var n = this.vertices.length,
        verts = this.vertices;

    // Apply rotation
    if(quat){
        // Rotate vertices
        for(var i=0; i<n; i++){
            var v = verts[i];
            quat.vmult(v,v);
        }
        // Rotate face normals
        for(var i=0; i<this.faceNormals.length; i++){
            var v = this.faceNormals[i];
            quat.vmult(v,v);
        }
        /*
        // Rotate edges
        for(var i=0; i<this.uniqueEdges.length; i++){
            var v = this.uniqueEdges[i];
            quat.vmult(v,v);
        }*/
    }

    // Apply offset
    if(offset){
        for(var i=0; i<n; i++){
            var v = verts[i];
            v.vadd(offset,v);
        }
    }
};

/**
 * Checks whether p is inside the polyhedra. Must be in local coords. The point lies outside of the convex hull of the other points if and only if the direction of all the vectors from it to those other points are on less than one half of a sphere around it.
 * @method pointIsInside
 * @param  {Vec3} p      A point given in local coordinates
 * @return {Boolean}
 */
var ConvexPolyhedron_pointIsInside = new Vec3();
var ConvexPolyhedron_vToP = new Vec3();
var ConvexPolyhedron_vToPointInside = new Vec3();
ConvexPolyhedron.prototype.pointIsInside = function(p){
    var n = this.vertices.length,
        verts = this.vertices,
        faces = this.faces,
        normals = this.faceNormals;
    var positiveResult = null;
    var N = this.faces.length;
    var pointInside = ConvexPolyhedron_pointIsInside;
    this.getAveragePointLocal(pointInside);
    for(var i=0; i<N; i++){
        var numVertices = this.faces[i].length;
        var n = normals[i];
        var v = verts[faces[i][0]]; // We only need one point in the face

        // This dot product determines which side of the edge the point is
        var vToP = ConvexPolyhedron_vToP;
        p.vsub(v,vToP);
        var r1 = n.dot(vToP);

        var vToPointInside = ConvexPolyhedron_vToPointInside;
        pointInside.vsub(v,vToPointInside);
        var r2 = n.dot(vToPointInside);

        if((r1<0 && r2>0) || (r1>0 && r2<0)){
            return false; // Encountered some other sign. Exit.
        } else {
        }
    }

    // If we got here, all dot products were of the same sign.
    return positiveResult ? 1 : -1;
};

/**
 * Get max and min dot product of a convex hull at position (pos,quat) projected onto an axis. Results are saved in the array maxmin.
 * @static
 * @method project
 * @param {ConvexPolyhedron} hull
 * @param {Vec3} axis
 * @param {Vec3} pos
 * @param {Quaternion} quat
 * @param {array} result result[0] and result[1] will be set to maximum and minimum, respectively.
 */
var project_worldVertex = new Vec3();
var project_localAxis = new Vec3();
var project_localOrigin = new Vec3();
ConvexPolyhedron.project = function(hull, axis, pos, quat, result){
    var n = hull.vertices.length,
        worldVertex = project_worldVertex,
        localAxis = project_localAxis,
        max = 0,
        min = 0,
        localOrigin = project_localOrigin,
        vs = hull.vertices;

    localOrigin.setZero();

    // Transform the axis to local
    Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
    Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
    var add = localOrigin.dot(localAxis);

    min = max = vs[0].dot(localAxis);

    for(var i = 1; i < n; i++){
        var val = vs[i].dot(localAxis);

        if(val > max){
            max = val;
        }

        if(val < min){
            min = val;
        }
    }

    min -= add;
    max -= add;

    if(min > max){
        // Inconsistent - swap
        var temp = min;
        min = max;
        max = temp;
    }
    // Output
    result[0] = max;
    result[1] = min;
};

},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(_dereq_,module,exports){
module.exports = Cylinder;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

/**
 * @class Cylinder
 * @constructor
 * @extends ConvexPolyhedron
 * @author schteppe / https://github.com/schteppe
 * @param {Number} radiusTop
 * @param {Number} radiusBottom
 * @param {Number} height
 * @param {Number} numSegments The number of segments to build the cylinder out of
 */
function Cylinder( radiusTop, radiusBottom, height , numSegments ) {
    var N = numSegments,
        verts = [],
        axes = [],
        faces = [],
        bottomface = [],
        topface = [],
        cos = Math.cos,
        sin = Math.sin;

    // First bottom point
    verts.push(new Vec3(radiusBottom*cos(0),
                               radiusBottom*sin(0),
                               -height*0.5));
    bottomface.push(0);

    // First top point
    verts.push(new Vec3(radiusTop*cos(0),
                               radiusTop*sin(0),
                               height*0.5));
    topface.push(1);

    for(var i=0; i<N; i++){
        var theta = 2*Math.PI/N * (i+1);
        var thetaN = 2*Math.PI/N * (i+0.5);
        if(i<N-1){
            // Bottom
            verts.push(new Vec3(radiusBottom*cos(theta),
                                       radiusBottom*sin(theta),
                                       -height*0.5));
            bottomface.push(2*i+2);
            // Top
            verts.push(new Vec3(radiusTop*cos(theta),
                                       radiusTop*sin(theta),
                                       height*0.5));
            topface.push(2*i+3);

            // Face
            faces.push([2*i+2, 2*i+3, 2*i+1,2*i]);
        } else {
            faces.push([0,1, 2*i+1, 2*i]); // Connect
        }

        // Axis: we can cut off half of them if we have even number of segments
        if(N % 2 === 1 || i < N / 2){
            axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
        }
    }
    faces.push(topface);
    axes.push(new Vec3(0,0,1));

    // Reorder bottom face
    var temp = [];
    for(var i=0; i<bottomface.length; i++){
        temp.push(bottomface[bottomface.length - i - 1]);
    }
    faces.push(temp);

    this.type = Shape.types.CONVEXPOLYHEDRON;
    ConvexPolyhedron.call( this, verts, faces, axes );
}

Cylinder.prototype = new ConvexPolyhedron();

},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(_dereq_,module,exports){
var Shape = _dereq_('./Shape');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
var Vec3 = _dereq_('../math/Vec3');
var Utils = _dereq_('../utils/Utils');

module.exports = Heightfield;

/**
 * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
 * @class Heightfield
 * @extends Shape
 * @constructor
 * @param {Array} data An array of Y values that will be used to construct the terrain.
 * @param {object} options
 * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
 * @param {Number} [options.maxValue] Maximum value.
 * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
 * @todo Should be possible to use along all axes, not just y
 *
 * @example
 *     // Generate some height data (y-values).
 *     var data = [];
 *     for(var i = 0; i < 1000; i++){
 *         var y = 0.5 * Math.cos(0.2 * i);
 *         data.push(y);
 *     }
 *
 *     // Create the heightfield shape
 *     var heightfieldShape = new Heightfield(data, {
 *         elementSize: 1 // Distance between the data points in X and Y directions
 *     });
 *     var heightfieldBody = new Body();
 *     heightfieldBody.addShape(heightfieldShape);
 *     world.addBody(heightfieldBody);
 */
function Heightfield(data, options){
    options = Utils.defaults(options, {
        maxValue : null,
        minValue : null,
        elementSize : 1
    });

    /**
     * An array of numbers, or height values, that are spread out along the x axis.
     * @property {array} data
     */
    this.data = data;

    /**
     * Max value of the data
     * @property {number} maxValue
     */
    this.maxValue = options.maxValue;

    /**
     * Max value of the data
     * @property {number} minValue
     */
    this.minValue = options.minValue;

    /**
     * The width of each element
     * @property {number} elementSize
     * @todo elementSizeX and Y
     */
    this.elementSize = options.elementSize;

    if(options.minValue === null){
        this.updateMinValue();
    }
    if(options.maxValue === null){
        this.updateMaxValue();
    }

    this.cacheEnabled = true;

    Shape.call(this);

    this.pillarConvex = new ConvexPolyhedron();
    this.pillarOffset = new Vec3();

    this.type = Shape.types.HEIGHTFIELD;
    this.updateBoundingSphereRadius();

    // "i_j_isUpper" => { convex: ..., offset: ... }
    // for example:
    // _cachedPillars["0_2_1"]
    this._cachedPillars = {};
}
Heightfield.prototype = new Shape();

/**
 * Call whenever you change the data array.
 * @method update
 */
Heightfield.prototype.update = function(){
    this._cachedPillars = {};
};

/**
 * Update the .minValue property
 * @method updateMinValue
 */
Heightfield.prototype.updateMinValue = function(){
    var data = this.data;
    var minValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v < minValue){
                minValue = v;
            }
        }
    }
    this.minValue = minValue;
};

/**
 * Update the .maxValue property
 * @method updateMaxValue
 */
Heightfield.prototype.updateMaxValue = function(){
    var data = this.data;
    var maxValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v > maxValue){
                maxValue = v;
            }
        }
    }
    this.maxValue = maxValue;
};

/**
 * Set the height value at an index. Don't forget to update maxValue and minValue after you're done.
 * @method setHeightValueAtIndex
 * @param {integer} xi
 * @param {integer} yi
 * @param {number} value
 */
Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value){
    var data = this.data;
    data[xi][yi] = value;

    // Invalidate cache
    this.clearCachedConvexTrianglePillar(xi, yi, false);
    if(xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
        this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
    }
    if(yi > 0){
        this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
        this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
    }
    if(yi > 0 && xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
    }
};

/**
 * Get max/min in a rectangle in the matrix data
 * @method getRectMinMax
 * @param  {integer} iMinX
 * @param  {integer} iMinY
 * @param  {integer} iMaxX
 * @param  {integer} iMaxY
 * @param  {array} [result] An array to store the results in.
 * @return {array} The result array, if it was passed in. Minimum will be at position 0 and max at 1.
 */
Heightfield.prototype.getRectMinMax = function (iMinX, iMinY, iMaxX, iMaxY, result) {
    result = result || [];

    // Get max and min of the data
    var data = this.data,
        max = this.minValue; // Set first value
    for(var i = iMinX; i <= iMaxX; i++){
        for(var j = iMinY; j <= iMaxY; j++){
            var height = data[i][j];
            if(height > max){
                max = height;
            }
        }
    }

    result[0] = this.minValue;
    result[1] = max;
};

/**
 * Get the index of a local position on the heightfield. The indexes indicate the rectangles, so if your terrain is made of N x N height data points, you will have rectangle indexes ranging from 0 to N-1.
 * @method getIndexOfPosition
 * @param  {number} x
 * @param  {number} y
 * @param  {array} result Two-element array
 * @param  {boolean} clamp If the position should be clamped to the heightfield edge.
 * @return {boolean}
 */
Heightfield.prototype.getIndexOfPosition = function (x, y, result, clamp) {

    // Get the index of the data points to test against
    var w = this.elementSize;
    var data = this.data;
    var xi = Math.floor(x / w);
    var yi = Math.floor(y / w);

    result[0] = xi;
    result[1] = yi;

    if(clamp){
        // Clamp index to edges
        if(xi < 0){ xi = 0; }
        if(yi < 0){ yi = 0; }
        if(xi >= data.length - 1){ xi = data.length - 1; }
        if(yi >= data[0].length - 1){ yi = data[0].length - 1; }
    }

    // Bail out if we are out of the terrain
    if(xi < 0 || yi < 0 || xi >= data.length-1 || yi >= data[0].length-1){
        return false;
    }

    return true;
};

Heightfield.prototype.getHeightAt = function(x, y, edgeClamp){
    var idx = [];
    this.getIndexOfPosition(x, y, idx, edgeClamp);

    // TODO: get upper or lower triangle, then use barycentric interpolation to get the height in the triangle.
    var minmax = [];
    this.getRectMinMax(idx[0], idx[1] + 1, idx[0], idx[1] + 1, minmax);

    return (minmax[0] + minmax[1]) / 2; // average
};

Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle){
    return xi + '_' + yi + '_' + (getUpperTriangle ? 1 : 0);
};

Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset){
    this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
        convex: convex,
        offset: offset
    };
};

Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

/**
 * Get a triangle in the terrain in the form of a triangular convex shape.
 * @method getConvexTrianglePillar
 * @param  {integer} i
 * @param  {integer} j
 * @param  {boolean} getUpperTriangle
 */
Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    var result = this.pillarConvex;
    var offsetResult = this.pillarOffset;

    if(this.cacheEnabled){
        var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
        if(data){
            this.pillarConvex = data.convex;
            this.pillarOffset = data.offset;
            return;
        }

        result = new ConvexPolyhedron();
        offsetResult = new Vec3();

        this.pillarConvex = result;
        this.pillarOffset = offsetResult;
    }

    var data = this.data;
    var elementSize = this.elementSize;
    var faces = result.faces;

    // Reuse verts if possible
    result.vertices.length = 6;
    for (var i = 0; i < 6; i++) {
        if(!result.vertices[i]){
            result.vertices[i] = new Vec3();
        }
    }

    // Reuse faces if possible
    faces.length = 5;
    for (var i = 0; i < 5; i++) {
        if(!faces[i]){
            faces[i] = [];
        }
    }

    var verts = result.vertices;

    var h = (Math.min(
        data[xi][yi],
        data[xi+1][yi],
        data[xi][yi+1],
        data[xi+1][yi+1]
    ) - this.minValue ) / 2 + this.minValue;

    if (!getUpperTriangle) {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.25) * elementSize, // sort of center of a triangle
            (yi + 0.25) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            data[xi][yi] - h
        );
        verts[1].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            data[xi + 1][yi] - h
        );
        verts[2].set(
            -0.25 * elementSize,
            0.75 * elementSize,
            data[xi][yi + 1] - h
        );

        // bottom triangle verts
        verts[3].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[4].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[5].set(
            -0.25 * elementSize,
            0.75  * elementSize,
            -h-1
        );

        // top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // -x facing quad
        faces[2][0] = 0;
        faces[2][1] = 2;
        faces[2][2] = 5;
        faces[2][3] = 3;

        // -y facing quad
        faces[3][0] = 1;
        faces[3][1] = 0;
        faces[3][2] = 3;
        faces[3][3] = 4;

        // +xy facing quad
        faces[4][0] = 4;
        faces[4][1] = 5;
        faces[4][2] = 2;
        faces[4][3] = 1;


    } else {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.75) * elementSize, // sort of center of a triangle
            (yi + 0.75) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            0.25 * elementSize,
            0.25 * elementSize,
            data[xi + 1][yi + 1] - h
        );
        verts[1].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            data[xi][yi + 1] - h
        );
        verts[2].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            data[xi + 1][yi] - h
        );

        // bottom triangle verts
        verts[3].set(
            0.25 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[4].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[5].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            - h-1
        );

        // Top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // +x facing quad
        faces[2][0] = 2;
        faces[2][1] = 5;
        faces[2][2] = 3;
        faces[2][3] = 0;

        // +y facing quad
        faces[3][0] = 3;
        faces[3][1] = 4;
        faces[3][2] = 1;
        faces[3][3] = 0;

        // -xy facing quad
        faces[4][0] = 1;
        faces[4][1] = 4;
        faces[4][2] = 5;
        faces[4][3] = 2;
    }

    result.computeNormals();
    result.computeEdges();
    result.updateBoundingSphereRadius();

    this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
};

Heightfield.prototype.calculateLocalInertia = function(mass, target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Heightfield.prototype.volume = function(){
    return Number.MAX_VALUE; // The terrain is infinite
};

Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // TODO: do it properly
    min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
};

Heightfield.prototype.updateBoundingSphereRadius = function(){
    // Use the bounding box of the min/max values
    var data = this.data,
        s = this.elementSize;
    this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
};

},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(_dereq_,module,exports){
module.exports = Particle;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Particle shape.
 * @class Particle
 * @constructor
 * @author schteppe
 * @extends Shape
 */
function Particle(){
    Shape.call(this);

    this.type = Shape.types.PARTICLE;
}
Particle.prototype = new Shape();
Particle.prototype.constructor = Particle;

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Particle.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Particle.prototype.volume = function(){
    return 0;
};

Particle.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = 0;
};

Particle.prototype.calculateWorldAABB = function(pos,quat,min,max){
    // Get each axis max
    min.copy(pos);
    max.copy(pos);
};

},{"../math/Vec3":30,"./Shape":43}],42:[function(_dereq_,module,exports){
module.exports = Plane;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * A plane, facing in the Z direction. The plane has its surface at z=0 and everything below z=0 is assumed to be solid plane. To make the plane face in some other direction than z, you must put it inside a RigidBody and rotate that body. See the demos.
 * @class Plane
 * @constructor
 * @extends Shape
 * @author schteppe
 */
function Plane(){
    Shape.call(this);
    this.type = Shape.types.PLANE;

    // World oriented normal
    this.worldNormal = new Vec3();
    this.worldNormalNeedsUpdate = true;

    this.boundingSphereRadius = Number.MAX_VALUE;
}
Plane.prototype = new Shape();
Plane.prototype.constructor = Plane;

Plane.prototype.computeWorldNormal = function(quat){
    var n = this.worldNormal;
    n.set(0,0,1);
    quat.vmult(n,n);
    this.worldNormalNeedsUpdate = false;
};

Plane.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    return target;
};

Plane.prototype.volume = function(){
    return Number.MAX_VALUE; // The plane is infinite...
};

var tempNormal = new Vec3();
Plane.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // The plane AABB is infinite, except if the normal is pointing along any axis
    tempNormal.set(0,0,1); // Default plane normal is z
    quat.vmult(tempNormal,tempNormal);
    var maxVal = Number.MAX_VALUE;
    min.set(-maxVal, -maxVal, -maxVal);
    max.set(maxVal, maxVal, maxVal);

    if(tempNormal.x === 1){ max.x = pos.x; }
    if(tempNormal.y === 1){ max.y = pos.y; }
    if(tempNormal.z === 1){ max.z = pos.z; }

    if(tempNormal.x === -1){ min.x = pos.x; }
    if(tempNormal.y === -1){ min.y = pos.y; }
    if(tempNormal.z === -1){ min.z = pos.z; }
};

Plane.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = Number.MAX_VALUE;
};
},{"../math/Vec3":30,"./Shape":43}],43:[function(_dereq_,module,exports){
module.exports = Shape;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Material = _dereq_('../material/Material');

/**
 * Base class for shapes
 * @class Shape
 * @constructor
 * @author schteppe
 * @todo Should have a mechanism for caching bounding sphere radius instead of calculating it each time
 */
function Shape(){

    /**
     * Identifyer of the Shape.
     * @property {number} id
     */
    this.id = Shape.idCounter++;

    /**
     * The type of this shape. Must be set to an int > 0 by subclasses.
     * @property type
     * @type {Number}
     * @see Shape.types
     */
    this.type = 0;

    /**
     * The local bounding sphere radius of this shape.
     * @property {Number} boundingSphereRadius
     */
    this.boundingSphereRadius = 0;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {boolean} collisionResponse
     */
    this.collisionResponse = true;

    /**
     * @property {Material} material
     */
    this.material = null;
}
Shape.prototype.constructor = Shape;

/**
 * Computes the bounding sphere radius. The result is stored in the property .boundingSphereRadius
 * @method updateBoundingSphereRadius
 * @return {Number}
 */
Shape.prototype.updateBoundingSphereRadius = function(){
    throw "computeBoundingSphereRadius() not implemented for shape type "+this.type;
};

/**
 * Get the volume of this shape
 * @method volume
 * @return {Number}
 */
Shape.prototype.volume = function(){
    throw "volume() not implemented for shape type "+this.type;
};

/**
 * Calculates the inertia in the local frame for this shape.
 * @method calculateLocalInertia
 * @return {Vec3}
 * @see http://en.wikipedia.org/wiki/List_of_moments_of_inertia
 */
Shape.prototype.calculateLocalInertia = function(mass,target){
    throw "calculateLocalInertia() not implemented for shape type "+this.type;
};

Shape.idCounter = 0;

/**
 * The available shape types.
 * @static
 * @property types
 * @type {Object}
 */
Shape.types = {
    SPHERE:1,
    PLANE:2,
    BOX:4,
    COMPOUND:8,
    CONVEXPOLYHEDRON:16,
    HEIGHTFIELD:32,
    PARTICLE:64,
    CYLINDER:128,
    TRIMESH:256
};


},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(_dereq_,module,exports){
module.exports = Sphere;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Spherical shape
 * @class Sphere
 * @constructor
 * @extends Shape
 * @param {Number} radius The radius of the sphere, a non-negative number.
 * @author schteppe / http://github.com/schteppe
 */
function Sphere(radius){
    Shape.call(this);

    /**
     * @property {Number} radius
     */
    this.radius = radius!==undefined ? Number(radius) : 1.0;
    this.type = Shape.types.SPHERE;

    if(this.radius < 0){
        throw new Error('The sphere radius cannot be negative.');
    }

    this.updateBoundingSphereRadius();
}
Sphere.prototype = new Shape();
Sphere.prototype.constructor = Sphere;

Sphere.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    var I = 2.0*mass*this.radius*this.radius/5.0;
    target.x = I;
    target.y = I;
    target.z = I;
    return target;
};

Sphere.prototype.volume = function(){
    return 4.0 * Math.PI * this.radius / 3.0;
};

Sphere.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.radius;
};

Sphere.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var r = this.radius;
    var axes = ['x','y','z'];
    for(var i=0; i<axes.length; i++){
        var ax = axes[i];
        min[ax] = pos[ax] - r;
        max[ax] = pos[ax] + r;
    }
};

},{"../math/Vec3":30,"./Shape":43}],45:[function(_dereq_,module,exports){
module.exports = Trimesh;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');
var AABB = _dereq_('../collision/AABB');
var Octree = _dereq_('../utils/Octree');

/**
 * @class Trimesh
 * @constructor
 * @param {array} vertices
 * @param {array} indices
 * @extends Shape
 * @example
 *     // How to make a mesh with a single triangle
 *     var vertices = [
 *         0, 0, 0, // vertex 0
 *         1, 0, 0, // vertex 1
 *         0, 1, 0  // vertex 2
 *     ];
 *     var indices = [
 *         0, 1, 2  // triangle 0
 *     ];
 *     var trimeshShape = new Trimesh(vertices, indices);
 */
function Trimesh(vertices, indices) {
    Shape.call(this);
    this.type = Shape.types.TRIMESH;

    /**
     * @property vertices
     * @type {Array}
     */
    this.vertices = new Float32Array(vertices);

    /**
     * Array of integers, indicating which vertices each triangle consists of. The length of this array is thus 3 times the number of triangles.
     * @property indices
     * @type {Array}
     */
    this.indices = new Int16Array(indices);

    /**
     * The normals data.
     * @property normals
     * @type {Array}
     */
    this.normals = new Float32Array(indices.length);

    /**
     * The local AABB of the mesh.
     * @property aabb
     * @type {Array}
     */
    this.aabb = new AABB();

    /**
     * References to vertex pairs, making up all unique edges in the trimesh.
     * @property {array} edges
     */
    this.edges = null;

    /**
     * Local scaling of the mesh. Use .setScale() to set it.
     * @property {Vec3} scale
     */
    this.scale = new Vec3(1, 1, 1);

    /**
     * The indexed triangles. Use .updateTree() to update it.
     * @property {Octree} tree
     */
    this.tree = new Octree();

    this.updateEdges();
    this.updateNormals();
    this.updateAABB();
    this.updateBoundingSphereRadius();
    this.updateTree();
}
Trimesh.prototype = new Shape();
Trimesh.prototype.constructor = Trimesh;

var computeNormals_n = new Vec3();

/**
 * @method updateTree
 */
Trimesh.prototype.updateTree = function(){
    var tree = this.tree;

    tree.reset();
    tree.aabb.copy(this.aabb);
    var scale = this.scale; // The local mesh AABB is scaled, but the octree AABB should be unscaled
    tree.aabb.lowerBound.x *= 1 / scale.x;
    tree.aabb.lowerBound.y *= 1 / scale.y;
    tree.aabb.lowerBound.z *= 1 / scale.z;
    tree.aabb.upperBound.x *= 1 / scale.x;
    tree.aabb.upperBound.y *= 1 / scale.y;
    tree.aabb.upperBound.z *= 1 / scale.z;

    // Insert all triangles
    var triangleAABB = new AABB();
    var a = new Vec3();
    var b = new Vec3();
    var c = new Vec3();
    var points = [a, b, c];
    for (var i = 0; i < this.indices.length / 3; i++) {
        //this.getTriangleVertices(i, a, b, c);

        // Get unscaled triangle verts
        var i3 = i * 3;
        this._getUnscaledVertex(this.indices[i3], a);
        this._getUnscaledVertex(this.indices[i3 + 1], b);
        this._getUnscaledVertex(this.indices[i3 + 2], c);

        triangleAABB.setFromPoints(points);
        tree.insert(triangleAABB, i);
    }
    tree.removeEmptyNodes();
};

var unscaledAABB = new AABB();

/**
 * Get triangles in a local AABB from the trimesh.
 * @method getTrianglesInAABB
 * @param  {AABB} aabb
 * @param  {array} result An array of integers, referencing the queried triangles.
 */
Trimesh.prototype.getTrianglesInAABB = function(aabb, result){
    unscaledAABB.copy(aabb);

    // Scale it to local
    var scale = this.scale;
    var isx = scale.x;
    var isy = scale.y;
    var isz = scale.z;
    var l = unscaledAABB.lowerBound;
    var u = unscaledAABB.upperBound;
    l.x /= isx;
    l.y /= isy;
    l.z /= isz;
    u.x /= isx;
    u.y /= isy;
    u.z /= isz;

    return this.tree.aabbQuery(unscaledAABB, result);
};

/**
 * @method setScale
 * @param {Vec3} scale
 */
Trimesh.prototype.setScale = function(scale){
    var wasUniform = this.scale.x === this.scale.y === this.scale.z;
    var isUniform = scale.x === scale.y === scale.z;

    if(!(wasUniform && isUniform)){
        // Non-uniform scaling. Need to update normals.
        this.updateNormals();
    }
    this.scale.copy(scale);
    this.updateAABB();
    this.updateBoundingSphereRadius();
};

/**
 * Compute the normals of the faces. Will save in the .normals array.
 * @method updateNormals
 */
Trimesh.prototype.updateNormals = function(){
    var n = computeNormals_n;

    // Generate normals
    var normals = this.normals;
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;

        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];

        this.getVertex(a, va);
        this.getVertex(b, vb);
        this.getVertex(c, vc);

        Trimesh.computeNormal(vb, va, vc, n);

        normals[i3] = n.x;
        normals[i3 + 1] = n.y;
        normals[i3 + 2] = n.z;
    }
};

/**
 * Update the .edges property
 * @method updateEdges
 */
Trimesh.prototype.updateEdges = function(){
    var edges = {};
    var add = function(indexA, indexB){
        var key = a < b ? a + '_' + b : b + '_' + a;
        edges[key] = true;
    };
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;
        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];
        add(a,b);
        add(b,c);
        add(c,a);
    }
    var keys = Object.keys(edges);
    this.edges = new Int16Array(keys.length * 2);
    for (var i = 0; i < keys.length; i++) {
        var indices = keys[i].split('_');
        this.edges[2 * i] = parseInt(indices[0], 10);
        this.edges[2 * i + 1] = parseInt(indices[1], 10);
    }
};

/**
 * Get an edge vertex
 * @method getEdgeVertex
 * @param  {number} edgeIndex
 * @param  {number} firstOrSecond 0 or 1, depending on which one of the vertices you need.
 * @param  {Vec3} vertexStore Where to store the result
 */
Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore){
    var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
    this.getVertex(vertexIndex, vertexStore);
};

var getEdgeVector_va = new Vec3();
var getEdgeVector_vb = new Vec3();

/**
 * Get a vector along an edge.
 * @method getEdgeVector
 * @param  {number} edgeIndex
 * @param  {Vec3} vectorStore
 */
Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore){
    var va = getEdgeVector_va;
    var vb = getEdgeVector_vb;
    this.getEdgeVertex(edgeIndex, 0, va);
    this.getEdgeVertex(edgeIndex, 1, vb);
    vb.vsub(va, vectorStore);
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method computeNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
Trimesh.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

var va = new Vec3();
var vb = new Vec3();
var vc = new Vec3();

/**
 * Get vertex i.
 * @method getVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getVertex = function(i, out){
    var scale = this.scale;
    this._getUnscaledVertex(i, out);
    out.x *= scale.x;
    out.y *= scale.y;
    out.z *= scale.z;
    return out;
};

/**
 * Get raw vertex i
 * @private
 * @method _getUnscaledVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype._getUnscaledVertex = function(i, out){
    var i3 = i * 3;
    var vertices = this.vertices;
    return out.set(
        vertices[i3],
        vertices[i3 + 1],
        vertices[i3 + 2]
    );
};

/**
 * Get a vertex from the trimesh,transformed by the given position and quaternion.
 * @method getWorldVertex
 * @param  {number} i
 * @param  {Vec3} pos
 * @param  {Quaternion} quat
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getWorldVertex = function(i, pos, quat, out){
    this.getVertex(i, out);
    Transform.pointToWorldFrame(pos, quat, out, out);
    return out;
};

/**
 * Get the three vertices for triangle i.
 * @method getTriangleVertices
 * @param  {number} i
 * @param  {Vec3} a
 * @param  {Vec3} b
 * @param  {Vec3} c
 */
Trimesh.prototype.getTriangleVertices = function(i, a, b, c){
    var i3 = i * 3;
    this.getVertex(this.indices[i3], a);
    this.getVertex(this.indices[i3 + 1], b);
    this.getVertex(this.indices[i3 + 2], c);
};

/**
 * Compute the normal of triangle i.
 * @method getNormal
 * @param  {Number} i
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.getNormal = function(i, target){
    var i3 = i * 3;
    return target.set(
        this.normals[i3],
        this.normals[i3 + 1],
        this.normals[i3 + 2]
    );
};

var cli_aabb = new AABB();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabb);
    var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x,
        y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y,
        z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
    return target.set(
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x )
    );
};

var computeLocalAABB_worldVert = new Vec3();

/**
 * Compute the local AABB for the trimesh
 * @method computeLocalAABB
 * @param  {AABB} aabb
 */
Trimesh.prototype.computeLocalAABB = function(aabb){
    var l = aabb.lowerBound,
        u = aabb.upperBound,
        n = this.vertices.length,
        vertices = this.vertices,
        v = computeLocalAABB_worldVert;

    this.getVertex(0, v);
    l.copy(v);
    u.copy(v);

    for(var i=0; i !== n; i++){
        this.getVertex(i, v);

        if(v.x < l.x){
            l.x = v.x;
        } else if(v.x > u.x){
            u.x = v.x;
        }

        if(v.y < l.y){
            l.y = v.y;
        } else if(v.y > u.y){
            u.y = v.y;
        }

        if(v.z < l.z){
            l.z = v.z;
        } else if(v.z > u.z){
            u.z = v.z;
        }
    }
};


/**
 * Update the .aabb property
 * @method updateAABB
 */
Trimesh.prototype.updateAABB = function(){
    this.computeLocalAABB(this.aabb);
};

/**
 * Will update the .boundingSphereRadius property
 * @method updateBoundingSphereRadius
 */
Trimesh.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var vertices = this.vertices;
    var v = new Vec3();
    for(var i=0, N=vertices.length / 3; i !== N; i++) {
        this.getVertex(i, v);
        var norm2 = v.norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();
var calculateWorldAABB_frame = new Transform();
var calculateWorldAABB_aabb = new AABB();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
Trimesh.prototype.calculateWorldAABB = function(pos,quat,min,max){
    /*
    var n = this.vertices.length / 3,
        verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;

    var v = tempWorldVertex;
    for(var i=0; i<n; i++){
        this.getVertex(i, v);
        quat.vmult(v, v);
        pos.vadd(v, v);
        if (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
    */

    // Faster approximation using local AABB
    var frame = calculateWorldAABB_frame;
    var result = calculateWorldAABB_aabb;
    frame.position = pos;
    frame.quaternion = quat;
    this.aabb.toWorldFrame(frame, result);
    min.copy(result.lowerBound);
    max.copy(result.upperBound);
};

/**
 * Get approximate volume
 * @method volume
 * @return {Number}
 */
Trimesh.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Create a Trimesh instance, shaped as a torus.
 * @static
 * @method createTorus
 * @param  {number} [radius=1]
 * @param  {number} [tube=0.5]
 * @param  {number} [radialSegments=8]
 * @param  {number} [tubularSegments=6]
 * @param  {number} [arc=6.283185307179586]
 * @return {Trimesh} A torus
 */
Trimesh.createTorus = function (radius, tube, radialSegments, tubularSegments, arc) {
    radius = radius || 1;
    tube = tube || 0.5;
    radialSegments = radialSegments || 8;
    tubularSegments = tubularSegments || 6;
    arc = arc || Math.PI * 2;

    var vertices = [];
    var indices = [];

    for ( var j = 0; j <= radialSegments; j ++ ) {
        for ( var i = 0; i <= tubularSegments; i ++ ) {
            var u = i / tubularSegments * arc;
            var v = j / radialSegments * Math.PI * 2;

            var x = ( radius + tube * Math.cos( v ) ) * Math.cos( u );
            var y = ( radius + tube * Math.cos( v ) ) * Math.sin( u );
            var z = tube * Math.sin( v );

            vertices.push( x, y, z );
        }
    }

    for ( var j = 1; j <= radialSegments; j ++ ) {
        for ( var i = 1; i <= tubularSegments; i ++ ) {
            var a = ( tubularSegments + 1 ) * j + i - 1;
            var b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
            var c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
            var d = ( tubularSegments + 1 ) * j + i;

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    return new Trimesh(vertices, indices);
};

},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(_dereq_,module,exports){
module.exports = GSSolver;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('./Solver');

/**
 * Constraint equation Gauss-Seidel solver.
 * @class GSSolver
 * @constructor
 * @todo The spook parameters should be specified for each constraint, not globally.
 * @author schteppe / https://github.com/schteppe
 * @see https://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf
 * @extends Solver
 */
function GSSolver(){
    Solver.call(this);

    /**
     * The number of solver iterations determines quality of the constraints in the world. The more iterations, the more correct simulation. More iterations need more computations though. If you have a large gravity force in your world, you will need more iterations.
     * @property iterations
     * @type {Number}
     * @todo write more about solver and iterations in the wiki
     */
    this.iterations = 10;

    /**
     * When tolerance is reached, the system is assumed to be converged.
     * @property tolerance
     * @type {Number}
     */
    this.tolerance = 1e-7;
}
GSSolver.prototype = new Solver();

var GSSolver_solve_lambda = []; // Just temporary number holders that we want to reuse each solve.
var GSSolver_solve_invCs = [];
var GSSolver_solve_Bs = [];
GSSolver.prototype.solve = function(dt,world){
    var iter = 0,
        maxIter = this.iterations,
        tolSquared = this.tolerance*this.tolerance,
        equations = this.equations,
        Neq = equations.length,
        bodies = world.bodies,
        Nbodies = bodies.length,
        h = dt,
        q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;

    // Update solve mass
    if(Neq !== 0){
        for(var i=0; i!==Nbodies; i++){
            bodies[i].updateSolveMassProperties();
        }
    }

    // Things that does not change during iteration can be computed once
    var invCs = GSSolver_solve_invCs,
        Bs = GSSolver_solve_Bs,
        lambda = GSSolver_solve_lambda;
    invCs.length = Neq;
    Bs.length = Neq;
    lambda.length = Neq;
    for(var i=0; i!==Neq; i++){
        var c = equations[i];
        lambda[i] = 0.0;
        Bs[i] = c.computeB(h);
        invCs[i] = 1.0 / c.computeC();
    }

    if(Neq !== 0){

        // Reset vlambda
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                vlambda=b.vlambda,
                wlambda=b.wlambda;
            vlambda.set(0,0,0);
            if(wlambda){
                wlambda.set(0,0,0);
            }
        }

        // Iterate over equations
        for(iter=0; iter!==maxIter; iter++){

            // Accumulate the total error for each iteration.
            deltalambdaTot = 0.0;

            for(var j=0; j!==Neq; j++){

                var c = equations[j];

                // Compute iteration
                B = Bs[j];
                invC = invCs[j];
                lambdaj = lambda[j];
                GWlambda = c.computeGWlambda();
                deltalambda = invC * ( B - GWlambda - c.eps * lambdaj );

                // Clamp if we are not within the min/max interval
                if(lambdaj + deltalambda < c.minForce){
                    deltalambda = c.minForce - lambdaj;
                } else if(lambdaj + deltalambda > c.maxForce){
                    deltalambda = c.maxForce - lambdaj;
                }
                lambda[j] += deltalambda;

                deltalambdaTot += deltalambda > 0.0 ? deltalambda : -deltalambda; // abs(deltalambda)

                c.addToWlambda(deltalambda);
            }

            // If the total error is small enough - stop iterate
            if(deltalambdaTot*deltalambdaTot < tolSquared){
                break;
            }
        }

        // Add result to velocity
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                v=b.velocity,
                w=b.angularVelocity;
            v.vadd(b.vlambda, v);
            if(w){
                w.vadd(b.wlambda, w);
            }
        }
    }

    return iter;
};

},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(_dereq_,module,exports){
module.exports = Solver;

/**
 * Constraint equation solver base class.
 * @class Solver
 * @constructor
 * @author schteppe / https://github.com/schteppe
 */
function Solver(){
    /**
     * All equations to be solved
     * @property {Array} equations
     */
    this.equations = [];
}

/**
 * Should be implemented in subclasses!
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
Solver.prototype.solve = function(dt,world){
    // Should return the number of iterations done!
    return 0;
};

/**
 * Add an equation
 * @method addEquation
 * @param {Equation} eq
 */
Solver.prototype.addEquation = function(eq){
    if (eq.enabled) {
        this.equations.push(eq);
    }
};

/**
 * Remove an equation
 * @method removeEquation
 * @param {Equation} eq
 */
Solver.prototype.removeEquation = function(eq){
    var eqs = this.equations;
    var i = eqs.indexOf(eq);
    if(i !== -1){
        eqs.splice(i,1);
    }
};

/**
 * Add all equations
 * @method removeAllEquations
 */
Solver.prototype.removeAllEquations = function(){
    this.equations.length = 0;
};


},{}],48:[function(_dereq_,module,exports){
module.exports = SplitSolver;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('./Solver');
var Body = _dereq_('../objects/Body');

/**
 * Splits the equations into islands and solves them independently. Can improve performance.
 * @class SplitSolver
 * @constructor
 * @extends Solver
 * @param {Solver} subsolver
 */
function SplitSolver(subsolver){
    Solver.call(this);
    this.iterations = 10;
    this.tolerance = 1e-7;
    this.subsolver = subsolver;
    this.nodes = [];
    this.nodePool = [];

    // Create needed nodes, reuse if possible
    while(this.nodePool.length < 128){
        this.nodePool.push(this.createNode());
    }
}
SplitSolver.prototype = new Solver();

// Returns the number of subsystems
var SplitSolver_solve_nodes = []; // All allocated node objects
var SplitSolver_solve_nodePool = []; // All allocated node objects
var SplitSolver_solve_eqs = [];   // Temp array
var SplitSolver_solve_bds = [];   // Temp array
var SplitSolver_solve_dummyWorld = {bodies:[]}; // Temp object

var STATIC = Body.STATIC;
function getUnvisitedNode(nodes){
    var Nnodes = nodes.length;
    for(var i=0; i!==Nnodes; i++){
        var node = nodes[i];
        if(!node.visited && !(node.body.type & STATIC)){
            return node;
        }
    }
    return false;
}

var queue = [];
function bfs(root,visitFunc,bds,eqs){
    queue.push(root);
    root.visited = true;
    visitFunc(root,bds,eqs);
    while(queue.length) {
        var node = queue.pop();
        // Loop over unvisited child nodes
        var child;
        while((child = getUnvisitedNode(node.children))) {
            child.visited = true;
            visitFunc(child,bds,eqs);
            queue.push(child);
        }
    }
}

function visitFunc(node,bds,eqs){
    bds.push(node.body);
    var Neqs = node.eqs.length;
    for(var i=0; i!==Neqs; i++){
        var eq = node.eqs[i];
        if(eqs.indexOf(eq) === -1){
            eqs.push(eq);
        }
    }
}

SplitSolver.prototype.createNode = function(){
    return { body:null, children:[], eqs:[], visited:false };
};

/**
 * Solve the subsystems
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
SplitSolver.prototype.solve = function(dt,world){
    var nodes=SplitSolver_solve_nodes,
        nodePool=this.nodePool,
        bodies=world.bodies,
        equations=this.equations,
        Neq=equations.length,
        Nbodies=bodies.length,
        subsolver=this.subsolver;

    // Create needed nodes, reuse if possible
    while(nodePool.length < Nbodies){
        nodePool.push(this.createNode());
    }
    nodes.length = Nbodies;
    for (var i = 0; i < Nbodies; i++) {
        nodes[i] = nodePool[i];
    }

    // Reset node values
    for(var i=0; i!==Nbodies; i++){
        var node = nodes[i];
        node.body = bodies[i];
        node.children.length = 0;
        node.eqs.length = 0;
        node.visited = false;
    }
    for(var k=0; k!==Neq; k++){
        var eq=equations[k],
            i=bodies.indexOf(eq.bi),
            j=bodies.indexOf(eq.bj),
            ni=nodes[i],
            nj=nodes[j];
        ni.children.push(nj);
        ni.eqs.push(eq);
        nj.children.push(ni);
        nj.eqs.push(eq);
    }

    var child, n=0, eqs=SplitSolver_solve_eqs;

    subsolver.tolerance = this.tolerance;
    subsolver.iterations = this.iterations;

    var dummyWorld = SplitSolver_solve_dummyWorld;
    while((child = getUnvisitedNode(nodes))){
        eqs.length = 0;
        dummyWorld.bodies.length = 0;
        bfs(child, visitFunc, dummyWorld.bodies, eqs);

        var Neqs = eqs.length;

        eqs = eqs.sort(sortById);

        for(var i=0; i!==Neqs; i++){
            subsolver.addEquation(eqs[i]);
        }

        var iter = subsolver.solve(dt,dummyWorld);
        subsolver.removeAllEquations();
        n++;
    }

    return n;
};

function sortById(a, b){
    return b.id - a.id;
}
},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(_dereq_,module,exports){
/**
 * Base class for objects that dispatches events.
 * @class EventTarget
 * @constructor
 */
var EventTarget = function () {

};

module.exports = EventTarget;

EventTarget.prototype = {
    constructor: EventTarget,

    /**
     * Add an event listener
     * @method addEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    addEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ this._listeners = {}; }
        var listeners = this._listeners;
        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }
        if ( listeners[ type ].indexOf( listener ) === - 1 ) {
            listeners[ type ].push( listener );
        }
        return this;
    },

    /**
     * Check if an event listener is added
     * @method hasEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {Boolean}
     */
    hasEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return false; }
        var listeners = this._listeners;
        if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {
            return true;
        }
        return false;
    },

    /**
     * Remove an event listener
     * @method removeEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    removeEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        if ( listeners[type] === undefined ){ return this; }
        var index = listeners[ type ].indexOf( listener );
        if ( index !== - 1 ) {
            listeners[ type ].splice( index, 1 );
        }
        return this;
    },

    /**
     * Emit an event.
     * @method dispatchEvent
     * @param  {Object} event
     * @param  {String} event.type
     * @return {EventTarget} The self object, for chainability.
     */
    dispatchEvent: function ( event ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        var listenerArray = listeners[ event.type ];
        if ( listenerArray !== undefined ) {
            event.target = this;
            for ( var i = 0, l = listenerArray.length; i < l; i ++ ) {
                listenerArray[ i ].call( this, event );
            }
        }
        return this;
    }
};

},{}],50:[function(_dereq_,module,exports){
var AABB = _dereq_('../collision/AABB');
var Vec3 = _dereq_('../math/Vec3');

module.exports = Octree;

/**
 * @class OctreeNode
 * @param {object} [options]
 * @param {Octree} [options.root]
 * @param {AABB} [options.aabb]
 */
function OctreeNode(options){
    options = options || {};

    /**
     * The root node
     * @property {OctreeNode} root
     */
    this.root = options.root || null;

    /**
     * Boundary of this node
     * @property {AABB} aabb
     */
    this.aabb = options.aabb ? options.aabb.clone() : new AABB();

    /**
     * Contained data at the current node level.
     * @property {Array} data
     */
    this.data = [];

    /**
     * Children to this node
     * @property {Array} children
     */
    this.children = [];
}

/**
 * @class Octree
 * @param {AABB} aabb The total AABB of the tree
 * @param {object} [options]
 * @param {number} [options.maxDepth=8]
 * @extends OctreeNode
 */
function Octree(aabb, options){
    options = options || {};
    options.root = null;
    options.aabb = aabb;
    OctreeNode.call(this, options);

    /**
     * Maximum subdivision depth
     * @property {number} maxDepth
     */
    this.maxDepth = typeof(options.maxDepth) !== 'undefined' ? options.maxDepth : 8;
}
Octree.prototype = new OctreeNode();

OctreeNode.prototype.reset = function(aabb, options){
    this.children.length = this.data.length = 0;
};

/**
 * Insert data into this node
 * @method insert
 * @param  {AABB} aabb
 * @param  {object} elementData
 * @return {boolean} True if successful, otherwise false
 */
OctreeNode.prototype.insert = function(aabb, elementData, level){
    var nodeData = this.data;
    level = level || 0;

    // Ignore objects that do not belong in this node
    if (!this.aabb.contains(aabb)){
        return false; // object cannot be added
    }

    var children = this.children;

    if(level < (this.maxDepth || this.root.maxDepth)){
        // Subdivide if there are no children yet
        var subdivided = false;
        if (!children.length){
            this.subdivide();
            subdivided = true;
        }

        // add to whichever node will accept it
        for (var i = 0; i !== 8; i++) {
            if (children[i].insert(aabb, elementData, level + 1)){
                return true;
            }
        }

        if(subdivided){
            // No children accepted! Might as well just remove em since they contain none
            children.length = 0;
        }
    }

    // Too deep, or children didnt want it. add it in current node
    nodeData.push(elementData);

    return true;
};

var halfDiagonal = new Vec3();

/**
 * Create 8 equally sized children nodes and put them in the .children array.
 * @method subdivide
 */
OctreeNode.prototype.subdivide = function() {
    var aabb = this.aabb;
    var l = aabb.lowerBound;
    var u = aabb.upperBound;

    var children = this.children;

    children.push(
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,0) }) })
    );

    u.vsub(l, halfDiagonal);
    halfDiagonal.scale(0.5, halfDiagonal);

    var root = this.root || this;

    for (var i = 0; i !== 8; i++) {
        var child = children[i];

        // Set current node as root
        child.root = root;

        // Compute bounds
        var lowerBound = child.aabb.lowerBound;
        lowerBound.x *= halfDiagonal.x;
        lowerBound.y *= halfDiagonal.y;
        lowerBound.z *= halfDiagonal.z;

        lowerBound.vadd(l, lowerBound);

        // Upper bound is always lower bound + halfDiagonal
        lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
    }
};

/**
 * Get all data, potentially within an AABB
 * @method aabbQuery
 * @param  {AABB} aabb
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.aabbQuery = function(aabb, result) {

    var nodeData = this.data;

    // abort if the range does not intersect this node
    // if (!this.aabb.overlaps(aabb)){
    //     return result;
    // }

    // Add objects at this level
    // Array.prototype.push.apply(result, nodeData);

    // Add child data
    // @todo unwrap recursion into a queue / loop, that's faster in JS
    var children = this.children;


    // for (var i = 0, N = this.children.length; i !== N; i++) {
    //     children[i].aabbQuery(aabb, result);
    // }

    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        if (node.aabb.overlaps(aabb)){
            Array.prototype.push.apply(result, node.data);
        }
        Array.prototype.push.apply(queue, node.children);
    }

    return result;
};

var tmpAABB = new AABB();

/**
 * Get all data, potentially intersected by a ray.
 * @method rayQuery
 * @param  {Ray} ray
 * @param  {Transform} treeTransform
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {

    // Use aabb query for now.
    // @todo implement real ray query which needs less lookups
    ray.getAABB(tmpAABB);
    tmpAABB.toLocalFrame(treeTransform, tmpAABB);
    this.aabbQuery(tmpAABB, result);

    return result;
};

/**
 * @method removeEmptyNodes
 */
OctreeNode.prototype.removeEmptyNodes = function() {
    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        for (var i = node.children.length - 1; i >= 0; i--) {
            if(!node.children[i].data.length){
                node.children.splice(i, 1);
            }
        }
        Array.prototype.push.apply(queue, node.children);
    }
};

},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(_dereq_,module,exports){
module.exports = Pool;

/**
 * For pooling objects that can be reused.
 * @class Pool
 * @constructor
 */
function Pool(){
    /**
     * The pooled objects
     * @property {Array} objects
     */
    this.objects = [];

    /**
     * Constructor of the objects
     * @property {mixed} type
     */
    this.type = Object;
}

/**
 * Release an object after use
 * @method release
 * @param {Object} obj
 */
Pool.prototype.release = function(){
    var Nargs = arguments.length;
    for(var i=0; i!==Nargs; i++){
        this.objects.push(arguments[i]);
    }
};

/**
 * Get an object
 * @method get
 * @return {mixed}
 */
Pool.prototype.get = function(){
    if(this.objects.length===0){
        return this.constructObject();
    } else {
        return this.objects.pop();
    }
};

/**
 * Construct an object. Should be implmented in each subclass.
 * @method constructObject
 * @return {mixed}
 */
Pool.prototype.constructObject = function(){
    throw new Error("constructObject() not implemented in this Pool subclass yet!");
};

},{}],52:[function(_dereq_,module,exports){
module.exports = TupleDictionary;

/**
 * @class TupleDictionary
 * @constructor
 */
function TupleDictionary() {

    /**
     * The data storage
     * @property data
     * @type {Object}
     */
    this.data = { keys:[] };
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
TupleDictionary.prototype.get = function(i, j) {
    if (i > j) {
        // swap
        var temp = j;
        j = i;
        i = temp;
    }
    return this.data[i+'-'+j];
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
TupleDictionary.prototype.set = function(i, j, value) {
    if (i > j) {
        var temp = j;
        j = i;
        i = temp;
    }
    var key = i+'-'+j;

    // Check if key already exists
    if(!this.get(i,j)){
        this.data.keys.push(key);
    }

    this.data[key] = value;
};

/**
 * @method reset
 */
TupleDictionary.prototype.reset = function() {
    var data = this.data,
        keys = data.keys;
    while(keys.length > 0){
        var key = keys.pop();
        delete data[key];
    }
};

},{}],53:[function(_dereq_,module,exports){
function Utils(){}

module.exports = Utils;

/**
 * Extend an options object with default values.
 * @static
 * @method defaults
 * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.
 * @param  {object} defaults An object containing default values.
 * @return {object} The modified options object.
 */
Utils.defaults = function(options, defaults){
    options = options || {};

    for(var key in defaults){
        if(!(key in options)){
            options[key] = defaults[key];
        }
    }

    return options;
};

},{}],54:[function(_dereq_,module,exports){
module.exports = Vec3Pool;

var Vec3 = _dereq_('../math/Vec3');
var Pool = _dereq_('./Pool');

/**
 * @class Vec3Pool
 * @constructor
 * @extends Pool
 */
function Vec3Pool(){
    Pool.call(this);
    this.type = Vec3;
}
Vec3Pool.prototype = new Pool();

/**
 * Construct a vector
 * @method constructObject
 * @return {Vec3}
 */
Vec3Pool.prototype.constructObject = function(){
    return new Vec3();
};

},{"../math/Vec3":30,"./Pool":51}],55:[function(_dereq_,module,exports){
module.exports = Narrowphase;

var AABB = _dereq_('../collision/AABB');
var Shape = _dereq_('../shapes/Shape');
var Ray = _dereq_('../collision/Ray');
var Vec3 = _dereq_('../math/Vec3');
var Transform = _dereq_('../math/Transform');
var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('../solver/Solver');
var Vec3Pool = _dereq_('../utils/Vec3Pool');
var ContactEquation = _dereq_('../equations/ContactEquation');
var FrictionEquation = _dereq_('../equations/FrictionEquation');

/**
 * Helper class for the World. Generates ContactEquations.
 * @class Narrowphase
 * @constructor
 * @todo Sphere-ConvexPolyhedron contacts
 * @todo Contact reduction
 * @todo  should move methods to prototype
 */
function Narrowphase(world){

    /**
     * Internal storage of pooled contact points.
     * @property {Array} contactPointPool
     */
    this.contactPointPool = [];

    this.frictionEquationPool = [];

    this.result = [];
    this.frictionResult = [];

    /**
     * Pooled vectors.
     * @property {Vec3Pool} v3pool
     */
    this.v3pool = new Vec3Pool();

    this.world = world;
    this.currentContactMaterial = null;

    /**
     * @property {Boolean} enableFrictionReduction
     */
    this.enableFrictionReduction = false;
}

/**
 * Make a contact object, by using the internal pool or creating a new one.
 * @method createContactEquation
 * @return {ContactEquation}
 */
Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, rsi, rsj){
    var c;
    if(this.contactPointPool.length){
        c = this.contactPointPool.pop();
        c.bi = bi;
        c.bj = bj;
    } else {
        c = new ContactEquation(bi, bj);
    }

    c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

    var cm = this.currentContactMaterial;

    c.restitution = cm.restitution;

    c.setSpookParams(
        cm.contactEquationStiffness,
        cm.contactEquationRelaxation,
        this.world.dt
    );

    var matA = si.material || bi.material;
    var matB = sj.material || bj.material;
    if(matA && matB && matA.restitution >= 0 && matB.restitution >= 0){
        c.restitution = matA.restitution * matB.restitution;
    }

    c.si = rsi || si;
    c.sj = rsj || sj;

    return c;
};

Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray){
    var bodyA = contactEquation.bi;
    var bodyB = contactEquation.bj;
    var shapeA = contactEquation.si;
    var shapeB = contactEquation.sj;

    var world = this.world;
    var cm = this.currentContactMaterial;

    // If friction or restitution were specified in the material, use them
    var friction = cm.friction;
    var matA = shapeA.material || bodyA.material;
    var matB = shapeB.material || bodyB.material;
    if(matA && matB && matA.friction >= 0 && matB.friction >= 0){
        friction = matA.friction * matB.friction;
    }

    if(friction > 0){

        // Create 2 tangent equations
        var mug = friction * world.gravity.length();
        var reducedMass = (bodyA.invMass + bodyB.invMass);
        if(reducedMass > 0){
            reducedMass = 1/reducedMass;
        }
        var pool = this.frictionEquationPool;
        var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);
        var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);

        c1.bi = c2.bi = bodyA;
        c1.bj = c2.bj = bodyB;
        c1.minForce = c2.minForce = -mug*reducedMass;
        c1.maxForce = c2.maxForce = mug*reducedMass;

        // Copy over the relative vectors
        c1.ri.copy(contactEquation.ri);
        c1.rj.copy(contactEquation.rj);
        c2.ri.copy(contactEquation.ri);
        c2.rj.copy(contactEquation.rj);

        // Construct tangents
        contactEquation.ni.tangents(c1.t, c2.t);

        // Set spook params
        c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
        c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);

        c1.enabled = c2.enabled = contactEquation.enabled;

        outArray.push(c1, c2);

        return true;
    }

    return false;
};

var averageNormal = new Vec3();
var averageContactPointA = new Vec3();
var averageContactPointB = new Vec3();

// Take the average N latest contact point on the plane.
Narrowphase.prototype.createFrictionFromAverage = function(numContacts){
    // The last contactEquation
    var c = this.result[this.result.length - 1];

    // Create the result: two "average" friction equations
    if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
        return;
    }

    var f1 = this.frictionResult[this.frictionResult.length - 2];
    var f2 = this.frictionResult[this.frictionResult.length - 1];

    averageNormal.setZero();
    averageContactPointA.setZero();
    averageContactPointB.setZero();

    var bodyA = c.bi;
    var bodyB = c.bj;
    for(var i=0; i!==numContacts; i++){
        c = this.result[this.result.length - 1 - i];
        if(c.bodyA !== bodyA){
            averageNormal.vadd(c.ni, averageNormal); // vec2.add(eq.t, eq.t, c.normalA);
            averageContactPointA.vadd(c.ri, averageContactPointA); // vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointA);
            averageContactPointB.vadd(c.rj, averageContactPointB);
        } else {
            averageNormal.vsub(c.ni, averageNormal); // vec2.sub(eq.t, eq.t, c.normalA);
            averageContactPointA.vadd(c.rj, averageContactPointA); // vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointA);
            averageContactPointB.vadd(c.ri, averageContactPointB);
        }
    }

    var invNumContacts = 1 / numContacts;
    averageContactPointA.scale(invNumContacts, f1.ri); // vec2.scale(eq.contactPointA, eq.contactPointA, invNumContacts);
    averageContactPointB.scale(invNumContacts, f1.rj); // vec2.scale(eq.contactPointB, eq.contactPointB, invNumContacts);
    f2.ri.copy(f1.ri); // Should be the same
    f2.rj.copy(f1.rj);
    averageNormal.normalize();
    averageNormal.tangents(f1.t, f2.t);
    // return eq;
};


var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpQuat1 = new Quaternion();
var tmpQuat2 = new Quaternion();

/**
 * Generate all contacts between a list of body pairs
 * @method getContacts
 * @param {array} p1 Array of body indices
 * @param {array} p2 Array of body indices
 * @param {World} world
 * @param {array} result Array to store generated contacts
 * @param {array} oldcontacts Optional. Array of reusable contact objects
 */
Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool){
    // Save old contact objects
    this.contactPointPool = oldcontacts;
    this.frictionEquationPool = frictionPool;
    this.result = result;
    this.frictionResult = frictionResult;

    var qi = tmpQuat1;
    var qj = tmpQuat2;
    var xi = tmpVec1;
    var xj = tmpVec2;

    for(var k=0, N=p1.length; k!==N; k++){

        // Get current collision bodies
        var bi = p1[k],
            bj = p2[k];

        // Get contact material
        var bodyContactMaterial = null;
        if(bi.material && bj.material){
            bodyContactMaterial = world.getContactMaterial(bi.material,bj.material) || null;
        }

        for (var i = 0; i < bi.shapes.length; i++) {
            bi.quaternion.mult(bi.shapeOrientations[i], qi);
            bi.quaternion.vmult(bi.shapeOffsets[i], xi);
            xi.vadd(bi.position, xi);
            var si = bi.shapes[i];

            for (var j = 0; j < bj.shapes.length; j++) {

                // Compute world transform of shapes
                bj.quaternion.mult(bj.shapeOrientations[j], qj);
                bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                xj.vadd(bj.position, xj);
                var sj = bj.shapes[j];

                if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
                    continue;
                }

                // Get collision material
                var shapeContactMaterial = null;
                if(si.material && sj.material){
                    shapeContactMaterial = world.getContactMaterial(si.material,sj.material) || null;
                }

                this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;

                // Get contacts
                var resolver = this[si.type | sj.type];
                if(resolver){
                    if (si.type < sj.type) {
                        resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj);
                    } else {
                        resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj);
                    }
                }
            }
        }
    }
};

var numWarnings = 0;
var maxWarnings = 10;

function warn(msg){
    if(numWarnings > maxWarnings){
        return;
    }

    numWarnings++;

    console.warn(msg);
}

Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] =
Narrowphase.prototype.boxBox = function(si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    sj.convexPolyhedronRepresentation.material = sj.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    this.convexConvex(si.convexPolyhedronRepresentation,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.boxConvex = function(si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    this.convexConvex(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] =
Narrowphase.prototype.boxParticle = function(si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    this.convexParticle(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj);
};

/**
 * @method sphereSphere
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE] =
Narrowphase.prototype.sphereSphere = function(si,sj,xi,xj,qi,qj,bi,bj){
    // We will have only one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj);

    // Contact normal
    xj.vsub(xi, r.ni);
    r.ni.normalize();

    // Contact point locations
    r.ri.copy(r.ni);
    r.rj.copy(r.ni);
    r.ri.mult(si.radius, r.ri);
    r.rj.mult(-sj.radius, r.rj);

    r.ri.vadd(xi, r.ri);
    r.ri.vsub(bi.position, r.ri);

    r.rj.vadd(xj, r.rj);
    r.rj.vsub(bj.position, r.rj);

    this.result.push(r);

    this.createFrictionEquationsFromContact(r, this.frictionResult);
};

/**
 * @method planeTrimesh
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
var planeTrimesh_normal = new Vec3();
var planeTrimesh_relpos = new Vec3();
var planeTrimesh_projected = new Vec3();
Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] =
Narrowphase.prototype.planeTrimesh = function(
    planeShape,
    trimeshShape,
    planePos,
    trimeshPos,
    planeQuat,
    trimeshQuat,
    planeBody,
    trimeshBody
){
    // Make contacts!
    var v = new Vec3();

    var normal = planeTrimesh_normal;
    normal.set(0,0,1);
    planeQuat.vmult(normal,normal); // Turn normal according to plane

    for(var i=0; i<trimeshShape.vertices.length / 3; i++){

        // Get world vertex from trimesh
        trimeshShape.getVertex(i, v);

        // Safe up
        var v2 = new Vec3();
        v2.copy(v);
        Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

        // Check plane side
        var relpos = planeTrimesh_relpos;
        v.vsub(planePos, relpos);
        var dot = normal.dot(relpos);

        if(dot <= 0.0){
            var r = this.createContactEquation(planeBody,trimeshBody,planeShape,trimeshShape);

            r.ni.copy(normal); // Contact normal is the plane normal

            // Get vertex position projected on plane
            var projected = planeTrimesh_projected;
            normal.scale(relpos.dot(normal), projected);
            v.vsub(projected,projected);

            // ri is the projected world position minus plane position
            r.ri.copy(projected);
            r.ri.vsub(planeBody.position, r.ri);

            r.rj.copy(v);
            r.rj.vsub(trimeshBody.position, r.rj);

            // Store result
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }
};

/**
 * @method sphereTrimesh
 * @param  {Shape}      sphereShape
 * @param  {Shape}      trimeshShape
 * @param  {Vec3}       spherePos
 * @param  {Vec3}       trimeshPos
 * @param  {Quaternion} sphereQuat
 * @param  {Quaternion} trimeshQuat
 * @param  {Body}       sphereBody
 * @param  {Body}       trimeshBody
 */
var sphereTrimesh_normal = new Vec3();
var sphereTrimesh_relpos = new Vec3();
var sphereTrimesh_projected = new Vec3();
var sphereTrimesh_v = new Vec3();
var sphereTrimesh_v2 = new Vec3();
var sphereTrimesh_edgeVertexA = new Vec3();
var sphereTrimesh_edgeVertexB = new Vec3();
var sphereTrimesh_edgeVector = new Vec3();
var sphereTrimesh_edgeVectorUnit = new Vec3();
var sphereTrimesh_localSpherePos = new Vec3();
var sphereTrimesh_tmp = new Vec3();
var sphereTrimesh_va = new Vec3();
var sphereTrimesh_vb = new Vec3();
var sphereTrimesh_vc = new Vec3();
var sphereTrimesh_localSphereAABB = new AABB();
var sphereTrimesh_triangles = [];
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] =
Narrowphase.prototype.sphereTrimesh = function (
    sphereShape,
    trimeshShape,
    spherePos,
    trimeshPos,
    sphereQuat,
    trimeshQuat,
    sphereBody,
    trimeshBody
) {

    var edgeVertexA = sphereTrimesh_edgeVertexA;
    var edgeVertexB = sphereTrimesh_edgeVertexB;
    var edgeVector = sphereTrimesh_edgeVector;
    var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
    var localSpherePos = sphereTrimesh_localSpherePos;
    var tmp = sphereTrimesh_tmp;
    var localSphereAABB = sphereTrimesh_localSphereAABB;
    var v2 = sphereTrimesh_v2;
    var relpos = sphereTrimesh_relpos;
    var triangles = sphereTrimesh_triangles;

    // Convert sphere position to local in the trimesh
    Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);

    // Get the aabb of the sphere locally in the trimesh
    var sphereRadius = sphereShape.radius;
    localSphereAABB.lowerBound.set(
        localSpherePos.x - sphereRadius,
        localSpherePos.y - sphereRadius,
        localSpherePos.z - sphereRadius
    );
    localSphereAABB.upperBound.set(
        localSpherePos.x + sphereRadius,
        localSpherePos.y + sphereRadius,
        localSpherePos.z + sphereRadius
    );

    trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
    //for (var i = 0; i < trimeshShape.indices.length / 3; i++) triangles.push(i); // All

    // Vertices
    var v = sphereTrimesh_v;
    var radiusSquared = sphereShape.radius * sphereShape.radius;
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);

            // Check vertex overlap in sphere
            v.vsub(localSpherePos, relpos);

            if(relpos.norm2() <= radiusSquared){

                // Safe up
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

                v.vsub(spherePos, relpos);

                var r = this.createContactEquation(sphereBody,trimeshBody,sphereShape,trimeshShape);
                r.ni.copy(relpos);
                r.ni.normalize();

                // ri is the vector from sphere center to the sphere surface
                r.ri.copy(r.ni);
                r.ri.scale(sphereShape.radius, r.ri);
                r.ri.vadd(spherePos, r.ri);
                r.ri.vsub(sphereBody.position, r.ri);

                r.rj.copy(v);
                r.rj.vsub(trimeshBody.position, r.rj);

                // Store result
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    // Check all edges
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + ((j+1)%3)], edgeVertexB);
            edgeVertexB.vsub(edgeVertexA, edgeVector);

            // Project sphere position to the edge
            localSpherePos.vsub(edgeVertexB, tmp);
            var positionAlongEdgeB = tmp.dot(edgeVector);

            localSpherePos.vsub(edgeVertexA, tmp);
            var positionAlongEdgeA = tmp.dot(edgeVector);

            if(positionAlongEdgeA > 0 && positionAlongEdgeB < 0){

                // Now check the orthogonal distance from edge to sphere center
                localSpherePos.vsub(edgeVertexA, tmp);

                edgeVectorUnit.copy(edgeVector);
                edgeVectorUnit.normalize();
                positionAlongEdgeA = tmp.dot(edgeVectorUnit);

                edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                tmp.vadd(edgeVertexA, tmp);

                // tmp is now the sphere center position projected to the edge, defined locally in the trimesh frame
                var dist = tmp.distanceTo(localSpherePos);
                if(dist < sphereShape.radius){
                    var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);

                    tmp.vsub(localSpherePos, r.ni);
                    r.ni.normalize();
                    r.ni.scale(sphereShape.radius, r.ri);

                    Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                    tmp.vsub(trimeshBody.position, r.rj);

                    Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                    Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }

    // Triangle faces
    var va = sphereTrimesh_va;
    var vb = sphereTrimesh_vb;
    var vc = sphereTrimesh_vc;
    var normal = sphereTrimesh_normal;
    for(var i=0, N = triangles.length; i !== N; i++){
        trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
        trimeshShape.getNormal(triangles[i], normal);
        localSpherePos.vsub(va, tmp);
        var dist = tmp.dot(normal);
        normal.scale(dist, tmp);
        localSpherePos.vsub(tmp, tmp);

        // tmp is now the sphere position projected to the triangle plane
        dist = tmp.distanceTo(localSpherePos);
        if(Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius){
            var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);

            tmp.vsub(localSpherePos, r.ni);
            r.ni.normalize();
            r.ni.scale(sphereShape.radius, r.ri);

            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
            tmp.vsub(trimeshBody.position, r.rj);

            Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
            Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }

    triangles.length = 0;
};

var point_on_plane_to_sphere = new Vec3();
var plane_to_sphere_ortho = new Vec3();

/**
 * @method spherePlane
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] =
Narrowphase.prototype.spherePlane = function(si,sj,xi,xj,qi,qj,bi,bj){
    // We will have one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj);

    // Contact normal
    r.ni.set(0,0,1);
    qj.vmult(r.ni, r.ni);
    r.ni.negate(r.ni); // body i is the sphere, flip normal
    r.ni.normalize(); // Needed?

    // Vector from sphere center to contact point
    r.ni.mult(si.radius, r.ri);

    // Project down sphere on plane
    xi.vsub(xj, point_on_plane_to_sphere);
    r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
    point_on_plane_to_sphere.vsub(plane_to_sphere_ortho,r.rj); // The sphere position projected to plane

    if(-point_on_plane_to_sphere.dot(r.ni) <= si.radius){

        // Make it relative to the body
        var ri = r.ri;
        var rj = r.rj;
        ri.vadd(xi, ri);
        ri.vsub(bi.position, ri);
        rj.vadd(xj, rj);
        rj.vsub(bj.position, rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// See http://bulletphysics.com/Bullet/BulletFull/SphereTriangleDetector_8cpp_source.html
var pointInPolygon_edge = new Vec3();
var pointInPolygon_edge_x_normal = new Vec3();
var pointInPolygon_vtp = new Vec3();
function pointInPolygon(verts, normal, p){
    var positiveResult = null;
    var N = verts.length;
    for(var i=0; i!==N; i++){
        var v = verts[i];

        // Get edge to the next vertex
        var edge = pointInPolygon_edge;
        verts[(i+1) % (N)].vsub(v,edge);

        // Get cross product between polygon normal and the edge
        var edge_x_normal = pointInPolygon_edge_x_normal;
        //var edge_x_normal = new Vec3();
        edge.cross(normal,edge_x_normal);

        // Get vector between point and current vertex
        var vertex_to_p = pointInPolygon_vtp;
        p.vsub(v,vertex_to_p);

        // This dot product determines which side of the edge the point is
        var r = edge_x_normal.dot(vertex_to_p);

        // If all such dot products have same sign, we are inside the polygon.
        if(positiveResult===null || (r>0 && positiveResult===true) || (r<=0 && positiveResult===false)){
            if(positiveResult===null){
                positiveResult = r>0;
            }
            continue;
        } else {
            return false; // Encountered some other sign. Exit.
        }
    }

    // If we got here, all dot products were of the same sign.
    return true;
}

var box_to_sphere = new Vec3();
var sphereBox_ns = new Vec3();
var sphereBox_ns1 = new Vec3();
var sphereBox_ns2 = new Vec3();
var sphereBox_sides = [new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3()];
var sphereBox_sphere_to_corner = new Vec3();
var sphereBox_side_ns = new Vec3();
var sphereBox_side_ns1 = new Vec3();
var sphereBox_side_ns2 = new Vec3();

/**
 * @method sphereBox
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] =
Narrowphase.prototype.sphereBox = function(si,sj,xi,xj,qi,qj,bi,bj){
    var v3pool = this.v3pool;

    // we refer to the box as body j
    var sides = sphereBox_sides;
    xi.vsub(xj,box_to_sphere);
    sj.getSideNormals(sides,qj);
    var R =     si.radius;
    var penetrating_sides = [];

    // Check side (plane) intersections
    var found = false;

    // Store the resulting side penetration info
    var side_ns = sphereBox_side_ns;
    var side_ns1 = sphereBox_side_ns1;
    var side_ns2 = sphereBox_side_ns2;
    var side_h = null;
    var side_penetrations = 0;
    var side_dot1 = 0;
    var side_dot2 = 0;
    var side_distance = null;
    for(var idx=0,nsides=sides.length; idx!==nsides && found===false; idx++){
        // Get the plane side normal (ns)
        var ns = sphereBox_ns;
        ns.copy(sides[idx]);

        var h = ns.norm();
        ns.normalize();

        // The normal/distance dot product tells which side of the plane we are
        var dot = box_to_sphere.dot(ns);

        if(dot<h+R && dot>0){
            // Intersects plane. Now check the other two dimensions
            var ns1 = sphereBox_ns1;
            var ns2 = sphereBox_ns2;
            ns1.copy(sides[(idx+1)%3]);
            ns2.copy(sides[(idx+2)%3]);
            var h1 = ns1.norm();
            var h2 = ns2.norm();
            ns1.normalize();
            ns2.normalize();
            var dot1 = box_to_sphere.dot(ns1);
            var dot2 = box_to_sphere.dot(ns2);
            if(dot1<h1 && dot1>-h1 && dot2<h2 && dot2>-h2){
                var dist = Math.abs(dot-h-R);
                if(side_distance===null || dist < side_distance){
                    side_distance = dist;
                    side_dot1 = dot1;
                    side_dot2 = dot2;
                    side_h = h;
                    side_ns.copy(ns);
                    side_ns1.copy(ns1);
                    side_ns2.copy(ns2);
                    side_penetrations++;
                }
            }
        }
    }
    if(side_penetrations){
        found = true;
        var r = this.createContactEquation(bi,bj,si,sj);
        side_ns.mult(-R,r.ri); // Sphere r
        r.ni.copy(side_ns);
        r.ni.negate(r.ni); // Normal should be out of sphere
        side_ns.mult(side_h,side_ns);
        side_ns1.mult(side_dot1,side_ns1);
        side_ns.vadd(side_ns1,side_ns);
        side_ns2.mult(side_dot2,side_ns2);
        side_ns.vadd(side_ns2,r.rj);

        // Make relative to bodies
        r.ri.vadd(xi, r.ri);
        r.ri.vsub(bi.position, r.ri);
        r.rj.vadd(xj, r.rj);
        r.rj.vsub(bj.position, r.rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }

    // Check corners
    var rj = v3pool.get();
    var sphere_to_corner = sphereBox_sphere_to_corner;
    for(var j=0; j!==2 && !found; j++){
        for(var k=0; k!==2 && !found; k++){
            for(var l=0; l!==2 && !found; l++){
                rj.set(0,0,0);
                if(j){
                    rj.vadd(sides[0],rj);
                } else {
                    rj.vsub(sides[0],rj);
                }
                if(k){
                    rj.vadd(sides[1],rj);
                } else {
                    rj.vsub(sides[1],rj);
                }
                if(l){
                    rj.vadd(sides[2],rj);
                } else {
                    rj.vsub(sides[2],rj);
                }

                // World position of corner
                xj.vadd(rj,sphere_to_corner);
                sphere_to_corner.vsub(xi,sphere_to_corner);

                if(sphere_to_corner.norm2() < R*R){
                    found = true;
                    var r = this.createContactEquation(bi,bj,si,sj);
                    r.ri.copy(sphere_to_corner);
                    r.ri.normalize();
                    r.ni.copy(r.ri);
                    r.ri.mult(R,r.ri);
                    r.rj.copy(rj);

                    // Make relative to bodies
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(rj);
    rj = null;

    // Check edges
    var edgeTangent = v3pool.get();
    var edgeCenter = v3pool.get();
    var r = v3pool.get(); // r = edge center to sphere center
    var orthogonal = v3pool.get();
    var dist = v3pool.get();
    var Nsides = sides.length;
    for(var j=0; j!==Nsides && !found; j++){
        for(var k=0; k!==Nsides && !found; k++){
            if(j%3 !== k%3){
                // Get edge tangent
                sides[k].cross(sides[j],edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter,r);
                r.vsub(xj,r);
                var orthonorm = r.dot(edgeTangent); // distance from edge center to sphere center in the tangent direction
                edgeTangent.mult(orthonorm,orthogonal); // Vector from edge center to sphere center in the tangent direction

                // Find the third side orthogonal to this one
                var l = 0;
                while(l===j%3 || l===k%3){
                    l++;
                }

                // vec from edge center to sphere projected to the plane orthogonal to the edge tangent
                dist.copy(xi);
                dist.vsub(orthogonal,dist);
                dist.vsub(edgeCenter,dist);
                dist.vsub(xj,dist);

                // Distances in tangent direction and distance in the plane orthogonal to it
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();

                if(tdist < sides[l].norm() && ndist<R){
                    found = true;
                    var res = this.createContactEquation(bi,bj,si,sj);
                    edgeCenter.vadd(orthogonal,res.rj); // box rj
                    res.rj.copy(res.rj);
                    dist.negate(res.ni);
                    res.ni.normalize();

                    res.ri.copy(res.rj);
                    res.ri.vadd(xj,res.ri);
                    res.ri.vsub(xi,res.ri);
                    res.ri.normalize();
                    res.ri.mult(R,res.ri);

                    // Make relative to bodies
                    res.ri.vadd(xi, res.ri);
                    res.ri.vsub(bi.position, res.ri);
                    res.rj.vadd(xj, res.rj);
                    res.rj.vsub(bj.position, res.rj);

                    this.result.push(res);
                    this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(edgeTangent,edgeCenter,r,orthogonal,dist);
};

var convex_to_sphere = new Vec3();
var sphereConvex_edge = new Vec3();
var sphereConvex_edgeUnit = new Vec3();
var sphereConvex_sphereToCorner = new Vec3();
var sphereConvex_worldCorner = new Vec3();
var sphereConvex_worldNormal = new Vec3();
var sphereConvex_worldPoint = new Vec3();
var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
var sphereConvex_penetrationVec = new Vec3();
var sphereConvex_sphereToWorldPoint = new Vec3();

/**
 * @method sphereConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.sphereConvex = function(si,sj,xi,xj,qi,qj,bi,bj){
    var v3pool = this.v3pool;
    xi.vsub(xj,convex_to_sphere);
    var normals = sj.faceNormals;
    var faces = sj.faces;
    var verts = sj.vertices;
    var R =     si.radius;
    var penetrating_sides = [];

    // if(convex_to_sphere.norm2() > si.boundingSphereRadius + sj.boundingSphereRadius){
    //     return;
    // }

    // Check corners
    for(var i=0; i!==verts.length; i++){
        var v = verts[i];

        // World position of corner
        var worldCorner = sphereConvex_worldCorner;
        qj.vmult(v,worldCorner);
        xj.vadd(worldCorner,worldCorner);
        var sphere_to_corner = sphereConvex_sphereToCorner;
        worldCorner.vsub(xi, sphere_to_corner);
        if(sphere_to_corner.norm2() < R * R){
            found = true;
            var r = this.createContactEquation(bi,bj,si,sj);
            r.ri.copy(sphere_to_corner);
            r.ri.normalize();
            r.ni.copy(r.ri);
            r.ri.mult(R,r.ri);
            worldCorner.vsub(xj,r.rj);

            // Should be relative to the body.
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);

            // Should be relative to the body.
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
            return;
        }
    }

    // Check side (plane) intersections
    var found = false;
    for(var i=0, nfaces=faces.length; i!==nfaces && found===false; i++){
        var normal = normals[i];
        var face = faces[i];

        // Get world-transformed normal of the face
        var worldNormal = sphereConvex_worldNormal;
        qj.vmult(normal,worldNormal);

        // Get a world vertex from the face
        var worldPoint = sphereConvex_worldPoint;
        qj.vmult(verts[face[0]],worldPoint);
        worldPoint.vadd(xj,worldPoint);

        // Get a point on the sphere, closest to the face normal
        var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
        worldNormal.mult(-R, worldSpherePointClosestToPlane);
        xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);

        // Vector from a face point to the closest point on the sphere
        var penetrationVec = sphereConvex_penetrationVec;
        worldSpherePointClosestToPlane.vsub(worldPoint,penetrationVec);

        // The penetration. Negative value means overlap.
        var penetration = penetrationVec.dot(worldNormal);

        var worldPointToSphere = sphereConvex_sphereToWorldPoint;
        xi.vsub(worldPoint, worldPointToSphere);

        if(penetration < 0 && worldPointToSphere.dot(worldNormal)>0){
            // Intersects plane. Now check if the sphere is inside the face polygon
            var faceVerts = []; // Face vertices, in world coords
            for(var j=0, Nverts=face.length; j!==Nverts; j++){
                var worldVertex = v3pool.get();
                qj.vmult(verts[face[j]], worldVertex);
                xj.vadd(worldVertex,worldVertex);
                faceVerts.push(worldVertex);
            }

            if(pointInPolygon(faceVerts,worldNormal,xi)){ // Is the sphere center in the face polygon?
                found = true;
                var r = this.createContactEquation(bi,bj,si,sj);

                worldNormal.mult(-R, r.ri); // Contact offset, from sphere center to contact
                worldNormal.negate(r.ni); // Normal pointing out of sphere

                var penetrationVec2 = v3pool.get();
                worldNormal.mult(-penetration, penetrationVec2);
                var penetrationSpherePoint = v3pool.get();
                worldNormal.mult(-R, penetrationSpherePoint);

                //xi.vsub(xj).vadd(penetrationSpherePoint).vadd(penetrationVec2 , r.rj);
                xi.vsub(xj,r.rj);
                r.rj.vadd(penetrationSpherePoint,r.rj);
                r.rj.vadd(penetrationVec2 , r.rj);

                // Should be relative to the body.
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);

                // Should be relative to the body.
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);

                v3pool.release(penetrationVec2);
                v3pool.release(penetrationSpherePoint);

                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);

                // Release world vertices
                for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                    v3pool.release(faceVerts[j]);
                }

                return; // We only expect *one* face contact
            } else {
                // Edge?
                for(var j=0; j!==face.length; j++){

                    // Get two world transformed vertices
                    var v1 = v3pool.get();
                    var v2 = v3pool.get();
                    qj.vmult(verts[face[(j+1)%face.length]], v1);
                    qj.vmult(verts[face[(j+2)%face.length]], v2);
                    xj.vadd(v1, v1);
                    xj.vadd(v2, v2);

                    // Construct edge vector
                    var edge = sphereConvex_edge;
                    v2.vsub(v1,edge);

                    // Construct the same vector, but normalized
                    var edgeUnit = sphereConvex_edgeUnit;
                    edge.unit(edgeUnit);

                    // p is xi projected onto the edge
                    var p = v3pool.get();
                    var v1_to_xi = v3pool.get();
                    xi.vsub(v1, v1_to_xi);
                    var dot = v1_to_xi.dot(edgeUnit);
                    edgeUnit.mult(dot, p);
                    p.vadd(v1, p);

                    // Compute a vector from p to the center of the sphere
                    var xi_to_p = v3pool.get();
                    p.vsub(xi, xi_to_p);

                    // Collision if the edge-sphere distance is less than the radius
                    // AND if p is in between v1 and v2
                    if(dot > 0 && dot*dot<edge.norm2() && xi_to_p.norm2() < R*R){ // Collision if the edge-sphere distance is less than the radius
                        // Edge contact!
                        var r = this.createContactEquation(bi,bj,si,sj);
                        p.vsub(xj,r.rj);

                        p.vsub(xi,r.ni);
                        r.ni.normalize();

                        r.ni.mult(R,r.ri);

                        // Should be relative to the body.
                        r.rj.vadd(xj, r.rj);
                        r.rj.vsub(bj.position, r.rj);

                        // Should be relative to the body.
                        r.ri.vadd(xi, r.ri);
                        r.ri.vsub(bi.position, r.ri);

                        this.result.push(r);
                        this.createFrictionEquationsFromContact(r, this.frictionResult);

                        // Release world vertices
                        for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                            v3pool.release(faceVerts[j]);
                        }

                        v3pool.release(v1);
                        v3pool.release(v2);
                        v3pool.release(p);
                        v3pool.release(xi_to_p);
                        v3pool.release(v1_to_xi);

                        return;
                    }

                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                }
            }

            // Release world vertices
            for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                v3pool.release(faceVerts[j]);
            }
        }
    }
};

var planeBox_normal = new Vec3();
var plane_to_corner = new Vec3();

/**
 * @method planeBox
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] =
Narrowphase.prototype.planeBox = function(si,sj,xi,xj,qi,qj,bi,bj){
    sj.convexPolyhedronRepresentation.material = sj.material;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    this.planeConvex(si,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj);
};

var planeConvex_v = new Vec3();
var planeConvex_normal = new Vec3();
var planeConvex_relpos = new Vec3();
var planeConvex_projected = new Vec3();

/**
 * @method planeConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.planeConvex = function(
    planeShape,
    convexShape,
    planePosition,
    convexPosition,
    planeQuat,
    convexQuat,
    planeBody,
    convexBody
){
    // Simply return the points behind the plane.
    var worldVertex = planeConvex_v,
        worldNormal = planeConvex_normal;
    worldNormal.set(0,0,1);
    planeQuat.vmult(worldNormal,worldNormal); // Turn normal according to plane orientation

    var numContacts = 0;
    var relpos = planeConvex_relpos;
    for(var i = 0; i !== convexShape.vertices.length; i++){

        // Get world convex vertex
        worldVertex.copy(convexShape.vertices[i]);
        convexQuat.vmult(worldVertex, worldVertex);
        convexPosition.vadd(worldVertex, worldVertex);
        worldVertex.vsub(planePosition, relpos);

        var dot = worldNormal.dot(relpos);
        if(dot <= 0.0){

            var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);

            // Get vertex position projected on plane
            var projected = planeConvex_projected;
            worldNormal.mult(worldNormal.dot(relpos),projected);
            worldVertex.vsub(projected, projected);
            projected.vsub(planePosition, r.ri); // From plane to vertex projected on plane

            r.ni.copy(worldNormal); // Contact normal is the plane normal out from plane

            // rj is now just the vector from the convex center to the vertex
            worldVertex.vsub(convexPosition, r.rj);

            // Make it relative to the body
            r.ri.vadd(planePosition, r.ri);
            r.ri.vsub(planeBody.position, r.ri);
            r.rj.vadd(convexPosition, r.rj);
            r.rj.vsub(convexBody.position, r.rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    if(this.enableFrictionReduction && numContacts){
        this.createFrictionFromAverage(numContacts);
    }
};

var convexConvex_sepAxis = new Vec3();
var convexConvex_q = new Vec3();

/**
 * @method convexConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,faceListA,faceListB){
    var sepAxis = convexConvex_sepAxis;

    if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
        return;
    }

    if(si.findSeparatingAxis(sj,xi,qi,xj,qj,sepAxis,faceListA,faceListB)){
        var res = [];
        var q = convexConvex_q;
        si.clipAgainstHull(xi,qi,sj,xj,qj,sepAxis,-100,100,res);
        var numContacts = 0;
        for(var j = 0; j !== res.length; j++){
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
                ri = r.ri,
                rj = r.rj;
            sepAxis.negate(r.ni);
            res[j].normal.negate(q);
            q.mult(res[j].depth, q);
            res[j].point.vadd(q, ri);
            rj.copy(res[j].point);

            // Contact points are in world coordinates. Transform back to relative
            ri.vsub(xi,ri);
            rj.vsub(xj,rj);

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
        if(this.enableFrictionReduction && numContacts){
            this.createFrictionFromAverage(numContacts);
        }
    }
};


/**
 * @method convexTrimesh
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
// Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.TRIMESH] =
// Narrowphase.prototype.convexTrimesh = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,faceListA,faceListB){
//     var sepAxis = convexConvex_sepAxis;

//     if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
//         return;
//     }

//     // Construct a temp hull for each triangle
//     var hullB = new ConvexPolyhedron();

//     hullB.faces = [[0,1,2]];
//     var va = new Vec3();
//     var vb = new Vec3();
//     var vc = new Vec3();
//     hullB.vertices = [
//         va,
//         vb,
//         vc
//     ];

//     for (var i = 0; i < sj.indices.length / 3; i++) {

//         var triangleNormal = new Vec3();
//         sj.getNormal(i, triangleNormal);
//         hullB.faceNormals = [triangleNormal];

//         sj.getTriangleVertices(i, va, vb, vc);

//         var d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);
//         if(!d){
//             triangleNormal.scale(-1, triangleNormal);
//             d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);

//             if(!d){
//                 continue;
//             }
//         }

//         var res = [];
//         var q = convexConvex_q;
//         si.clipAgainstHull(xi,qi,hullB,xj,qj,triangleNormal,-100,100,res);
//         for(var j = 0; j !== res.length; j++){
//             var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
//                 ri = r.ri,
//                 rj = r.rj;
//             r.ni.copy(triangleNormal);
//             r.ni.negate(r.ni);
//             res[j].normal.negate(q);
//             q.mult(res[j].depth, q);
//             res[j].point.vadd(q, ri);
//             rj.copy(res[j].point);

//             // Contact points are in world coordinates. Transform back to relative
//             ri.vsub(xi,ri);
//             rj.vsub(xj,rj);

//             // Make relative to bodies
//             ri.vadd(xi, ri);
//             ri.vsub(bi.position, ri);
//             rj.vadd(xj, rj);
//             rj.vsub(bj.position, rj);

//             result.push(r);
//         }
//     }
// };

var particlePlane_normal = new Vec3();
var particlePlane_relpos = new Vec3();
var particlePlane_projected = new Vec3();

/**
 * @method particlePlane
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] =
Narrowphase.prototype.planeParticle = function(sj,si,xj,xi,qj,qi,bj,bi){
    var normal = particlePlane_normal;
    normal.set(0,0,1);
    bj.quaternion.vmult(normal,normal); // Turn normal according to plane orientation
    var relpos = particlePlane_relpos;
    xi.vsub(bj.position,relpos);
    var dot = normal.dot(relpos);
    if(dot <= 0.0){
        var r = this.createContactEquation(bi,bj,si,sj);
        r.ni.copy(normal); // Contact normal is the plane normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle

        // Get particle position projected on plane
        var projected = particlePlane_projected;
        normal.mult(normal.dot(xi),projected);
        xi.vsub(projected,projected);
        //projected.vadd(bj.position,projected);

        // rj is now the projected world position minus plane position
        r.rj.copy(projected);
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

var particleSphere_normal = new Vec3();

/**
 * @method particleSphere
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] =
Narrowphase.prototype.sphereParticle = function(sj,si,xj,xi,qj,qi,bj,bi){
    // The normal is the unit vector from sphere center to particle center
    var normal = particleSphere_normal;
    normal.set(0,0,1);
    xi.vsub(xj,normal);
    var lengthSquared = normal.norm2();

    if(lengthSquared <= sj.radius * sj.radius){
        var r = this.createContactEquation(bi,bj,si,sj);
        normal.normalize();
        r.rj.copy(normal);
        r.rj.mult(sj.radius,r.rj);
        r.ni.copy(normal); // Contact normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// WIP
var cqj = new Quaternion();
var convexParticle_local = new Vec3();
var convexParticle_normal = new Vec3();
var convexParticle_penetratedFaceNormal = new Vec3();
var convexParticle_vertexToParticle = new Vec3();
var convexParticle_worldPenetrationVec = new Vec3();

/**
 * @method convexParticle
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexParticle = function(sj,si,xj,xi,qj,qi,bj,bi){
    var penetratedFaceIndex = -1;
    var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
    var worldPenetrationVec = convexParticle_worldPenetrationVec;
    var minPenetration = null;
    var numDetectedFaces = 0;

    // Convert particle position xi to local coords in the convex
    var local = convexParticle_local;
    local.copy(xi);
    local.vsub(xj,local); // Convert position to relative the convex origin
    qj.conjugate(cqj);
    cqj.vmult(local,local);

    if(sj.pointIsInside(local)){

        if(sj.worldVerticesNeedsUpdate){
            sj.computeWorldVertices(xj,qj);
        }
        if(sj.worldFaceNormalsNeedsUpdate){
            sj.computeWorldFaceNormals(qj);
        }

        // For each world polygon in the polyhedra
        for(var i=0,nfaces=sj.faces.length; i!==nfaces; i++){

            // Construct world face vertices
            var verts = [ sj.worldVertices[ sj.faces[i][0] ] ];
            var normal = sj.worldFaceNormals[i];

            // Check how much the particle penetrates the polygon plane.
            xi.vsub(verts[0],convexParticle_vertexToParticle);
            var penetration = -normal.dot(convexParticle_vertexToParticle);
            if(minPenetration===null || Math.abs(penetration)<Math.abs(minPenetration)){
                minPenetration = penetration;
                penetratedFaceIndex = i;
                penetratedFaceNormal.copy(normal);
                numDetectedFaces++;
            }
        }

        if(penetratedFaceIndex!==-1){
            // Setup contact
            var r = this.createContactEquation(bi,bj,si,sj);
            penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);

            // rj is the particle position projected to the face
            worldPenetrationVec.vadd(xi,worldPenetrationVec);
            worldPenetrationVec.vsub(xj,worldPenetrationVec);
            r.rj.copy(worldPenetrationVec);
            //var projectedToFace = xi.vsub(xj).vadd(worldPenetrationVec);
            //projectedToFace.copy(r.rj);

            //qj.vmult(r.rj,r.rj);
            penetratedFaceNormal.negate( r.ni ); // Contact normal
            r.ri.set(0,0,0); // Center of particle

            var ri = r.ri,
                rj = r.rj;

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        } else {
            console.warn("Point found inside convex, but did not find penetrating face!");
        }
    }
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.boxHeightfield = function (si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    this.convexHeightfield(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj);
};

var convexHeightfield_tmp1 = new Vec3();
var convexHeightfield_tmp2 = new Vec3();
var convexHeightfield_faceList = [0];

/**
 * @method convexHeightfield
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.convexHeightfield = function (
    convexShape,
    hfShape,
    convexPos,
    hfPos,
    convexQuat,
    hfQuat,
    convexBody,
    hfBody
){
    var data = hfShape.data,
        w = hfShape.elementSize,
        radius = convexShape.boundingSphereRadius,
        worldPillarOffset = convexHeightfield_tmp2,
        faceList = convexHeightfield_faceList;

    // Get sphere position to heightfield local!
    var localConvexPos = convexHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1,
        iMinY = Math.floor((localConvexPos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localConvexPos.z - radius > max || localConvexPos.z + radius < min){
        return;
    }

    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
            }
        }
    }
};

var sphereHeightfield_tmp1 = new Vec3();
var sphereHeightfield_tmp2 = new Vec3();

/**
 * @method sphereHeightfield
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.sphereHeightfield = function (
    sphereShape,
    hfShape,
    spherePos,
    hfPos,
    sphereQuat,
    hfQuat,
    sphereBody,
    hfBody
){
    var data = hfShape.data,
        radius = sphereShape.radius,
        w = hfShape.elementSize,
        worldPillarOffset = sphereHeightfield_tmp2;

    // Get sphere position to heightfield local!
    var localSpherePos = sphereHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1,
        iMinY = Math.floor((localSpherePos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localSpherePos.z - radius > max || localSpherePos.z + radius < min){
        return;
    }

    var result = this.result;
    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            var numContactsBefore = result.length;

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
            }

            var numContacts = result.length - numContactsBefore;

            if(numContacts > 2){
                return;
            }
            /*
            // Skip all but 1
            for (var k = 0; k < numContacts - 1; k++) {
                result.pop();
            }
            */
        }
    }
};

},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(_dereq_,module,exports){
/* global performance */

module.exports = World;

var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var GSSolver = _dereq_('../solver/GSSolver');
var Vec3Pool = _dereq_('../utils/Vec3Pool');
var ContactEquation = _dereq_('../equations/ContactEquation');
var FrictionEquation = _dereq_('../equations/FrictionEquation');
var Narrowphase = _dereq_('./Narrowphase');
var EventTarget = _dereq_('../utils/EventTarget');
var ArrayCollisionMatrix = _dereq_('../collision/ArrayCollisionMatrix');
var Material = _dereq_('../material/Material');
var ContactMaterial = _dereq_('../material/ContactMaterial');
var Body = _dereq_('../objects/Body');
var TupleDictionary = _dereq_('../utils/TupleDictionary');
var RaycastResult = _dereq_('../collision/RaycastResult');
var AABB = _dereq_('../collision/AABB');
var Ray = _dereq_('../collision/Ray');
var NaiveBroadphase = _dereq_('../collision/NaiveBroadphase');

/**
 * The physics world
 * @class World
 * @constructor
 * @extends EventTarget
 */
function World(){
    EventTarget.apply(this);

    /**
     * Currently / last used timestep. Is set to -1 if not available. This value is updated before each internal step, which means that it is "fresh" inside event callbacks.
     * @property {Number} dt
     */
    this.dt = -1;

    /**
     * Makes bodies go to sleep when they've been inactive
     * @property allowSleep
     * @type {Boolean}
     */
    this.allowSleep = false;

    /**
     * All the current contacts (instances of ContactEquation) in the world.
     * @property contacts
     * @type {Array}
     */
    this.contacts = [];
    this.frictionEquations = [];

    /**
     * How often to normalize quaternions. Set to 0 for every step, 1 for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong).
     * @property quatNormalizeSkip
     * @type {Number}
     */
    this.quatNormalizeSkip = 0;

    /**
     * Set to true to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to false.
     * @property quatNormalizeFast
     * @type {Boolean}
     * @see Quaternion.normalizeFast
     * @see Quaternion.normalize
     */
    this.quatNormalizeFast = false;

    /**
     * The wall-clock time since simulation start
     * @property time
     * @type {Number}
     */
    this.time = 0.0;

    /**
     * Number of timesteps taken since start
     * @property stepnumber
     * @type {Number}
     */
    this.stepnumber = 0;

    /// Default and last timestep sizes
    this.default_dt = 1/60;

    this.nextId = 0;
    /**
     * @property gravity
     * @type {Vec3}
     */
    this.gravity = new Vec3();

    /**
     * @property broadphase
     * @type {Broadphase}
     */
    this.broadphase = new NaiveBroadphase();

    /**
     * @property bodies
     * @type {Array}
     */
    this.bodies = [];

    /**
     * @property solver
     * @type {Solver}
     */
    this.solver = new GSSolver();

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    /**
     * @property narrowphase
     * @type {Narrowphase}
     */
    this.narrowphase = new Narrowphase(this);

    /**
     * @property {ArrayCollisionMatrix} collisionMatrix
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrix = new ArrayCollisionMatrix();

    /**
     * CollisionMatrix from the previous step.
     * @property {ArrayCollisionMatrix} collisionMatrixPrevious
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrixPrevious = new ArrayCollisionMatrix();

    /**
     * All added materials
     * @property materials
     * @type {Array}
     */
    this.materials = [];

    /**
     * @property contactmaterials
     * @type {Array}
     */
    this.contactmaterials = [];

    /**
     * Used to look up a ContactMaterial given two instances of Material.
     * @property {TupleDictionary} contactMaterialTable
     */
    this.contactMaterialTable = new TupleDictionary();

    this.defaultMaterial = new Material("default");

    /**
     * This contact material is used if no suitable contactmaterial is found for a contact.
     * @property defaultContactMaterial
     * @type {ContactMaterial}
     */
    this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0.0 });

    /**
     * @property doProfiling
     * @type {Boolean}
     */
    this.doProfiling = false;

    /**
     * @property profile
     * @type {Object}
     */
    this.profile = {
        solve:0,
        makeContactConstraints:0,
        broadphase:0,
        integrate:0,
        narrowphase:0,
    };

    /**
     * @property subsystems
     * @type {Array}
     */
    this.subsystems = [];

    this.addBodyEvent = {
        type:"addBody",
        body : null,
    };

    this.removeBodyEvent = {
        type:"removeBody",
        body : null,
    };
}
World.prototype = new EventTarget();

// Temp stuff
var tmpAABB1 = new AABB();
var tmpArray1 = [];
var tmpRay = new Ray();

/**
 * Get the contact material between materials m1 and m2
 * @method getContactMaterial
 * @param {Material} m1
 * @param {Material} m2
 * @return {ContactMaterial} The contact material if it was found.
 */
World.prototype.getContactMaterial = function(m1,m2){
    return this.contactMaterialTable.get(m1.id,m2.id); //this.contactmaterials[this.mats2cmat[i+j*this.materials.length]];
};

/**
 * Get number of objects in the world.
 * @method numObjects
 * @return {Number}
 * @deprecated
 */
World.prototype.numObjects = function(){
    return this.bodies.length;
};

/**
 * Store old collision state info
 * @method collisionMatrixTick
 */
World.prototype.collisionMatrixTick = function(){
	var temp = this.collisionMatrixPrevious;
	this.collisionMatrixPrevious = this.collisionMatrix;
	this.collisionMatrix = temp;
	this.collisionMatrix.reset();
};

/**
 * Add a rigid body to the simulation.
 * @method add
 * @param {Body} body
 * @todo If the simulation has not yet started, why recrete and copy arrays for each body? Accumulate in dynamic arrays in this case.
 * @todo Adding an array of bodies should be possible. This would save some loops too
 * @deprecated Use .addBody instead
 */
World.prototype.add = World.prototype.addBody = function(body){
    if(this.bodies.indexOf(body) !== -1){
        return;
    }
    body.index = this.bodies.length;
    this.bodies.push(body);
    body.world = this;
    body.initPosition.copy(body.position);
    body.initVelocity.copy(body.velocity);
    body.timeLastSleepy = this.time;
    if(body instanceof Body){
        body.initAngularVelocity.copy(body.angularVelocity);
        body.initQuaternion.copy(body.quaternion);
    }
	this.collisionMatrix.setNumObjects(this.bodies.length);
    this.addBodyEvent.body = body;
    this.dispatchEvent(this.addBodyEvent);
};

/**
 * Add a constraint to the simulation.
 * @method addConstraint
 * @param {Constraint} c
 */
World.prototype.addConstraint = function(c){
    this.constraints.push(c);
};

/**
 * Removes a constraint
 * @method removeConstraint
 * @param {Constraint} c
 */
World.prototype.removeConstraint = function(c){
    var idx = this.constraints.indexOf(c);
    if(idx!==-1){
        this.constraints.splice(idx,1);
    }
};

/**
 * Raycast test
 * @method rayTest
 * @param {Vec3} from
 * @param {Vec3} to
 * @param {Function|RaycastResult} result
 * @deprecated Use .raycastAll, .raycastClosest or .raycastAny instead.
 */
World.prototype.rayTest = function(from, to, result){
    if(result instanceof RaycastResult){
        // Do raycastclosest
        this.raycastClosest(from, to, {
            skipBackfaces: true
        }, result);
    } else {
        // Do raycastAll
        this.raycastAll(from, to, {
            skipBackfaces: true
        }, result);
    }
};

/**
 * Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.
 * @method raycastAll
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {Function} callback
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAll = function(from, to, options, callback){
    options.mode = Ray.ALL;
    options.from = from;
    options.to = to;
    options.callback = callback;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and stop at the first result. Note that the order is random - but the method is fast.
 * @method raycastAny
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAny = function(from, to, options, result){
    options.mode = Ray.ANY;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and return information of the closest hit.
 * @method raycastClosest
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastClosest = function(from, to, options, result){
    options.mode = Ray.CLOSEST;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Remove a rigid body from the simulation.
 * @method remove
 * @param {Body} body
 * @deprecated Use .removeBody instead
 */
World.prototype.remove = function(body){
    body.world = null;
    var n = this.bodies.length-1,
        bodies = this.bodies,
        idx = bodies.indexOf(body);
    if(idx !== -1){
        bodies.splice(idx, 1); // Todo: should use a garbage free method

        // Recompute index
        for(var i=0; i!==bodies.length; i++){
            bodies[i].index = i;
        }

        this.collisionMatrix.setNumObjects(n);
        this.removeBodyEvent.body = body;
        this.dispatchEvent(this.removeBodyEvent);
    }
};

/**
 * Remove a rigid body from the simulation.
 * @method removeBody
 * @param {Body} body
 */
World.prototype.removeBody = World.prototype.remove;

/**
 * Adds a material to the World.
 * @method addMaterial
 * @param {Material} m
 * @todo Necessary?
 */
World.prototype.addMaterial = function(m){
    this.materials.push(m);
};

/**
 * Adds a contact material to the World
 * @method addContactMaterial
 * @param {ContactMaterial} cmat
 */
World.prototype.addContactMaterial = function(cmat) {

    // Add contact material
    this.contactmaterials.push(cmat);

    // Add current contact material to the material table
    this.contactMaterialTable.set(cmat.materials[0].id,cmat.materials[1].id,cmat);
};

// performance.now()
if(typeof performance === 'undefined'){
    performance = {};
}
if(!performance.now){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
        nowOffset = performance.timing.navigationStart;
    }
    performance.now = function(){
        return Date.now() - nowOffset;
    };
}

var step_tmp1 = new Vec3();

/**
 * Step the physics world forward in time.
 *
 * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.
 *
 * @method step
 * @param {Number} dt                       The fixed time step size to use.
 * @param {Number} [timeSinceLastCalled]    The time elapsed since the function was last called.
 * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.
 *
 * @example
 *     // fixed timestepping without interpolation
 *     world.step(1/60);
 *
 * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
 */
World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps){
    maxSubSteps = maxSubSteps || 10;
    timeSinceLastCalled = timeSinceLastCalled || 0;

    if(timeSinceLastCalled === 0){ // Fixed, simple stepping

        this.internalStep(dt);

        // Increment time
        this.time += dt;

    } else {

        // Compute the number of fixed steps we should have taken since the last step
        var internalSteps = Math.floor((this.time + timeSinceLastCalled) / dt) - Math.floor(this.time / dt);
        internalSteps = Math.min(internalSteps,maxSubSteps);

        // Do some fixed steps to catch up
        var t0 = performance.now();
        for(var i=0; i!==internalSteps; i++){
            this.internalStep(dt);
            if(performance.now() - t0 > dt * 1000){
                // We are slower than real-time. Better bail out.
                break;
            }
        }

        // Increment internal clock
        this.time += timeSinceLastCalled;

        // Compute "Left over" time step
        var h = this.time % dt;
        var h_div_dt = h / dt;
        var interpvelo = step_tmp1;
        var bodies = this.bodies;

        for(var j=0; j !== bodies.length; j++){
            var b = bodies[j];
            if(b.type !== Body.STATIC && b.sleepState !== Body.SLEEPING){

                // Interpolate
                b.position.vsub(b.previousPosition, interpvelo);
                interpvelo.scale(h_div_dt, interpvelo);
                b.position.vadd(interpvelo, b.interpolatedPosition);

                // TODO: interpolate quaternion
                // b.interpolatedAngle = b.angle + (b.angle - b.previousAngle) * h_div_dt;

            } else {

                // For static bodies, just copy. Who else will do it?
                b.interpolatedPosition.copy(b.position);
                b.interpolatedQuaternion.copy(b.quaternion);
            }
        }
    }
};

/**
 * Step the simulation
 * @method step
 * @param {Number} dt
 */
var World_step_postStepEvent = {type:"postStep"}, // Reusable event objects to save memory
    World_step_preStepEvent = {type:"preStep"},
    World_step_collideEvent = {type:"collide", body:null, contact:null },
    World_step_oldContacts = [], // Pools for unused objects
    World_step_frictionEquationPool = [],
    World_step_p1 = [], // Reusable arrays for collision pairs
    World_step_p2 = [],
    World_step_gvec = new Vec3(), // Temporary vectors and quats
    World_step_vi = new Vec3(),
    World_step_vj = new Vec3(),
    World_step_wi = new Vec3(),
    World_step_wj = new Vec3(),
    World_step_t1 = new Vec3(),
    World_step_t2 = new Vec3(),
    World_step_rixn = new Vec3(),
    World_step_rjxn = new Vec3(),
    World_step_step_q = new Quaternion(),
    World_step_step_w = new Quaternion(),
    World_step_step_wq = new Quaternion(),
    invI_tau_dt = new Vec3();
World.prototype.internalStep = function(dt){
    this.dt = dt;

    var world = this,
        that = this,
        contacts = this.contacts,
        p1 = World_step_p1,
        p2 = World_step_p2,
        N = this.numObjects(),
        bodies = this.bodies,
        solver = this.solver,
        gravity = this.gravity,
        doProfiling = this.doProfiling,
        profile = this.profile,
        DYNAMIC = Body.DYNAMIC,
        profilingStart,
        constraints = this.constraints,
        frictionEquationPool = World_step_frictionEquationPool,
        gnorm = gravity.norm(),
        gx = gravity.x,
        gy = gravity.y,
        gz = gravity.z,
        i=0;

    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add gravity to all objects
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type & DYNAMIC){ // Only for dynamic bodies
            var f = bi.force, m = bi.mass;
            f.x += m*gx;
            f.y += m*gy;
            f.z += m*gz;
        }
    }

    // Update subsystems
    for(var i=0, Nsubsystems=this.subsystems.length; i!==Nsubsystems; i++){
        this.subsystems[i].update();
    }

    // Collision detection
    if(doProfiling){ profilingStart = performance.now(); }
    p1.length = 0; // Clean up pair arrays from last step
    p2.length = 0;
    this.broadphase.collisionPairs(this,p1,p2);
    if(doProfiling){ profile.broadphase = performance.now() - profilingStart; }

    // Remove constrained pairs with collideConnected == false
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        if(!c.collideConnected){
            for(var j = p1.length-1; j>=0; j-=1){
                if( (c.bodyA === p1[j] && c.bodyB === p2[j]) ||
                    (c.bodyB === p1[j] && c.bodyA === p2[j])){
                    p1.splice(j, 1);
                    p2.splice(j, 1);
                }
            }
        }
    }

    this.collisionMatrixTick();

    // Generate contacts
    if(doProfiling){ profilingStart = performance.now(); }
    var oldcontacts = World_step_oldContacts;
    var NoldContacts = contacts.length;

    for(i=0; i!==NoldContacts; i++){
        oldcontacts.push(contacts[i]);
    }
    contacts.length = 0;

    // Transfer FrictionEquation from current list to the pool for reuse
    var NoldFrictionEquations = this.frictionEquations.length;
    for(i=0; i!==NoldFrictionEquations; i++){
        frictionEquationPool.push(this.frictionEquations[i]);
    }
    this.frictionEquations.length = 0;

    this.narrowphase.getContacts(
        p1,
        p2,
        this,
        contacts,
        oldcontacts, // To be reused
        this.frictionEquations,
        frictionEquationPool
    );

    if(doProfiling){
        profile.narrowphase = performance.now() - profilingStart;
    }

    // Loop over all collisions
    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add all friction eqs
    for (var i = 0; i < this.frictionEquations.length; i++) {
        solver.addEquation(this.frictionEquations[i]);
    }

    var ncontacts = contacts.length;
    for(var k=0; k!==ncontacts; k++){

        // Current contact
        var c = contacts[k];

        // Get current collision indeces
        var bi = c.bi,
            bj = c.bj,
            si = c.si,
            sj = c.sj;

        // Get collision properties
        var cm;
        if(bi.material && bj.material){
            cm = this.getContactMaterial(bi.material,bj.material) || this.defaultContactMaterial;
        } else {
            cm = this.defaultContactMaterial;
        }

        // c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

        var mu = cm.friction;
        // c.restitution = cm.restitution;

        // If friction or restitution were specified in the material, use them
        if(bi.material && bj.material){
            if(bi.material.friction >= 0 && bj.material.friction >= 0){
                mu = bi.material.friction * bj.material.friction;
            }

            if(bi.material.restitution >= 0 && bj.material.restitution >= 0){
                c.restitution = bi.material.restitution * bj.material.restitution;
            }
        }

		// c.setSpookParams(
  //           cm.contactEquationStiffness,
  //           cm.contactEquationRelaxation,
  //           dt
  //       );

		solver.addEquation(c);

		// // Add friction constraint equation
		// if(mu > 0){

		// 	// Create 2 tangent equations
		// 	var mug = mu * gnorm;
		// 	var reducedMass = (bi.invMass + bj.invMass);
		// 	if(reducedMass > 0){
		// 		reducedMass = 1/reducedMass;
		// 	}
		// 	var pool = frictionEquationPool;
		// 	var c1 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	var c2 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	this.frictionEquations.push(c1, c2);

		// 	c1.bi = c2.bi = bi;
		// 	c1.bj = c2.bj = bj;
		// 	c1.minForce = c2.minForce = -mug*reducedMass;
		// 	c1.maxForce = c2.maxForce = mug*reducedMass;

		// 	// Copy over the relative vectors
		// 	c1.ri.copy(c.ri);
		// 	c1.rj.copy(c.rj);
		// 	c2.ri.copy(c.ri);
		// 	c2.rj.copy(c.rj);

		// 	// Construct tangents
		// 	c.ni.tangents(c1.t, c2.t);

  //           // Set spook params
  //           c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);
  //           c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);

  //           c1.enabled = c2.enabled = c.enabled;

		// 	// Add equations to solver
		// 	solver.addEquation(c1);
		// 	solver.addEquation(c2);
		// }

        if( bi.allowSleep &&
            bi.type === Body.DYNAMIC &&
            bi.sleepState  === Body.SLEEPING &&
            bj.sleepState  === Body.AWAKE &&
            bj.type !== Body.STATIC
        ){
            var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
            var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit,2);
            if(speedSquaredB >= speedLimitSquaredB*2){
                bi._wakeUpAfterNarrowphase = true;
            }
        }

        if( bj.allowSleep &&
            bj.type === Body.DYNAMIC &&
            bj.sleepState  === Body.SLEEPING &&
            bi.sleepState  === Body.AWAKE &&
            bi.type !== Body.STATIC
        ){
            var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
            var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit,2);
            if(speedSquaredA >= speedLimitSquaredA*2){
                bj._wakeUpAfterNarrowphase = true;
            }
        }

        // Now we know that i and j are in contact. Set collision matrix state
		this.collisionMatrix.set(bi, bj, true);

        if (!this.collisionMatrixPrevious.get(bi, bj)) {
            // First contact!
            // We reuse the collideEvent object, otherwise we will end up creating new objects for each new contact, even if there's no event listener attached.
            World_step_collideEvent.body = bj;
            World_step_collideEvent.contact = c;
            bi.dispatchEvent(World_step_collideEvent);

            World_step_collideEvent.body = bi;
            bj.dispatchEvent(World_step_collideEvent);
        }
    }
    if(doProfiling){
        profile.makeContactConstraints = performance.now() - profilingStart;
        profilingStart = performance.now();
    }

    // Wake up bodies
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi._wakeUpAfterNarrowphase){
            bi.wakeUp();
            bi._wakeUpAfterNarrowphase = false;
        }
    }

    // Add user-added constraints
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        c.update();
        for(var j=0, Neq=c.equations.length; j!==Neq; j++){
            var eq = c.equations[j];
            solver.addEquation(eq);
        }
    }

    // Solve the constrained system
    solver.solve(dt,this);

    if(doProfiling){
        profile.solve = performance.now() - profilingStart;
    }

    // Remove all contacts from solver
    solver.removeAllEquations();

    // Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details
    var pow = Math.pow;
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type & DYNAMIC){ // Only for dynamic bodies
            var ld = pow(1.0 - bi.linearDamping,dt);
            var v = bi.velocity;
            v.mult(ld,v);
            var av = bi.angularVelocity;
            if(av){
                var ad = pow(1.0 - bi.angularDamping,dt);
                av.mult(ad,av);
            }
        }
    }

    this.dispatchEvent(World_step_preStepEvent);

    // Invoke pre-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.preStep){
            bi.preStep.call(bi);
        }
    }

    // Leap frog
    // vnew = v + h*f/m
    // xnew = x + h*vnew
    if(doProfiling){
        profilingStart = performance.now();
    }
    var q = World_step_step_q;
    var w = World_step_step_w;
    var wq = World_step_step_wq;
    var stepnumber = this.stepnumber;
    var DYNAMIC_OR_KINEMATIC = Body.DYNAMIC | Body.KINEMATIC;
    var quatNormalize = stepnumber % (this.quatNormalizeSkip+1) === 0;
    var quatNormalizeFast = this.quatNormalizeFast;
    var half_dt = dt * 0.5;
    var PLANE = Shape.types.PLANE,
        CONVEX = Shape.types.CONVEXPOLYHEDRON;

    for(i=0; i!==N; i++){
        var b = bodies[i],
            force = b.force,
            tau = b.torque;
        if((b.type & DYNAMIC_OR_KINEMATIC) && b.sleepState !== Body.SLEEPING){ // Only for dynamic
            var velo = b.velocity,
                angularVelo = b.angularVelocity,
                pos = b.position,
                quat = b.quaternion,
                invMass = b.invMass,
                invInertia = b.invInertiaWorld;

            velo.x += force.x * invMass * dt;
            velo.y += force.y * invMass * dt;
            velo.z += force.z * invMass * dt;

            if(b.angularVelocity){
                invInertia.vmult(tau,invI_tau_dt);
                invI_tau_dt.mult(dt,invI_tau_dt);
                invI_tau_dt.vadd(angularVelo,angularVelo);
            }

            // Use new velocity  - leap frog
            pos.x += velo.x * dt;
            pos.y += velo.y * dt;
            pos.z += velo.z * dt;

            if(b.angularVelocity){
                w.set(angularVelo.x, angularVelo.y, angularVelo.z, 0);
                w.mult(quat,wq);
                quat.x += half_dt * wq.x;
                quat.y += half_dt * wq.y;
                quat.z += half_dt * wq.z;
                quat.w += half_dt * wq.w;
                if(quatNormalize){
                    if(quatNormalizeFast){
                        quat.normalizeFast();
                    } else {
                        quat.normalize();
                    }
                }
            }

            if(b.aabb){
                b.aabbNeedsUpdate = true;
            }

            // Update world inertia
            if(b.updateInertiaWorld){
                b.updateInertiaWorld();
            }
        }
    }
    this.clearForces();

    this.broadphase.dirty = true;

    if(doProfiling){
        profile.integrate = performance.now() - profilingStart;
    }

    // Update world time
    this.time += dt;
    this.stepnumber += 1;

    this.dispatchEvent(World_step_postStepEvent);

    // Invoke post-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        var postStep = bi.postStep;
        if(postStep){
            postStep.call(bi);
        }
    }

    // Sleeping update
    if(this.allowSleep){
        for(i=0; i!==N; i++){
            bodies[i].sleepTick(this.time);
        }
    }
};

/**
 * Sets all body forces in the world to zero.
 * @method clearForces
 */
World.prototype.clearForces = function(){
    var bodies = this.bodies;
    var N = bodies.length;
    for(var i=0; i !== N; i++){
        var b = bodies[i],
            force = b.force,
            tau = b.torque;

        b.force.set(0,0,0);
        b.torque.set(0,0,0);
    }
};

},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])
(2)
});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-gui",["babylonjs"],e):"object"==typeof exports?exports["babylonjs-gui"]=e(require("babylonjs")):(t.BABYLON=t.BABYLON||{},t.BABYLON.GUI=e(t.BABYLON))}(window,function(t){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=29)}([function(e,i){e.exports=t},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(2),o=i(0),n=i(5),s=i(19),h=function(){function t(e){this.name=e,this._alpha=1,this._alphaSet=!1,this._zIndex=0,this._currentMeasure=n.Measure.Empty(),this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new r.ValueAndUnit(18,r.ValueAndUnit.UNITMODE_PIXEL,!1),this._width=new r.ValueAndUnit(1,r.ValueAndUnit.UNITMODE_PERCENTAGE,!1),this._height=new r.ValueAndUnit(1,r.ValueAndUnit.UNITMODE_PERCENTAGE,!1),this._color="",this._style=null,this._horizontalAlignment=t.HORIZONTAL_ALIGNMENT_CENTER,this._verticalAlignment=t.VERTICAL_ALIGNMENT_CENTER,this._isDirty=!0,this._tempParentMeasure=n.Measure.Empty(),this._cachedParentMeasure=n.Measure.Empty(),this._paddingLeft=new r.ValueAndUnit(0),this._paddingRight=new r.ValueAndUnit(0),this._paddingTop=new r.ValueAndUnit(0),this._paddingBottom=new r.ValueAndUnit(0),this._left=new r.ValueAndUnit(0),this._top=new r.ValueAndUnit(0),this._scaleX=1,this._scaleY=1,this._rotation=0,this._transformCenterX=.5,this._transformCenterY=.5,this._transformMatrix=s.Matrix2D.Identity(),this._invertTransformMatrix=s.Matrix2D.Identity(),this._transformedPosition=o.Vector2.Zero(),this._onlyMeasureMode=!1,this._isMatrixDirty=!0,this._isVisible=!0,this._isHighlighted=!1,this._fontSet=!1,this._dummyVector2=o.Vector2.Zero(),this._downCount=0,this._enterCount=-1,this._doNotRender=!1,this._downPointerIds={},this._isEnabled=!0,this._disabledColor="#9a9a9a",this.metadata=null,this.isHitTestVisible=!0,this.isPointerBlocker=!1,this.isFocusInvisible=!1,this.clipChildren=!0,this._shadowOffsetX=0,this._shadowOffsetY=0,this._shadowBlur=0,this._shadowColor="black",this.hoverCursor="",this._linkOffsetX=new r.ValueAndUnit(0),this._linkOffsetY=new r.ValueAndUnit(0),this.onPointerMoveObservable=new o.Observable,this.onPointerOutObservable=new o.Observable,this.onPointerDownObservable=new o.Observable,this.onPointerUpObservable=new o.Observable,this.onPointerClickObservable=new o.Observable,this.onPointerEnterObservable=new o.Observable,this.onDirtyObservable=new o.Observable,this.onBeforeDrawObservable=new o.Observable,this.onAfterDrawObservable=new o.Observable}return Object.defineProperty(t.prototype,"shadowOffsetX",{get:function(){return this._shadowOffsetX},set:function(t){this._shadowOffsetX!==t&&(this._shadowOffsetX=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowOffsetY",{get:function(){return this._shadowOffsetY},set:function(t){this._shadowOffsetY!==t&&(this._shadowOffsetY=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowBlur",{get:function(){return this._shadowBlur},set:function(t){this._shadowBlur!==t&&(this._shadowBlur=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowColor",{get:function(){return this._shadowColor},set:function(t){this._shadowColor!==t&&(this._shadowColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"typeName",{get:function(){return this._getTypeName()},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return this._getTypeName()},Object.defineProperty(t.prototype,"fontOffset",{get:function(){return this._fontOffset},set:function(t){this._fontOffset=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this._alpha!==t&&(this._alphaSet=!0,this._alpha=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isHighlighted",{get:function(){return this._isHighlighted},set:function(t){this._isHighlighted!==t&&(this._isHighlighted=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleX",{get:function(){return this._scaleX},set:function(t){this._scaleX!==t&&(this._scaleX=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleY",{get:function(){return this._scaleY},set:function(t){this._scaleY!==t&&(this._scaleY=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformCenterY",{get:function(){return this._transformCenterY},set:function(t){this._transformCenterY!==t&&(this._transformCenterY=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformCenterX",{get:function(){return this._transformCenterX},set:function(t){this._transformCenterX!==t&&(this._transformCenterX=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"horizontalAlignment",{get:function(){return this._horizontalAlignment},set:function(t){this._horizontalAlignment!==t&&(this._horizontalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verticalAlignment",{get:function(){return this._verticalAlignment},set:function(t){this._verticalAlignment!==t&&(this._verticalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"widthInPixels",{get:function(){return this._width.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"heightInPixels",{get:function(){return this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontSet?this._fontFamily:""},set:function(t){this._fontFamily!==t&&(this._fontFamily=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(t){var e=this;this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this._style=t,this._style&&(this._styleObserver=this._style.onChangedObservable.add(function(){e._markAsDirty(),e._resetFontCache()})),this._markAsDirty(),this._resetFontCache()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_isFontSizeInPercentage",{get:function(){return this._fontSize.isPercentage},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSizeInPixels",{get:function(){var t=this._style?this._style._fontSize:this._fontSize;return t.isPixel?t.getValue(this._host):t.getValueInPixel(this._host,this._tempParentMeasure.height||this._cachedParentMeasure.height)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize.toString(this._host)},set:function(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&(this._markAsDirty(),this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color!==t&&(this._color=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this.zIndex!==t&&(this._zIndex=t,this._root&&this._root._reOrderControl(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"notRenderable",{get:function(){return this._doNotRender},set:function(t){this._doNotRender!==t&&(this._doNotRender=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){this._isVisible!==t&&(this._isVisible=t,this._markAsDirty(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDirty",{get:function(){return this._isDirty},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkedMesh",{get:function(){return this._linkedMesh},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingLeft",{get:function(){return this._paddingLeft.toString(this._host)},set:function(t){this._paddingLeft.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingLeftInPixels",{get:function(){return this._paddingLeft.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingRight",{get:function(){return this._paddingRight.toString(this._host)},set:function(t){this._paddingRight.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingRightInPixels",{get:function(){return this._paddingRight.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingTop",{get:function(){return this._paddingTop.toString(this._host)},set:function(t){this._paddingTop.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingTopInPixels",{get:function(){return this._paddingTop.getValueInPixel(this._host,this._cachedParentMeasure.height)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingBottom",{get:function(){return this._paddingBottom.toString(this._host)},set:function(t){this._paddingBottom.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingBottomInPixels",{get:function(){return this._paddingBottom.getValueInPixel(this._host,this._cachedParentMeasure.height)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){return this._left.toString(this._host)},set:function(t){this._left.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"leftInPixels",{get:function(){return this._left.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"top",{get:function(){return this._top.toString(this._host)},set:function(t){this._top.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"topInPixels",{get:function(){return this._top.getValueInPixel(this._host,this._cachedParentMeasure.height)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetX",{get:function(){return this._linkOffsetX.toString(this._host)},set:function(t){this._linkOffsetX.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetXInPixels",{get:function(){return this._linkOffsetX.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetY",{get:function(){return this._linkOffsetY.toString(this._host)},set:function(t){this._linkOffsetY.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetYInPixels",{get:function(){return this._linkOffsetY.getValueInPixel(this._host,this._cachedParentMeasure.height)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centerX",{get:function(){return this._currentMeasure.left+this._currentMeasure.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centerY",{get:function(){return this._currentMeasure.top+this._currentMeasure.height/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(t){this._isEnabled!==t&&(this._isEnabled=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabledColor",{get:function(){return this._disabledColor},set:function(t){this._disabledColor!==t&&(this._disabledColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),t.prototype._getTypeName=function(){return"Control"},t.prototype._resetFontCache=function(){this._fontSet=!0,this._markAsDirty()},t.prototype.isAscendant=function(t){return!!this.parent&&(this.parent===t||this.parent.isAscendant(t))},t.prototype.getLocalCoordinates=function(t){var e=o.Vector2.Zero();return this.getLocalCoordinatesToRef(t,e),e},t.prototype.getLocalCoordinatesToRef=function(t,e){return e.x=t.x-this._currentMeasure.left,e.y=t.y-this._currentMeasure.top,this},t.prototype.getParentLocalCoordinates=function(t){var e=o.Vector2.Zero();return e.x=t.x-this._cachedParentMeasure.left,e.y=t.y-this._cachedParentMeasure.top,e},t.prototype.moveToVector3=function(e,i){if(this._host&&this._root===this._host._rootContainer){this.horizontalAlignment=t.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=t.VERTICAL_ALIGNMENT_TOP;var r=this._host._getGlobalViewport(i),n=o.Vector3.Project(e,o.Matrix.Identity(),i.getTransformMatrix(),r);this._moveToProjectedPosition(n),n.z<0||n.z>1?this.notRenderable=!0:this.notRenderable=!1}else o.Tools.Error("Cannot move a control to a vector3 if the control is not at root level")},t.prototype._getDescendants=function(t,e,i){void 0===e&&(e=!1)},t.prototype.getDescendants=function(t,e){var i=new Array;return this._getDescendants(i,t,e),i},t.prototype.linkWithMesh=function(e){if(!this._host||this._root&&this._root!==this._host._rootContainer)e&&o.Tools.Error("Cannot link a control to a mesh if the control is not at root level");else{var i=this._host._linkedControls.indexOf(this);if(-1!==i)return this._linkedMesh=e,void(e||this._host._linkedControls.splice(i,1));e&&(this.horizontalAlignment=t.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=t.VERTICAL_ALIGNMENT_TOP,this._linkedMesh=e,this._onlyMeasureMode=0===this._currentMeasure.width||0===this._currentMeasure.height,this._host._linkedControls.push(this))}},t.prototype._moveToProjectedPosition=function(t){var e=this._left.getValue(this._host),i=this._top.getValue(this._host),r=t.x+this._linkOffsetX.getValue(this._host)-this._currentMeasure.width/2,o=t.y+this._linkOffsetY.getValue(this._host)-this._currentMeasure.height/2;this._left.ignoreAdaptiveScaling&&this._top.ignoreAdaptiveScaling&&(Math.abs(r-e)<.5&&(r=e),Math.abs(o-i)<.5&&(o=i)),this.left=r+"px",this.top=o+"px",this._left.ignoreAdaptiveScaling=!0,this._top.ignoreAdaptiveScaling=!0},t.prototype._markMatrixAsDirty=function(){this._isMatrixDirty=!0,this._flagDescendantsAsMatrixDirty()},t.prototype._flagDescendantsAsMatrixDirty=function(){},t.prototype._markAsDirty=function(t){void 0===t&&(t=!1),(this._isVisible||t)&&(this._isDirty=!0,this._host&&this._host.markAsDirty())},t.prototype._markAllAsDirty=function(){this._markAsDirty(),this._font&&this._prepareFont()},t.prototype._link=function(t,e){this._root=t,this._host=e,this._host&&(this.uniqueId=this._host.getScene().getUniqueId())},t.prototype._transform=function(t){if(this._isMatrixDirty||1!==this._scaleX||1!==this._scaleY||0!==this._rotation){var e=this._currentMeasure.width*this._transformCenterX+this._currentMeasure.left,i=this._currentMeasure.height*this._transformCenterY+this._currentMeasure.top;t.translate(e,i),t.rotate(this._rotation),t.scale(this._scaleX,this._scaleY),t.translate(-e,-i),(this._isMatrixDirty||this._cachedOffsetX!==e||this._cachedOffsetY!==i)&&(this._cachedOffsetX=e,this._cachedOffsetY=i,this._isMatrixDirty=!1,this._flagDescendantsAsMatrixDirty(),s.Matrix2D.ComposeToRef(-e,-i,this._rotation,this._scaleX,this._scaleY,this._root?this._root._transformMatrix:null,this._transformMatrix),this._transformMatrix.invertToRef(this._invertTransformMatrix))}},t.prototype._renderHighlight=function(t){this.isHighlighted&&(t.save(),t.strokeStyle="#4affff",t.lineWidth=2,this._renderHighlightSpecific(t),t.restore())},t.prototype._renderHighlightSpecific=function(t){t.strokeRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)},t.prototype._applyStates=function(e){this._isFontSizeInPercentage&&(this._fontSet=!0),this._fontSet&&(this._prepareFont(),this._fontSet=!1),this._font&&(e.font=this._font),this._color&&(e.fillStyle=this._color),t.AllowAlphaInheritance?e.globalAlpha*=this._alpha:this._alphaSet&&(e.globalAlpha=this.parent?this.parent.alpha*this._alpha:this._alpha)},t.prototype._processMeasures=function(t,e){return!this._isDirty&&this._cachedParentMeasure.isEqualsTo(t)||(this._isDirty=!1,this._currentMeasure.copyFrom(t),this._preMeasure(t,e),this._measure(),this._computeAlignment(t,e),this._currentMeasure.left=0|this._currentMeasure.left,this._currentMeasure.top=0|this._currentMeasure.top,this._currentMeasure.width=0|this._currentMeasure.width,this._currentMeasure.height=0|this._currentMeasure.height,this._additionalProcessing(t,e),this._cachedParentMeasure.copyFrom(t),this.onDirtyObservable.hasObservers()&&this.onDirtyObservable.notifyObservers(this)),!(this._currentMeasure.left>t.left+t.width)&&(!(this._currentMeasure.left+this._currentMeasure.width<t.left)&&(!(this._currentMeasure.top>t.top+t.height)&&(!(this._currentMeasure.top+this._currentMeasure.height<t.top)&&(this._transform(e),this._onlyMeasureMode?(this._onlyMeasureMode=!1,!1):(this.clipChildren&&(this._clip(e),e.clip()),this.onBeforeDrawObservable.hasObservers()&&this.onBeforeDrawObservable.notifyObservers(this),!0)))))},t.prototype._clip=function(t){if(t.beginPath(),this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY){var e=this.shadowOffsetX,i=this.shadowOffsetY,r=this.shadowBlur,o=Math.min(Math.min(e,0)-2*r,0),n=Math.max(Math.max(e,0)+2*r,0),s=Math.min(Math.min(i,0)-2*r,0),h=Math.max(Math.max(i,0)+2*r,0);t.rect(this._currentMeasure.left+o,this._currentMeasure.top+s,this._currentMeasure.width+n-o,this._currentMeasure.height+h-s)}else t.rect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)},t.prototype._measure=function(){this._width.isPixel?this._currentMeasure.width=this._width.getValue(this._host):this._currentMeasure.width*=this._width.getValue(this._host),this._height.isPixel?this._currentMeasure.height=this._height.getValue(this._host):this._currentMeasure.height*=this._height.getValue(this._host)},t.prototype._computeAlignment=function(e,i){var r=this._currentMeasure.width,o=this._currentMeasure.height,n=e.width,s=e.height,h=0,a=0;switch(this.horizontalAlignment){case t.HORIZONTAL_ALIGNMENT_LEFT:h=0;break;case t.HORIZONTAL_ALIGNMENT_RIGHT:h=n-r;break;case t.HORIZONTAL_ALIGNMENT_CENTER:h=(n-r)/2}switch(this.verticalAlignment){case t.VERTICAL_ALIGNMENT_TOP:a=0;break;case t.VERTICAL_ALIGNMENT_BOTTOM:a=s-o;break;case t.VERTICAL_ALIGNMENT_CENTER:a=(s-o)/2}this._paddingLeft.isPixel?(this._currentMeasure.left+=this._paddingLeft.getValue(this._host),this._currentMeasure.width-=this._paddingLeft.getValue(this._host)):(this._currentMeasure.left+=n*this._paddingLeft.getValue(this._host),this._currentMeasure.width-=n*this._paddingLeft.getValue(this._host)),this._paddingRight.isPixel?this._currentMeasure.width-=this._paddingRight.getValue(this._host):this._currentMeasure.width-=n*this._paddingRight.getValue(this._host),this._paddingTop.isPixel?(this._currentMeasure.top+=this._paddingTop.getValue(this._host),this._currentMeasure.height-=this._paddingTop.getValue(this._host)):(this._currentMeasure.top+=s*this._paddingTop.getValue(this._host),this._currentMeasure.height-=s*this._paddingTop.getValue(this._host)),this._paddingBottom.isPixel?this._currentMeasure.height-=this._paddingBottom.getValue(this._host):this._currentMeasure.height-=s*this._paddingBottom.getValue(this._host),this._left.isPixel?this._currentMeasure.left+=this._left.getValue(this._host):this._currentMeasure.left+=n*this._left.getValue(this._host),this._top.isPixel?this._currentMeasure.top+=this._top.getValue(this._host):this._currentMeasure.top+=s*this._top.getValue(this._host),this._currentMeasure.left+=h,this._currentMeasure.top+=a},t.prototype._preMeasure=function(t,e){},t.prototype._additionalProcessing=function(t,e){},t.prototype._draw=function(t,e){},t.prototype.contains=function(t,e){return this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y,!(t<this._currentMeasure.left)&&(!(t>this._currentMeasure.left+this._currentMeasure.width)&&(!(e<this._currentMeasure.top)&&(!(e>this._currentMeasure.top+this._currentMeasure.height)&&(this.isPointerBlocker&&(this._host._shouldBlockPointer=!0),!0))))},t.prototype._processPicking=function(t,e,i,r,o){return!!this._isEnabled&&(!(!this.isHitTestVisible||!this.isVisible||this._doNotRender)&&(!!this.contains(t,e)&&(this._processObservables(i,t,e,r,o),!0)))},t.prototype._onPointerMove=function(t,e){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)&&null!=this.parent&&this.parent._onPointerMove(t,e)},t.prototype._onPointerEnter=function(t){return!!this._isEnabled&&(!(this._enterCount>0)&&(-1===this._enterCount&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this)&&null!=this.parent&&this.parent._onPointerEnter(t),!0))},t.prototype._onPointerOut=function(t){if(this._isEnabled&&t!==this){this._enterCount=0;var e=!0;t.isAscendant(this)||(e=this.onPointerOutObservable.notifyObservers(this,-1,t,this)),e&&null!=this.parent&&this.parent._onPointerOut(t)}},t.prototype._onPointerDown=function(t,e,i,r){return this._onPointerEnter(this),0===this._downCount&&(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new s.Vector2WithInfo(e,r),-1,t,this)&&null!=this.parent&&this.parent._onPointerDown(t,e,i,r),!0)},t.prototype._onPointerUp=function(t,e,i,r,o){if(this._isEnabled){this._downCount=0,delete this._downPointerIds[i];var n=o;o&&(this._enterCount>0||-1===this._enterCount)&&(n=this.onPointerClickObservable.notifyObservers(new s.Vector2WithInfo(e,r),-1,t,this)),this.onPointerUpObservable.notifyObservers(new s.Vector2WithInfo(e,r),-1,t,this)&&null!=this.parent&&this.parent._onPointerUp(t,e,i,r,n)}},t.prototype._forcePointerUp=function(t){if(void 0===t&&(t=null),null!==t)this._onPointerUp(this,o.Vector2.Zero(),t,0,!0);else for(var e in this._downPointerIds)this._onPointerUp(this,o.Vector2.Zero(),+e,0,!0)},t.prototype._processObservables=function(t,e,i,r,n){if(!this._isEnabled)return!1;if(this._dummyVector2.copyFromFloats(e,i),t===o.PointerEventTypes.POINTERMOVE){this._onPointerMove(this,this._dummyVector2);var s=this._host._lastControlOver[r];return s&&s!==this&&s._onPointerOut(this),s!==this&&this._onPointerEnter(this),this._host._lastControlOver[r]=this,!0}return t===o.PointerEventTypes.POINTERDOWN?(this._onPointerDown(this,this._dummyVector2,r,n),this._host._registerLastControlDown(this,r),this._host._lastPickedControl=this,!0):t===o.PointerEventTypes.POINTERUP&&(this._host._lastControlDown[r]&&this._host._lastControlDown[r]._onPointerUp(this,this._dummyVector2,r,n,!0),delete this._host._lastControlDown[r],!0)},t.prototype._prepareFont=function(){(this._font||this._fontSet)&&(this._style?this._font=this._style.fontStyle+" "+this._style.fontWeight+" "+this.fontSizeInPixels+"px "+this._style.fontFamily:this._font=this._fontStyle+" "+this._fontWeight+" "+this.fontSizeInPixels+"px "+this._fontFamily,this._fontOffset=t._GetFontOffset(this._font))},t.prototype.dispose=function(){(this.onDirtyObservable.clear(),this.onBeforeDrawObservable.clear(),this.onAfterDrawObservable.clear(),this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this._styleObserver&&this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this._root&&(this._root.removeControl(this),this._root=null),this._host)&&(this._host._linkedControls.indexOf(this)>-1&&this.linkWithMesh(null))},Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_LEFT",{get:function(){return t._HORIZONTAL_ALIGNMENT_LEFT},enumerable:!0,configurable:!0}),Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_RIGHT",{get:function(){return t._HORIZONTAL_ALIGNMENT_RIGHT},enumerable:!0,configurable:!0}),Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_CENTER",{get:function(){return t._HORIZONTAL_ALIGNMENT_CENTER},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_TOP",{get:function(){return t._VERTICAL_ALIGNMENT_TOP},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_BOTTOM",{get:function(){return t._VERTICAL_ALIGNMENT_BOTTOM},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_CENTER",{get:function(){return t._VERTICAL_ALIGNMENT_CENTER},enumerable:!0,configurable:!0}),t._GetFontOffset=function(e){if(t._FontHeightSizes[e])return t._FontHeightSizes[e];var i=document.createElement("span");i.innerHTML="Hg",i.style.font=e;var r=document.createElement("div");r.style.display="inline-block",r.style.width="1px",r.style.height="0px",r.style.verticalAlign="bottom";var o=document.createElement("div");o.appendChild(i),o.appendChild(r),document.body.appendChild(o);var n=0,s=0;try{s=r.getBoundingClientRect().top-i.getBoundingClientRect().top,r.style.verticalAlign="baseline",n=r.getBoundingClientRect().top-i.getBoundingClientRect().top}finally{document.body.removeChild(o)}var h={ascent:n,height:s,descent:s-n};return t._FontHeightSizes[e]=h,h},t.drawEllipse=function(t,e,i,r,o){o.translate(t,e),o.scale(i,r),o.beginPath(),o.arc(0,0,1,0,2*Math.PI),o.closePath(),o.scale(1/i,1/r),o.translate(-t,-e)},t.AllowAlphaInheritance=!1,t._HORIZONTAL_ALIGNMENT_LEFT=0,t._HORIZONTAL_ALIGNMENT_RIGHT=1,t._HORIZONTAL_ALIGNMENT_CENTER=2,t._VERTICAL_ALIGNMENT_TOP=0,t._VERTICAL_ALIGNMENT_BOTTOM=1,t._VERTICAL_ALIGNMENT_CENTER=2,t._FontHeightSizes={},t.AddHeader=function(){},t}();e.Control=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e,i,r){void 0===i&&(i=t.UNITMODE_PIXEL),void 0===r&&(r=!0),this.unit=i,this.negativeValueAllowed=r,this._value=1,this.ignoreAdaptiveScaling=!1,this._value=e,this._originalUnit=i}return Object.defineProperty(t.prototype,"isPercentage",{get:function(){return this.unit===t.UNITMODE_PERCENTAGE},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPixel",{get:function(){return this.unit===t.UNITMODE_PIXEL},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"internalValue",{get:function(){return this._value},enumerable:!0,configurable:!0}),t.prototype.getValueInPixel=function(t,e){return this.isPixel?this.getValue(t):this.getValue(t)*e},t.prototype.getValue=function(e){if(e&&!this.ignoreAdaptiveScaling&&this.unit!==t.UNITMODE_PERCENTAGE){var i=0,r=0;if(e.idealWidth&&(i=this._value*e.getSize().width/e.idealWidth),e.idealHeight&&(r=this._value*e.getSize().height/e.idealHeight),e.useSmallestIdeal&&e.idealWidth&&e.idealHeight)return window.innerWidth<window.innerHeight?i:r;if(e.idealWidth)return i;if(e.idealHeight)return r}return this._value},t.prototype.toString=function(e){switch(this.unit){case t.UNITMODE_PERCENTAGE:return 100*this.getValue(e)+"%";case t.UNITMODE_PIXEL:return this.getValue(e)+"px"}return this.unit.toString()},t.prototype.fromString=function(e){var i=t._Regex.exec(e.toString());if(!i||0===i.length)return!1;var r=parseFloat(i[1]),o=this._originalUnit;if(this.negativeValueAllowed||r<0&&(r=0),4===i.length)switch(i[3]){case"px":o=t.UNITMODE_PIXEL;break;case"%":o=t.UNITMODE_PERCENTAGE,r/=100}return(r!==this._value||o!==this.unit)&&(this._value=r,this.unit=o,!0)},Object.defineProperty(t,"UNITMODE_PERCENTAGE",{get:function(){return t._UNITMODE_PERCENTAGE},enumerable:!0,configurable:!0}),Object.defineProperty(t,"UNITMODE_PIXEL",{get:function(){return t._UNITMODE_PIXEL},enumerable:!0,configurable:!0}),t._Regex=/(^-?\d*(\.\d+)?)(%|px)?/,t._UNITMODE_PERCENTAGE=0,t._UNITMODE_PIXEL=1,t}();e.ValueAndUnit=r},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(5),h=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._children=new Array,i._measureForChildren=s.Measure.Empty(),i._background="",i._adaptWidthToChildren=!1,i._adaptHeightToChildren=!1,i}return o(e,t),Object.defineProperty(e.prototype,"adaptHeightToChildren",{get:function(){return this._adaptHeightToChildren},set:function(t){this._adaptHeightToChildren!==t&&(this._adaptHeightToChildren=t,t&&(this.height="100%"),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"adaptWidthToChildren",{get:function(){return this._adaptWidthToChildren},set:function(t){this._adaptWidthToChildren!==t&&(this._adaptWidthToChildren=t,t&&(this.width="100%"),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Container"},e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t=0,e=this.children;t<e.length;t++){e[t]._markMatrixAsDirty()}},e.prototype.getChildByName=function(t){for(var e=0,i=this.children;e<i.length;e++){var r=i[e];if(r.name===t)return r}return null},e.prototype.getChildByType=function(t,e){for(var i=0,r=this.children;i<r.length;i++){var o=r[i];if(o.typeName===e)return o}return null},e.prototype.containsControl=function(t){return-1!==this.children.indexOf(t)},e.prototype.addControl=function(t){return t?-1!==this._children.indexOf(t)?this:(t._link(this,this._host),t._markAllAsDirty(),this._reOrderControl(t),this._markAsDirty(),this):this},e.prototype.clearControls=function(){for(var t=0,e=this.children.slice();t<e.length;t++){var i=e[t];this.removeControl(i)}return this},e.prototype.removeControl=function(t){var e=this._children.indexOf(t);return-1!==e&&(this._children.splice(e,1),t.parent=null),t.linkWithMesh(null),this._host&&this._host._cleanControlAfterRemoval(t),this._markAsDirty(),this},e.prototype._reOrderControl=function(t){this.removeControl(t);for(var e=0;e<this._children.length;e++)if(this._children[e].zIndex>t.zIndex)return void this._children.splice(e,0,t);this._children.push(t),t.parent=this,this._markAsDirty()},e.prototype._markAllAsDirty=function(){t.prototype._markAllAsDirty.call(this);for(var e=0;e<this._children.length;e++)this._children[e]._markAllAsDirty()},e.prototype._localDraw=function(t){this._background&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0))},e.prototype._link=function(e,i){t.prototype._link.call(this,e,i);for(var r=0,o=this._children;r<o.length;r++){o[r]._link(this,i)}},e.prototype._draw=function(t,e){if(this.isVisible&&!this.notRenderable){if(e.save(),this._applyStates(e),this._processMeasures(t,e)){this.onBeforeDrawObservable.hasObservers()&&this.onBeforeDrawObservable.notifyObservers(this),this._localDraw(e),this._renderHighlight(e),this.clipChildren&&this._clipForChildren(e);for(var i=-1,r=-1,o=0,n=this._children;o<n.length;o++){var s=n[o];s.isVisible&&!s.notRenderable&&(s._tempParentMeasure.copyFrom(this._measureForChildren),s._draw(this._measureForChildren,e),s._renderHighlight(e),s.onAfterDrawObservable.hasObservers()&&s.onAfterDrawObservable.notifyObservers(s),this.adaptWidthToChildren&&s._width.isPixel&&(i=Math.max(i,s._currentMeasure.width)),this.adaptHeightToChildren&&s._height.isPixel&&(r=Math.max(r,s._currentMeasure.height)))}this.adaptWidthToChildren&&i>=0&&this.width!==i+"px"&&(this.width=i+"px",this._host._needRedraw=!0),this.adaptHeightToChildren&&r>=0&&this.height!==r+"px"&&(this.height=r+"px",this._host._needRedraw=!0)}e.restore(),this.onAfterDrawObservable.hasObservers()&&this.onAfterDrawObservable.notifyObservers(this)}},e.prototype._getDescendants=function(t,e,i){if(void 0===e&&(e=!1),this.children)for(var r=0;r<this.children.length;r++){var o=this.children[r];i&&!i(o)||t.push(o),e||o._getDescendants(t,!1,i)}},e.prototype._processPicking=function(e,i,r,o,n){if(!this.isVisible||this.notRenderable)return!1;if(!t.prototype.contains.call(this,e,i))return!1;for(var s=this._children.length-1;s>=0;s--){var h=this._children[s];if(h._processPicking(e,i,r,o,n))return h.hoverCursor&&this._host._changeCursor(h.hoverCursor),!0}return!!this.isHitTestVisible&&this._processObservables(r,e,i,o,n)},e.prototype._clipForChildren=function(t){},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.copyFrom(this._currentMeasure)},e.prototype.dispose=function(){t.prototype.dispose.call(this);for(var e=0,i=this._children;e<i.length;e++){i[e].dispose()}},e}(n.Control);e.Container=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(15),s=i(0),h=function(t){function e(e){var i=t.call(this,e)||this;return i._blockLayout=!1,i._children=new Array,i}return o(e,t),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blockLayout",{get:function(){return this._blockLayout},set:function(t){this._blockLayout!==t&&(this._blockLayout=t,this._blockLayout||this._arrangeChildren())},enumerable:!0,configurable:!0}),e.prototype.updateLayout=function(){return this._arrangeChildren(),this},e.prototype.containsControl=function(t){return-1!==this._children.indexOf(t)},e.prototype.addControl=function(t){return-1!==this._children.indexOf(t)?this:(t.parent=this,t._host=this._host,this._children.push(t),this._host.utilityLayer&&(t._prepareNode(this._host.utilityLayer.utilityLayerScene),t.node&&(t.node.parent=this.node),this.blockLayout||this._arrangeChildren()),this)},e.prototype._arrangeChildren=function(){},e.prototype._createNode=function(t){return new s.TransformNode("ContainerNode",t)},e.prototype.removeControl=function(t){var e=this._children.indexOf(t);return-1!==e&&(this._children.splice(e,1),t.parent=null,t._disposeNode()),this},e.prototype._getTypeName=function(){return"Container3D"},e.prototype.dispose=function(){for(var e=0,i=this._children;e<i.length;e++){i[e].dispose()}this._children=[],t.prototype.dispose.call(this)},e.UNSET_ORIENTATION=0,e.FACEORIGIN_ORIENTATION=1,e.FACEORIGINREVERSED_ORIENTATION=2,e.FACEFORWARD_ORIENTATION=3,e.FACEFORWARDREVERSED_ORIENTATION=4,e}(n.Control3D);e.Container3D=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,i,r){this.left=t,this.top=e,this.width=i,this.height=r}return t.prototype.copyFrom=function(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height},t.prototype.copyFromFloats=function(t,e,i,r){this.left=t,this.top=e,this.width=i,this.height=r},t.prototype.isEqualsTo=function(t){return this.left===t.left&&(this.top===t.top&&(this.width===t.width&&this.height===t.height))},t.Empty=function(){return new t(0,0,0,0)},t}();e.Measure=r},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n,s=i(0),h=i(2),a=i(1);!function(t){t[t.Clip=0]="Clip",t[t.WordWrap=1]="WordWrap",t[t.Ellipsis=2]="Ellipsis"}(n=e.TextWrapping||(e.TextWrapping={}));var l=function(t){function e(e,i){void 0===i&&(i="");var r=t.call(this,e)||this;return r.name=e,r._text="",r._textWrapping=n.Clip,r._textHorizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_CENTER,r._textVerticalAlignment=a.Control.VERTICAL_ALIGNMENT_CENTER,r._resizeToFit=!1,r._lineSpacing=new h.ValueAndUnit(0),r._outlineWidth=0,r._outlineColor="white",r.onTextChangedObservable=new s.Observable,r.onLinesReadyObservable=new s.Observable,r.text=i,r}return o(e,t),Object.defineProperty(e.prototype,"lines",{get:function(){return this._lines},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resizeToFit",{get:function(){return this._resizeToFit},set:function(t){this._resizeToFit=t,this._resizeToFit&&(this._width.ignoreAdaptiveScaling=!0,this._height.ignoreAdaptiveScaling=!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textWrapping",{get:function(){return this._textWrapping},set:function(t){this._textWrapping!==t&&(this._textWrapping=+t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textHorizontalAlignment",{get:function(){return this._textHorizontalAlignment},set:function(t){this._textHorizontalAlignment!==t&&(this._textHorizontalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textVerticalAlignment",{get:function(){return this._textVerticalAlignment},set:function(t){this._textVerticalAlignment!==t&&(this._textVerticalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lineSpacing",{get:function(){return this._lineSpacing.toString(this._host)},set:function(t){this._lineSpacing.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outlineWidth",{get:function(){return this._outlineWidth},set:function(t){this._outlineWidth!==t&&(this._outlineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outlineColor",{get:function(){return this._outlineColor},set:function(t){this._outlineColor!==t&&(this._outlineColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"TextBlock"},e.prototype._drawText=function(t,e,i,r){var o=this._currentMeasure.width,n=0;switch(this._textHorizontalAlignment){case a.Control.HORIZONTAL_ALIGNMENT_LEFT:n=0;break;case a.Control.HORIZONTAL_ALIGNMENT_RIGHT:n=o-e;break;case a.Control.HORIZONTAL_ALIGNMENT_CENTER:n=(o-e)/2}(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(r.shadowColor=this.shadowColor,r.shadowBlur=this.shadowBlur,r.shadowOffsetX=this.shadowOffsetX,r.shadowOffsetY=this.shadowOffsetY),this.outlineWidth&&r.strokeText(t,this._currentMeasure.left+n,i),r.fillText(t,this._currentMeasure.left+n,i)},e.prototype._draw=function(t,e){e.save(),this._applyStates(e),this._processMeasures(t,e)&&this._renderLines(e),e.restore()},e.prototype._applyStates=function(e){t.prototype._applyStates.call(this,e),this.outlineWidth&&(e.lineWidth=this.outlineWidth,e.strokeStyle=this.outlineColor)},e.prototype._additionalProcessing=function(t,e){this._lines=this._breakLines(this._currentMeasure.width,e),this.onLinesReadyObservable.notifyObservers(this)},e.prototype._breakLines=function(t,e){var i=[],r=this.text.split("\n");if(this._textWrapping!==n.Ellipsis||this._resizeToFit)if(this._textWrapping!==n.WordWrap||this._resizeToFit)for(var o=0,s=r;o<s.length;o++){l=s[o];i.push(this._parseLine(l,e))}else for(var h=0,a=r;h<a.length;h++){var l=a[h];i.push.apply(i,this._parseLineWordWrap(l,t,e))}else for(var u=0,c=r;u<c.length;u++){var l=c[u];i.push(this._parseLineEllipsis(l,t,e))}return i},e.prototype._parseLine=function(t,e){return void 0===t&&(t=""),{text:t,width:e.measureText(t).width}},e.prototype._parseLineEllipsis=function(t,e,i){void 0===t&&(t="");var r=i.measureText(t).width;for(r>e&&(t+="…");t.length>2&&r>e;)t=t.slice(0,-2)+"…",r=i.measureText(t).width;return{text:t,width:r}},e.prototype._parseLineWordWrap=function(t,e,i){void 0===t&&(t="");for(var r=[],o=t.split(" "),n=0,s=0;s<o.length;s++){var h=s>0?t+" "+o[s]:o[0],a=i.measureText(h).width;a>e&&s>0?(r.push({text:t,width:n}),t=o[s],n=i.measureText(t).width):(n=a,t=h)}return r.push({text:t,width:n}),r},e.prototype._renderLines=function(t){var e=this._currentMeasure.height;this._fontOffset||(this._fontOffset=a.Control._GetFontOffset(t.font));var i=0;switch(this._textVerticalAlignment){case a.Control.VERTICAL_ALIGNMENT_TOP:i=this._fontOffset.ascent;break;case a.Control.VERTICAL_ALIGNMENT_BOTTOM:i=e-this._fontOffset.height*(this._lines.length-1)-this._fontOffset.descent;break;case a.Control.VERTICAL_ALIGNMENT_CENTER:i=this._fontOffset.ascent+(e-this._fontOffset.height*this._lines.length)/2}i+=this._currentMeasure.top;for(var r=0,o=0;o<this._lines.length;o++){var n=this._lines[o];0!==o&&0!==this._lineSpacing.internalValue&&(this._lineSpacing.isPixel?i+=this._lineSpacing.getValue(this._host):i+=this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)),this._drawText(n.text,n.width,i,t),i+=this._fontOffset.height,n.width>r&&(r=n.width)}this._resizeToFit&&(this.width=this.paddingLeftInPixels+this.paddingRightInPixels+r+"px",this.height=this.paddingTopInPixels+this.paddingBottomInPixels+this._fontOffset.height*this._lines.length+"px")},e.prototype.computeExpectedHeight=function(){if(this.text&&this.widthInPixels){var t=document.createElement("canvas").getContext("2d");if(t){this._applyStates(t),this._fontOffset||(this._fontOffset=a.Control._GetFontOffset(t.font));var e=this._lines?this._lines:this._breakLines(this.widthInPixels-this.paddingLeftInPixels-this.paddingRightInPixels,t);return this.paddingTopInPixels+this.paddingBottomInPixels+this._fontOffset.height*e.length}}return 0},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onTextChangedObservable.clear()},e}(a.Control);e.TextBlock=l},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=i(5),h=i(1),a=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isVertical=!0,i._manualWidth=!1,i._manualHeight=!1,i._doNotTrackManualChanges=!1,i._tempMeasureStore=s.Measure.Empty(),i}return o(e,t),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._doNotTrackManualChanges||(this._manualWidth=!0),this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._doNotTrackManualChanges||(this._manualHeight=!0),this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"StackPanel"},e.prototype._preMeasure=function(e,i){for(var r=0,o=0,n=0,s=this._children;n<s.length;n++){var a=s[n];this._tempMeasureStore.copyFrom(a._currentMeasure),a._currentMeasure.copyFrom(e),a._measure(),this._isVertical?(a.top=o+"px",a._top.ignoreAdaptiveScaling||a._markAsDirty(),a._top.ignoreAdaptiveScaling=!0,o+=a._currentMeasure.height,a._currentMeasure.width>r&&(r=a._currentMeasure.width),a.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP):(a.left=r+"px",a._left.ignoreAdaptiveScaling||a._markAsDirty(),a._left.ignoreAdaptiveScaling=!0,r+=a._currentMeasure.width,a._currentMeasure.height>o&&(o=a._currentMeasure.height),a.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT),a._currentMeasure.copyFrom(this._tempMeasureStore)}this._doNotTrackManualChanges=!0;var l,u,c=this.height,_=this.width;this._manualHeight||(this.height=o+"px"),this._manualWidth||(this.width=r+"px"),l=_!==this.width||!this._width.ignoreAdaptiveScaling,(u=c!==this.height||!this._height.ignoreAdaptiveScaling)&&(this._height.ignoreAdaptiveScaling=!0),l&&(this._width.ignoreAdaptiveScaling=!0),this._doNotTrackManualChanges=!1,(l||u)&&this._markAllAsDirty(),t.prototype._preMeasure.call(this,e,i)},e}(n.Container);e.StackPanel=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(4),s=i(0),h=function(t){function e(){var e=t.call(this)||this;return e._columns=10,e._rows=0,e._rowThenColum=!0,e._orientation=n.Container3D.FACEORIGIN_ORIENTATION,e.margin=0,e}return o(e,t),Object.defineProperty(e.prototype,"orientation",{get:function(){return this._orientation},set:function(t){var e=this;this._orientation!==t&&(this._orientation=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"columns",{get:function(){return this._columns},set:function(t){var e=this;this._columns!==t&&(this._columns=t,this._rowThenColum=!0,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return this._rows},set:function(t){var e=this;this._rows!==t&&(this._rows=t,this._rowThenColum=!1,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._arrangeChildren=function(){this._cellWidth=0,this._cellHeight=0;for(var t=0,e=0,i=0,r=s.Matrix.Invert(this.node.computeWorldMatrix(!0)),o=0,n=this._children;o<n.length;o++){if((y=n[o]).mesh){i++,y.mesh.computeWorldMatrix(!0);var h=y.mesh.getHierarchyBoundingVectors(),a=s.Tmp.Vector3[0],l=s.Tmp.Vector3[1];h.max.subtractToRef(h.min,l),l.scaleInPlace(.5),s.Vector3.TransformNormalToRef(l,r,a),this._cellWidth=Math.max(this._cellWidth,2*a.x),this._cellHeight=Math.max(this._cellHeight,2*a.y)}}this._cellWidth+=2*this.margin,this._cellHeight+=2*this.margin,this._rowThenColum?(e=this._columns,t=Math.ceil(i/this._columns)):(t=this._rows,e=Math.ceil(i/this._rows));var u=.5*e*this._cellWidth,c=.5*t*this._cellHeight,_=[],d=0;if(this._rowThenColum)for(var f=0;f<t;f++)for(var p=0;p<e&&(_.push(new s.Vector3(p*this._cellWidth-u+this._cellWidth/2,f*this._cellHeight-c+this._cellHeight/2,0)),!(++d>i));p++);else for(p=0;p<e;p++)for(f=0;f<t&&(_.push(new s.Vector3(p*this._cellWidth-u+this._cellWidth/2,f*this._cellHeight-c+this._cellHeight/2,0)),!(++d>i));f++);d=0;for(var g=0,b=this._children;g<b.length;g++){var y;(y=b[g]).mesh&&(this._mapGridNode(y,_[d]),d++)}this._finalProcessing()},e.prototype._finalProcessing=function(){},e}(n.Container3D);e.VolumeBasedPanel=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thickness=1,i._cornerRadius=0,i}return o(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cornerRadius",{get:function(){return this._cornerRadius},set:function(t){t<0&&(t=0),this._cornerRadius!==t&&(this._cornerRadius=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Rectangle"},e.prototype._localDraw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._background&&(t.fillStyle=this._background,this._cornerRadius?(this._drawRoundedRect(t,this._thickness/2),t.fill()):t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._thickness&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,this._cornerRadius?(this._drawRoundedRect(t,this._thickness/2),t.stroke()):t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness},e.prototype._drawRoundedRect=function(t,e){void 0===e&&(e=0);var i=this._currentMeasure.left+e,r=this._currentMeasure.top+e,o=this._currentMeasure.width-2*e,n=this._currentMeasure.height-2*e,s=Math.min(n/2-2,Math.min(o/2-2,this._cornerRadius));t.beginPath(),t.moveTo(i+s,r),t.lineTo(i+o-s,r),t.quadraticCurveTo(i+o,r,i+o,r+s),t.lineTo(i+o,r+n-s),t.quadraticCurveTo(i+o,r+n,i+o-s,r+n),t.lineTo(i+s,r+n),t.quadraticCurveTo(i,r+n,i,r+n-s),t.lineTo(i,r+s),t.quadraticCurveTo(i,r,i+s,r),t.closePath()},e.prototype._clipForChildren=function(t){this._cornerRadius&&(this._drawRoundedRect(t,this._thickness),t.clip())},e}(i(3).Container);e.Rectangle=n},function(t,e,i){"use strict";function r(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),r(i(18)),r(i(20)),r(i(32)),r(i(3)),r(i(1)),r(i(33)),r(i(21)),r(i(11)),r(i(22)),r(i(34)),r(i(35)),r(i(36)),r(i(24)),r(i(7)),r(i(37)),r(i(38)),r(i(6)),r(i(39)),r(i(9)),r(i(40)),r(i(13)),r(i(12)),r(i(41)),r(i(42))},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),h=function(t){function e(i,r){void 0===r&&(r=null);var o=t.call(this,i)||this;return o.name=i,o._loaded=!1,o._stretch=e.STRETCH_FILL,o._autoScale=!1,o._sourceLeft=0,o._sourceTop=0,o._sourceWidth=0,o._sourceHeight=0,o._cellWidth=0,o._cellHeight=0,o._cellId=-1,o.onImageLoadedObservable=new s.Observable,o.source=r,o}return o(e,t),Object.defineProperty(e.prototype,"isLoaded",{get:function(){return this._loaded},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceLeft",{get:function(){return this._sourceLeft},set:function(t){this._sourceLeft!==t&&(this._sourceLeft=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceTop",{get:function(){return this._sourceTop},set:function(t){this._sourceTop!==t&&(this._sourceTop=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceWidth",{get:function(){return this._sourceWidth},set:function(t){this._sourceWidth!==t&&(this._sourceWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceHeight",{get:function(){return this._sourceHeight},set:function(t){this._sourceHeight!==t&&(this._sourceHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoScale",{get:function(){return this._autoScale},set:function(t){this._autoScale!==t&&(this._autoScale=t,t&&this._loaded&&this.synchronizeSizeWithContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stretch",{get:function(){return this._stretch},set:function(t){this._stretch!==t&&(this._stretch=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"domImage",{get:function(){return this._domImage},set:function(t){var e=this;this._domImage=t,this._loaded=!1,this._domImage.width?this._onImageLoaded():this._domImage.onload=function(){e._onImageLoaded()}},enumerable:!0,configurable:!0}),e.prototype._onImageLoaded=function(){this._imageWidth=this._domImage.width,this._imageHeight=this._domImage.height,this._loaded=!0,this._autoScale&&this.synchronizeSizeWithContent(),this.onImageLoadedObservable.notifyObservers(this),this._markAsDirty()},Object.defineProperty(e.prototype,"source",{set:function(t){var e=this;this._source!==t&&(this._loaded=!1,this._source=t,this._domImage=document.createElement("img"),this._domImage.onload=function(){e._onImageLoaded()},t&&(s.Tools.SetCorsBehavior(t,this._domImage),this._domImage.src=t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellWidth",{get:function(){return this._cellWidth},set:function(t){this._cellWidth!==t&&(this._cellWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellHeight",{get:function(){return this._cellHeight},set:function(t){this._cellHeight!==t&&(this._cellHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellId",{get:function(){return this._cellId},set:function(t){this._cellId!==t&&(this._cellId=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Image"},e.prototype.synchronizeSizeWithContent=function(){this._loaded&&(this.width=this._domImage.width+"px",this.height=this._domImage.height+"px")},e.prototype._draw=function(t,i){var r,o,n,s;if(i.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(i.shadowColor=this.shadowColor,i.shadowBlur=this.shadowBlur,i.shadowOffsetX=this.shadowOffsetX,i.shadowOffsetY=this.shadowOffsetY),-1==this.cellId)r=this._sourceLeft,o=this._sourceTop,n=this._sourceWidth?this._sourceWidth:this._imageWidth,s=this._sourceHeight?this._sourceHeight:this._imageHeight;else{var h=this._domImage.naturalWidth/this.cellWidth,a=this.cellId/h>>0,l=this.cellId%h;r=this.cellWidth*l,o=this.cellHeight*a,n=this.cellWidth,s=this.cellHeight}if(this._applyStates(i),this._processMeasures(t,i)&&this._loaded)switch(this._stretch){case e.STRETCH_NONE:case e.STRETCH_FILL:i.drawImage(this._domImage,r,o,n,s,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case e.STRETCH_UNIFORM:var u=this._currentMeasure.width/n,c=this._currentMeasure.height/s,_=Math.min(u,c),d=(this._currentMeasure.width-n*_)/2,f=(this._currentMeasure.height-s*_)/2;i.drawImage(this._domImage,r,o,n,s,this._currentMeasure.left+d,this._currentMeasure.top+f,n*_,s*_);break;case e.STRETCH_EXTEND:i.drawImage(this._domImage,r,o,n,s,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),this._autoScale&&this.synchronizeSizeWithContent(),this._root&&this._root.parent&&(this._root.width=this.width,this._root.height=this.height)}i.restore()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onImageLoadedObservable.clear()},e.STRETCH_NONE=0,e.STRETCH_FILL=1,e.STRETCH_UNIFORM=2,e.STRETCH_EXTEND=3,e}(n.Control);e.Image=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._background="black",i._borderColor="white",i._isThumbCircle=!1,i}return o(e,t),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._borderColor},set:function(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isThumbCircle",{get:function(){return this._isThumbCircle},set:function(t){this._isThumbCircle!==t&&(this._isThumbCircle=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Slider"},e.prototype._draw=function(t,e){if(e.save(),this._applyStates(e),this._processMeasures(t,e)){this._prepareRenderingData(this.isThumbCircle?"circle":"rectangle");var i=this._renderLeft,r=this._renderTop,o=this._renderWidth,n=this._renderHeight,s=0;this.isThumbClamped&&this.isThumbCircle?(this.isVertical?r+=this._effectiveThumbThickness/2:i+=this._effectiveThumbThickness/2,s=this._backgroundBoxThickness/2):s=(this._effectiveThumbThickness-this._effectiveBarOffset)/2,(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY);var h=this._getThumbPosition();e.fillStyle=this._background,this.isVertical?this.isThumbClamped?this.isThumbCircle?(e.beginPath(),e.arc(i+this._backgroundBoxThickness/2,r,s,Math.PI,2*Math.PI),e.fill(),e.fillRect(i,r,o,n)):e.fillRect(i,r,o,n+this._effectiveThumbThickness):e.fillRect(i,r,o,n):this.isThumbClamped?this.isThumbCircle?(e.beginPath(),e.arc(i+this._backgroundBoxLength,r+this._backgroundBoxThickness/2,s,0,2*Math.PI),e.fill(),e.fillRect(i,r,o,n)):e.fillRect(i,r,o+this._effectiveThumbThickness,n):e.fillRect(i,r,o,n),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),e.fillStyle=this.color,this.isVertical?this.isThumbClamped?this.isThumbCircle?(e.beginPath(),e.arc(i+this._backgroundBoxThickness/2,r+this._backgroundBoxLength,s,0,2*Math.PI),e.fill(),e.fillRect(i,r+h,o,n-h)):e.fillRect(i,r+h,o,n-h+this._effectiveThumbThickness):e.fillRect(i,r+h,o,n-h):this.isThumbClamped&&this.isThumbCircle?(e.beginPath(),e.arc(i,r+this._backgroundBoxThickness/2,s,0,2*Math.PI),e.fill(),e.fillRect(i,r,h,n)):e.fillRect(i,r,h,n),this.displayThumb&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY),this._isThumbCircle?(e.beginPath(),this.isVertical?e.arc(i+this._backgroundBoxThickness/2,r+h,s,0,2*Math.PI):e.arc(i+h,r+this._backgroundBoxThickness/2,s,0,2*Math.PI),e.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),e.strokeStyle=this._borderColor,e.stroke()):(this.isVertical?e.fillRect(i-this._effectiveBarOffset,this._currentMeasure.top+h,this._currentMeasure.width,this._effectiveThumbThickness):e.fillRect(this._currentMeasure.left+h,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),e.strokeStyle=this._borderColor,this.isVertical?e.strokeRect(i-this._effectiveBarOffset,this._currentMeasure.top+h,this._currentMeasure.width,this._effectiveThumbThickness):e.strokeRect(this._currentMeasure.left+h,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height)))}e.restore()},e}(i(13).BaseSlider);e.Slider=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(2),h=i(0),a=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thumbWidth=new s.ValueAndUnit(20,s.ValueAndUnit.UNITMODE_PIXEL,!1),i._minimum=0,i._maximum=100,i._value=50,i._isVertical=!1,i._barOffset=new s.ValueAndUnit(5,s.ValueAndUnit.UNITMODE_PIXEL,!1),i._isThumbClamped=!1,i._displayThumb=!0,i._effectiveBarOffset=0,i.onValueChangedObservable=new h.Observable,i._pointerIsDown=!1,i.isPointerBlocker=!0,i}return o(e,t),Object.defineProperty(e.prototype,"displayThumb",{get:function(){return this._displayThumb},set:function(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barOffset",{get:function(){return this._barOffset.toString(this._host)},set:function(t){this._barOffset.toString(this._host)!==t&&this._barOffset.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barOffsetInPixels",{get:function(){return this._barOffset.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbWidth",{get:function(){return this._thumbWidth.toString(this._host)},set:function(t){this._thumbWidth.toString(this._host)!==t&&this._thumbWidth.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbWidthInPixels",{get:function(){return this._thumbWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minimum",{get:function(){return this._minimum},set:function(t){this._minimum!==t&&(this._minimum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maximum",{get:function(){return this._maximum},set:function(t){this._maximum!==t&&(this._maximum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){t=Math.max(Math.min(t,this._maximum),this._minimum),this._value!==t&&(this._value=t,this._markAsDirty(),this.onValueChangedObservable.notifyObservers(this._value))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isThumbClamped",{get:function(){return this._isThumbClamped},set:function(t){this._isThumbClamped!==t&&(this._isThumbClamped=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"BaseSlider"},e.prototype._getThumbPosition=function(){return this.isVertical?(this.maximum-this.value)/(this.maximum-this.minimum)*this._backgroundBoxLength:(this.value-this.minimum)/(this.maximum-this.minimum)*this._backgroundBoxLength},e.prototype._getThumbThickness=function(t){var e=0;switch(t){case"circle":e=this._thumbWidth.isPixel?Math.max(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host);break;case"rectangle":e=this._thumbWidth.isPixel?Math.min(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)}return e},e.prototype._prepareRenderingData=function(t){this._effectiveBarOffset=0,this._renderLeft=this._currentMeasure.left,this._renderTop=this._currentMeasure.top,this._renderWidth=this._currentMeasure.width,this._renderHeight=this._currentMeasure.height,this._backgroundBoxLength=Math.max(this._currentMeasure.width,this._currentMeasure.height),this._backgroundBoxThickness=Math.min(this._currentMeasure.width,this._currentMeasure.height),this._effectiveThumbThickness=this._getThumbThickness(t),this.displayThumb&&(this._backgroundBoxLength-=this._effectiveThumbThickness),this.isVertical&&this._currentMeasure.height<this._currentMeasure.width?console.error("Height should be greater than width"):(this._barOffset.isPixel?this._effectiveBarOffset=Math.min(this._barOffset.getValue(this._host),this._backgroundBoxThickness):this._effectiveBarOffset=this._backgroundBoxThickness*this._barOffset.getValue(this._host),this._backgroundBoxThickness-=2*this._effectiveBarOffset,this.isVertical?(this._renderLeft+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderTop+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxLength,this._renderWidth=this._backgroundBoxThickness):(this._renderTop+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderLeft+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxThickness,this._renderWidth=this._backgroundBoxLength))},e.prototype._updateValueFromPointer=function(t,e){0!=this.rotation&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y),this._isVertical?this.value=this._minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this._maximum-this._minimum):this.value=this._minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this._maximum-this._minimum)},e.prototype._onPointerDown=function(e,i,r,o){return!!t.prototype._onPointerDown.call(this,e,i,r,o)&&(this._pointerIsDown=!0,this._updateValueFromPointer(i.x,i.y),this._host._capturingControl[r]=this,!0)},e.prototype._onPointerMove=function(e,i){this._pointerIsDown&&this._updateValueFromPointer(i.x,i.y),t.prototype._onPointerMove.call(this,e,i)},e.prototype._onPointerUp=function(e,i,r,o,n){this._pointerIsDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,o,n)},e}(n.Control);e.BaseSlider=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=i(3),h=i(25),a=i(5),l=function(t){function e(e,i,r,o,h,a){void 0===i&&(i=0),void 0===r&&(r=0),void 0===h&&(h=!1),void 0===a&&(a=n.Texture.NEAREST_SAMPLINGMODE);var l=t.call(this,e,{width:i,height:r},o,h,a,n.Engine.TEXTUREFORMAT_RGBA)||this;return l._isDirty=!1,l._rootContainer=new s.Container("root"),l._lastControlOver={},l._lastControlDown={},l._capturingControl={},l._linkedControls=new Array,l._isFullscreen=!1,l._fullscreenViewport=new n.Viewport(0,0,1,1),l._idealWidth=0,l._idealHeight=0,l._useSmallestIdeal=!1,l._renderAtIdealSize=!1,l._blockNextFocusCheck=!1,l._renderScale=1,l._needRedraw=!1,l._clipboardData="",l.onClipboardObservable=new n.Observable,l.onControlPickedObservable=new n.Observable,l.premulAlpha=!1,l.onClipboardCopy=function(t){var e=new n.ClipboardInfo(n.ClipboardEventTypes.COPY,t);l.onClipboardObservable.notifyObservers(e),t.preventDefault()},l.onClipboardCut=function(t){var e=new n.ClipboardInfo(n.ClipboardEventTypes.CUT,t);l.onClipboardObservable.notifyObservers(e),t.preventDefault()},l.onClipboardPaste=function(t){var e=new n.ClipboardInfo(n.ClipboardEventTypes.PASTE,t);l.onClipboardObservable.notifyObservers(e),t.preventDefault()},(o=l.getScene())&&l._texture?(l._rootCanvas=o.getEngine().getRenderingCanvas(),l._renderObserver=o.onBeforeCameraRenderObservable.add(function(t){return l._checkUpdate(t)}),l._preKeyboardObserver=o.onPreKeyboardObservable.add(function(t){l._focusedControl&&(t.type===n.KeyboardEventTypes.KEYDOWN&&l._focusedControl.processKeyboard(t.event),t.skipOnPointerObservable=!0)}),l._rootContainer._link(null,l),l.hasAlpha=!0,i&&r||(l._resizeObserver=o.getEngine().onResizeObservable.add(function(){return l._onResize()}),l._onResize()),l._texture.isReady=!0,l):l}return o(e,t),Object.defineProperty(e.prototype,"renderScale",{get:function(){return this._renderScale},set:function(t){t!==this._renderScale&&(this._renderScale=t,this._onResize())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this.markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealWidth",{get:function(){return this._idealWidth},set:function(t){this._idealWidth!==t&&(this._idealWidth=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealHeight",{get:function(){return this._idealHeight},set:function(t){this._idealHeight!==t&&(this._idealHeight=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useSmallestIdeal",{get:function(){return this._useSmallestIdeal},set:function(t){this._useSmallestIdeal!==t&&(this._useSmallestIdeal=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderAtIdealSize",{get:function(){return this._renderAtIdealSize},set:function(t){this._renderAtIdealSize!==t&&(this._renderAtIdealSize=t,this._onResize())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layer",{get:function(){return this._layerToDispose},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rootContainer",{get:function(){return this._rootContainer},enumerable:!0,configurable:!0}),e.prototype.getChildren=function(){return[this._rootContainer]},e.prototype.getDescendants=function(t,e){return this._rootContainer.getDescendants(t,e)},Object.defineProperty(e.prototype,"focusedControl",{get:function(){return this._focusedControl},set:function(t){this._focusedControl!=t&&(this._focusedControl&&this._focusedControl.onBlur(),t&&t.onFocus(),this._focusedControl=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isForeground",{get:function(){return!this.layer||!this.layer.isBackground},set:function(t){this.layer&&this.layer.isBackground!==!t&&(this.layer.isBackground=!t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clipboardData",{get:function(){return this._clipboardData},set:function(t){this._clipboardData=t},enumerable:!0,configurable:!0}),e.prototype.getClassName=function(){return"AdvancedDynamicTexture"},e.prototype.executeOnAllControls=function(t,e){e||(e=this._rootContainer),t(e);for(var i=0,r=e.children;i<r.length;i++){var o=r[i];o.children?this.executeOnAllControls(t,o):t(o)}},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype.createStyle=function(){return new h.Style(this)},e.prototype.addControl=function(t){return this._rootContainer.addControl(t),this},e.prototype.removeControl=function(t){return this._rootContainer.removeControl(t),this},e.prototype.dispose=function(){var e=this.getScene();e&&(this._rootCanvas=null,e.onBeforeCameraRenderObservable.remove(this._renderObserver),this._resizeObserver&&e.getEngine().onResizeObservable.remove(this._resizeObserver),this._pointerMoveObserver&&e.onPrePointerObservable.remove(this._pointerMoveObserver),this._pointerObserver&&e.onPointerObservable.remove(this._pointerObserver),this._preKeyboardObserver&&e.onPreKeyboardObservable.remove(this._preKeyboardObserver),this._canvasPointerOutObserver&&e.getEngine().onCanvasPointerOutObservable.remove(this._canvasPointerOutObserver),this._layerToDispose&&(this._layerToDispose.texture=null,this._layerToDispose.dispose(),this._layerToDispose=null),this._rootContainer.dispose(),this.onClipboardObservable.clear(),this.onControlPickedObservable.clear(),t.prototype.dispose.call(this))},e.prototype._onResize=function(){var t=this.getScene();if(t){var e=t.getEngine(),i=this.getSize(),r=e.getRenderWidth()*this._renderScale,o=e.getRenderHeight()*this._renderScale;this._renderAtIdealSize&&(this._idealWidth?(o=o*this._idealWidth/r,r=this._idealWidth):this._idealHeight&&(r=r*this._idealHeight/o,o=this._idealHeight)),i.width===r&&i.height===o||(this.scaleTo(r,o),this.markAsDirty(),(this._idealWidth||this._idealHeight)&&this._rootContainer._markAllAsDirty())}},e.prototype._getGlobalViewport=function(t){var e=t.getEngine();return this._fullscreenViewport.toGlobal(e.getRenderWidth(),e.getRenderHeight())},e.prototype.getProjectedPosition=function(t,e){var i=this.getScene();if(!i)return n.Vector2.Zero();var r=this._getGlobalViewport(i),o=n.Vector3.Project(t,e,i.getTransformMatrix(),r);return o.scaleInPlace(this.renderScale),new n.Vector2(o.x,o.y)},e.prototype._checkUpdate=function(t){if(!this._layerToDispose||0!=(t.layerMask&this._layerToDispose.layerMask)){if(this._isFullscreen&&this._linkedControls.length){var e=this.getScene();if(!e)return;for(var i=this._getGlobalViewport(e),r=0,o=this._linkedControls;r<o.length;r++){var s=o[r];if(s.isVisible){var h=s._linkedMesh;if(h&&!h.isDisposed()){var a=h.getBoundingInfo().boundingSphere.center,l=n.Vector3.Project(a,h.getWorldMatrix(),e.getTransformMatrix(),i);l.z<0||l.z>1?s.notRenderable=!0:(s.notRenderable=!1,l.scaleInPlace(this.renderScale),s._moveToProjectedPosition(l))}else n.Tools.SetImmediate(function(){s.linkWithMesh(null)})}}}(this._isDirty||this._rootContainer.isDirty)&&(this._isDirty=!1,this._render(),this.update(!0,this.premulAlpha))}},e.prototype._render=function(){var t=this.getSize(),e=t.width,i=t.height,r=this.getContext();r.clearRect(0,0,e,i),this._background&&(r.save(),r.fillStyle=this._background,r.fillRect(0,0,e,i),r.restore()),r.font="18px Arial",r.strokeStyle="white";var o=new a.Measure(0,0,e,i);this._rootContainer._draw(o,r),this._needRedraw&&(this._needRedraw=!1,this._render())},e.prototype._changeCursor=function(t){this._rootCanvas&&(this._rootCanvas.style.cursor=t)},e.prototype._registerLastControlDown=function(t,e){this._lastControlDown[e]=t,this.onControlPickedObservable.notifyObservers(t)},e.prototype._doPicking=function(t,e,i,r,o){var s=this.getScene();if(s){var h=s.getEngine(),a=this.getSize();if(this._isFullscreen){var l=(s.cameraToUseForPointers||s.activeCamera).viewport;t*=a.width/(h.getRenderWidth()*l.width),e*=a.height/(h.getRenderHeight()*l.height)}this._capturingControl[r]?this._capturingControl[r]._processObservables(i,t,e,r,o):(this._rootContainer._processPicking(t,e,i,r,o)||(this._changeCursor(""),i===n.PointerEventTypes.POINTERMOVE&&this._lastControlOver[r]&&(this._lastControlOver[r]._onPointerOut(this._lastControlOver[r]),delete this._lastControlOver[r])),this._manageFocus())}},e.prototype._cleanControlAfterRemovalFromList=function(t,e){for(var i in t){if(t.hasOwnProperty(i))t[i]===e&&delete t[i]}},e.prototype._cleanControlAfterRemoval=function(t){this._cleanControlAfterRemovalFromList(this._lastControlDown,t),this._cleanControlAfterRemovalFromList(this._lastControlOver,t)},e.prototype.attach=function(){var t=this,e=this.getScene();e&&(this._pointerMoveObserver=e.onPrePointerObservable.add(function(i,r){if(!e.isPointerCaptured(i.event.pointerId)&&(i.type===n.PointerEventTypes.POINTERMOVE||i.type===n.PointerEventTypes.POINTERUP||i.type===n.PointerEventTypes.POINTERDOWN)&&e){var o=e.cameraToUseForPointers||e.activeCamera;if(o){var s=e.getEngine(),h=o.viewport.toGlobal(s.getRenderWidth(),s.getRenderHeight()),a=e.pointerX/s.getHardwareScalingLevel()-h.x,l=e.pointerY/s.getHardwareScalingLevel()-(s.getRenderHeight()-h.y-h.height);t._shouldBlockPointer=!1,t._doPicking(a,l,i.type,i.event.pointerId||0,i.event.button),t._shouldBlockPointer&&(i.skipOnPointerObservable=t._shouldBlockPointer)}}}),this._attachToOnPointerOut(e))},e.prototype.registerClipboardEvents=function(){self.addEventListener("copy",this.onClipboardCopy,!1),self.addEventListener("cut",this.onClipboardCut,!1),self.addEventListener("paste",this.onClipboardPaste,!1)},e.prototype.unRegisterClipboardEvents=function(){self.removeEventListener("copy",this.onClipboardCopy),self.removeEventListener("cut",this.onClipboardCut),self.removeEventListener("paste",this.onClipboardPaste)},e.prototype.attachToMesh=function(t,e){var i=this;void 0===e&&(e=!0);var r=this.getScene();r&&(this._pointerObserver=r.onPointerObservable.add(function(e,r){if(e.type===n.PointerEventTypes.POINTERMOVE||e.type===n.PointerEventTypes.POINTERUP||e.type===n.PointerEventTypes.POINTERDOWN){var o=e.event.pointerId||0;if(e.pickInfo&&e.pickInfo.hit&&e.pickInfo.pickedMesh===t){var s=e.pickInfo.getTextureCoordinates();if(s){var h=i.getSize();i._doPicking(s.x*h.width,(1-s.y)*h.height,e.type,o,e.event.button)}}else if(e.type===n.PointerEventTypes.POINTERUP){if(i._lastControlDown[o]&&i._lastControlDown[o]._forcePointerUp(o),delete i._lastControlDown[o],i.focusedControl){var a=i.focusedControl.keepsFocusWith(),l=!0;if(a)for(var u=0,c=a;u<c.length;u++){var _=c[u];if(i!==_._host){var d=_._host;if(d._lastControlOver[o]&&d._lastControlOver[o].isAscendant(_)){l=!1;break}}}l&&(i.focusedControl=null)}}else e.type===n.PointerEventTypes.POINTERMOVE&&(i._lastControlOver[o]&&i._lastControlOver[o]._onPointerOut(i._lastControlOver[o]),delete i._lastControlOver[o])}}),t.enablePointerMoveEvents=e,this._attachToOnPointerOut(r))},e.prototype.moveFocusToControl=function(t){this.focusedControl=t,this._lastPickedControl=t,this._blockNextFocusCheck=!0},e.prototype._manageFocus=function(){if(this._blockNextFocusCheck)return this._blockNextFocusCheck=!1,void(this._lastPickedControl=this._focusedControl);if(this._focusedControl&&this._focusedControl!==this._lastPickedControl){if(this._lastPickedControl.isFocusInvisible)return;this.focusedControl=null}},e.prototype._attachToOnPointerOut=function(t){var e=this;this._canvasPointerOutObserver=t.getEngine().onCanvasPointerOutObservable.add(function(t){e._lastControlOver[t.pointerId]&&e._lastControlOver[t.pointerId]._onPointerOut(e._lastControlOver[t.pointerId]),delete e._lastControlOver[t.pointerId],e._lastControlDown[t.pointerId]&&e._lastControlDown[t.pointerId]._forcePointerUp(),delete e._lastControlDown[t.pointerId]})},e.CreateForMesh=function(t,i,r,o,s){void 0===i&&(i=1024),void 0===r&&(r=1024),void 0===o&&(o=!0),void 0===s&&(s=!1);var h=new e(t.name+" AdvancedDynamicTexture",i,r,t.getScene(),!0,n.Texture.TRILINEAR_SAMPLINGMODE),a=new n.StandardMaterial("AdvancedDynamicTextureMaterial",t.getScene());return a.backFaceCulling=!1,a.diffuseColor=n.Color3.Black(),a.specularColor=n.Color3.Black(),s?(a.diffuseTexture=h,a.emissiveTexture=h,h.hasAlpha=!0):(a.emissiveTexture=h,a.opacityTexture=h),t.material=a,h.attachToMesh(t,o),h},e.CreateFullscreenUI=function(t,i,r,o){void 0===i&&(i=!0),void 0===r&&(r=null),void 0===o&&(o=n.Texture.BILINEAR_SAMPLINGMODE);var s=new e(t,0,0,r,!1,o),h=new n.Layer(t+"_layer",null,r,!i);return h.texture=s,s._layerToDispose=h,s._isFullscreen=!0,s.attach(),s},e}(n.DynamicTexture);e.AdvancedDynamicTexture=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),o=i(27),n=function(){function t(t){this.name=t,this._downCount=0,this._enterCount=-1,this._downPointerIds={},this._isVisible=!0,this.onPointerMoveObservable=new r.Observable,this.onPointerOutObservable=new r.Observable,this.onPointerDownObservable=new r.Observable,this.onPointerUpObservable=new r.Observable,this.onPointerClickObservable=new r.Observable,this.onPointerEnterObservable=new r.Observable,this._behaviors=new Array}return Object.defineProperty(t.prototype,"position",{get:function(){return this._node?this._node.position:r.Vector3.Zero()},set:function(t){this._node&&(this._node.position=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaling",{get:function(){return this._node?this._node.scaling:new r.Vector3(1,1,1)},set:function(t){this._node&&(this._node.scaling=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"behaviors",{get:function(){return this._behaviors},enumerable:!0,configurable:!0}),t.prototype.addBehavior=function(t){var e=this;if(-1!==this._behaviors.indexOf(t))return this;t.init();var i=this._host.scene;return i.isLoading?i.onDataLoadedObservable.addOnce(function(){t.attach(e)}):t.attach(this),this._behaviors.push(t),this},t.prototype.removeBehavior=function(t){var e=this._behaviors.indexOf(t);return-1===e?this:(this._behaviors[e].detach(),this._behaviors.splice(e,1),this)},t.prototype.getBehaviorByName=function(t){for(var e=0,i=this._behaviors;e<i.length;e++){var r=i[e];if(r.name===t)return r}return null},Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){if(this._isVisible!==t){this._isVisible=t;var e=this.mesh;e&&e.setEnabled(t)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"typeName",{get:function(){return this._getTypeName()},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return this._getTypeName()},t.prototype._getTypeName=function(){return"Control3D"},Object.defineProperty(t.prototype,"node",{get:function(){return this._node},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mesh",{get:function(){return this._node instanceof r.AbstractMesh?this._node:null},enumerable:!0,configurable:!0}),t.prototype.linkToTransformNode=function(t){return this._node&&(this._node.parent=t),this},t.prototype._prepareNode=function(t){if(!this._node){if(this._node=this._createNode(t),!this.node)return;this._node.metadata=this,this._node.position=this.position,this._node.scaling=this.scaling;var e=this.mesh;e&&(e.isPickable=!0,this._affectMaterial(e))}},t.prototype._createNode=function(t){return null},t.prototype._affectMaterial=function(t){t.material=null},t.prototype._onPointerMove=function(t,e){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)},t.prototype._onPointerEnter=function(t){return!(this._enterCount>0)&&(-1===this._enterCount&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this),this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)},t.prototype._onPointerOut=function(t){this._enterCount=0,this.onPointerOutObservable.notifyObservers(this,-1,t,this),this.pointerOutAnimation&&this.pointerOutAnimation()},t.prototype._onPointerDown=function(t,e,i,r){return 0===this._downCount&&(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new o.Vector3WithInfo(e,r),-1,t,this),this.pointerDownAnimation&&this.pointerDownAnimation(),!0)},t.prototype._onPointerUp=function(t,e,i,r,n){this._downCount=0,delete this._downPointerIds[i],n&&(this._enterCount>0||-1===this._enterCount)&&this.onPointerClickObservable.notifyObservers(new o.Vector3WithInfo(e,r),-1,t,this),this.onPointerUpObservable.notifyObservers(new o.Vector3WithInfo(e,r),-1,t,this),this.pointerUpAnimation&&this.pointerUpAnimation()},t.prototype.forcePointerUp=function(t){if(void 0===t&&(t=null),null!==t)this._onPointerUp(this,r.Vector3.Zero(),t,0,!0);else for(var e in this._downPointerIds)this._onPointerUp(this,r.Vector3.Zero(),+e,0,!0)},t.prototype._processObservables=function(t,e,i,o){if(t===r.PointerEventTypes.POINTERMOVE){this._onPointerMove(this,e);var n=this._host._lastControlOver[i];return n&&n!==this&&n._onPointerOut(this),n!==this&&this._onPointerEnter(this),this._host._lastControlOver[i]=this,!0}return t===r.PointerEventTypes.POINTERDOWN?(this._onPointerDown(this,e,i,o),this._host._lastControlDown[i]=this,this._host._lastPickedControl=this,!0):t===r.PointerEventTypes.POINTERUP&&(this._host._lastControlDown[i]&&this._host._lastControlDown[i]._onPointerUp(this,e,i,o,!0),delete this._host._lastControlDown[i],!0)},t.prototype._disposeNode=function(){this._node&&(this._node.dispose(),this._node=null)},t.prototype.dispose=function(){this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this._disposeNode();for(var t=0,e=this._behaviors;t<e.length;t++){e[t].detach()}},t}();e.Control3D=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(26),s=i(0),h=i(14),a=function(t){function e(e){var i=t.call(this,e)||this;return i._contentResolution=512,i._contentScaleRatio=2,i.pointerEnterAnimation=function(){i.mesh&&(i._currentMaterial.emissiveColor=s.Color3.Red())},i.pointerOutAnimation=function(){i._currentMaterial.emissiveColor=s.Color3.Black()},i.pointerDownAnimation=function(){i.mesh&&i.mesh.scaling.scaleInPlace(.95)},i.pointerUpAnimation=function(){i.mesh&&i.mesh.scaling.scaleInPlace(1/.95)},i}return o(e,t),Object.defineProperty(e.prototype,"contentResolution",{get:function(){return this._contentResolution},set:function(t){this._contentResolution!==t&&(this._contentResolution=t,this._resetContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentScaleRatio",{get:function(){return this._contentScaleRatio},set:function(t){this._contentScaleRatio!==t&&(this._contentScaleRatio=t,this._resetContent())},enumerable:!0,configurable:!0}),e.prototype._disposeFacadeTexture=function(){this._facadeTexture&&(this._facadeTexture.dispose(),this._facadeTexture=null)},e.prototype._resetContent=function(){this._disposeFacadeTexture(),this.content=this._content},Object.defineProperty(e.prototype,"content",{get:function(){return this._content},set:function(t){this._content=t,this._host&&this._host.utilityLayer&&(this._facadeTexture||(this._facadeTexture=new h.AdvancedDynamicTexture("Facade",this._contentResolution,this._contentResolution,this._host.utilityLayer.utilityLayerScene,!0,s.Texture.TRILINEAR_SAMPLINGMODE),this._facadeTexture.rootContainer.scaleX=this._contentScaleRatio,this._facadeTexture.rootContainer.scaleY=this._contentScaleRatio,this._facadeTexture.premulAlpha=!0),this._facadeTexture.addControl(t),this._applyFacade(this._facadeTexture))},enumerable:!0,configurable:!0}),e.prototype._applyFacade=function(t){this._currentMaterial.emissiveTexture=t},e.prototype._getTypeName=function(){return"Button3D"},e.prototype._createNode=function(t){for(var e=new Array(6),i=0;i<6;i++)e[i]=new s.Vector4(0,0,0,0);return e[1]=new s.Vector4(0,0,1,1),s.MeshBuilder.CreateBox(this.name+"_rootMesh",{width:1,height:1,depth:.08,faceUV:e},t)},e.prototype._affectMaterial=function(t){var e=new s.StandardMaterial(this.name+"Material",t.getScene());e.specularColor=s.Color3.Black(),t.material=e,this._currentMaterial=e,this._resetContent()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this._disposeFacadeTexture(),this._currentMaterial&&this._currentMaterial.dispose()},e}(n.AbstractButton3D);e.Button3D=a},function(t,e,i){"use strict";function r(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),r(i(31)),r(i(43))},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),s=i(1),h=i(6),a=i(11),l=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i.thickness=1,i.isPointerBlocker=!0,i.pointerEnterAnimation=function(){i.alpha-=.1},i.pointerOutAnimation=function(){i.alpha+=.1},i.pointerDownAnimation=function(){i.scaleX-=.05,i.scaleY-=.05},i.pointerUpAnimation=function(){i.scaleX+=.05,i.scaleY+=.05},i}return o(e,t),Object.defineProperty(e.prototype,"image",{get:function(){return this._image},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textBlock",{get:function(){return this._textBlock},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Button"},e.prototype._processPicking=function(e,i,r,o,n){return!(!this.isHitTestVisible||!this.isVisible||this.notRenderable)&&(!!t.prototype.contains.call(this,e,i)&&(this._processObservables(r,e,i,o,n),!0))},e.prototype._onPointerEnter=function(e){return!!t.prototype._onPointerEnter.call(this,e)&&(this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)},e.prototype._onPointerOut=function(e){this.pointerOutAnimation&&this.pointerOutAnimation(),t.prototype._onPointerOut.call(this,e)},e.prototype._onPointerDown=function(e,i,r,o){return!!t.prototype._onPointerDown.call(this,e,i,r,o)&&(this.pointerDownAnimation&&this.pointerDownAnimation(),!0)},e.prototype._onPointerUp=function(e,i,r,o,n){this.pointerUpAnimation&&this.pointerUpAnimation(),t.prototype._onPointerUp.call(this,e,i,r,o,n)},e.CreateImageButton=function(t,i,r){var o=new e(t),n=new h.TextBlock(t+"_button",i);n.textWrapping=!0,n.textHorizontalAlignment=s.Control.HORIZONTAL_ALIGNMENT_CENTER,n.paddingLeft="20%",o.addControl(n);var l=new a.Image(t+"_icon",r);return l.width="20%",l.stretch=a.Image.STRETCH_UNIFORM,l.horizontalAlignment=s.Control.HORIZONTAL_ALIGNMENT_LEFT,o.addControl(l),o._image=l,o._textBlock=n,o},e.CreateImageOnlyButton=function(t,i){var r=new e(t),o=new a.Image(t+"_icon",i);return o.stretch=a.Image.STRETCH_FILL,o.horizontalAlignment=s.Control.HORIZONTAL_ALIGNMENT_LEFT,r.addControl(o),r._image=o,r},e.CreateSimpleButton=function(t,i){var r=new e(t),o=new h.TextBlock(t+"_button",i);return o.textWrapping=!0,o.textHorizontalAlignment=s.Control.HORIZONTAL_ALIGNMENT_CENTER,r.addControl(o),r._textBlock=o,r},e.CreateImageWithCenterTextButton=function(t,i,r){var o=new e(t),n=new a.Image(t+"_icon",r);n.stretch=a.Image.STRETCH_FILL,o.addControl(n);var l=new h.TextBlock(t+"_button",i);return l.textWrapping=!0,l.textHorizontalAlignment=s.Control.HORIZONTAL_ALIGNMENT_CENTER,o.addControl(l),o._image=n,o._textBlock=l,o},e}(n.Rectangle);e.Button=l},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){function e(e,i){void 0===i&&(i=0);var r=t.call(this,e.x,e.y)||this;return r.buttonIndex=i,r}return o(e,t),e}(n.Vector2);e.Vector2WithInfo=s;var h=function(){function t(t,e,i,r,o,n){this.m=new Float32Array(6),this.fromValues(t,e,i,r,o,n)}return t.prototype.fromValues=function(t,e,i,r,o,n){return this.m[0]=t,this.m[1]=e,this.m[2]=i,this.m[3]=r,this.m[4]=o,this.m[5]=n,this},t.prototype.determinant=function(){return this.m[0]*this.m[3]-this.m[1]*this.m[2]},t.prototype.invertToRef=function(t){var e=this.m[0],i=this.m[1],r=this.m[2],o=this.m[3],s=this.m[4],h=this.m[5],a=this.determinant();if(a<n.Epsilon*n.Epsilon)return t.m[0]=0,t.m[1]=0,t.m[2]=0,t.m[3]=0,t.m[4]=0,t.m[5]=0,this;var l=1/a,u=r*h-o*s,c=i*s-e*h;return t.m[0]=o*l,t.m[1]=-i*l,t.m[2]=-r*l,t.m[3]=e*l,t.m[4]=u*l,t.m[5]=c*l,this},t.prototype.multiplyToRef=function(t,e){var i=this.m[0],r=this.m[1],o=this.m[2],n=this.m[3],s=this.m[4],h=this.m[5],a=t.m[0],l=t.m[1],u=t.m[2],c=t.m[3],_=t.m[4],d=t.m[5];return e.m[0]=i*a+r*u,e.m[1]=i*l+r*c,e.m[2]=o*a+n*u,e.m[3]=o*l+n*c,e.m[4]=s*a+h*u+_,e.m[5]=s*l+h*c+d,this},t.prototype.transformCoordinates=function(t,e,i){return i.x=t*this.m[0]+e*this.m[2]+this.m[4],i.y=t*this.m[1]+e*this.m[3]+this.m[5],this},t.Identity=function(){return new t(1,0,0,1,0,0)},t.TranslationToRef=function(t,e,i){i.fromValues(1,0,0,1,t,e)},t.ScalingToRef=function(t,e,i){i.fromValues(t,0,0,e,0,0)},t.RotationToRef=function(t,e){var i=Math.sin(t),r=Math.cos(t);e.fromValues(r,i,-i,r,0,0)},t.ComposeToRef=function(e,i,r,o,n,s,h){t.TranslationToRef(e,i,t._TempPreTranslationMatrix),t.ScalingToRef(o,n,t._TempScalingMatrix),t.RotationToRef(r,t._TempRotationMatrix),t.TranslationToRef(-e,-i,t._TempPostTranslationMatrix),t._TempPreTranslationMatrix.multiplyToRef(t._TempScalingMatrix,t._TempCompose0),t._TempCompose0.multiplyToRef(t._TempRotationMatrix,t._TempCompose1),s?(t._TempCompose1.multiplyToRef(t._TempPostTranslationMatrix,t._TempCompose2),t._TempCompose2.multiplyToRef(s,h)):t._TempCompose1.multiplyToRef(t._TempPostTranslationMatrix,h)},t._TempPreTranslationMatrix=t.Identity(),t._TempPostTranslationMatrix=t.Identity(),t._TempRotationMatrix=t.Identity(),t._TempScalingMatrix=t.Identity(),t._TempCompose0=t.Identity(),t._TempCompose1=t.Identity(),t._TempCompose2=t.Identity(),t}();e.Matrix2D=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),h=i(7),a=i(6),l=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isChecked=!1,i._background="black",i._checkSizeRatio=.8,i._thickness=1,i.onIsCheckedChangedObservable=new s.Observable,i.isPointerBlocker=!0,i}return o(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checkSizeRatio",{get:function(){return this._checkSizeRatio},set:function(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isChecked",{get:function(){return this._isChecked},set:function(t){this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t))},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Checkbox"},e.prototype._draw=function(t,e){if(e.save(),this._applyStates(e),this._processMeasures(t,e)){var i=this._currentMeasure.width-this._thickness,r=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY),e.fillStyle=this._isEnabled?this._background:this._disabledColor,e.fillRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,i,r),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),this._isChecked){e.fillStyle=this._isEnabled?this.color:this._disabledColor;var o=i*this._checkSizeRatio,n=r*this._checkSizeRatio;e.fillRect(this._currentMeasure.left+this._thickness/2+(i-o)/2,this._currentMeasure.top+this._thickness/2+(r-n)/2,o,n)}e.strokeStyle=this.color,e.lineWidth=this._thickness,e.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,i,r)}e.restore()},e.prototype._onPointerDown=function(e,i,r,o){return!!t.prototype._onPointerDown.call(this,e,i,r,o)&&(this.isChecked=!this.isChecked,!0)},e.AddCheckBoxWithHeader=function(t,i){var r=new h.StackPanel;r.isVertical=!1,r.height="30px";var o=new e;o.width="20px",o.height="20px",o.isChecked=!0,o.color="green",o.onIsCheckedChangedObservable.add(i),r.addControl(o);var s=new a.TextBlock;return s.text=t,s.width="180px",s.paddingLeft="5px",s.textHorizontalAlignment=n.Control.HORIZONTAL_ALIGNMENT_LEFT,s.color="white",r.addControl(s),r},e}(n.Control);e.Checkbox=l},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=i(2),h=i(1),a=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._rowDefinitions=new Array,i._columnDefinitions=new Array,i._cells={},i._childControls=new Array,i}return o(e,t),Object.defineProperty(e.prototype,"columnCount",{get:function(){return this._columnDefinitions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowCount",{get:function(){return this._rowDefinitions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._childControls},enumerable:!0,configurable:!0}),e.prototype.addRowDefinition=function(t,e){return void 0===e&&(e=!1),this._rowDefinitions.push(new s.ValueAndUnit(t,e?s.ValueAndUnit.UNITMODE_PIXEL:s.ValueAndUnit.UNITMODE_PERCENTAGE)),this._markAsDirty(),this},e.prototype.addColumnDefinition=function(t,e){return void 0===e&&(e=!1),this._columnDefinitions.push(new s.ValueAndUnit(t,e?s.ValueAndUnit.UNITMODE_PIXEL:s.ValueAndUnit.UNITMODE_PERCENTAGE)),this._markAsDirty(),this},e.prototype.setRowDefinition=function(t,e,i){return void 0===i&&(i=!1),t<0||t>=this._rowDefinitions.length?this:(this._rowDefinitions[t]=new s.ValueAndUnit(e,i?s.ValueAndUnit.UNITMODE_PIXEL:s.ValueAndUnit.UNITMODE_PERCENTAGE),this._markAsDirty(),this)},e.prototype.setColumnDefinition=function(t,e,i){return void 0===i&&(i=!1),t<0||t>=this._columnDefinitions.length?this:(this._columnDefinitions[t]=new s.ValueAndUnit(e,i?s.ValueAndUnit.UNITMODE_PIXEL:s.ValueAndUnit.UNITMODE_PERCENTAGE),this._markAsDirty(),this)},e.prototype.getChildrenAt=function(t,e){var i=this._cells[t+":"+e];return i?i.children:null},e.prototype._removeCell=function(e,i){if(e){t.prototype.removeControl.call(this,e);for(var r=0,o=e.children;r<o.length;r++){var n=o[r],s=this._childControls.indexOf(n);-1!==s&&this._childControls.splice(s,1)}delete this._cells[i]}},e.prototype._offsetCell=function(t,e){if(this._cells[e]){this._cells[t]=this._cells[e];for(var i=0,r=this._cells[t].children;i<r.length;i++){r[i]._tag=t}delete this._cells[e]}},e.prototype.removeColumnDefinition=function(t){if(t<0||t>=this._columnDefinitions.length)return this;for(var e=0;e<this._rowDefinitions.length;e++){var i=e+":"+t,r=this._cells[i];this._removeCell(r,i)}for(e=0;e<this._rowDefinitions.length;e++)for(var o=t+1;o<this._columnDefinitions.length;o++){var n=e+":"+(o-1);i=e+":"+o;this._offsetCell(n,i)}return this._columnDefinitions.splice(t,1),this._markAsDirty(),this},e.prototype.removeRowDefinition=function(t){if(t<0||t>=this._rowDefinitions.length)return this;for(var e=0;e<this._columnDefinitions.length;e++){var i=t+":"+e,r=this._cells[i];this._removeCell(r,i)}for(e=0;e<this._columnDefinitions.length;e++)for(var o=t+1;o<this._rowDefinitions.length;o++){var n=o-1+":"+e;i=o+":"+e;this._offsetCell(n,i)}return this._rowDefinitions.splice(t,1),this._markAsDirty(),this},e.prototype.addControl=function(e,i,r){void 0===i&&(i=0),void 0===r&&(r=0),0===this._rowDefinitions.length&&this.addRowDefinition(1,!1),0===this._columnDefinitions.length&&this.addColumnDefinition(1,!1);var o=Math.min(i,this._rowDefinitions.length-1)+":"+Math.min(r,this._columnDefinitions.length-1),s=this._cells[o];return s||(s=new n.Container(o),this._cells[o]=s,s.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,s.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP,t.prototype.addControl.call(this,s)),s.addControl(e),this._childControls.push(e),e._tag=o,this._markAsDirty(),this},e.prototype.removeControl=function(t){var e=this._childControls.indexOf(t);-1!==e&&this._childControls.splice(e,1);var i=this._cells[t._tag];return i&&i.removeControl(t),this._markAsDirty(),this},e.prototype._getTypeName=function(){return"Grid"},e.prototype._getGridDefinitions=function(t){for(var e=[],i=[],r=[],o=[],n=this._currentMeasure.width,s=0,h=this._currentMeasure.height,a=0,l=0,u=0,c=this._rowDefinitions;u<c.length;u++){if((g=c[u]).isPixel)h-=p=g.getValue(this._host),i[l]=p;else a+=g.internalValue;l++}var _=0;l=0;for(var d=0,f=this._rowDefinitions;d<f.length;d++){var p,g=f[d];if(o.push(_),g.isPixel)_+=g.getValue(this._host);else _+=p=g.internalValue/a*h,i[l]=p;l++}l=0;for(var b=0,y=this._columnDefinitions;b<y.length;b++){if((g=y[b]).isPixel)n-=C=g.getValue(this._host),e[l]=C;else s+=g.internalValue;l++}var m=0;l=0;for(var v=0,O=this._columnDefinitions;v<O.length;v++){var C;g=O[v];if(r.push(m),g.isPixel)m+=g.getValue(this._host);else m+=C=g.internalValue/s*n,e[l]=C;l++}t(r,o,e,i)},e.prototype._additionalProcessing=function(e,i){var r=this;this._getGridDefinitions(function(t,e,i,o){for(var n in r._cells)if(r._cells.hasOwnProperty(n)){var s=n.split(":"),h=parseInt(s[0]),a=parseInt(s[1]),l=r._cells[n];l.left=t[a]+"px",l.top=e[h]+"px",l.width=i[a]+"px",l.height=o[h]+"px"}}),t.prototype._additionalProcessing.call(this,e,i)},e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t in this._cells){if(this._cells.hasOwnProperty(t))this._cells[t]._markMatrixAsDirty()}},e.prototype._renderHighlightSpecific=function(e){var i=this;this.isHighlighted&&(t.prototype._renderHighlightSpecific.call(this,e),this._getGridDefinitions(function(t,r,o,n){for(var s=0;s<t.length;s++){var h=i._currentMeasure.left+t[s]+o[s];e.beginPath(),e.moveTo(h,i._currentMeasure.top),e.lineTo(h,i._currentMeasure.top+i._currentMeasure.height),e.stroke()}for(s=0;s<r.length;s++){var a=i._currentMeasure.top+r[s]+n[s];e.beginPath(),e.moveTo(i._currentMeasure.left,a),e.lineTo(i._currentMeasure.left+i._currentMeasure.width,a),e.stroke()}}),e.restore())},e.prototype.dispose=function(){t.prototype.dispose.call(this);for(var e=0,i=this._childControls;e<i.length;e++){i[e].dispose()}},e}(n.Container);e.Grid=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(2),h=i(0),a=function(t){function e(e,i){void 0===i&&(i="");var r=t.call(this,e)||this;return r.name=e,r._text="",r._placeholderText="",r._background="#222222",r._focusedBackground="#000000",r._placeholderColor="gray",r._thickness=1,r._margin=new s.ValueAndUnit(10,s.ValueAndUnit.UNITMODE_PIXEL),r._autoStretchWidth=!0,r._maxWidth=new s.ValueAndUnit(1,s.ValueAndUnit.UNITMODE_PERCENTAGE,!1),r._isFocused=!1,r._blinkIsEven=!1,r._cursorOffset=0,r._deadKey=!1,r._addKey=!0,r._currentKey="",r._isTextHighlightOn=!1,r._textHighlightColor="#d5e0ff",r._highligherOpacity=.4,r._highlightedText="",r._startHighlightIndex=0,r._endHighlightIndex=0,r._onFocusSelectAll=!1,r.promptMessage="Please enter text:",r.onTextChangedObservable=new h.Observable,r.onBeforeKeyAddObservable=new h.Observable,r.onFocusObservable=new h.Observable,r.onBlurObservable=new h.Observable,r.onTextHighlightObservable=new h.Observable,r.onTextCopyObservable=new h.Observable,r.onTextCutObservable=new h.Observable,r.onTextPasteObservable=new h.Observable,r.text=i,r}return o(e,t),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth.toString(this._host)},set:function(t){this._maxWidth.toString(this._host)!==t&&this._maxWidth.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxWidthInPixels",{get:function(){return this._maxWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highligherOpacity",{get:function(){return this._highligherOpacity},set:function(t){this._highligherOpacity!==t&&(this._highligherOpacity=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onFocusSelectAll",{get:function(){return this._onFocusSelectAll},set:function(t){this._onFocusSelectAll!==t&&(this._onFocusSelectAll=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textHighlightColor",{get:function(){return this._textHighlightColor},set:function(t){this._textHighlightColor!==t&&(this._textHighlightColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"margin",{get:function(){return this._margin.toString(this._host)},set:function(t){this._margin.toString(this._host)!==t&&this._margin.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"marginInPixels",{get:function(){return this._margin.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoStretchWidth",{get:function(){return this._autoStretchWidth},set:function(t){this._autoStretchWidth!==t&&(this._autoStretchWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusedBackground",{get:function(){return this._focusedBackground},set:function(t){this._focusedBackground!==t&&(this._focusedBackground=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderColor",{get:function(){return this._placeholderColor},set:function(t){this._placeholderColor!==t&&(this._placeholderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderText",{get:function(){return this._placeholderText},set:function(t){this._placeholderText!==t&&(this._placeholderText=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"deadKey",{get:function(){return this._deadKey},set:function(t){this._deadKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightedText",{get:function(){return this._highlightedText},set:function(t){this._highlightedText!==t&&(this._highlightedText=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"addKey",{get:function(){return this._addKey},set:function(t){this._addKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentKey",{get:function(){return this._currentKey},set:function(t){this._currentKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){var e=t.toString();this._text!==e&&(this._text=e,this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&(this._width.fromString(t)&&this._markAsDirty(),this.autoStretchWidth=!1)},enumerable:!0,configurable:!0}),e.prototype.onBlur=function(){this._isFocused=!1,this._scrollLeft=null,this._cursorOffset=0,clearTimeout(this._blinkTimeout),this._markAsDirty(),this.onBlurObservable.notifyObservers(this),this._host.unRegisterClipboardEvents(),this._onClipboardObserver&&this._host.onClipboardObservable.remove(this._onClipboardObserver);var t=this._host.getScene();this._onPointerDblTapObserver&&t&&t.onPointerObservable.remove(this._onPointerDblTapObserver)},e.prototype.onFocus=function(){var t=this;if(this._isEnabled){if(this._scrollLeft=null,this._isFocused=!0,this._blinkIsEven=!1,this._cursorOffset=0,this._markAsDirty(),this.onFocusObservable.notifyObservers(this),-1!==navigator.userAgent.indexOf("Mobile")){var e=prompt(this.promptMessage);return null!==e&&(this.text=e),void(this._host.focusedControl=null)}this._host.registerClipboardEvents(),this._onClipboardObserver=this._host.onClipboardObservable.add(function(e){switch(e.type){case h.ClipboardEventTypes.COPY:t._onCopyText(e.event),t.onTextCopyObservable.notifyObservers(t);break;case h.ClipboardEventTypes.CUT:t._onCutText(e.event),t.onTextCutObservable.notifyObservers(t);break;case h.ClipboardEventTypes.PASTE:t._onPasteText(e.event),t.onTextPasteObservable.notifyObservers(t);break;default:return}});var i=this._host.getScene();i&&(this._onPointerDblTapObserver=i.onPointerObservable.add(function(e){t._isFocused&&e.type===BABYLON.PointerEventTypes.POINTERDOUBLETAP&&t._processDblClick(e)})),this._onFocusSelectAll&&this._selectAllText()}},e.prototype._getTypeName=function(){return"InputText"},e.prototype.keepsFocusWith=function(){return this._connectedVirtualKeyboard?[this._connectedVirtualKeyboard]:null},e.prototype.processKey=function(t,e,i){if(!i||!i.ctrlKey&&!i.metaKey||67!==t&&86!==t&&88!==t){if(i&&(i.ctrlKey||i.metaKey)&&65===t)return this._selectAllText(),void i.preventDefault();switch(t){case 32:e=" ";break;case 191:i&&i.preventDefault();break;case 8:if(this._text&&this._text.length>0){if(this._isTextHighlightOn)return this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex),this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex,this._blinkIsEven=!1,void(i&&i.preventDefault());if(0===this._cursorOffset)this.text=this._text.substr(0,this._text.length-1);else(o=this._text.length-this._cursorOffset)>0&&(this.text=this._text.slice(0,o-1)+this._text.slice(o))}return void(i&&i.preventDefault());case 46:if(this._isTextHighlightOn){this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex);for(var r=this._endHighlightIndex-this._startHighlightIndex;r>0&&this._cursorOffset>0;)this._cursorOffset--;return this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex,void(i&&i.preventDefault())}if(this._text&&this._text.length>0&&this._cursorOffset>0){var o=this._text.length-this._cursorOffset;this.text=this._text.slice(0,o)+this._text.slice(o+1),this._cursorOffset--}return void(i&&i.preventDefault());case 13:return void(this._host.focusedControl=null);case 35:return this._cursorOffset=0,this._blinkIsEven=!1,void this._markAsDirty();case 36:return this._cursorOffset=this._text.length,this._blinkIsEven=!1,void this._markAsDirty();case 37:return i&&i.shiftKey&&(this._isTextHighlightOn||(this._isTextHighlightOn=!0,this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._endHighlightIndex),!(this._startHighlightIndex<0)&&--this._startHighlightIndex),this._cursorOffset++,this._cursorOffset>this._text.length&&(this._cursorOffset=this._text.length),this._blinkIsEven=!1,void this._markAsDirty();case 39:return i&&i.shiftKey&&(this._isTextHighlightOn||(this._isTextHighlightOn=!0,this._startHighlightIndex=this._text.length-this._cursorOffset,this._endHighlightIndex=this._startHighlightIndex),this._endHighlightIndex>this._text.length?this._text.length:++this._endHighlightIndex),this._cursorOffset--,this._cursorOffset<0&&(this._cursorOffset=0),this._blinkIsEven=!1,void this._markAsDirty();case 222:i&&i.preventDefault(),this.deadKey=!0}if(this._isTextHighlightOn=!1,e&&(-1===t||32===t||t>47&&t<64||t>64&&t<91||t>159&&t<193||t>218&&t<223||t>95&&t<112)&&(this._currentKey=e,this.onBeforeKeyAddObservable.notifyObservers(this),e=this._currentKey,this._addKey))if(0===this._cursorOffset)this.text+=e;else{var n=this._text.length-this._cursorOffset;this.text=this._text.slice(0,n)+e+this._text.slice(n)}}},e.prototype._processDblClick=function(t){this._startHighlightIndex=this._text.length-this._cursorOffset,this._endHighlightIndex=this._startHighlightIndex;for(var e=/\w+/g,i=1,r=1;this._startHighlightIndex>0&&this._endHighlightIndex<this._text.length&&(i||r);)r=-1!==this._text[this._endHighlightIndex].search(e)?++this._endHighlightIndex:0,i=-1!==this._text[this._startHighlightIndex-1].search(e)?--this._startHighlightIndex:0;this.onTextHighlightObservable.notifyObservers(this),this._isTextHighlightOn=!0,this._blinkIsEven=!1},e.prototype._selectAllText=function(){this._blinkIsEven=!1,this._isTextHighlightOn=!0,this._highlightedText||(this._startHighlightIndex=0,this._endHighlightIndex=this._text.length,this._cursorOffset=0)},e.prototype.processKeyboard=function(t){this.processKey(t.keyCode,t.key,t)},e.prototype._onCopyText=function(t){this._isTextHighlightOn=!1;try{t.clipboardData.setData("text/plain",this._highlightedText)}catch(t){}this._host.clipboardData=this._highlightedText},e.prototype._onCutText=function(t){if(this._highlightedText){this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex),this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex;try{t.clipboardData.setData("text/plain",this._highlightedText)}catch(t){}this._host.clipboardData=this._highlightedText,this._highlightedText=""}},e.prototype._onPasteText=function(t){var e="";e=t.clipboardData&&-1!==t.clipboardData.types.indexOf("text/plain")?t.clipboardData.getData("text/plain"):this._host.clipboardData;var i=this._text.length-this._cursorOffset;this.text=this._text.slice(0,i)+e+this._text.slice(i)},e.prototype._draw=function(t,e){var i=this;if(e.save(),this._applyStates(e),this._processMeasures(t,e)){(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY),this._isFocused?this._focusedBackground&&(e.fillStyle=this._isEnabled?this._focusedBackground:this._disabledColor,e.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)):this._background&&(e.fillStyle=this._isEnabled?this._background:this._disabledColor,e.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),this._fontOffset||(this._fontOffset=n.Control._GetFontOffset(e.font));var r=this._currentMeasure.left+this._margin.getValueInPixel(this._host,t.width);this.color&&(e.fillStyle=this.color);var o=this._beforeRenderText(this._text);this._isFocused||this._text||!this._placeholderText||(o=this._placeholderText,this._placeholderColor&&(e.fillStyle=this._placeholderColor)),this._textWidth=e.measureText(o).width;var s=2*this._margin.getValueInPixel(this._host,t.width);this._autoStretchWidth&&(this.width=Math.min(this._maxWidth.getValueInPixel(this._host,t.width),this._textWidth+s)+"px");var h=this._fontOffset.ascent+(this._currentMeasure.height-this._fontOffset.height)/2,a=this._width.getValueInPixel(this._host,t.width)-s;if(e.save(),e.beginPath(),e.rect(r,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,a+2,this._currentMeasure.height),e.clip(),this._isFocused&&this._textWidth>a){var l=r-this._textWidth+a;this._scrollLeft||(this._scrollLeft=l)}else this._scrollLeft=r;if(e.fillText(o,this._scrollLeft,this._currentMeasure.top+h),this._isFocused){if(this._clickedCoordinate){var u=this._scrollLeft+this._textWidth-this._clickedCoordinate,c=0;this._cursorOffset=0;var _=0;do{this._cursorOffset&&(_=Math.abs(u-c)),this._cursorOffset++,c=e.measureText(o.substr(o.length-this._cursorOffset,this._cursorOffset)).width}while(c<u&&o.length>=this._cursorOffset);Math.abs(u-c)>_&&this._cursorOffset--,this._blinkIsEven=!1,this._clickedCoordinate=null}if(!this._blinkIsEven){var d=this.text.substr(this._text.length-this._cursorOffset),f=e.measureText(d).width,p=this._scrollLeft+this._textWidth-f;p<r?(this._scrollLeft+=r-p,p=r,this._markAsDirty()):p>r+a&&(this._scrollLeft+=r+a-p,p=r+a,this._markAsDirty()),e.fillRect(p,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,2,this._fontOffset.height)}if(clearTimeout(this._blinkTimeout),this._blinkTimeout=setTimeout(function(){i._blinkIsEven=!i._blinkIsEven,i._markAsDirty()},500),this._isTextHighlightOn){clearTimeout(this._blinkTimeout);var g=e.measureText(this.text.substring(this._startHighlightIndex)).width,b=this._scrollLeft+this._textWidth-g;this._highlightedText=this.text.substring(this._startHighlightIndex,this._endHighlightIndex),e.globalAlpha=this._highligherOpacity,e.fillStyle=this._textHighlightColor,e.fillRect(b,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,e.measureText(this.text.substring(this._startHighlightIndex,this._endHighlightIndex)).width,this._fontOffset.height),e.globalAlpha=1}}e.restore(),this._thickness&&(this.color&&(e.strokeStyle=this.color),e.lineWidth=this._thickness,e.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness))}e.restore()},e.prototype._onPointerDown=function(e,i,r,o){return!!t.prototype._onPointerDown.call(this,e,i,r,o)&&(this._clickedCoordinate=i.x,this._isTextHighlightOn=!1,this._highlightedText="",this._host.focusedControl===this?(clearTimeout(this._blinkTimeout),this._markAsDirty(),!0):!!this._isEnabled&&(this._host.focusedControl=this,!0))},e.prototype._onPointerUp=function(e,i,r,o,n){t.prototype._onPointerUp.call(this,e,i,r,o,n)},e.prototype._beforeRenderText=function(t){return t},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onBlurObservable.clear(),this.onFocusObservable.clear(),this.onTextChangedObservable.clear(),this.onTextCopyObservable.clear(),this.onTextCutObservable.clear(),this.onTextPasteObservable.clear(),this.onTextHighlightObservable.clear()},e}(n.Control);e.InputText=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(2),o=i(0),n=function(){function t(t){this._multiLine=t,this._x=new r.ValueAndUnit(0),this._y=new r.ValueAndUnit(0),this._point=new o.Vector2(0,0)}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x.toString(this._multiLine._host)},set:function(t){this._x.toString(this._multiLine._host)!==t&&this._x.fromString(t)&&this._multiLine._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y.toString(this._multiLine._host)},set:function(t){this._y.toString(this._multiLine._host)!==t&&this._y.fromString(t)&&this._multiLine._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"control",{get:function(){return this._control},set:function(t){this._control!==t&&(this._control&&this._controlObserver&&(this._control.onDirtyObservable.remove(this._controlObserver),this._controlObserver=null),this._control=t,this._control&&(this._controlObserver=this._control.onDirtyObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mesh",{get:function(){return this._mesh},set:function(t){this._mesh!==t&&(this._mesh&&this._meshObserver&&this._mesh.getScene().onAfterCameraRenderObservable.remove(this._meshObserver),this._mesh=t,this._mesh&&(this._meshObserver=this._mesh.getScene().onAfterCameraRenderObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())},enumerable:!0,configurable:!0}),t.prototype.resetLinks=function(){this.control=null,this.mesh=null},t.prototype.translate=function(){return this._point=this._translatePoint(),this._point},t.prototype._translatePoint=function(){if(null!=this._mesh)return this._multiLine._host.getProjectedPosition(this._mesh.getBoundingInfo().boundingSphere.center,this._mesh.getWorldMatrix());if(null!=this._control)return new o.Vector2(this._control.centerX,this._control.centerY);var t=this._multiLine._host,e=this._x.getValueInPixel(t,Number(t._canvas.width)),i=this._y.getValueInPixel(t,Number(t._canvas.height));return new o.Vector2(e,i)},t.prototype.dispose=function(){this.resetLinks()},t}();e.MultiLinePoint=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),h=i(10),a=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isChecked=!1,i._background="black",i._checkSizeRatio=.8,i._thickness=1,i.group="",i.onIsCheckedChangedObservable=new s.Observable,i.isPointerBlocker=!0,i}return o(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checkSizeRatio",{get:function(){return this._checkSizeRatio},set:function(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isChecked",{get:function(){return this._isChecked},set:function(t){var e=this;this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t),this._isChecked&&this._host&&this._host.executeOnAllControls(function(t){if(t!==e&&void 0!==t.group){var i=t;i.group===e.group&&(i.isChecked=!1)}}))},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"RadioButton"},e.prototype._draw=function(t,e){if(e.save(),this._applyStates(e),this._processMeasures(t,e)){var i=this._currentMeasure.width-this._thickness,r=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY),n.Control.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,e),e.fillStyle=this._isEnabled?this._background:this._disabledColor,e.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),e.strokeStyle=this.color,e.lineWidth=this._thickness,e.stroke(),this._isChecked){e.fillStyle=this._isEnabled?this.color:this._disabledColor;var o=i*this._checkSizeRatio,s=r*this._checkSizeRatio;n.Control.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,o/2-this._thickness/2,s/2-this._thickness/2,e),e.fill()}}e.restore()},e.prototype._onPointerDown=function(e,i,r,o){return!!t.prototype._onPointerDown.call(this,e,i,r,o)&&(this.isChecked||(this.isChecked=!0),!0)},e.AddRadioButtonWithHeader=function(t,i,r,o){var s=new h.StackPanel;s.isVertical=!1,s.height="30px";var a=new e;a.width="20px",a.height="20px",a.isChecked=r,a.color="green",a.group=i,a.onIsCheckedChangedObservable.add(function(t){return o(a,t)}),s.addControl(a);var l=new h.TextBlock;return l.text=t,l.width="180px",l.paddingLeft="5px",l.textHorizontalAlignment=n.Control.HORIZONTAL_ALIGNMENT_LEFT,l.color="white",s.addControl(l),s},e}(n.Control);e.RadioButton=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),o=i(2),n=function(){function t(t){this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new o.ValueAndUnit(18,o.ValueAndUnit.UNITMODE_PIXEL,!1),this.onChangedObservable=new r.Observable,this._host=t}return Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize.toString(this._host)},set:function(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&this.onChangedObservable.notifyObservers(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this._fontFamily!==t&&(this._fontFamily=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.onChangedObservable.clear()},t}();e.Style=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(15),s=i(0),h=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype._getTypeName=function(){return"AbstractButton3D"},e.prototype._createNode=function(t){return new s.TransformNode("button"+this.name)},e}(n.Control3D);e.AbstractButton3D=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e,i){void 0===i&&(i=0);var r=t.call(this,e.x,e.y,e.z)||this;return r.buttonIndex=i,r}return o(e,t),e}(i(0).Vector3);e.Vector3WithInfo=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),n=this&&this.__decorate||function(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0});var s=i(0);i(47).registerShader();var h=function(t){function e(){var e=t.call(this)||this;return e.INNERGLOW=!1,e.BORDER=!1,e.HOVERLIGHT=!1,e.TEXTURE=!1,e.rebuild(),e}return o(e,t),e}(s.MaterialDefines);e.FluentMaterialDefines=h;var a=function(t){function e(e,i){var r=t.call(this,e,i)||this;return r.innerGlowColorIntensity=.5,r.innerGlowColor=new s.Color3(1,1,1),r.alpha=1,r.albedoColor=new s.Color3(.3,.35,.4),r.renderBorders=!1,r.borderWidth=.5,r.edgeSmoothingValue=.02,r.borderMinValue=.1,r.renderHoverLight=!1,r.hoverRadius=1,r.hoverColor=new s.Color4(.3,.3,.3,1),r.hoverPosition=s.Vector3.Zero(),r}return o(e,t),e.prototype.needAlphaBlending=function(){return 1!==this.alpha},e.prototype.needAlphaTesting=function(){return!1},e.prototype.getAlphaTestTexture=function(){return null},e.prototype.isReadyForSubMesh=function(t,e,i){if(this.isFrozen&&this._wasPreviouslyReady&&e.effect)return!0;e._materialDefines||(e._materialDefines=new h);var r=this.getScene(),o=e._materialDefines;if(!this.checkReadyOnEveryCall&&e.effect&&o._renderId===r.getRenderId())return!0;if(o._areTexturesDirty)if(o.INNERGLOW=this.innerGlowColorIntensity>0,o.BORDER=this.renderBorders,o.HOVERLIGHT=this.renderHoverLight,this._albedoTexture){if(!this._albedoTexture.isReadyOrNotBlocking())return!1;o.TEXTURE=!0}else o.TEXTURE=!1;var n=r.getEngine();if(o.isDirty){o.markAsProcessed(),r.resetCachedMaterial();var a=[s.VertexBuffer.PositionKind];a.push(s.VertexBuffer.NormalKind),a.push(s.VertexBuffer.UVKind);var l=["world","viewProjection","innerGlowColor","albedoColor","borderWidth","edgeSmoothingValue","scaleFactor","borderMinValue","hoverColor","hoverPosition","hoverRadius"],u=["albedoSampler"],c=new Array;s.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:l,uniformBuffersNames:c,samplers:u,defines:o,maxSimultaneousLights:4});var _=o.toString();e.setEffect(r.getEngine().createEffect("fluent",{attributes:a,uniformsNames:l,uniformBuffersNames:c,samplers:u,defines:_,fallbacks:null,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},n))}return!(!e.effect||!e.effect.isReady())&&(o._renderId=r.getRenderId(),this._wasPreviouslyReady=!0,!0)},e.prototype.bindForSubMesh=function(t,e,i){var r=this.getScene(),o=i._materialDefines;if(o){var n=i.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",r.getTransformMatrix()),this._mustRebind(r,n)&&(this._activeEffect.setColor4("albedoColor",this.albedoColor,this.alpha),o.INNERGLOW&&this._activeEffect.setColor4("innerGlowColor",this.innerGlowColor,this.innerGlowColorIntensity),o.BORDER&&(this._activeEffect.setFloat("borderWidth",this.borderWidth),this._activeEffect.setFloat("edgeSmoothingValue",this.edgeSmoothingValue),this._activeEffect.setFloat("borderMinValue",this.borderMinValue),e.getBoundingInfo().boundingBox.extendSize.multiplyToRef(e.scaling,s.Tmp.Vector3[0]),this._activeEffect.setVector3("scaleFactor",s.Tmp.Vector3[0])),o.HOVERLIGHT&&(this._activeEffect.setDirectColor4("hoverColor",this.hoverColor),this._activeEffect.setFloat("hoverRadius",this.hoverRadius),this._activeEffect.setVector3("hoverPosition",this.hoverPosition)),o.TEXTURE&&this._activeEffect.setTexture("albedoSampler",this._albedoTexture)),this._afterBind(e,this._activeEffect))}},e.prototype.getActiveTextures=function(){return t.prototype.getActiveTextures.call(this)},e.prototype.hasTexture=function(e){return!!t.prototype.hasTexture.call(this,e)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e)},e.prototype.clone=function(t){var i=this;return s.SerializationHelper.Clone(function(){return new e(t,i.getScene())},this)},e.prototype.serialize=function(){var t=s.SerializationHelper.Serialize(this);return t.customType="BABYLON.GUI.FluentMaterial",t},e.prototype.getClassName=function(){return"FluentMaterial"},e.Parse=function(t,i,r){return s.SerializationHelper.Parse(function(){return new e(t.name,i)},t,i,r)},n([s.serialize(),s.expandToProperty("_markAllSubMeshesAsTexturesDirty")],e.prototype,"innerGlowColorIntensity",void 0),n([s.serializeAsColor3()],e.prototype,"innerGlowColor",void 0),n([s.serialize()],e.prototype,"alpha",void 0),n([s.serializeAsColor3()],e.prototype,"albedoColor",void 0),n([s.serialize(),s.expandToProperty("_markAllSubMeshesAsTexturesDirty")],e.prototype,"renderBorders",void 0),n([s.serialize()],e.prototype,"borderWidth",void 0),n([s.serialize()],e.prototype,"edgeSmoothingValue",void 0),n([s.serialize()],e.prototype,"borderMinValue",void 0),n([s.serialize(),s.expandToProperty("_markAllSubMeshesAsTexturesDirty")],e.prototype,"renderHoverLight",void 0),n([s.serialize()],e.prototype,"hoverRadius",void 0),n([s.serializeAsColor4()],e.prototype,"hoverColor",void 0),n([s.serializeAsVector3()],e.prototype,"hoverPosition",void 0),n([s.serializeAsTexture("albedoTexture")],e.prototype,"_albedoTexture",void 0),n([s.expandToProperty("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"albedoTexture",void 0),e}(s.PushMaterial);e.FluentMaterial=a},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=i(17),o=void 0!==t?t:"undefined"!=typeof window?window:void 0;void 0!==o&&(o.BABYLON=o.BABYLON||{},o.BABYLON.GUI=r),function(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}(i(17))}).call(this,i(30))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";function r(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),r(i(10)),r(i(14)),r(i(19)),r(i(5)),r(i(23)),r(i(25)),r(i(2))},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),h=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._value=s.Color3.Red(),i._tmpColor=new s.Color3,i._pointerStartedOnSquare=!1,i._pointerStartedOnWheel=!1,i._squareLeft=0,i._squareTop=0,i._squareSize=0,i._h=360,i._s=1,i._v=1,i.onValueChangedObservable=new s.Observable,i._pointerIsDown=!1,i.value=new s.Color3(.88,.1,.1),i.size="200px",i.isPointerBlocker=!0,i}return o(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this._value.equals(t)||(this._value.copyFrom(t),this._RGBtoHSV(this._value,this._tmpColor),this._h=this._tmpColor.r,this._s=Math.max(this._tmpColor.g,1e-5),this._v=Math.max(this._tmpColor.b,1e-5),this._markAsDirty(),this.onValueChangedObservable.notifyObservers(this._value))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{set:function(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&(this._height.fromString(t),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{set:function(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&(this._width.fromString(t),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this.width},set:function(t){this.width=t},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ColorPicker"},e.prototype._updateSquareProps=function(){var t=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),e=2*(t-.2*t)/Math.sqrt(2),i=t-.5*e;this._squareLeft=this._currentMeasure.left+i,this._squareTop=this._currentMeasure.top+i,this._squareSize=e},e.prototype._drawGradientSquare=function(t,e,i,r,o,n){var s=n.createLinearGradient(e,i,r+e,i);s.addColorStop(0,"#fff"),s.addColorStop(1,"hsl("+t+", 100%, 50%)"),n.fillStyle=s,n.fillRect(e,i,r,o);var h=n.createLinearGradient(e,i,e,o+i);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"#000"),n.fillStyle=h,n.fillRect(e,i,r,o)},e.prototype._drawCircle=function(t,e,i,r){r.beginPath(),r.arc(t,e,i+1,0,2*Math.PI,!1),r.lineWidth=3,r.strokeStyle="#333333",r.stroke(),r.beginPath(),r.arc(t,e,i,0,2*Math.PI,!1),r.lineWidth=3,r.strokeStyle="#ffffff",r.stroke()},e.prototype._createColorWheelCanvas=function(t,e){var i=document.createElement("canvas");i.width=2*t,i.height=2*t;for(var r=i.getContext("2d"),o=r.getImageData(0,0,2*t,2*t),n=o.data,s=this._tmpColor,h=t*t,a=t-e,l=a*a,u=-t;u<t;u++)for(var c=-t;c<t;c++){var _=u*u+c*c;if(!(_>h||_<l)){var d=Math.sqrt(_),f=Math.atan2(c,u);this._HSVtoRGB(180*f/Math.PI+180,d/t,1,s);var p=4*(u+t+2*(c+t)*t);n[p]=255*s.r,n[p+1]=255*s.g,n[p+2]=255*s.b;var g=.2;g=t<50?.2:t>150?.04:-.16*(t-50)/100+.2;var b=(d-a)/(t-a);n[p+3]=b<g?b/g*255:b>1-g?255*(1-(b-(1-g))/g):255}}return r.putImageData(o,0,0),i},e.prototype._RGBtoHSV=function(t,e){var i=t.r,r=t.g,o=t.b,n=Math.max(i,r,o),s=Math.min(i,r,o),h=0,a=0,l=n,u=n-s;0!==n&&(a=u/n),n!=s&&(n==i?(h=(r-o)/u,r<o&&(h+=6)):n==r?h=(o-i)/u+2:n==o&&(h=(i-r)/u+4),h*=60),e.r=h,e.g=a,e.b=l},e.prototype._HSVtoRGB=function(t,e,i,r){var o=i*e,n=t/60,s=o*(1-Math.abs(n%2-1)),h=0,a=0,l=0;n>=0&&n<=1?(h=o,a=s):n>=1&&n<=2?(h=s,a=o):n>=2&&n<=3?(a=o,l=s):n>=3&&n<=4?(a=s,l=o):n>=4&&n<=5?(h=s,l=o):n>=5&&n<=6&&(h=o,l=s);var u=i-o;r.set(h+u,a+u,l+u)},e.prototype._draw=function(t,e){if(e.save(),this._applyStates(e),this._processMeasures(t,e)){var i=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),r=.2*i,o=this._currentMeasure.left,n=this._currentMeasure.top;this._colorWheelCanvas&&this._colorWheelCanvas.width==2*i||(this._colorWheelCanvas=this._createColorWheelCanvas(i,r)),this._updateSquareProps(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY,e.fillRect(this._squareLeft,this._squareTop,this._squareSize,this._squareSize)),e.drawImage(this._colorWheelCanvas,o,n),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),this._drawGradientSquare(this._h,this._squareLeft,this._squareTop,this._squareSize,this._squareSize,e);var s=this._squareLeft+this._squareSize*this._s,h=this._squareTop+this._squareSize*(1-this._v);this._drawCircle(s,h,.04*i,e);var a=i-.5*r;s=o+i+Math.cos((this._h-180)*Math.PI/180)*a,h=n+i+Math.sin((this._h-180)*Math.PI/180)*a,this._drawCircle(s,h,.35*r,e)}e.restore()},e.prototype._updateValueFromPointer=function(t,e){if(this._pointerStartedOnWheel){var i=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),r=i+this._currentMeasure.left,o=i+this._currentMeasure.top;this._h=180*Math.atan2(e-o,t-r)/Math.PI+180}else this._pointerStartedOnSquare&&(this._updateSquareProps(),this._s=(t-this._squareLeft)/this._squareSize,this._v=1-(e-this._squareTop)/this._squareSize,this._s=Math.min(this._s,1),this._s=Math.max(this._s,1e-5),this._v=Math.min(this._v,1),this._v=Math.max(this._v,1e-5));this._HSVtoRGB(this._h,this._s,this._v,this._tmpColor),this.value=this._tmpColor},e.prototype._isPointOnSquare=function(t,e){this._updateSquareProps();var i=this._squareLeft,r=this._squareTop,o=this._squareSize;return t>=i&&t<=i+o&&e>=r&&e<=r+o},e.prototype._isPointOnWheel=function(t,e){var i=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),r=i-.2*i,o=t-(i+this._currentMeasure.left),n=e-(i+this._currentMeasure.top),s=o*o+n*n;return s<=i*i&&s>=r*r},e.prototype._onPointerDown=function(e,i,r,o){if(!t.prototype._onPointerDown.call(this,e,i,r,o))return!1;this._pointerIsDown=!0,this._pointerStartedOnSquare=!1,this._pointerStartedOnWheel=!1,this._invertTransformMatrix.transformCoordinates(i.x,i.y,this._transformedPosition);var n=this._transformedPosition.x,s=this._transformedPosition.y;return this._isPointOnSquare(n,s)?this._pointerStartedOnSquare=!0:this._isPointOnWheel(n,s)&&(this._pointerStartedOnWheel=!0),this._updateValueFromPointer(n,s),this._host._capturingControl[r]=this,!0},e.prototype._onPointerMove=function(e,i){this._invertTransformMatrix.transformCoordinates(i.x,i.y,this._transformedPosition);var r=this._transformedPosition.x,o=this._transformedPosition.y;this._pointerIsDown&&this._updateValueFromPointer(r,o),t.prototype._onPointerMove.call(this,e,i)},e.prototype._onPointerUp=function(e,i,r,o,n){this._pointerIsDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,o,n)},e}(n.Control);e.ColorPicker=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=i(1),h=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thickness=1,i}return o(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Ellipse"},e.prototype._localDraw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),s.Control.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),this._background&&(t.fillStyle=this._background,t.fill()),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._thickness&&(this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.stroke()),t.restore()},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness},e.prototype._clipForChildren=function(t){s.Control.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2,this._currentMeasure.height/2,t),t.clip()},e}(n.Container);e.Ellipse=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype._beforeRenderText=function(t){for(var e="",i=0;i<t.length;i++)e+="•";return e},e}(i(22).InputText);e.InputPassword=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(2),h=i(0),a=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._lineWidth=1,i._x1=new s.ValueAndUnit(0),i._y1=new s.ValueAndUnit(0),i._x2=new s.ValueAndUnit(0),i._y2=new s.ValueAndUnit(0),i._dash=new Array,i.isHitTestVisible=!1,i._horizontalAlignment=n.Control.HORIZONTAL_ALIGNMENT_LEFT,i._verticalAlignment=n.Control.VERTICAL_ALIGNMENT_TOP,i}return o(e,t),Object.defineProperty(e.prototype,"dash",{get:function(){return this._dash},set:function(t){this._dash!==t&&(this._dash=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connectedControl",{get:function(){return this._connectedControl},set:function(t){var e=this;this._connectedControl!==t&&(this._connectedControlDirtyObserver&&this._connectedControl&&(this._connectedControl.onDirtyObservable.remove(this._connectedControlDirtyObserver),this._connectedControlDirtyObserver=null),t&&(this._connectedControlDirtyObserver=t.onDirtyObservable.add(function(){return e._markAsDirty()})),this._connectedControl=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x1",{get:function(){return this._x1.toString(this._host)},set:function(t){this._x1.toString(this._host)!==t&&this._x1.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y1",{get:function(){return this._y1.toString(this._host)},set:function(t){this._y1.toString(this._host)!==t&&this._y1.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x2",{get:function(){return this._x2.toString(this._host)},set:function(t){this._x2.toString(this._host)!==t&&this._x2.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y2",{get:function(){return this._y2.toString(this._host)},set:function(t){this._y2.toString(this._host)!==t&&this._y2.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this._lineWidth},set:function(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_effectiveX2",{get:function(){return(this._connectedControl?this._connectedControl.centerX:0)+this._x2.getValue(this._host)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_effectiveY2",{get:function(){return(this._connectedControl?this._connectedControl.centerY:0)+this._y2.getValue(this._host)},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Line"},e.prototype._draw=function(t,e){e.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY),this._applyStates(e),this._processMeasures(t,e)&&(e.strokeStyle=this.color,e.lineWidth=this._lineWidth,e.setLineDash(this._dash),e.beginPath(),e.moveTo(this._x1.getValue(this._host),this._y1.getValue(this._host)),e.lineTo(this._effectiveX2,this._effectiveY2),e.stroke()),e.restore()},e.prototype._measure=function(){this._currentMeasure.width=Math.abs(this._x1.getValue(this._host)-this._effectiveX2)+this._lineWidth,this._currentMeasure.height=Math.abs(this._y1.getValue(this._host)-this._effectiveY2)+this._lineWidth},e.prototype._computeAlignment=function(t,e){this._currentMeasure.left=Math.min(this._x1.getValue(this._host),this._effectiveX2)-this._lineWidth/2,this._currentMeasure.top=Math.min(this._y1.getValue(this._host),this._effectiveY2)-this._lineWidth/2},e.prototype.moveToVector3=function(t,e,i){if(void 0===i&&(i=!1),this._host&&this._root===this._host._rootContainer){var r=this._host._getGlobalViewport(e),o=h.Vector3.Project(t,h.Matrix.Identity(),e.getTransformMatrix(),r);this._moveToProjectedPosition(o,i),o.z<0||o.z>1?this.notRenderable=!0:this.notRenderable=!1}else h.Tools.Error("Cannot move a control to a vector3 if the control is not at root level")},e.prototype._moveToProjectedPosition=function(t,e){void 0===e&&(e=!1);var i=t.x+this._linkOffsetX.getValue(this._host)+"px",r=t.y+this._linkOffsetY.getValue(this._host)+"px";e?(this.x2=i,this.y2=r,this._x2.ignoreAdaptiveScaling=!0,this._y2.ignoreAdaptiveScaling=!0):(this.x1=i,this.y1=r,this._x1.ignoreAdaptiveScaling=!0,this._y1.ignoreAdaptiveScaling=!0)},e}(n.Control);e.Line=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(23),h=i(0),a=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._lineWidth=1,i.onPointUpdate=function(){i._markAsDirty()},i.isHitTestVisible=!1,i._horizontalAlignment=n.Control.HORIZONTAL_ALIGNMENT_LEFT,i._verticalAlignment=n.Control.VERTICAL_ALIGNMENT_TOP,i._dash=[],i._points=[],i}return o(e,t),Object.defineProperty(e.prototype,"dash",{get:function(){return this._dash},set:function(t){this._dash!==t&&(this._dash=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype.getAt=function(t){return this._points[t]||(this._points[t]=new s.MultiLinePoint(this)),this._points[t]},e.prototype.add=function(){for(var t=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return e.map(function(e){return t.push(e)})},e.prototype.push=function(t){var e=this.getAt(this._points.length);return null==t?e:(t instanceof h.AbstractMesh?e.mesh=t:t instanceof n.Control?e.control=t:null!=t.x&&null!=t.y&&(e.x=t.x,e.y=t.y),e)},e.prototype.remove=function(t){var e;if(t instanceof s.MultiLinePoint){if(-1===(e=this._points.indexOf(t)))return}else e=t;var i=this._points[e];i&&(i.dispose(),this._points.splice(e,1))},e.prototype.reset=function(){for(;this._points.length>0;)this.remove(this._points.length-1)},e.prototype.resetLinks=function(){this._points.forEach(function(t){null!=t&&t.resetLinks()})},Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this._lineWidth},set:function(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"MultiLine"},e.prototype._draw=function(t,e){if(e.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(e.shadowColor=this.shadowColor,e.shadowBlur=this.shadowBlur,e.shadowOffsetX=this.shadowOffsetX,e.shadowOffsetY=this.shadowOffsetY),this._applyStates(e),this._processMeasures(t,e)){e.strokeStyle=this.color,e.lineWidth=this._lineWidth,e.setLineDash(this._dash),e.beginPath();var i=!0;this._points.forEach(function(t){t&&(i?(e.moveTo(t._point.x,t._point.y),i=!1):e.lineTo(t._point.x,t._point.y))}),e.stroke()}e.restore()},e.prototype._additionalProcessing=function(t,e){var i=this;this._minX=null,this._minY=null,this._maxX=null,this._maxY=null,this._points.forEach(function(t,e){t&&(t.translate(),(null==i._minX||t._point.x<i._minX)&&(i._minX=t._point.x),(null==i._minY||t._point.y<i._minY)&&(i._minY=t._point.y),(null==i._maxX||t._point.x>i._maxX)&&(i._maxX=t._point.x),(null==i._maxY||t._point.y>i._maxY)&&(i._maxY=t._point.y))}),null==this._minX&&(this._minX=0),null==this._minY&&(this._minY=0),null==this._maxX&&(this._maxX=0),null==this._maxY&&(this._maxY=0)},e.prototype._measure=function(){null!=this._minX&&null!=this._maxX&&null!=this._minY&&null!=this._maxY&&(this._currentMeasure.width=Math.abs(this._maxX-this._minX)+this._lineWidth,this._currentMeasure.height=Math.abs(this._maxY-this._minY)+this._lineWidth)},e.prototype._computeAlignment=function(t,e){null!=this._minX&&null!=this._minY&&(this._currentMeasure.left=this._minX-this._lineWidth/2,this._currentMeasure.top=this._minY-this._lineWidth/2)},e.prototype.dispose=function(){this.reset(),t.prototype.dispose.call(this)},e}(n.Control);e.MultiLine=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),s=i(7),h=i(1),a=i(6),l=i(20),u=i(24),c=i(12),_=i(3),d=function(){function t(t){this.name=t,this._groupPanel=new s.StackPanel,this._selectors=new Array,this._groupPanel.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP,this._groupPanel.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,this._groupHeader=this._addGroupHeader(t)}return Object.defineProperty(t.prototype,"groupPanel",{get:function(){return this._groupPanel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectors",{get:function(){return this._selectors},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"header",{get:function(){return this._groupHeader.text},set:function(t){"label"!==this._groupHeader.text&&(this._groupHeader.text=t)},enumerable:!0,configurable:!0}),t.prototype._addGroupHeader=function(t){var e=new a.TextBlock("groupHead",t);return e.width=.9,e.height="30px",e.textWrapping=!0,e.color="black",e.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,e.textHorizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,e.left="2px",this._groupPanel.addControl(e),e},t.prototype._getSelector=function(t){if(!(t<0||t>=this._selectors.length))return this._selectors[t]},t.prototype.removeSelector=function(t){t<0||t>=this._selectors.length||(this._groupPanel.removeControl(this._selectors[t]),this._selectors.splice(t,1))},t}();e.SelectorGroup=d;var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.addCheckbox=function(t,e,i){void 0===e&&(e=function(t){}),void 0===i&&(i=!1);i=i||!1;var r=new l.Checkbox;r.width="20px",r.height="20px",r.color="#364249",r.background="#CCCCCC",r.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,r.onIsCheckedChangedObservable.add(function(t){e(t)});var o=h.Control.AddHeader(r,t,"200px",{isHorizontal:!0,controlFirst:!0});o.height="30px",o.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,o.left="4px",this.groupPanel.addControl(o),this.selectors.push(o),r.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(r.color=this.groupPanel.parent.parent.buttonColor,r.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[1].text=e},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[0].background=e},e}(d);e.CheckboxGroup=f;var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._selectNb=0,e}return o(e,t),e.prototype.addRadio=function(t,e,i){void 0===e&&(e=function(t){}),void 0===i&&(i=!1);var r=this._selectNb++,o=new u.RadioButton;o.name=t,o.width="20px",o.height="20px",o.color="#364249",o.background="#CCCCCC",o.group=this.name,o.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,o.onIsCheckedChangedObservable.add(function(t){t&&e(r)});var n=h.Control.AddHeader(o,t,"200px",{isHorizontal:!0,controlFirst:!0});n.height="30px",n.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,n.left="4px",this.groupPanel.addControl(n),this.selectors.push(n),o.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(o.color=this.groupPanel.parent.parent.buttonColor,o.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[1].text=e},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[0].background=e},e}(d);e.RadioGroup=p;var g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.addSlider=function(t,e,i,r,o,n,s){void 0===e&&(e=function(t){}),void 0===i&&(i="Units"),void 0===r&&(r=0),void 0===o&&(o=0),void 0===n&&(n=0),void 0===s&&(s=function(t){return 0|t});var a=new c.Slider;a.name=i,a.value=n,a.minimum=r,a.maximum=o,a.width=.9,a.height="20px",a.color="#364249",a.background="#CCCCCC",a.borderColor="black",a.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,a.left="4px",a.paddingBottom="4px",a.onValueChangedObservable.add(function(t){a.parent.children[0].text=a.parent.children[0].name+": "+s(t)+" "+a.name,e(t)});var l=h.Control.AddHeader(a,t+": "+s(n)+" "+i,"30px",{isHorizontal:!1,controlFirst:!1});l.height="60px",l.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,l.left="4px",l.children[0].name=t,this.groupPanel.addControl(l),this.selectors.push(l),this.groupPanel.parent&&this.groupPanel.parent.parent&&(a.color=this.groupPanel.parent.parent.buttonColor,a.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[0].name=e,this.selectors[t].children[0].text=e+": "+this.selectors[t].children[1].value+" "+this.selectors[t].children[1].name},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[1].background=e},e}(d);e.SliderGroup=g;var b=function(t){function e(e,i){void 0===i&&(i=[]);var r=t.call(this,e)||this;if(r.name=e,r.groups=i,r._buttonColor="#364249",r._buttonBackground="#CCCCCC",r._headerColor="black",r._barColor="white",r._barHeight="2px",r._spacerHeight="20px",r._bars=new Array,r._groups=i,r.thickness=2,r._panel=new s.StackPanel,r._panel.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP,r._panel.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,r._panel.top=5,r._panel.left=5,r._panel.width=.95,i.length>0){for(var o=0;o<i.length-1;o++)r._panel.addControl(i[o].groupPanel),r._addSpacer();r._panel.addControl(i[i.length-1].groupPanel)}return r.addControl(r._panel),r}return o(e,t),e.prototype._getTypeName=function(){return"SelectionPanel"},Object.defineProperty(e.prototype,"headerColor",{get:function(){return this._headerColor},set:function(t){this._headerColor!==t&&(this._headerColor=t,this._setHeaderColor())},enumerable:!0,configurable:!0}),e.prototype._setHeaderColor=function(){for(var t=0;t<this._groups.length;t++)this._groups[t].groupPanel.children[0].color=this._headerColor},Object.defineProperty(e.prototype,"buttonColor",{get:function(){return this._buttonColor},set:function(t){this._buttonColor!==t&&(this._buttonColor=t,this._setbuttonColor())},enumerable:!0,configurable:!0}),e.prototype._setbuttonColor=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonColor(e,this._buttonColor)},Object.defineProperty(e.prototype,"labelColor",{get:function(){return this._labelColor},set:function(t){this._labelColor!==t&&(this._labelColor=t,this._setLabelColor())},enumerable:!0,configurable:!0}),e.prototype._setLabelColor=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorLabelColor(e,this._labelColor)},Object.defineProperty(e.prototype,"buttonBackground",{get:function(){return this._buttonBackground},set:function(t){this._buttonBackground!==t&&(this._buttonBackground=t,this._setButtonBackground())},enumerable:!0,configurable:!0}),e.prototype._setButtonBackground=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonBackground(e,this._buttonBackground)},Object.defineProperty(e.prototype,"barColor",{get:function(){return this._barColor},set:function(t){this._barColor!==t&&(this._barColor=t,this._setBarColor())},enumerable:!0,configurable:!0}),e.prototype._setBarColor=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].children[0].background=this._barColor},Object.defineProperty(e.prototype,"barHeight",{get:function(){return this._barHeight},set:function(t){this._barHeight!==t&&(this._barHeight=t,this._setBarHeight())},enumerable:!0,configurable:!0}),e.prototype._setBarHeight=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].children[0].height=this._barHeight},Object.defineProperty(e.prototype,"spacerHeight",{get:function(){return this._spacerHeight},set:function(t){this._spacerHeight!==t&&(this._spacerHeight=t,this._setSpacerHeight())},enumerable:!0,configurable:!0}),e.prototype._setSpacerHeight=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].height=this._spacerHeight},e.prototype._addSpacer=function(){var t=new _.Container;t.width=1,t.height=this._spacerHeight,t.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT;var e=new n.Rectangle;e.width=1,e.height=this._barHeight,e.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,e.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_CENTER,e.background=this._barColor,e.color="transparent",t.addControl(e),this._panel.addControl(t),this._bars.push(t)},e.prototype.addGroup=function(t){this._groups.length>0&&this._addSpacer(),this._panel.addControl(t.groupPanel),this._groups.push(t),t.groupPanel.children[0].color=this._headerColor;for(var e=0;e<t.selectors.length;e++)t._setSelectorButtonColor(e,this._buttonColor),t._setSelectorButtonBackground(e,this._buttonBackground)},e.prototype.removeGroup=function(t){if(!(t<0||t>=this._groups.length)){var e=this._groups[t];this._panel.removeControl(e.groupPanel),this._groups.splice(t,1),t<this._bars.length&&(this._panel.removeControl(this._bars[t]),this._bars.splice(t,1))}},e.prototype.setHeaderName=function(t,e){e<0||e>=this._groups.length||(this._groups[e].groupPanel.children[0].text=t)},e.prototype.relabel=function(t,e,i){if(!(e<0||e>=this._groups.length)){var r=this._groups[e];i<0||i>=r.selectors.length||r._setSelectorLabel(i,t)}},e.prototype.removeFromGroupSelector=function(t,e){if(!(t<0||t>=this._groups.length)){var i=this._groups[t];e<0||e>=i.selectors.length||i.removeSelector(e)}},e.prototype.addToGroupCheckbox=function(t,e,i,r){(void 0===i&&(i=function(){}),void 0===r&&(r=!1),t<0||t>=this._groups.length)||this._groups[t].addCheckbox(e,i,r)},e.prototype.addToGroupRadio=function(t,e,i,r){(void 0===i&&(i=function(){}),void 0===r&&(r=!1),t<0||t>=this._groups.length)||this._groups[t].addRadio(e,i,r)},e.prototype.addToGroupSlider=function(t,e,i,r,o,n,s,h){(void 0===i&&(i=function(){}),void 0===r&&(r="Units"),void 0===o&&(o=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===h&&(h=function(t){return 0|t}),t<0||t>=this._groups.length)||this._groups[t].addSlider(e,i,r,o,n,s,h)},e}(n.Rectangle);e.SelectionPanel=b},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),s=i(21),h=i(1),a=i(12),l=i(2),u=i(3),c=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._barColor="grey",i._barBorderColor="#444444",i._barBackground="white",i._scrollGridWidth=30,i._scrollGridHeight=30,i.onDirtyObservable.add(function(){i._horizontalBarSpace.color=i.color,i._verticalBarSpace.color=i.color,i._dragSpace.color=i.color,i._updateScroller(i._windowContents),"TextBlock"===i._windowContents.typeName&&i._updateTextBlock(i._windowContents)}),i._grid=new s.Grid,i._horizontalBar=new a.Slider,i._verticalBar=new a.Slider,i._window=new u.Container,i._window.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,i._window.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP,i._windowContents=new h.Control,i._window.addControl(i._windowContents),i._width=new l.ValueAndUnit(.25,l.ValueAndUnit.UNITMODE_PERCENTAGE,!1),i._height=new l.ValueAndUnit(.25,l.ValueAndUnit.UNITMODE_PERCENTAGE,!1),i._background="black",i.fontSize="16px",i._grid.addColumnDefinition(1,!0),i._grid.addColumnDefinition(i._scrollGridWidth,!0),i._grid.addRowDefinition(1,!0),i._grid.addRowDefinition(i._scrollGridHeight,!0),i.addControl(i._grid),i._grid.addControl(i._window,0,0),i._verticalBar.paddingLeft=0,i._verticalBar.width="25px",i._verticalBar.value=0,i._verticalBar.maximum=100,i._verticalBar.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_CENTER,i._verticalBar.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_CENTER,i._verticalBar.left=.05,i._verticalBar.isThumbClamped=!0,i._verticalBar.color="grey",i._verticalBar.borderColor="#444444",i._verticalBar.background="white",i._verticalBar.isVertical=!0,i._verticalBar.rotation=Math.PI,i._verticalBarSpace=new n.Rectangle,i._verticalBarSpace.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,i._verticalBarSpace.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP,i._verticalBarSpace.color=i.color,i._verticalBarSpace.thickness=1,i._grid.addControl(i._verticalBarSpace,0,1),i._verticalBarSpace.addControl(i._verticalBar),i._verticalBar.onValueChangedObservable.add(function(t){i._window.top=t*i._endTop/100+"px"}),i._horizontalBar.paddingLeft=0,i._horizontalBar.height="25px",i._horizontalBar.value=0,i._horizontalBar.maximum=100,i._horizontalBar.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_CENTER,i._horizontalBar.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_CENTER,i._horizontalBar.left=.05,i._horizontalBar.isThumbClamped=!0,i._horizontalBar.color="grey",i._horizontalBar.borderColor="#444444",i._horizontalBar.background="white",i._horizontalBarSpace=new n.Rectangle,i._horizontalBarSpace.horizontalAlignment=h.Control.HORIZONTAL_ALIGNMENT_LEFT,i._horizontalBarSpace.verticalAlignment=h.Control.VERTICAL_ALIGNMENT_TOP,i._horizontalBarSpace.color=i.color,i._horizontalBarSpace.thickness=1,i._grid.addControl(i._horizontalBarSpace,1,0),i._horizontalBarSpace.addControl(i._horizontalBar),i._horizontalBar.onValueChangedObservable.add(function(t){i._window.left=t*i._endLeft/100+"px"}),i._dragSpace=new n.Rectangle,i._dragSpace.color=i.color,i._dragSpace.thickness=2,i._dragSpace.background=i._barColor,i._grid.addControl(i._dragSpace,1,1),i}return o(e,t),e.prototype.addToWindow=function(t){this._window.removeControl(this._windowContents),this._windowContents.dispose(),this._windowContents=t,"TextBlock"===t.typeName?this._updateTextBlock(t):this._updateScroller(t),this._window.addControl(t)},Object.defineProperty(e.prototype,"paddingLeft",{get:function(){return this._windowContents.paddingLeft},set:function(t){this._windowContents.paddingLeft=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingLeftInPixels",{get:function(){return this._windowContents.paddingLeftInPixels},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingRight",{get:function(){return this._windowContents.paddingRight},set:function(t){this._windowContents.paddingRight=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingRightInPixels",{get:function(){return this._windowContents.paddingRightInPixels},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingTop",{get:function(){return this._windowContents.paddingTop},set:function(t){this._windowContents.paddingTop=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingTopInPixels",{get:function(){return this._windowContents.paddingTopInPixels},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingBottom",{get:function(){return this._windowContents.paddingBottom},set:function(t){this._windowContents.paddingBottom=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paddingBottomInPixels",{get:function(){return this._windowContents.paddingBottomInPixels},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barColor",{get:function(){return this._barColor},set:function(t){this._barColor!==t&&(this._barColor=t,this._horizontalBar.color=t,this._verticalBar.color=t,this._dragSpace.background=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barBorderColor",{get:function(){return this._barBorderColor},set:function(t){this._barBorderColor!==t&&(this._barBorderColor=t,this._horizontalBar.borderColor=t,this._verticalBar.borderColor=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barBackground",{get:function(){return this._barBackground},set:function(t){this._barBackground!==t&&(this._barBackground=t,this._horizontalBar.background=t,this._verticalBar.background=t)},enumerable:!0,configurable:!0}),e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i);var r=this._width.getValueInPixel(this._host,e.width),o=this._height.getValueInPixel(this._host,e.height),n=r-this._scrollGridWidth-2*this.thickness,s=o-this._scrollGridHeight-2*this.thickness;this._horizontalBar.width=.8*n+"px",this._verticalBar.height=.8*s+"px",this._grid.setColumnDefinition(0,n,!0),this._grid.setRowDefinition(0,s,!0)},e.prototype._updateScroller=function(t){var e=parseFloat(t.width.toString());0===t._width.unit&&(this._widthScale=e/100,e=this._host.getSize().width*this._widthScale,t.width=e+"px");var i=parseFloat(t.height.toString());0===t._height.unit&&(this._heightScale=i/100,i=this._host.getSize().height*this._heightScale,t.height=this._host.getSize().height*this._heightScale+"px"),this._window.width=t.width,this._window.height=t.height,this._windowContents.width=t.width,this._windowContents.height=t.height;var r=this._width.getValueInPixel(this._host,this._host.getSize().width),o=this._height.getValueInPixel(this._host,this._host.getSize().height),n=r-this._scrollGridWidth-2*this.thickness,s=o-this._scrollGridHeight-2*this.thickness;e<=n?(this._grid.setRowDefinition(0,o-2*this.thickness,!0),this._grid.setRowDefinition(1,0,!0),this._horizontalBar.isVisible=!1):(this._grid.setRowDefinition(0,s,!0),this._grid.setRowDefinition(1,this._scrollGridHeight,!0),this._horizontalBar.isVisible=!0),i<s?(this._grid.setColumnDefinition(0,r-2*this.thickness,!0),this._grid.setColumnDefinition(1,0,!0),this._verticalBar.isVisible=!1):(this._grid.setColumnDefinition(0,n,!0),this._grid.setColumnDefinition(1,this._scrollGridWidth,!0),this._verticalBar.isVisible=!0),this._endLeft=n-e,this._endTop=s-i},e.prototype._updateTextBlock=function(t){var e=this,i=this._width.getValueInPixel(this._host,this._host.getSize().width)-this._scrollGridWidth-2*this.thickness;t.width=i+"px",this._window.width=t.width,this._windowContents.width=t.width,t.onLinesReadyObservable.add(function(){var i=e.fontOffset.height*t.lines.length+t.paddingTopInPixels+t.paddingBottomInPixels;t.height=i+"px",e._window.height=t.height,e._windowContents.height=t.height,e._updateScroller(t)})},e}(n.Rectangle);e.ScrollViewer=c},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),s=i(0),h=i(18),a=function(){return function(){}}();e.KeyPropertySet=a;var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onKeyPressObservable=new s.Observable,e.defaultButtonWidth="40px",e.defaultButtonHeight="40px",e.defaultButtonPaddingLeft="2px",e.defaultButtonPaddingRight="2px",e.defaultButtonPaddingTop="2px",e.defaultButtonPaddingBottom="2px",e.defaultButtonColor="#DDD",e.defaultButtonBackground="#070707",e.shiftButtonColor="#7799FF",e.selectedShiftThickness=1,e.shiftState=0,e._currentlyConnectedInputText=null,e._connectedInputTexts=[],e._onKeyPressObserver=null,e}return o(e,t),e.prototype._getTypeName=function(){return"VirtualKeyboard"},e.prototype._createKey=function(t,e){var i=this,r=h.Button.CreateSimpleButton(t,t);return r.width=e&&e.width?e.width:this.defaultButtonWidth,r.height=e&&e.height?e.height:this.defaultButtonHeight,r.color=e&&e.color?e.color:this.defaultButtonColor,r.background=e&&e.background?e.background:this.defaultButtonBackground,r.paddingLeft=e&&e.paddingLeft?e.paddingLeft:this.defaultButtonPaddingLeft,r.paddingRight=e&&e.paddingRight?e.paddingRight:this.defaultButtonPaddingRight,r.paddingTop=e&&e.paddingTop?e.paddingTop:this.defaultButtonPaddingTop,r.paddingBottom=e&&e.paddingBottom?e.paddingBottom:this.defaultButtonPaddingBottom,r.thickness=0,r.isFocusInvisible=!0,r.shadowColor=this.shadowColor,r.shadowBlur=this.shadowBlur,r.shadowOffsetX=this.shadowOffsetX,r.shadowOffsetY=this.shadowOffsetY,r.onPointerUpObservable.add(function(){i.onKeyPressObservable.notifyObservers(t)}),r},e.prototype.addKeysRow=function(t,e){var i=new n.StackPanel;i.isVertical=!1,i.isFocusInvisible=!0;for(var r=0;r<t.length;r++){var o=null;e&&e.length===t.length&&(o=e[r]),i.addControl(this._createKey(t[r],o))}this.addControl(i)},e.prototype.applyShiftState=function(t){if(this.children)for(var e=0;e<this.children.length;e++){var i=this.children[e];if(i&&i.children)for(var r=i,o=0;o<r.children.length;o++){var n=r.children[o];if(n&&n.children[0]){var s=n.children[0];"⇧"===s.text&&(n.color=t?this.shiftButtonColor:this.defaultButtonColor,n.thickness=t>1?this.selectedShiftThickness:0),s.text=t>0?s.text.toUpperCase():s.text.toLowerCase()}}}},Object.defineProperty(e.prototype,"connectedInputText",{get:function(){return this._currentlyConnectedInputText},enumerable:!0,configurable:!0}),e.prototype.connect=function(t){var e=this;if(!this._connectedInputTexts.some(function(e){return e.input===t})){null===this._onKeyPressObserver&&(this._onKeyPressObserver=this.onKeyPressObservable.add(function(t){if(e._currentlyConnectedInputText){switch(e._currentlyConnectedInputText._host.focusedControl=e._currentlyConnectedInputText,t){case"⇧":return e.shiftState++,e.shiftState>2&&(e.shiftState=0),void e.applyShiftState(e.shiftState);case"←":return void e._currentlyConnectedInputText.processKey(8);case"↵":return void e._currentlyConnectedInputText.processKey(13)}e._currentlyConnectedInputText.processKey(-1,e.shiftState?t.toUpperCase():t),1===e.shiftState&&(e.shiftState=0,e.applyShiftState(e.shiftState))}})),this.isVisible=!1,this._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=this;var i=t.onFocusObservable.add(function(){e._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=e,e.isVisible=!0}),r=t.onBlurObservable.add(function(){t._connectedVirtualKeyboard=null,e._currentlyConnectedInputText=null,e.isVisible=!1});this._connectedInputTexts.push({input:t,onBlurObserver:r,onFocusObserver:i})}},e.prototype.disconnect=function(t){var e=this;if(t){var i=this._connectedInputTexts.filter(function(e){return e.input===t});1===i.length&&(this._removeConnectedInputObservables(i[0]),this._connectedInputTexts=this._connectedInputTexts.filter(function(e){return e.input!==t}),this._currentlyConnectedInputText===t&&(this._currentlyConnectedInputText=null))}else this._connectedInputTexts.forEach(function(t){e._removeConnectedInputObservables(t)}),this._connectedInputTexts=[];0===this._connectedInputTexts.length&&(this._currentlyConnectedInputText=null,this.onKeyPressObservable.remove(this._onKeyPressObserver),this._onKeyPressObserver=null)},e.prototype._removeConnectedInputObservables=function(t){t.input._connectedVirtualKeyboard=null,t.input.onFocusObservable.remove(t.onFocusObserver),t.input.onBlurObservable.remove(t.onBlurObserver)},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.disconnect()},e.CreateDefaultLayout=function(t){var i=new e(t);return i.addKeysRow(["1","2","3","4","5","6","7","8","9","0","←"]),i.addKeysRow(["q","w","e","r","t","y","u","i","o","p"]),i.addKeysRow(["a","s","d","f","g","h","j","k","l",";","'","↵"]),i.addKeysRow(["⇧","z","x","c","v","b","n","m",",",".","/"]),i.addKeysRow([" "],[{width:"200px"}]),i},e}(n.StackPanel);e.VirtualKeyboard=l},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._cellWidth=20,i._cellHeight=20,i._minorLineTickness=1,i._minorLineColor="DarkGray",i._majorLineTickness=2,i._majorLineColor="White",i._majorLineFrequency=5,i._background="Black",i._displayMajorLines=!0,i._displayMinorLines=!0,i}return o(e,t),Object.defineProperty(e.prototype,"displayMinorLines",{get:function(){return this._displayMinorLines},set:function(t){this._displayMinorLines!==t&&(this._displayMinorLines=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayMajorLines",{get:function(){return this._displayMajorLines},set:function(t){this._displayMajorLines!==t&&(this._displayMajorLines=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellWidth",{get:function(){return this._cellWidth},set:function(t){this._cellWidth=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellHeight",{get:function(){return this._cellHeight},set:function(t){this._cellHeight=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minorLineTickness",{get:function(){return this._minorLineTickness},set:function(t){this._minorLineTickness=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minorLineColor",{get:function(){return this._minorLineColor},set:function(t){this._minorLineColor=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineTickness",{get:function(){return this._majorLineTickness},set:function(t){this._majorLineTickness=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineColor",{get:function(){return this._majorLineColor},set:function(t){this._majorLineColor=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineFrequency",{get:function(){return this._majorLineFrequency},set:function(t){this._majorLineFrequency=t,this._markAsDirty()},enumerable:!0,configurable:!0}),e.prototype._draw=function(t,e){if(e.save(),this._applyStates(e),this._isEnabled&&this._processMeasures(t,e)){this._background&&(e.fillStyle=this._background,e.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height));var i=this._currentMeasure.width/this._cellWidth,r=this._currentMeasure.height/this._cellHeight,o=this._currentMeasure.left+this._currentMeasure.width/2,n=this._currentMeasure.top+this._currentMeasure.height/2;if(this._displayMinorLines){e.strokeStyle=this._minorLineColor,e.lineWidth=this._minorLineTickness;for(var s=-i/2;s<i/2;s++){var h=o+s*this.cellWidth;e.beginPath(),e.moveTo(h,this._currentMeasure.top),e.lineTo(h,this._currentMeasure.top+this._currentMeasure.height),e.stroke()}for(var a=-r/2;a<r/2;a++){var l=n+a*this.cellHeight;e.beginPath(),e.moveTo(this._currentMeasure.left,l),e.lineTo(this._currentMeasure.left+this._currentMeasure.width,l),e.stroke()}}if(this._displayMajorLines){e.strokeStyle=this._majorLineColor,e.lineWidth=this._majorLineTickness;for(s=-i/2+this._majorLineFrequency;s<i/2;s+=this._majorLineFrequency){h=o+s*this.cellWidth;e.beginPath(),e.moveTo(h,this._currentMeasure.top),e.lineTo(h,this._currentMeasure.top+this._currentMeasure.height),e.stroke()}for(a=-r/2+this._majorLineFrequency;a<r/2;a+=this._majorLineFrequency){l=n+a*this.cellHeight;e.moveTo(this._currentMeasure.left,l),e.lineTo(this._currentMeasure.left+this._currentMeasure.width,l),e.closePath(),e.stroke()}}}e.restore()},e.prototype._getTypeName=function(){return"DisplayGrid"},e}(i(10).Control);e.DisplayGrid=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(13),s=i(5),h=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._tempMeasure=new s.Measure(0,0,0,0),i}return o(e,t),Object.defineProperty(e.prototype,"displayThumb",{get:function(){return this._displayThumb&&null!=this.thumbImage},set:function(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this._backgroundImage},set:function(t){var e=this;this._backgroundImage!==t&&(this._backgroundImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valueBarImage",{get:function(){return this._valueBarImage},set:function(t){var e=this;this._valueBarImage!==t&&(this._valueBarImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbImage",{get:function(){return this._thumbImage},set:function(t){var e=this;this._thumbImage!==t&&(this._thumbImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ImageBasedSlider"},e.prototype._draw=function(t,e){if(e.save(),this._applyStates(e),this._processMeasures(t,e)){this._prepareRenderingData("rectangle");var i=this._getThumbPosition(),r=this._renderLeft,o=this._renderTop,n=this._renderWidth,s=this._renderHeight;this._backgroundImage&&(this._tempMeasure.copyFromFloats(r,o,n,s),this.isThumbClamped&&this.displayThumb&&(this.isVertical?this._tempMeasure.height+=this._effectiveThumbThickness:this._tempMeasure.width+=this._effectiveThumbThickness),this._backgroundImage._draw(this._tempMeasure,e)),this._valueBarImage&&(this.isVertical?this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(r,o+i,n,s-i+this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(r,o+i,n,s-i):this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(r,o,i+this._effectiveThumbThickness/2,s):this._tempMeasure.copyFromFloats(r,o,i,s),this._valueBarImage._draw(this._tempMeasure,e)),this.displayThumb&&(this.isVertical?this._tempMeasure.copyFromFloats(r-this._effectiveBarOffset,this._currentMeasure.top+i,this._currentMeasure.width,this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(this._currentMeasure.left+i,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),this._thumbImage._draw(this._tempMeasure,e))}e.restore()},e}(n.BaseSlider);e.ImageBasedSlider=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),o=i(7),n=i(6);e.name="Statics",r.Control.AddHeader=function(t,e,i,s){var h=new o.StackPanel("panel"),a=!s||s.isHorizontal,l=!s||s.controlFirst;h.isVertical=!a;var u=new n.TextBlock("header");return u.text=e,u.textHorizontalAlignment=r.Control.HORIZONTAL_ALIGNMENT_LEFT,a?u.width=i:u.height=i,l?(h.addControl(t),h.addControl(u),u.paddingLeft="5px"):(h.addControl(u),h.addControl(t),u.paddingRight="5px"),u.shadowBlur=t.shadowBlur,u.shadowColor=t.shadowColor,u.shadowOffsetX=t.shadowOffsetX,u.shadowOffsetY=t.shadowOffsetY,h}},function(t,e,i){"use strict";function r(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),r(i(44)),r(i(55)),r(i(56)),r(i(27))},function(t,e,i){"use strict";function r(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),r(i(26)),r(i(16)),r(i(4)),r(i(15)),r(i(45)),r(i(46)),r(i(50)),r(i(51)),r(i(52)),r(i(53)),r(i(54)),r(i(8))},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=i(0),h=i(4),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._radius=5,e}return o(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){var e=this;this._radius!==t&&(this._radius=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){var r=this._cylindricalMapping(e);switch(t.position=r,this.orientation){case h.Container3D.FACEORIGIN_ORIENTATION:i.lookAt(new BABYLON.Vector3(-r.x,r.y,-r.z));break;case h.Container3D.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new BABYLON.Vector3(2*r.x,r.y,2*r.z));break;case h.Container3D.FACEFORWARD_ORIENTATION:break;case h.Container3D.FACEFORWARDREVERSED_ORIENTATION:i.rotate(BABYLON.Axis.Y,Math.PI,BABYLON.Space.LOCAL)}}},e.prototype._cylindricalMapping=function(t){var e=new s.Vector3(0,t.y,this._radius),i=t.x/this._radius;return s.Matrix.RotationYawPitchRollToRef(i,0,0,s.Tmp.Matrix[0]),s.Vector3.TransformNormal(e,s.Tmp.Matrix[0])},e}(n.VolumeBasedPanel);e.CylinderPanel=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(16),s=i(0),h=i(28),a=i(7),l=i(11),u=i(6),c=i(14),_=function(t){function e(e,i){void 0===i&&(i=!0);var r=t.call(this,e)||this;return r._shareMaterials=!0,r._shareMaterials=i,r.pointerEnterAnimation=function(){r.mesh&&r._frontPlate.setEnabled(!0)},r.pointerOutAnimation=function(){r.mesh&&r._frontPlate.setEnabled(!1)},r}return o(e,t),e.prototype._disposeTooltip=function(){this._tooltipFade=null,this._tooltipTextBlock&&this._tooltipTextBlock.dispose(),this._tooltipTexture&&this._tooltipTexture.dispose(),this._tooltipMesh&&this._tooltipMesh.dispose(),this.onPointerEnterObservable.remove(this._tooltipHoverObserver),this.onPointerOutObservable.remove(this._tooltipOutObserver)},Object.defineProperty(e.prototype,"tooltipText",{get:function(){return this._tooltipTextBlock?this._tooltipTextBlock.text:null},set:function(t){var e=this;if(t){if(!this._tooltipFade){this._tooltipMesh=BABYLON.MeshBuilder.CreatePlane("",{size:1},this._backPlate._scene);var i=BABYLON.MeshBuilder.CreatePlane("",{size:1,sideOrientation:BABYLON.Mesh.DOUBLESIDE},this._backPlate._scene),r=new s.StandardMaterial("",this._backPlate._scene);r.diffuseColor=BABYLON.Color3.FromHexString("#212121"),i.material=r,i.isPickable=!1,this._tooltipMesh.addChild(i),i.position.z=.05,this._tooltipMesh.scaling.y=1/3,this._tooltipMesh.position.y=.7,this._tooltipMesh.position.z=-.15,this._tooltipMesh.isPickable=!1,this._tooltipMesh.parent=this._backPlate,this._tooltipTexture=c.AdvancedDynamicTexture.CreateForMesh(this._tooltipMesh),this._tooltipTextBlock=new u.TextBlock,this._tooltipTextBlock.scaleY=3,this._tooltipTextBlock.color="white",this._tooltipTextBlock.fontSize=130,this._tooltipTexture.addControl(this._tooltipTextBlock),this._tooltipFade=new BABYLON.FadeInOutBehavior,this._tooltipFade.delay=500,this._tooltipMesh.addBehavior(this._tooltipFade),this._tooltipHoverObserver=this.onPointerEnterObservable.add(function(){e._tooltipFade&&e._tooltipFade.fadeIn(!0)}),this._tooltipOutObserver=this.onPointerOutObservable.add(function(){e._tooltipFade&&e._tooltipFade.fadeIn(!1)})}this._tooltipTextBlock&&(this._tooltipTextBlock.text=t)}else this._disposeTooltip()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this._rebuildContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageUrl",{get:function(){return this._imageUrl},set:function(t){this._imageUrl!==t&&(this._imageUrl=t,this._rebuildContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backMaterial",{get:function(){return this._backMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frontMaterial",{get:function(){return this._frontMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"plateMaterial",{get:function(){return this._plateMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shareMaterials",{get:function(){return this._shareMaterials},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"HolographicButton"},e.prototype._rebuildContent=function(){this._disposeFacadeTexture();var t=new a.StackPanel;if(t.isVertical=!0,this._imageUrl){var e=new l.Image;e.source=this._imageUrl,e.paddingTop="40px",e.height="180px",e.width="100px",e.paddingBottom="40px",t.addControl(e)}if(this._text){var i=new u.TextBlock;i.text=this._text,i.color="white",i.height="30px",i.fontSize=24,t.addControl(i)}this._frontPlate&&(this.content=t)},e.prototype._createNode=function(e){return this._backPlate=s.MeshBuilder.CreateBox(this.name+"BackMesh",{width:1,height:1,depth:.08},e),this._frontPlate=s.MeshBuilder.CreateBox(this.name+"FrontMesh",{width:1,height:1,depth:.08},e),this._frontPlate.parent=this._backPlate,this._frontPlate.position.z=-.08,this._frontPlate.isPickable=!1,this._frontPlate.setEnabled(!1),this._textPlate=t.prototype._createNode.call(this,e),this._textPlate.parent=this._backPlate,this._textPlate.position.z=-.08,this._textPlate.isPickable=!1,this._backPlate},e.prototype._applyFacade=function(t){this._plateMaterial.emissiveTexture=t,this._plateMaterial.opacityTexture=t},e.prototype._createBackMaterial=function(t){var e=this;this._backMaterial=new h.FluentMaterial(this.name+"Back Material",t.getScene()),this._backMaterial.renderHoverLight=!0,this._pickedPointObserver=this._host.onPickedPointChangedObservable.add(function(t){t?(e._backMaterial.hoverPosition=t,e._backMaterial.hoverColor.a=1):e._backMaterial.hoverColor.a=0})},e.prototype._createFrontMaterial=function(t){this._frontMaterial=new h.FluentMaterial(this.name+"Front Material",t.getScene()),this._frontMaterial.innerGlowColorIntensity=0,this._frontMaterial.alpha=.5,this._frontMaterial.renderBorders=!0},e.prototype._createPlateMaterial=function(t){this._plateMaterial=new s.StandardMaterial(this.name+"Plate Material",t.getScene()),this._plateMaterial.specularColor=s.Color3.Black()},e.prototype._affectMaterial=function(t){this._shareMaterials?(this._host._sharedMaterials.backFluentMaterial?this._backMaterial=this._host._sharedMaterials.backFluentMaterial:(this._createBackMaterial(t),this._host._sharedMaterials.backFluentMaterial=this._backMaterial),this._host._sharedMaterials.frontFluentMaterial?this._frontMaterial=this._host._sharedMaterials.frontFluentMaterial:(this._createFrontMaterial(t),this._host._sharedMaterials.frontFluentMaterial=this._frontMaterial)):(this._createBackMaterial(t),this._createFrontMaterial(t)),this._createPlateMaterial(t),this._backPlate.material=this._backMaterial,this._frontPlate.material=this._frontMaterial,this._textPlate.material=this._plateMaterial,this._rebuildContent()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this._disposeTooltip(),this.shareMaterials||(this._backMaterial.dispose(),this._frontMaterial.dispose(),this._plateMaterial.dispose(),this._pickedPointObserver&&(this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver),this._pickedPointObserver=null))},e}(n.Button3D);e.HolographicButton=_},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),o=i(48);e.fShader=o;var n=i(49);e.vShader=n,e.registerShader=function(){r.Effect.ShadersStore.fluentVertexShader=n,r.Effect.ShadersStore.fluentPixelShader=o}},function(t,e){t.exports="precision highp float;\nvarying vec2 vUV;\nuniform vec4 albedoColor;\n#ifdef INNERGLOW\nuniform vec4 innerGlowColor;\n#endif\n#ifdef BORDER\nvarying vec2 scaleInfo;\nuniform float edgeSmoothingValue;\nuniform float borderMinValue;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\nuniform vec3 hoverPosition;\nuniform vec4 hoverColor;\nuniform float hoverRadius;\n#endif\n#ifdef TEXTURE\nuniform sampler2D albedoSampler;\n#endif\nvoid main(void) {\nvec3 albedo=albedoColor.rgb;\nfloat alpha=albedoColor.a;\n#ifdef TEXTURE\nalbedo=texture2D(albedoSampler,vUV).rgb;\n#endif\n#ifdef HOVERLIGHT\nfloat pointToHover=(1.0-clamp(length(hoverPosition-worldPosition)/hoverRadius,0.,1.))*hoverColor.a;\nalbedo=clamp(albedo+hoverColor.rgb*pointToHover,0.,1.);\n#else\nfloat pointToHover=1.0;\n#endif\n#ifdef BORDER \nfloat borderPower=10.0;\nfloat inverseBorderPower=1.0/borderPower;\nvec3 borderColor=albedo*borderPower;\nvec2 distanceToEdge;\ndistanceToEdge.x=abs(vUV.x-0.5)*2.0;\ndistanceToEdge.y=abs(vUV.y-0.5)*2.0;\nfloat borderValue=max(smoothstep(scaleInfo.x-edgeSmoothingValue,scaleInfo.x+edgeSmoothingValue,distanceToEdge.x),\nsmoothstep(scaleInfo.y-edgeSmoothingValue,scaleInfo.y+edgeSmoothingValue,distanceToEdge.y));\nborderColor=borderColor*borderValue*max(borderMinValue*inverseBorderPower,pointToHover); \nalbedo+=borderColor;\nalpha=max(alpha,borderValue);\n#endif\n#ifdef INNERGLOW\n\nvec2 uvGlow=(vUV-vec2(0.5,0.5))*(innerGlowColor.a*2.0);\nuvGlow=uvGlow*uvGlow;\nuvGlow=uvGlow*uvGlow;\nalbedo+=mix(vec3(0.0,0.0,0.0),innerGlowColor.rgb,uvGlow.x+uvGlow.y); \n#endif\ngl_FragColor=vec4(albedo,alpha);\n}"},function(t,e){t.exports="precision highp float;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 world;\nuniform mat4 viewProjection;\nvarying vec2 vUV;\n#ifdef BORDER\nvarying vec2 scaleInfo;\nuniform float borderWidth;\nuniform vec3 scaleFactor;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\n#endif\nvoid main(void) {\nvUV=uv;\n#ifdef BORDER\nvec3 scale=scaleFactor;\nfloat minScale=min(min(scale.x,scale.y),scale.z);\nfloat maxScale=max(max(scale.x,scale.y),scale.z);\nfloat minOverMiddleScale=minScale/(scale.x+scale.y+scale.z-minScale-maxScale);\nfloat areaYZ=scale.y*scale.z;\nfloat areaXZ=scale.x*scale.z;\nfloat areaXY=scale.x*scale.y;\nfloat scaledBorderWidth=borderWidth; \nif (abs(normal.x) == 1.0) \n{\nscale.x=scale.y;\nscale.y=scale.z;\nif (areaYZ>areaXZ && areaYZ>areaXY)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nelse if (abs(normal.y) == 1.0) \n{\nscale.x=scale.z;\nif (areaXZ>areaXY && areaXZ>areaYZ)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nelse \n{\nif (areaXY>areaYZ && areaXY>areaXZ)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nfloat scaleRatio=min(scale.x,scale.y)/max(scale.x,scale.y);\nif (scale.x>scale.y)\n{\nscaleInfo.x=1.0-(scaledBorderWidth*scaleRatio);\nscaleInfo.y=1.0-scaledBorderWidth;\n}\nelse\n{\nscaleInfo.x=1.0-scaledBorderWidth;\nscaleInfo.y=1.0-(scaledBorderWidth*scaleRatio);\n} \n#endif \nvec4 worldPos=world*vec4(position,1.0);\n#ifdef HOVERLIGHT\nworldPosition=worldPos.xyz;\n#endif\ngl_Position=viewProjection*worldPos;\n}\n"},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e,i){var r=t.call(this,i)||this;return r._currentMesh=e,r.pointerEnterAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1.1)},r.pointerOutAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1/1.1)},r.pointerDownAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(.95)},r.pointerUpAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1/.95)},r}return o(e,t),e.prototype._getTypeName=function(){return"MeshButton3D"},e.prototype._createNode=function(t){var e=this;return this._currentMesh.getChildMeshes().forEach(function(t){t.metadata=e}),this._currentMesh},e.prototype._affectMaterial=function(t){},e}(i(16).Button3D);e.MeshButton3D=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=i(4),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){t.position=e.clone();var r=n.Tmp.Vector3[0];switch(r.copyFrom(e),this.orientation){case s.Container3D.FACEORIGIN_ORIENTATION:case s.Container3D.FACEFORWARD_ORIENTATION:r.addInPlace(new BABYLON.Vector3(0,0,-1)),i.lookAt(r);break;case s.Container3D.FACEFORWARDREVERSED_ORIENTATION:case s.Container3D.FACEORIGINREVERSED_ORIENTATION:r.addInPlace(new BABYLON.Vector3(0,0,1)),i.lookAt(r)}}},e}(i(8).VolumeBasedPanel);e.PlanePanel=h},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=i(0),h=i(4),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._iteration=100,e}return o(e,t),Object.defineProperty(e.prototype,"iteration",{get:function(){return this._iteration},set:function(t){var e=this;this._iteration!==t&&(this._iteration=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh,r=this._scatterMapping(e);if(i){switch(this.orientation){case h.Container3D.FACEORIGIN_ORIENTATION:case h.Container3D.FACEFORWARD_ORIENTATION:i.lookAt(new s.Vector3(0,0,-1));break;case h.Container3D.FACEFORWARDREVERSED_ORIENTATION:case h.Container3D.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new s.Vector3(0,0,1))}t.position=r}},e.prototype._scatterMapping=function(t){return t.x=(1-2*Math.random())*this._cellWidth,t.y=(1-2*Math.random())*this._cellHeight,t},e.prototype._finalProcessing=function(){for(var t=[],e=0,i=this._children;e<i.length;e++){var r=i[e];r.mesh&&t.push(r.mesh)}for(var o=0;o<this._iteration;o++){t.sort(function(t,e){var i=t.position.lengthSquared(),r=e.position.lengthSquared();return i<r?1:i>r?-1:0});for(var n=Math.pow(this.margin,2),h=Math.max(this._cellWidth,this._cellHeight),a=s.Tmp.Vector2[0],l=s.Tmp.Vector3[0],u=0;u<t.length-1;u++)for(var c=u+1;c<t.length;c++)if(u!=c){t[c].position.subtractToRef(t[u].position,l),a.x=l.x,a.y=l.y;var _=h,d=a.lengthSquared()-n;(d-=Math.min(d,n))<Math.pow(_,2)&&(a.normalize(),l.scaleInPlace(.5*(_-Math.sqrt(d))),t[c].position.addInPlace(l),t[u].position.subtractInPlace(l))}}},e}(n.VolumeBasedPanel);e.ScatterPanel=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=i(0),h=i(4),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._radius=5,e}return o(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){var e=this;this._radius!==t&&(this._radius=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){var r=this._sphericalMapping(e);switch(t.position=r,this.orientation){case h.Container3D.FACEORIGIN_ORIENTATION:i.lookAt(new BABYLON.Vector3(-r.x,-r.y,-r.z));break;case h.Container3D.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new BABYLON.Vector3(2*r.x,2*r.y,2*r.z));break;case h.Container3D.FACEFORWARD_ORIENTATION:break;case h.Container3D.FACEFORWARDREVERSED_ORIENTATION:i.rotate(BABYLON.Axis.Y,Math.PI,BABYLON.Space.LOCAL)}}},e.prototype._sphericalMapping=function(t){var e=new s.Vector3(0,0,this._radius),i=t.y/this._radius,r=-t.x/this._radius;return s.Matrix.RotationYawPitchRollToRef(r,i,0,s.Tmp.Matrix[0]),s.Vector3.TransformNormal(e,s.Tmp.Matrix[0])},e}(n.VolumeBasedPanel);e.SpherePanel=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(4),s=i(0),h=function(t){function e(e){void 0===e&&(e=!1);var i=t.call(this)||this;return i._isVertical=!1,i.margin=.1,i._isVertical=e,i}return o(e,t),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){var e=this;this._isVertical!==t&&(this._isVertical=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._arrangeChildren=function(){for(var t,e=0,i=0,r=0,o=[],n=s.Matrix.Invert(this.node.computeWorldMatrix(!0)),h=0,a=this._children;h<a.length;h++){if((f=a[h]).mesh){r++,f.mesh.computeWorldMatrix(!0),f.mesh.getWorldMatrix().multiplyToRef(n,s.Tmp.Matrix[0]);var l=f.mesh.getBoundingInfo().boundingBox,u=s.Vector3.TransformNormal(l.extendSize,s.Tmp.Matrix[0]);o.push(u),this._isVertical?i+=u.y:e+=u.x}}this._isVertical?i+=(r-1)*this.margin/2:e+=(r-1)*this.margin/2,t=this._isVertical?-i:-e;for(var c=0,_=0,d=this._children;_<d.length;_++){var f;if((f=d[_]).mesh){r--;u=o[c++];this._isVertical?(f.position.y=t+u.y,f.position.x=0,t+=2*u.y):(f.position.x=t+u.x,f.position.y=0,t+=2*u.x),t+=r>0?this.margin:0}}},e}(n.Container3D);e.StackPanel3D=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}(i(28))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),o=i(4),n=function(){function t(t){var e=this;this._lastControlOver={},this._lastControlDown={},this.onPickedPointChangedObservable=new r.Observable,this._sharedMaterials={},this._scene=t||r.Engine.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(function(){e._sceneDisposeObserver=null,e._utilityLayer=null,e.dispose()}),this._utilityLayer=new r.UtilityLayerRenderer(this._scene),this._utilityLayer.onlyCheckPointerDownEvents=!1,this._utilityLayer.pickUtilitySceneFirst=!1,this._utilityLayer.mainSceneTrackerPredicate=function(t){return t&&t.metadata&&t.metadata._node},this._rootContainer=new o.Container3D("RootContainer"),this._rootContainer._host=this;var i=this._utilityLayer.utilityLayerScene;this._pointerOutObserver=this._utilityLayer.onPointerOutObservable.add(function(t){e._handlePointerOut(t,!0)}),this._pointerObserver=i.onPointerObservable.add(function(t,i){e._doPicking(t)}),this._utilityLayer.utilityLayerScene.autoClear=!1,this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil=!1,new r.HemisphericLight("hemi",r.Vector3.Up(),this._utilityLayer.utilityLayerScene)}return Object.defineProperty(t.prototype,"scene",{get:function(){return this._scene},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"utilityLayer",{get:function(){return this._utilityLayer},enumerable:!0,configurable:!0}),t.prototype._handlePointerOut=function(t,e){var i=this._lastControlOver[t];i&&(i._onPointerOut(i),delete this._lastControlOver[t]),e&&this._lastControlDown[t]&&(this._lastControlDown[t].forcePointerUp(),delete this._lastControlDown[t]),this.onPickedPointChangedObservable.notifyObservers(null)},t.prototype._doPicking=function(t){if(!this._utilityLayer||!this._utilityLayer.utilityLayerScene.activeCamera)return!1;var e=t.event,i=e.pointerId||0,o=e.button,n=t.pickInfo;if(!n||!n.hit)return this._handlePointerOut(i,t.type===r.PointerEventTypes.POINTERUP),!1;var s=n.pickedMesh.metadata;return n.pickedPoint&&this.onPickedPointChangedObservable.notifyObservers(n.pickedPoint),s._processObservables(t.type,n.pickedPoint,i,o)||t.type===r.PointerEventTypes.POINTERMOVE&&(this._lastControlOver[i]&&this._lastControlOver[i]._onPointerOut(this._lastControlOver[i]),delete this._lastControlOver[i]),t.type===r.PointerEventTypes.POINTERUP&&(this._lastControlDown[e.pointerId]&&(this._lastControlDown[e.pointerId].forcePointerUp(),delete this._lastControlDown[e.pointerId]),"touch"===e.pointerType&&this._handlePointerOut(i,!1)),!0},Object.defineProperty(t.prototype,"rootContainer",{get:function(){return this._rootContainer},enumerable:!0,configurable:!0}),t.prototype.containsControl=function(t){return this._rootContainer.containsControl(t)},t.prototype.addControl=function(t){return this._rootContainer.addControl(t),this},t.prototype.removeControl=function(t){return this._rootContainer.removeControl(t),this},t.prototype.dispose=function(){for(var t in this._rootContainer.dispose(),this._sharedMaterials)this._sharedMaterials.hasOwnProperty(t)&&this._sharedMaterials[t].dispose();this._sharedMaterials={},this._pointerOutObserver&&this._utilityLayer&&(this._utilityLayer.onPointerOutObservable.remove(this._pointerOutObserver),this._pointerOutObserver=null),this.onPickedPointChangedObservable.clear();var e=this._utilityLayer?this._utilityLayer.utilityLayerScene:null;e&&this._pointerObserver&&(e.onPointerObservable.remove(this._pointerObserver),this._pointerObserver=null),this._scene&&this._sceneDisposeObserver&&(this._scene.onDisposeObservable.remove(this._sceneDisposeObserver),this._sceneDisposeObserver=null),this._utilityLayer&&this._utilityLayer.dispose()},t}();e.GUI3DManager=n}])});
//# sourceMappingURL=babylon.gui.min.js.map

/// <reference path="../../../dist/preview release/babylon.d.ts"/>
/// <reference path="../../../dist/preview release/glTF2Interface/babylon.glTF2Interface.d.ts"/>
var BABYLON;
(function (BABYLON) {
    /**
     * Mode that determines the coordinate system to use.
     */
    var GLTFLoaderCoordinateSystemMode;
    (function (GLTFLoaderCoordinateSystemMode) {
        /**
         * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
         */
        GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
        /**
         * Sets the useRightHandedSystem flag on the scene.
         */
        GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
    })(GLTFLoaderCoordinateSystemMode = BABYLON.GLTFLoaderCoordinateSystemMode || (BABYLON.GLTFLoaderCoordinateSystemMode = {}));
    /**
     * Mode that determines what animations will start.
     */
    var GLTFLoaderAnimationStartMode;
    (function (GLTFLoaderAnimationStartMode) {
        /**
         * No animation will start.
         */
        GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
        /**
         * The first animation will start.
         */
        GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
        /**
         * All animations will start.
         */
        GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
    })(GLTFLoaderAnimationStartMode = BABYLON.GLTFLoaderAnimationStartMode || (BABYLON.GLTFLoaderAnimationStartMode = {}));
    /**
     * Loader state.
     */
    var GLTFLoaderState;
    (function (GLTFLoaderState) {
        /**
         * The asset is loading.
         */
        GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
        /**
         * The asset is ready for rendering.
         */
        GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
        /**
         * The asset is completely loaded.
         */
        GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
    })(GLTFLoaderState = BABYLON.GLTFLoaderState || (BABYLON.GLTFLoaderState = {}));
    /**
     * File loader for loading glTF files into a scene.
     */
    var GLTFFileLoader = /** @class */ (function () {
        function GLTFFileLoader() {
            // --------------
            // Common options
            // --------------
            /**
             * Raised when the asset has been parsed
             */
            this.onParsedObservable = new BABYLON.Observable();
            // ----------
            // V2 options
            // ----------
            /**
             * The coordinate system mode. Defaults to AUTO.
             */
            this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
            /**
            * The animation start mode. Defaults to FIRST.
            */
            this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
            /**
             * Defines if the loader should compile materials before raising the success callback. Defaults to false.
             */
            this.compileMaterials = false;
            /**
             * Defines if the loader should also compile materials with clip planes. Defaults to false.
             */
            this.useClipPlane = false;
            /**
             * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
             */
            this.compileShadowGenerators = false;
            /**
             * Defines if the Alpha blended materials are only applied as coverage.
             * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
             * If true, no extra effects are applied to transparent pixels.
             */
            this.transparencyAsCoverage = false;
            /**
             * Function called before loading a url referenced by the asset.
             */
            this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
            /**
             * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
             */
            this.onMeshLoadedObservable = new BABYLON.Observable();
            /**
             * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
             */
            this.onTextureLoadedObservable = new BABYLON.Observable();
            /**
             * Observable raised when the loader creates a material after parsing the glTF properties of the material.
             */
            this.onMaterialLoadedObservable = new BABYLON.Observable();
            /**
             * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
             */
            this.onCameraLoadedObservable = new BABYLON.Observable();
            /**
             * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
             * For assets with LODs, raised when all of the LODs are complete.
             * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
             */
            this.onCompleteObservable = new BABYLON.Observable();
            /**
             * Observable raised when an error occurs.
             */
            this.onErrorObservable = new BABYLON.Observable();
            /**
             * Observable raised after the loader is disposed.
             */
            this.onDisposeObservable = new BABYLON.Observable();
            /**
             * Observable raised after a loader extension is created.
             * Set additional options for a loader extension in this event.
             */
            this.onExtensionLoadedObservable = new BABYLON.Observable();
            /**
             * Defines if the loader should validate the asset.
             */
            this.validate = false;
            /**
             * Observable raised after validation when validate is set to true. The event data is the result of the validation.
             */
            this.onValidatedObservable = new BABYLON.Observable();
            this._loader = null;
            /**
             * Name of the loader ("gltf")
             */
            this.name = "gltf";
            /**
             * Supported file extensions of the loader (.gltf, .glb)
             */
            this.extensions = {
                ".gltf": { isBinary: false },
                ".glb": { isBinary: true }
            };
            this._logIndentLevel = 0;
            this._loggingEnabled = false;
            /** @hidden */
            this._log = this._logDisabled;
            this._capturePerformanceCounters = false;
            /** @hidden */
            this._startPerformanceCounter = this._startPerformanceCounterDisabled;
            /** @hidden */
            this._endPerformanceCounter = this._endPerformanceCounterDisabled;
        }
        Object.defineProperty(GLTFFileLoader.prototype, "onParsed", {
            /**
             * Raised when the asset has been parsed
             */
            set: function (callback) {
                if (this._onParsedObserver) {
                    this.onParsedObservable.remove(this._onParsedObserver);
                }
                this._onParsedObserver = this.onParsedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onMeshLoaded", {
            /**
             * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
             */
            set: function (callback) {
                if (this._onMeshLoadedObserver) {
                    this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
                }
                this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onTextureLoaded", {
            /**
             * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
             */
            set: function (callback) {
                if (this._onTextureLoadedObserver) {
                    this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
                }
                this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onMaterialLoaded", {
            /**
             * Callback raised when the loader creates a material after parsing the glTF properties of the material.
             */
            set: function (callback) {
                if (this._onMaterialLoadedObserver) {
                    this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
                }
                this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onCameraLoaded", {
            /**
             * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
             */
            set: function (callback) {
                if (this._onCameraLoadedObserver) {
                    this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
                }
                this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onComplete", {
            /**
             * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
             * For assets with LODs, raised when all of the LODs are complete.
             * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
             */
            set: function (callback) {
                if (this._onCompleteObserver) {
                    this.onCompleteObservable.remove(this._onCompleteObserver);
                }
                this._onCompleteObserver = this.onCompleteObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onError", {
            /**
             * Callback raised when an error occurs.
             */
            set: function (callback) {
                if (this._onErrorObserver) {
                    this.onErrorObservable.remove(this._onErrorObserver);
                }
                this._onErrorObserver = this.onErrorObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onDispose", {
            /**
             * Callback raised after the loader is disposed.
             */
            set: function (callback) {
                if (this._onDisposeObserver) {
                    this.onDisposeObservable.remove(this._onDisposeObserver);
                }
                this._onDisposeObserver = this.onDisposeObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onExtensionLoaded", {
            /**
             * Callback raised after a loader extension is created.
             */
            set: function (callback) {
                if (this._onExtensionLoadedObserver) {
                    this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
                }
                this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "loggingEnabled", {
            /**
             * Defines if the loader logging is enabled.
             */
            get: function () {
                return this._loggingEnabled;
            },
            set: function (value) {
                if (this._loggingEnabled === value) {
                    return;
                }
                this._loggingEnabled = value;
                if (this._loggingEnabled) {
                    this._log = this._logEnabled;
                }
                else {
                    this._log = this._logDisabled;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "capturePerformanceCounters", {
            /**
             * Defines if the loader should capture performance counters.
             */
            get: function () {
                return this._capturePerformanceCounters;
            },
            set: function (value) {
                if (this._capturePerformanceCounters === value) {
                    return;
                }
                this._capturePerformanceCounters = value;
                if (this._capturePerformanceCounters) {
                    this._startPerformanceCounter = this._startPerformanceCounterEnabled;
                    this._endPerformanceCounter = this._endPerformanceCounterEnabled;
                }
                else {
                    this._startPerformanceCounter = this._startPerformanceCounterDisabled;
                    this._endPerformanceCounter = this._endPerformanceCounterDisabled;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLTFFileLoader.prototype, "onValidated", {
            /**
             * Callback raised after a loader extension is created.
             */
            set: function (callback) {
                if (this._onValidatedObserver) {
                    this.onValidatedObservable.remove(this._onValidatedObserver);
                }
                this._onValidatedObserver = this.onValidatedObservable.add(callback);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Disposes the loader, releases resources during load, and cancels any outstanding requests.
         */
        GLTFFileLoader.prototype.dispose = function () {
            if (this._loader) {
                this._loader.dispose();
                this._loader = null;
            }
            this._clear();
            this.onDisposeObservable.notifyObservers(undefined);
            this.onDisposeObservable.clear();
        };
        /** @hidden */
        GLTFFileLoader.prototype._clear = function () {
            this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
            this.onMeshLoadedObservable.clear();
            this.onTextureLoadedObservable.clear();
            this.onMaterialLoadedObservable.clear();
            this.onCameraLoadedObservable.clear();
            this.onCompleteObservable.clear();
            this.onExtensionLoadedObservable.clear();
        };
        /**
         * Imports one or more meshes from the loaded glTF data and adds them to the scene
         * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
         * @param scene the scene the meshes should be added to
         * @param data the glTF data to load
         * @param rootUrl root url to load from
         * @param onProgress event that fires when loading progress has occured
         * @param fileName Defines the name of the file to load
         * @returns a promise containg the loaded meshes, particles, skeletons and animations
         */
        GLTFFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onProgress, fileName) {
            var _this = this;
            return this._parseAsync(scene, data, rootUrl, fileName).then(function (loaderData) {
                _this._log("Loading " + (fileName || ""));
                _this._loader = _this._getLoader(loaderData);
                return _this._loader.importMeshAsync(meshesNames, scene, loaderData, rootUrl, onProgress, fileName);
            });
        };
        /**
         * Imports all objects from the loaded glTF data and adds them to the scene
         * @param scene the scene the objects should be added to
         * @param data the glTF data to load
         * @param rootUrl root url to load from
         * @param onProgress event that fires when loading progress has occured
         * @param fileName Defines the name of the file to load
         * @returns a promise which completes when objects have been loaded to the scene
         */
        GLTFFileLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress, fileName) {
            var _this = this;
            return this._parseAsync(scene, data, rootUrl, fileName).then(function (loaderData) {
                _this._log("Loading " + (fileName || ""));
                _this._loader = _this._getLoader(loaderData);
                return _this._loader.loadAsync(scene, loaderData, rootUrl, onProgress, fileName);
            });
        };
        /**
         * Load into an asset container.
         * @param scene The scene to load into
         * @param data The data to import
         * @param rootUrl The root url for scene and resources
         * @param onProgress The callback when the load progresses
         * @param fileName Defines the name of the file to load
         * @returns The loaded asset container
         */
        GLTFFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl, onProgress, fileName) {
            var _this = this;
            return this._parseAsync(scene, data, rootUrl, fileName).then(function (loaderData) {
                _this._log("Loading " + (fileName || ""));
                _this._loader = _this._getLoader(loaderData);
                return _this._loader.importMeshAsync(null, scene, loaderData, rootUrl, onProgress, fileName).then(function (result) {
                    var container = new BABYLON.AssetContainer(scene);
                    Array.prototype.push.apply(container.meshes, result.meshes);
                    Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                    Array.prototype.push.apply(container.skeletons, result.skeletons);
                    Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                    container.removeAllFromScene();
                    return container;
                });
            });
        };
        /**
         * If the data string can be loaded directly.
         * @param data string contianing the file data
         * @returns if the data can be loaded directly
         */
        GLTFFileLoader.prototype.canDirectLoad = function (data) {
            return ((data.indexOf("scene") !== -1) && (data.indexOf("node") !== -1));
        };
        /**
         * Instantiates a glTF file loader plugin.
         * @returns the created plugin
         */
        GLTFFileLoader.prototype.createPlugin = function () {
            return new GLTFFileLoader();
        };
        Object.defineProperty(GLTFFileLoader.prototype, "loaderState", {
            /**
             * The loader state or null if the loader is not active.
             */
            get: function () {
                return this._loader ? this._loader.state : null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns a promise that resolves when the asset is completely loaded.
         * @returns a promise that resolves when the asset is completely loaded.
         */
        GLTFFileLoader.prototype.whenCompleteAsync = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.onCompleteObservable.addOnce(function () {
                    resolve();
                });
                _this.onErrorObservable.addOnce(function (reason) {
                    reject(reason);
                });
            });
        };
        GLTFFileLoader.prototype._parseAsync = function (scene, data, rootUrl, fileName) {
            var _this = this;
            return Promise.resolve().then(function () {
                var unpacked = (data instanceof ArrayBuffer) ? _this._unpackBinary(data) : { json: data, bin: null };
                return _this._validateAsync(scene, unpacked.json, rootUrl, fileName).then(function () {
                    _this._startPerformanceCounter("Parse JSON");
                    _this._log("JSON length: " + unpacked.json.length);
                    var loaderData = {
                        json: JSON.parse(unpacked.json),
                        bin: unpacked.bin
                    };
                    _this._endPerformanceCounter("Parse JSON");
                    _this.onParsedObservable.notifyObservers(loaderData);
                    _this.onParsedObservable.clear();
                    return loaderData;
                });
            });
        };
        GLTFFileLoader.prototype._validateAsync = function (scene, json, rootUrl, fileName) {
            var _this = this;
            if (!this.validate || typeof GLTFValidator === "undefined") {
                return Promise.resolve();
            }
            this._startPerformanceCounter("Validate JSON");
            var options = {
                externalResourceFunction: function (uri) {
                    return _this.preprocessUrlAsync(rootUrl + uri)
                        .then(function (url) { return scene._loadFileAsync(url, true, true); })
                        .then(function (data) { return new Uint8Array(data); });
                }
            };
            if (fileName && fileName.substr(0, 5) !== "data:") {
                options.uri = (rootUrl === "file:" ? fileName : "" + rootUrl + fileName);
            }
            return GLTFValidator.validateString(json, options).then(function (result) {
                _this._endPerformanceCounter("Validate JSON");
                _this.onValidatedObservable.notifyObservers(result);
                _this.onValidatedObservable.clear();
            }, function (reason) {
                _this._endPerformanceCounter("Validate JSON");
                BABYLON.Tools.Warn("Failed to validate: " + reason);
                _this.onValidatedObservable.clear();
            });
        };
        GLTFFileLoader.prototype._getLoader = function (loaderData) {
            var asset = loaderData.json.asset || {};
            this._log("Asset version: " + asset.version);
            asset.minVersion && this._log("Asset minimum version: " + asset.minVersion);
            asset.generator && this._log("Asset generator: " + asset.generator);
            var version = GLTFFileLoader._parseVersion(asset.version);
            if (!version) {
                throw new Error("Invalid version: " + asset.version);
            }
            if (asset.minVersion !== undefined) {
                var minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
                if (!minVersion) {
                    throw new Error("Invalid minimum version: " + asset.minVersion);
                }
                if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                    throw new Error("Incompatible minimum version: " + asset.minVersion);
                }
            }
            var createLoaders = {
                1: GLTFFileLoader._CreateGLTFLoaderV1,
                2: GLTFFileLoader._CreateGLTFLoaderV2
            };
            var createLoader = createLoaders[version.major];
            if (!createLoader) {
                throw new Error("Unsupported version: " + asset.version);
            }
            return createLoader(this);
        };
        GLTFFileLoader.prototype._unpackBinary = function (data) {
            this._startPerformanceCounter("Unpack binary");
            this._log("Binary length: " + data.byteLength);
            var Binary = {
                Magic: 0x46546C67
            };
            var binaryReader = new BinaryReader(data);
            var magic = binaryReader.readUint32();
            if (magic !== Binary.Magic) {
                throw new Error("Unexpected magic: " + magic);
            }
            var version = binaryReader.readUint32();
            if (this.loggingEnabled) {
                this._log("Binary version: " + version);
            }
            var unpacked;
            switch (version) {
                case 1: {
                    unpacked = this._unpackBinaryV1(binaryReader);
                    break;
                }
                case 2: {
                    unpacked = this._unpackBinaryV2(binaryReader);
                    break;
                }
                default: {
                    throw new Error("Unsupported version: " + version);
                }
            }
            this._endPerformanceCounter("Unpack binary");
            return unpacked;
        };
        GLTFFileLoader.prototype._unpackBinaryV1 = function (binaryReader) {
            var ContentFormat = {
                JSON: 0
            };
            var length = binaryReader.readUint32();
            if (length != binaryReader.getLength()) {
                throw new Error("Length in header does not match actual data length: " + length + " != " + binaryReader.getLength());
            }
            var contentLength = binaryReader.readUint32();
            var contentFormat = binaryReader.readUint32();
            var content;
            switch (contentFormat) {
                case ContentFormat.JSON: {
                    content = GLTFFileLoader._decodeBufferToText(binaryReader.readUint8Array(contentLength));
                    break;
                }
                default: {
                    throw new Error("Unexpected content format: " + contentFormat);
                }
            }
            var bytesRemaining = binaryReader.getLength() - binaryReader.getPosition();
            var body = binaryReader.readUint8Array(bytesRemaining);
            return {
                json: content,
                bin: body
            };
        };
        GLTFFileLoader.prototype._unpackBinaryV2 = function (binaryReader) {
            var ChunkFormat = {
                JSON: 0x4E4F534A,
                BIN: 0x004E4942
            };
            var length = binaryReader.readUint32();
            if (length !== binaryReader.getLength()) {
                throw new Error("Length in header does not match actual data length: " + length + " != " + binaryReader.getLength());
            }
            // JSON chunk
            var chunkLength = binaryReader.readUint32();
            var chunkFormat = binaryReader.readUint32();
            if (chunkFormat !== ChunkFormat.JSON) {
                throw new Error("First chunk format is not JSON");
            }
            var json = GLTFFileLoader._decodeBufferToText(binaryReader.readUint8Array(chunkLength));
            // Look for BIN chunk
            var bin = null;
            while (binaryReader.getPosition() < binaryReader.getLength()) {
                var chunkLength_1 = binaryReader.readUint32();
                var chunkFormat_1 = binaryReader.readUint32();
                switch (chunkFormat_1) {
                    case ChunkFormat.JSON: {
                        throw new Error("Unexpected JSON chunk");
                    }
                    case ChunkFormat.BIN: {
                        bin = binaryReader.readUint8Array(chunkLength_1);
                        break;
                    }
                    default: {
                        // ignore unrecognized chunkFormat
                        binaryReader.skipBytes(chunkLength_1);
                        break;
                    }
                }
            }
            return {
                json: json,
                bin: bin
            };
        };
        GLTFFileLoader._parseVersion = function (version) {
            if (version === "1.0" || version === "1.0.1") {
                return {
                    major: 1,
                    minor: 0
                };
            }
            var match = (version + "").match(/^(\d+)\.(\d+)/);
            if (!match) {
                return null;
            }
            return {
                major: parseInt(match[1]),
                minor: parseInt(match[2])
            };
        };
        GLTFFileLoader._compareVersion = function (a, b) {
            if (a.major > b.major) {
                return 1;
            }
            if (a.major < b.major) {
                return -1;
            }
            if (a.minor > b.minor) {
                return 1;
            }
            if (a.minor < b.minor) {
                return -1;
            }
            return 0;
        };
        GLTFFileLoader._decodeBufferToText = function (buffer) {
            var result = "";
            var length = buffer.byteLength;
            for (var i = 0; i < length; i++) {
                result += String.fromCharCode(buffer[i]);
            }
            return result;
        };
        /** @hidden */
        GLTFFileLoader.prototype._logOpen = function (message) {
            this._log(message);
            this._logIndentLevel++;
        };
        /** @hidden */
        GLTFFileLoader.prototype._logClose = function () {
            --this._logIndentLevel;
        };
        GLTFFileLoader.prototype._logEnabled = function (message) {
            var spaces = GLTFFileLoader._logSpaces.substr(0, this._logIndentLevel * 2);
            BABYLON.Tools.Log("" + spaces + message);
        };
        GLTFFileLoader.prototype._logDisabled = function (message) {
        };
        GLTFFileLoader.prototype._startPerformanceCounterEnabled = function (counterName) {
            BABYLON.Tools.StartPerformanceCounter(counterName);
        };
        GLTFFileLoader.prototype._startPerformanceCounterDisabled = function (counterName) {
        };
        GLTFFileLoader.prototype._endPerformanceCounterEnabled = function (counterName) {
            BABYLON.Tools.EndPerformanceCounter(counterName);
        };
        GLTFFileLoader.prototype._endPerformanceCounterDisabled = function (counterName) {
        };
        // ----------
        // V1 options
        // ----------
        /**
         * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
         * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
         * Defaults to true.
         * @hidden
         */
        GLTFFileLoader.IncrementalLoading = true;
        /**
         * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
         * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
         * @hidden
         */
        GLTFFileLoader.HomogeneousCoordinates = false;
        GLTFFileLoader._logSpaces = "                                ";
        return GLTFFileLoader;
    }());
    BABYLON.GLTFFileLoader = GLTFFileLoader;
    var BinaryReader = /** @class */ (function () {
        function BinaryReader(arrayBuffer) {
            this._arrayBuffer = arrayBuffer;
            this._dataView = new DataView(arrayBuffer);
            this._byteOffset = 0;
        }
        BinaryReader.prototype.getPosition = function () {
            return this._byteOffset;
        };
        BinaryReader.prototype.getLength = function () {
            return this._arrayBuffer.byteLength;
        };
        BinaryReader.prototype.readUint32 = function () {
            var value = this._dataView.getUint32(this._byteOffset, true);
            this._byteOffset += 4;
            return value;
        };
        BinaryReader.prototype.readUint8Array = function (length) {
            var value = new Uint8Array(this._arrayBuffer, this._byteOffset, length);
            this._byteOffset += length;
            return value;
        };
        BinaryReader.prototype.skipBytes = function (length) {
            this._byteOffset += length;
        };
        return BinaryReader;
    }());
    if (BABYLON.SceneLoader) {
        BABYLON.SceneLoader.RegisterPlugin(new GLTFFileLoader());
    }
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFFileLoader.js.map

/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTF1;
    (function (GLTF1) {
        /**
        * Enums
        */
        var EComponentType;
        (function (EComponentType) {
            EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
            EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
            EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
            EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
        })(EComponentType = GLTF1.EComponentType || (GLTF1.EComponentType = {}));
        var EShaderType;
        (function (EShaderType) {
            EShaderType[EShaderType["FRAGMENT"] = 35632] = "FRAGMENT";
            EShaderType[EShaderType["VERTEX"] = 35633] = "VERTEX";
        })(EShaderType = GLTF1.EShaderType || (GLTF1.EShaderType = {}));
        var EParameterType;
        (function (EParameterType) {
            EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
            EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
            EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
            EParameterType[EParameterType["INT"] = 5124] = "INT";
            EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
            EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
            EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
            EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
            EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
            EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
            EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
            EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
            EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
            EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
            EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
            EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
            EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
            EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
            EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
            EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
        })(EParameterType = GLTF1.EParameterType || (GLTF1.EParameterType = {}));
        var ETextureWrapMode;
        (function (ETextureWrapMode) {
            ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
            ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
            ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
        })(ETextureWrapMode = GLTF1.ETextureWrapMode || (GLTF1.ETextureWrapMode = {}));
        var ETextureFilterType;
        (function (ETextureFilterType) {
            ETextureFilterType[ETextureFilterType["NEAREST"] = 9728] = "NEAREST";
            ETextureFilterType[ETextureFilterType["LINEAR"] = 9728] = "LINEAR";
            ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
            ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
            ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
            ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
        })(ETextureFilterType = GLTF1.ETextureFilterType || (GLTF1.ETextureFilterType = {}));
        var ETextureFormat;
        (function (ETextureFormat) {
            ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
            ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
            ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
            ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
            ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
        })(ETextureFormat = GLTF1.ETextureFormat || (GLTF1.ETextureFormat = {}));
        var ECullingType;
        (function (ECullingType) {
            ECullingType[ECullingType["FRONT"] = 1028] = "FRONT";
            ECullingType[ECullingType["BACK"] = 1029] = "BACK";
            ECullingType[ECullingType["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
        })(ECullingType = GLTF1.ECullingType || (GLTF1.ECullingType = {}));
        var EBlendingFunction;
        (function (EBlendingFunction) {
            EBlendingFunction[EBlendingFunction["ZERO"] = 0] = "ZERO";
            EBlendingFunction[EBlendingFunction["ONE"] = 1] = "ONE";
            EBlendingFunction[EBlendingFunction["SRC_COLOR"] = 768] = "SRC_COLOR";
            EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
            EBlendingFunction[EBlendingFunction["DST_COLOR"] = 774] = "DST_COLOR";
            EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
            EBlendingFunction[EBlendingFunction["SRC_ALPHA"] = 770] = "SRC_ALPHA";
            EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
            EBlendingFunction[EBlendingFunction["DST_ALPHA"] = 772] = "DST_ALPHA";
            EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
            EBlendingFunction[EBlendingFunction["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
            EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
            EBlendingFunction[EBlendingFunction["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
            EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
            EBlendingFunction[EBlendingFunction["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
        })(EBlendingFunction = GLTF1.EBlendingFunction || (GLTF1.EBlendingFunction = {}));
    })(GLTF1 = BABYLON.GLTF1 || (BABYLON.GLTF1 = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFLoaderInterfaces.js.map

/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTF1;
    (function (GLTF1) {
        /**
        * Tokenizer. Used for shaders compatibility
        * Automatically map world, view, projection, worldViewProjection, attributes and so on
        */
        var ETokenType;
        (function (ETokenType) {
            ETokenType[ETokenType["IDENTIFIER"] = 1] = "IDENTIFIER";
            ETokenType[ETokenType["UNKNOWN"] = 2] = "UNKNOWN";
            ETokenType[ETokenType["END_OF_INPUT"] = 3] = "END_OF_INPUT";
        })(ETokenType || (ETokenType = {}));
        var Tokenizer = /** @class */ (function () {
            function Tokenizer(toParse) {
                this._pos = 0;
                this.currentToken = ETokenType.UNKNOWN;
                this.currentIdentifier = "";
                this.currentString = "";
                this.isLetterOrDigitPattern = /^[a-zA-Z0-9]+$/;
                this._toParse = toParse;
                this._maxPos = toParse.length;
            }
            Tokenizer.prototype.getNextToken = function () {
                if (this.isEnd()) {
                    return ETokenType.END_OF_INPUT;
                }
                this.currentString = this.read();
                this.currentToken = ETokenType.UNKNOWN;
                if (this.currentString === "_" || this.isLetterOrDigitPattern.test(this.currentString)) {
                    this.currentToken = ETokenType.IDENTIFIER;
                    this.currentIdentifier = this.currentString;
                    while (!this.isEnd() && (this.isLetterOrDigitPattern.test(this.currentString = this.peek()) || this.currentString === "_")) {
                        this.currentIdentifier += this.currentString;
                        this.forward();
                    }
                }
                return this.currentToken;
            };
            Tokenizer.prototype.peek = function () {
                return this._toParse[this._pos];
            };
            Tokenizer.prototype.read = function () {
                return this._toParse[this._pos++];
            };
            Tokenizer.prototype.forward = function () {
                this._pos++;
            };
            Tokenizer.prototype.isEnd = function () {
                return this._pos >= this._maxPos;
            };
            return Tokenizer;
        }());
        /**
        * Values
        */
        var glTFTransforms = ["MODEL", "VIEW", "PROJECTION", "MODELVIEW", "MODELVIEWPROJECTION", "JOINTMATRIX"];
        var babylonTransforms = ["world", "view", "projection", "worldView", "worldViewProjection", "mBones"];
        var glTFAnimationPaths = ["translation", "rotation", "scale"];
        var babylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
        /**
        * Parse
        */
        var parseBuffers = function (parsedBuffers, gltfRuntime) {
            for (var buf in parsedBuffers) {
                var parsedBuffer = parsedBuffers[buf];
                gltfRuntime.buffers[buf] = parsedBuffer;
                gltfRuntime.buffersCount++;
            }
        };
        var parseShaders = function (parsedShaders, gltfRuntime) {
            for (var sha in parsedShaders) {
                var parsedShader = parsedShaders[sha];
                gltfRuntime.shaders[sha] = parsedShader;
                gltfRuntime.shaderscount++;
            }
        };
        var parseObject = function (parsedObjects, runtimeProperty, gltfRuntime) {
            for (var object in parsedObjects) {
                var parsedObject = parsedObjects[object];
                gltfRuntime[runtimeProperty][object] = parsedObject;
            }
        };
        /**
        * Utils
        */
        var normalizeUVs = function (buffer) {
            if (!buffer) {
                return;
            }
            for (var i = 0; i < buffer.length / 2; i++) {
                buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
            }
        };
        var getAttribute = function (attributeParameter) {
            if (attributeParameter.semantic === "NORMAL") {
                return "normal";
            }
            else if (attributeParameter.semantic === "POSITION") {
                return "position";
            }
            else if (attributeParameter.semantic === "JOINT") {
                return "matricesIndices";
            }
            else if (attributeParameter.semantic === "WEIGHT") {
                return "matricesWeights";
            }
            else if (attributeParameter.semantic === "COLOR") {
                return "color";
            }
            else if (attributeParameter.semantic && attributeParameter.semantic.indexOf("TEXCOORD_") !== -1) {
                var channel = Number(attributeParameter.semantic.split("_")[1]);
                return "uv" + (channel === 0 ? "" : channel + 1);
            }
            return null;
        };
        /**
        * Loads and creates animations
        */
        var loadAnimations = function (gltfRuntime) {
            for (var anim in gltfRuntime.animations) {
                var animation = gltfRuntime.animations[anim];
                if (!animation.channels || !animation.samplers) {
                    continue;
                }
                var lastAnimation = null;
                for (var i = 0; i < animation.channels.length; i++) {
                    // Get parameters and load buffers
                    var channel = animation.channels[i];
                    var sampler = animation.samplers[channel.sampler];
                    if (!sampler) {
                        continue;
                    }
                    var inputData = null;
                    var outputData = null;
                    if (animation.parameters) {
                        inputData = animation.parameters[sampler.input];
                        outputData = animation.parameters[sampler.output];
                    }
                    else {
                        inputData = sampler.input;
                        outputData = sampler.output;
                    }
                    var bufferInput = GLTF1.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[inputData]);
                    var bufferOutput = GLTF1.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[outputData]);
                    var targetID = channel.target.id;
                    var targetNode = gltfRuntime.scene.getNodeByID(targetID);
                    if (targetNode === null) {
                        targetNode = gltfRuntime.scene.getNodeByName(targetID);
                    }
                    if (targetNode === null) {
                        BABYLON.Tools.Warn("Creating animation named " + anim + ". But cannot find node named " + targetID + " to attach to");
                        continue;
                    }
                    var isBone = targetNode instanceof BABYLON.Bone;
                    // Get target path (position, rotation or scaling)
                    var targetPath = channel.target.path;
                    var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
                    if (targetPathIndex !== -1) {
                        targetPath = babylonAnimationPaths[targetPathIndex];
                    }
                    // Determine animation type
                    var animationType = BABYLON.Animation.ANIMATIONTYPE_MATRIX;
                    if (!isBone) {
                        if (targetPath === "rotationQuaternion") {
                            animationType = BABYLON.Animation.ANIMATIONTYPE_QUATERNION;
                            targetNode.rotationQuaternion = new BABYLON.Quaternion();
                        }
                        else {
                            animationType = BABYLON.Animation.ANIMATIONTYPE_VECTOR3;
                        }
                    }
                    // Create animation and key frames
                    var babylonAnimation = null;
                    var keys = [];
                    var arrayOffset = 0;
                    var modifyKey = false;
                    if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                        babylonAnimation = lastAnimation;
                        modifyKey = true;
                    }
                    if (!modifyKey) {
                        babylonAnimation = new BABYLON.Animation(anim, isBone ? "_matrix" : targetPath, 1, animationType, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                    }
                    // For each frame
                    for (var j = 0; j < bufferInput.length; j++) {
                        var value = null;
                        if (targetPath === "rotationQuaternion") { // VEC4
                            value = BABYLON.Quaternion.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                            arrayOffset += 4;
                        }
                        else { // Position and scaling are VEC3
                            value = BABYLON.Vector3.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                            arrayOffset += 3;
                        }
                        if (isBone) {
                            var bone = targetNode;
                            var translation = BABYLON.Vector3.Zero();
                            var rotationQuaternion = new BABYLON.Quaternion();
                            var scaling = BABYLON.Vector3.Zero();
                            // Warning on decompose
                            var mat = bone.getBaseMatrix();
                            if (modifyKey && lastAnimation) {
                                mat = lastAnimation.getKeys()[j].value;
                            }
                            mat.decompose(scaling, rotationQuaternion, translation);
                            if (targetPath === "position") {
                                translation = value;
                            }
                            else if (targetPath === "rotationQuaternion") {
                                rotationQuaternion = value;
                            }
                            else {
                                scaling = value;
                            }
                            value = BABYLON.Matrix.Compose(scaling, rotationQuaternion, translation);
                        }
                        if (!modifyKey) {
                            keys.push({
                                frame: bufferInput[j],
                                value: value
                            });
                        }
                        else if (lastAnimation) {
                            lastAnimation.getKeys()[j].value = value;
                        }
                    }
                    // Finish
                    if (!modifyKey && babylonAnimation) {
                        babylonAnimation.setKeys(keys);
                        targetNode.animations.push(babylonAnimation);
                    }
                    lastAnimation = babylonAnimation;
                    gltfRuntime.scene.stopAnimation(targetNode);
                    gltfRuntime.scene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
                }
            }
        };
        /**
        * Returns the bones transformation matrix
        */
        var configureBoneTransformation = function (node) {
            var mat = null;
            if (node.translation || node.rotation || node.scale) {
                var scale = BABYLON.Vector3.FromArray(node.scale || [1, 1, 1]);
                var rotation = BABYLON.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]);
                var position = BABYLON.Vector3.FromArray(node.translation || [0, 0, 0]);
                mat = BABYLON.Matrix.Compose(scale, rotation, position);
            }
            else {
                mat = BABYLON.Matrix.FromArray(node.matrix);
            }
            return mat;
        };
        /**
        * Returns the parent bone
        */
        var getParentBone = function (gltfRuntime, skins, jointName, newSkeleton) {
            // Try to find
            for (var i = 0; i < newSkeleton.bones.length; i++) {
                if (newSkeleton.bones[i].name === jointName) {
                    return newSkeleton.bones[i];
                }
            }
            // Not found, search in gltf nodes
            var nodes = gltfRuntime.nodes;
            for (var nde in nodes) {
                var node = nodes[nde];
                if (!node.jointName) {
                    continue;
                }
                var children = node.children;
                for (var i = 0; i < children.length; i++) {
                    var child = gltfRuntime.nodes[children[i]];
                    if (!child.jointName) {
                        continue;
                    }
                    if (child.jointName === jointName) {
                        var mat = configureBoneTransformation(node);
                        var bone = new BABYLON.Bone(node.name || "", newSkeleton, getParentBone(gltfRuntime, skins, node.jointName, newSkeleton), mat);
                        bone.id = nde;
                        return bone;
                    }
                }
            }
            return null;
        };
        /**
        * Returns the appropriate root node
        */
        var getNodeToRoot = function (nodesToRoot, id) {
            for (var i = 0; i < nodesToRoot.length; i++) {
                var nodeToRoot = nodesToRoot[i];
                for (var j = 0; j < nodeToRoot.node.children.length; j++) {
                    var child = nodeToRoot.node.children[j];
                    if (child === id) {
                        return nodeToRoot.bone;
                    }
                }
            }
            return null;
        };
        /**
        * Returns the node with the joint name
        */
        var getJointNode = function (gltfRuntime, jointName) {
            var nodes = gltfRuntime.nodes;
            var node = nodes[jointName];
            if (node) {
                return {
                    node: node,
                    id: jointName
                };
            }
            for (var nde in nodes) {
                node = nodes[nde];
                if (node.jointName === jointName) {
                    return {
                        node: node,
                        id: nde
                    };
                }
            }
            return null;
        };
        /**
        * Checks if a nodes is in joints
        */
        var nodeIsInJoints = function (skins, id) {
            for (var i = 0; i < skins.jointNames.length; i++) {
                if (skins.jointNames[i] === id) {
                    return true;
                }
            }
            return false;
        };
        /**
        * Fills the nodes to root for bones and builds hierarchy
        */
        var getNodesToRoot = function (gltfRuntime, newSkeleton, skins, nodesToRoot) {
            // Creates nodes for root
            for (var nde in gltfRuntime.nodes) {
                var node = gltfRuntime.nodes[nde];
                var id = nde;
                if (!node.jointName || nodeIsInJoints(skins, node.jointName)) {
                    continue;
                }
                // Create node to root bone
                var mat = configureBoneTransformation(node);
                var bone = new BABYLON.Bone(node.name || "", newSkeleton, null, mat);
                bone.id = id;
                nodesToRoot.push({ bone: bone, node: node, id: id });
            }
            // Parenting
            for (var i = 0; i < nodesToRoot.length; i++) {
                var nodeToRoot = nodesToRoot[i];
                var children = nodeToRoot.node.children;
                for (var j = 0; j < children.length; j++) {
                    var child = null;
                    for (var k = 0; k < nodesToRoot.length; k++) {
                        if (nodesToRoot[k].id === children[j]) {
                            child = nodesToRoot[k];
                            break;
                        }
                    }
                    if (child) {
                        child.bone._parent = nodeToRoot.bone;
                        nodeToRoot.bone.children.push(child.bone);
                    }
                }
            }
        };
        /**
        * Imports a skeleton
        */
        var importSkeleton = function (gltfRuntime, skins, mesh, newSkeleton, id) {
            if (!newSkeleton) {
                newSkeleton = new BABYLON.Skeleton(skins.name || "", "", gltfRuntime.scene);
            }
            if (!skins.babylonSkeleton) {
                return newSkeleton;
            }
            // Find the root bones
            var nodesToRoot = [];
            var nodesToRootToAdd = [];
            getNodesToRoot(gltfRuntime, newSkeleton, skins, nodesToRoot);
            newSkeleton.bones = [];
            // Joints
            for (var i = 0; i < skins.jointNames.length; i++) {
                var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
                if (!jointNode) {
                    continue;
                }
                var node = jointNode.node;
                if (!node) {
                    BABYLON.Tools.Warn("Joint named " + skins.jointNames[i] + " does not exist");
                    continue;
                }
                var id = jointNode.id;
                // Optimize, if the bone already exists...
                var existingBone = gltfRuntime.scene.getBoneByID(id);
                if (existingBone) {
                    newSkeleton.bones.push(existingBone);
                    continue;
                }
                // Search for parent bone
                var foundBone = false;
                var parentBone = null;
                for (var j = 0; j < i; j++) {
                    var jointNode_1 = getJointNode(gltfRuntime, skins.jointNames[j]);
                    if (!jointNode_1) {
                        continue;
                    }
                    var joint = jointNode_1.node;
                    if (!joint) {
                        BABYLON.Tools.Warn("Joint named " + skins.jointNames[j] + " does not exist when looking for parent");
                        continue;
                    }
                    var children = joint.children;
                    if (!children) {
                        continue;
                    }
                    foundBone = false;
                    for (var k = 0; k < children.length; k++) {
                        if (children[k] === id) {
                            parentBone = getParentBone(gltfRuntime, skins, skins.jointNames[j], newSkeleton);
                            foundBone = true;
                            break;
                        }
                    }
                    if (foundBone) {
                        break;
                    }
                }
                // Create bone
                var mat = configureBoneTransformation(node);
                if (!parentBone && nodesToRoot.length > 0) {
                    parentBone = getNodeToRoot(nodesToRoot, id);
                    if (parentBone) {
                        if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                            nodesToRootToAdd.push(parentBone);
                        }
                    }
                }
                var bone = new BABYLON.Bone(node.jointName || "", newSkeleton, parentBone, mat);
                bone.id = id;
            }
            // Polish
            var bones = newSkeleton.bones;
            newSkeleton.bones = [];
            for (var i = 0; i < skins.jointNames.length; i++) {
                var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
                if (!jointNode) {
                    continue;
                }
                for (var j = 0; j < bones.length; j++) {
                    if (bones[j].id === jointNode.id) {
                        newSkeleton.bones.push(bones[j]);
                        break;
                    }
                }
            }
            newSkeleton.prepare();
            // Finish
            for (var i = 0; i < nodesToRootToAdd.length; i++) {
                newSkeleton.bones.push(nodesToRootToAdd[i]);
            }
            return newSkeleton;
        };
        /**
        * Imports a mesh and its geometries
        */
        var importMesh = function (gltfRuntime, node, meshes, id, newMesh) {
            if (!newMesh) {
                newMesh = new BABYLON.Mesh(node.name || "", gltfRuntime.scene);
                newMesh.id = id;
            }
            if (!node.babylonNode) {
                return newMesh;
            }
            var subMaterials = [];
            var vertexData = null;
            var verticesStarts = new Array();
            var verticesCounts = new Array();
            var indexStarts = new Array();
            var indexCounts = new Array();
            for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
                var meshID = meshes[meshIndex];
                var mesh = gltfRuntime.meshes[meshID];
                if (!mesh) {
                    continue;
                }
                // Positions, normals and UVs
                for (var i = 0; i < mesh.primitives.length; i++) {
                    // Temporary vertex data
                    var tempVertexData = new BABYLON.VertexData();
                    var primitive = mesh.primitives[i];
                    if (primitive.mode !== 4) {
                        // continue;
                    }
                    var attributes = primitive.attributes;
                    var accessor = null;
                    var buffer = null;
                    // Set positions, normal and uvs
                    for (var semantic in attributes) {
                        // Link accessor and buffer view
                        accessor = gltfRuntime.accessors[attributes[semantic]];
                        buffer = GLTF1.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                        if (semantic === "NORMAL") {
                            tempVertexData.normals = new Float32Array(buffer.length);
                            tempVertexData.normals.set(buffer);
                        }
                        else if (semantic === "POSITION") {
                            if (BABYLON.GLTFFileLoader.HomogeneousCoordinates) {
                                tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                                for (var j = 0; j < buffer.length; j += 4) {
                                    tempVertexData.positions[j] = buffer[j];
                                    tempVertexData.positions[j + 1] = buffer[j + 1];
                                    tempVertexData.positions[j + 2] = buffer[j + 2];
                                }
                            }
                            else {
                                tempVertexData.positions = new Float32Array(buffer.length);
                                tempVertexData.positions.set(buffer);
                            }
                            verticesCounts.push(tempVertexData.positions.length);
                        }
                        else if (semantic.indexOf("TEXCOORD_") !== -1) {
                            var channel = Number(semantic.split("_")[1]);
                            var uvKind = BABYLON.VertexBuffer.UVKind + (channel === 0 ? "" : (channel + 1));
                            var uvs = new Float32Array(buffer.length);
                            uvs.set(buffer);
                            normalizeUVs(uvs);
                            tempVertexData.set(uvs, uvKind);
                        }
                        else if (semantic === "JOINT") {
                            tempVertexData.matricesIndices = new Float32Array(buffer.length);
                            tempVertexData.matricesIndices.set(buffer);
                        }
                        else if (semantic === "WEIGHT") {
                            tempVertexData.matricesWeights = new Float32Array(buffer.length);
                            tempVertexData.matricesWeights.set(buffer);
                        }
                        else if (semantic === "COLOR") {
                            tempVertexData.colors = new Float32Array(buffer.length);
                            tempVertexData.colors.set(buffer);
                        }
                    }
                    // Indices
                    accessor = gltfRuntime.accessors[primitive.indices];
                    if (accessor) {
                        buffer = GLTF1.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                        tempVertexData.indices = new Int32Array(buffer.length);
                        tempVertexData.indices.set(buffer);
                        indexCounts.push(tempVertexData.indices.length);
                    }
                    else {
                        // Set indices on the fly
                        var indices = [];
                        for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                            indices.push(j);
                        }
                        tempVertexData.indices = new Int32Array(indices);
                        indexCounts.push(tempVertexData.indices.length);
                    }
                    if (!vertexData) {
                        vertexData = tempVertexData;
                    }
                    else {
                        vertexData.merge(tempVertexData);
                    }
                    // Sub material
                    var material_1 = gltfRuntime.scene.getMaterialByID(primitive.material);
                    subMaterials.push(material_1 === null ? GLTF1.GLTFUtils.GetDefaultMaterial(gltfRuntime.scene) : material_1);
                    // Update vertices start and index start
                    verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
                    indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
                }
            }
            var material;
            if (subMaterials.length > 1) {
                material = new BABYLON.MultiMaterial("multimat" + id, gltfRuntime.scene);
                material.subMaterials = subMaterials;
            }
            else {
                material = new BABYLON.StandardMaterial("multimat" + id, gltfRuntime.scene);
            }
            if (subMaterials.length === 1) {
                material = subMaterials[0];
            }
            if (!newMesh.material) {
                newMesh.material = material;
            }
            // Apply geometry
            new BABYLON.Geometry(id, gltfRuntime.scene, vertexData, false, newMesh);
            newMesh.computeWorldMatrix(true);
            // Apply submeshes
            newMesh.subMeshes = [];
            var index = 0;
            for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
                var meshID = meshes[meshIndex];
                var mesh = gltfRuntime.meshes[meshID];
                if (!mesh) {
                    continue;
                }
                for (var i = 0; i < mesh.primitives.length; i++) {
                    if (mesh.primitives[i].mode !== 4) {
                        //continue;
                    }
                    BABYLON.SubMesh.AddToMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], newMesh, newMesh, true);
                    index++;
                }
            }
            // Finish
            return newMesh;
        };
        /**
        * Configure node transformation from position, rotation and scaling
        */
        var configureNode = function (newNode, position, rotation, scaling) {
            if (newNode.position) {
                newNode.position = position;
            }
            if (newNode.rotationQuaternion || newNode.rotation) {
                newNode.rotationQuaternion = rotation;
            }
            if (newNode.scaling) {
                newNode.scaling = scaling;
            }
        };
        /**
        * Configures node from transformation matrix
        */
        var configureNodeFromMatrix = function (newNode, node, parent) {
            if (node.matrix) {
                var position = new BABYLON.Vector3(0, 0, 0);
                var rotation = new BABYLON.Quaternion();
                var scaling = new BABYLON.Vector3(0, 0, 0);
                var mat = BABYLON.Matrix.FromArray(node.matrix);
                mat.decompose(scaling, rotation, position);
                configureNode(newNode, position, rotation, scaling);
            }
            else if (node.translation && node.rotation && node.scale) {
                configureNode(newNode, BABYLON.Vector3.FromArray(node.translation), BABYLON.Quaternion.FromArray(node.rotation), BABYLON.Vector3.FromArray(node.scale));
            }
            newNode.computeWorldMatrix(true);
        };
        /**
        * Imports a node
        */
        var importNode = function (gltfRuntime, node, id, parent) {
            var lastNode = null;
            if (gltfRuntime.importOnlyMeshes && (node.skin || node.meshes)) {
                if (gltfRuntime.importMeshesNames && gltfRuntime.importMeshesNames.length > 0 && gltfRuntime.importMeshesNames.indexOf(node.name || "") === -1) {
                    return null;
                }
            }
            // Meshes
            if (node.skin) {
                if (node.meshes) {
                    var skin = gltfRuntime.skins[node.skin];
                    var newMesh = importMesh(gltfRuntime, node, node.meshes, id, node.babylonNode);
                    newMesh.skeleton = gltfRuntime.scene.getLastSkeletonByID(node.skin);
                    if (newMesh.skeleton === null) {
                        newMesh.skeleton = importSkeleton(gltfRuntime, skin, newMesh, skin.babylonSkeleton, node.skin);
                        if (!skin.babylonSkeleton) {
                            skin.babylonSkeleton = newMesh.skeleton;
                        }
                    }
                    lastNode = newMesh;
                }
            }
            else if (node.meshes) {
                /**
                * Improve meshes property
                */
                var newMesh = importMesh(gltfRuntime, node, node.mesh ? [node.mesh] : node.meshes, id, node.babylonNode);
                lastNode = newMesh;
            }
            // Lights
            else if (node.light && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
                var light = gltfRuntime.lights[node.light];
                if (light) {
                    if (light.type === "ambient") {
                        var ambienLight = light[light.type];
                        var hemiLight = new BABYLON.HemisphericLight(node.light, BABYLON.Vector3.Zero(), gltfRuntime.scene);
                        hemiLight.name = node.name || "";
                        if (ambienLight.color) {
                            hemiLight.diffuse = BABYLON.Color3.FromArray(ambienLight.color);
                        }
                        lastNode = hemiLight;
                    }
                    else if (light.type === "directional") {
                        var directionalLight = light[light.type];
                        var dirLight = new BABYLON.DirectionalLight(node.light, BABYLON.Vector3.Zero(), gltfRuntime.scene);
                        dirLight.name = node.name || "";
                        if (directionalLight.color) {
                            dirLight.diffuse = BABYLON.Color3.FromArray(directionalLight.color);
                        }
                        lastNode = dirLight;
                    }
                    else if (light.type === "point") {
                        var pointLight = light[light.type];
                        var ptLight = new BABYLON.PointLight(node.light, BABYLON.Vector3.Zero(), gltfRuntime.scene);
                        ptLight.name = node.name || "";
                        if (pointLight.color) {
                            ptLight.diffuse = BABYLON.Color3.FromArray(pointLight.color);
                        }
                        lastNode = ptLight;
                    }
                    else if (light.type === "spot") {
                        var spotLight = light[light.type];
                        var spLight = new BABYLON.SpotLight(node.light, BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero(), 0, 0, gltfRuntime.scene);
                        spLight.name = node.name || "";
                        if (spotLight.color) {
                            spLight.diffuse = BABYLON.Color3.FromArray(spotLight.color);
                        }
                        if (spotLight.fallOfAngle) {
                            spLight.angle = spotLight.fallOfAngle;
                        }
                        if (spotLight.fallOffExponent) {
                            spLight.exponent = spotLight.fallOffExponent;
                        }
                        lastNode = spLight;
                    }
                }
            }
            // Cameras
            else if (node.camera && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
                var camera = gltfRuntime.cameras[node.camera];
                if (camera) {
                    if (camera.type === "orthographic") {
                        var orthoCamera = new BABYLON.FreeCamera(node.camera, BABYLON.Vector3.Zero(), gltfRuntime.scene, false);
                        orthoCamera.name = node.name || "";
                        orthoCamera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
                        orthoCamera.attachControl(gltfRuntime.scene.getEngine().getRenderingCanvas());
                        lastNode = orthoCamera;
                    }
                    else if (camera.type === "perspective") {
                        var perspectiveCamera = camera[camera.type];
                        var persCamera = new BABYLON.FreeCamera(node.camera, BABYLON.Vector3.Zero(), gltfRuntime.scene, false);
                        persCamera.name = node.name || "";
                        persCamera.attachControl(gltfRuntime.scene.getEngine().getRenderingCanvas());
                        if (!perspectiveCamera.aspectRatio) {
                            perspectiveCamera.aspectRatio = gltfRuntime.scene.getEngine().getRenderWidth() / gltfRuntime.scene.getEngine().getRenderHeight();
                        }
                        if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                            persCamera.maxZ = perspectiveCamera.zfar;
                            persCamera.minZ = perspectiveCamera.znear;
                        }
                        lastNode = persCamera;
                    }
                }
            }
            // Empty node
            if (!node.jointName) {
                if (node.babylonNode) {
                    return node.babylonNode;
                }
                else if (lastNode === null) {
                    var dummy = new BABYLON.Mesh(node.name || "", gltfRuntime.scene);
                    node.babylonNode = dummy;
                    lastNode = dummy;
                }
            }
            if (lastNode !== null) {
                if (node.matrix && lastNode instanceof BABYLON.Mesh) {
                    configureNodeFromMatrix(lastNode, node, parent);
                }
                else {
                    var translation = node.translation || [0, 0, 0];
                    var rotation = node.rotation || [0, 0, 0, 1];
                    var scale = node.scale || [1, 1, 1];
                    configureNode(lastNode, BABYLON.Vector3.FromArray(translation), BABYLON.Quaternion.FromArray(rotation), BABYLON.Vector3.FromArray(scale));
                }
                lastNode.updateCache(true);
                node.babylonNode = lastNode;
            }
            return lastNode;
        };
        /**
        * Traverses nodes and creates them
        */
        var traverseNodes = function (gltfRuntime, id, parent, meshIncluded) {
            if (meshIncluded === void 0) { meshIncluded = false; }
            var node = gltfRuntime.nodes[id];
            var newNode = null;
            if (gltfRuntime.importOnlyMeshes && !meshIncluded && gltfRuntime.importMeshesNames) {
                if (gltfRuntime.importMeshesNames.indexOf(node.name || "") !== -1 || gltfRuntime.importMeshesNames.length === 0) {
                    meshIncluded = true;
                }
                else {
                    meshIncluded = false;
                }
            }
            else {
                meshIncluded = true;
            }
            if (!node.jointName && meshIncluded) {
                newNode = importNode(gltfRuntime, node, id, parent);
                if (newNode !== null) {
                    newNode.id = id;
                    newNode.parent = parent;
                }
            }
            if (node.children) {
                for (var i = 0; i < node.children.length; i++) {
                    traverseNodes(gltfRuntime, node.children[i], newNode, meshIncluded);
                }
            }
        };
        /**
        * do stuff after buffers, shaders are loaded (e.g. hook up materials, load animations, etc.)
        */
        var postLoad = function (gltfRuntime) {
            // Nodes
            var currentScene = gltfRuntime.currentScene;
            if (currentScene) {
                for (var i = 0; i < currentScene.nodes.length; i++) {
                    traverseNodes(gltfRuntime, currentScene.nodes[i], null);
                }
            }
            else {
                for (var thing in gltfRuntime.scenes) {
                    currentScene = gltfRuntime.scenes[thing];
                    for (var i = 0; i < currentScene.nodes.length; i++) {
                        traverseNodes(gltfRuntime, currentScene.nodes[i], null);
                    }
                }
            }
            // Set animations
            loadAnimations(gltfRuntime);
            for (var i = 0; i < gltfRuntime.scene.skeletons.length; i++) {
                var skeleton = gltfRuntime.scene.skeletons[i];
                gltfRuntime.scene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
            }
        };
        /**
        * onBind shaderrs callback to set uniforms and matrices
        */
        var onBindShaderMaterial = function (mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess) {
            var materialValues = material.values || technique.parameters;
            for (var unif in unTreatedUniforms) {
                var uniform = unTreatedUniforms[unif];
                var type = uniform.type;
                if (type === GLTF1.EParameterType.FLOAT_MAT2 || type === GLTF1.EParameterType.FLOAT_MAT3 || type === GLTF1.EParameterType.FLOAT_MAT4) {
                    if (uniform.semantic && !uniform.source && !uniform.node) {
                        GLTF1.GLTFUtils.SetMatrix(gltfRuntime.scene, mesh, uniform, unif, shaderMaterial.getEffect());
                    }
                    else if (uniform.semantic && (uniform.source || uniform.node)) {
                        var source = gltfRuntime.scene.getNodeByName(uniform.source || uniform.node || "");
                        if (source === null) {
                            source = gltfRuntime.scene.getNodeByID(uniform.source || uniform.node || "");
                        }
                        if (source === null) {
                            continue;
                        }
                        GLTF1.GLTFUtils.SetMatrix(gltfRuntime.scene, source, uniform, unif, shaderMaterial.getEffect());
                    }
                }
                else {
                    var value = materialValues[technique.uniforms[unif]];
                    if (!value) {
                        continue;
                    }
                    if (type === GLTF1.EParameterType.SAMPLER_2D) {
                        var texture = gltfRuntime.textures[material.values ? value : uniform.value].babylonTexture;
                        if (texture === null || texture === undefined) {
                            continue;
                        }
                        shaderMaterial.getEffect().setTexture(unif, texture);
                    }
                    else {
                        GLTF1.GLTFUtils.SetUniform((shaderMaterial.getEffect()), unif, value, type);
                    }
                }
            }
            onSuccess(shaderMaterial);
        };
        /**
        * Prepare uniforms to send the only one time
        * Loads the appropriate textures
        */
        var prepareShaderMaterialUniforms = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms) {
            var materialValues = material.values || technique.parameters;
            var techniqueUniforms = technique.uniforms;
            /**
            * Prepare values here (not matrices)
            */
            for (var unif in unTreatedUniforms) {
                var uniform = unTreatedUniforms[unif];
                var type = uniform.type;
                var value = materialValues[techniqueUniforms[unif]];
                if (value === undefined) {
                    // In case the value is the same for all materials
                    value = uniform.value;
                }
                if (!value) {
                    continue;
                }
                var onLoadTexture = function (uniformName) {
                    return function (texture) {
                        if (uniform.value && uniformName) {
                            // Static uniform
                            shaderMaterial.setTexture(uniformName, texture);
                            delete unTreatedUniforms[uniformName];
                        }
                    };
                };
                // Texture (sampler2D)
                if (type === GLTF1.EParameterType.SAMPLER_2D) {
                    GLTF1.GLTFLoaderExtension.LoadTextureAsync(gltfRuntime, material.values ? value : uniform.value, onLoadTexture(unif), function () { return onLoadTexture(null); });
                }
                // Others
                else {
                    if (uniform.value && GLTF1.GLTFUtils.SetUniform(shaderMaterial, unif, material.values ? value : uniform.value, type)) {
                        // Static uniform
                        delete unTreatedUniforms[unif];
                    }
                }
            }
        };
        /**
        * Shader compilation failed
        */
        var onShaderCompileError = function (program, shaderMaterial, onError) {
            return function (effect, error) {
                shaderMaterial.dispose(true);
                onError("Cannot compile program named " + program.name + ". Error: " + error + ". Default material will be applied");
            };
        };
        /**
        * Shader compilation success
        */
        var onShaderCompileSuccess = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess) {
            return function (_) {
                prepareShaderMaterialUniforms(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms);
                shaderMaterial.onBind = function (mesh) {
                    onBindShaderMaterial(mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess);
                };
            };
        };
        /**
        * Returns the appropriate uniform if already handled by babylon
        */
        var parseShaderUniforms = function (tokenizer, technique, unTreatedUniforms) {
            for (var unif in technique.uniforms) {
                var uniform = technique.uniforms[unif];
                var uniformParameter = technique.parameters[uniform];
                if (tokenizer.currentIdentifier === unif) {
                    if (uniformParameter.semantic && !uniformParameter.source && !uniformParameter.node) {
                        var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                        if (transformIndex !== -1) {
                            delete unTreatedUniforms[unif];
                            return babylonTransforms[transformIndex];
                        }
                    }
                }
            }
            return tokenizer.currentIdentifier;
        };
        /**
        * All shaders loaded. Create materials one by one
        */
        var importMaterials = function (gltfRuntime) {
            // Create materials
            for (var mat in gltfRuntime.materials) {
                GLTF1.GLTFLoaderExtension.LoadMaterialAsync(gltfRuntime, mat, function (material) { }, function () { });
            }
        };
        /**
        * Implementation of the base glTF spec
        */
        var GLTFLoaderBase = /** @class */ (function () {
            function GLTFLoaderBase() {
            }
            GLTFLoaderBase.CreateRuntime = function (parsedData, scene, rootUrl) {
                var gltfRuntime = {
                    extensions: {},
                    accessors: {},
                    buffers: {},
                    bufferViews: {},
                    meshes: {},
                    lights: {},
                    cameras: {},
                    nodes: {},
                    images: {},
                    textures: {},
                    shaders: {},
                    programs: {},
                    samplers: {},
                    techniques: {},
                    materials: {},
                    animations: {},
                    skins: {},
                    extensionsUsed: [],
                    scenes: {},
                    buffersCount: 0,
                    shaderscount: 0,
                    scene: scene,
                    rootUrl: rootUrl,
                    loadedBufferCount: 0,
                    loadedBufferViews: {},
                    loadedShaderCount: 0,
                    importOnlyMeshes: false,
                    dummyNodes: []
                };
                // Parse
                if (parsedData.extensions) {
                    parseObject(parsedData.extensions, "extensions", gltfRuntime);
                }
                if (parsedData.extensionsUsed) {
                    parseObject(parsedData.extensionsUsed, "extensionsUsed", gltfRuntime);
                }
                if (parsedData.buffers) {
                    parseBuffers(parsedData.buffers, gltfRuntime);
                }
                if (parsedData.bufferViews) {
                    parseObject(parsedData.bufferViews, "bufferViews", gltfRuntime);
                }
                if (parsedData.accessors) {
                    parseObject(parsedData.accessors, "accessors", gltfRuntime);
                }
                if (parsedData.meshes) {
                    parseObject(parsedData.meshes, "meshes", gltfRuntime);
                }
                if (parsedData.lights) {
                    parseObject(parsedData.lights, "lights", gltfRuntime);
                }
                if (parsedData.cameras) {
                    parseObject(parsedData.cameras, "cameras", gltfRuntime);
                }
                if (parsedData.nodes) {
                    parseObject(parsedData.nodes, "nodes", gltfRuntime);
                }
                if (parsedData.images) {
                    parseObject(parsedData.images, "images", gltfRuntime);
                }
                if (parsedData.textures) {
                    parseObject(parsedData.textures, "textures", gltfRuntime);
                }
                if (parsedData.shaders) {
                    parseShaders(parsedData.shaders, gltfRuntime);
                }
                if (parsedData.programs) {
                    parseObject(parsedData.programs, "programs", gltfRuntime);
                }
                if (parsedData.samplers) {
                    parseObject(parsedData.samplers, "samplers", gltfRuntime);
                }
                if (parsedData.techniques) {
                    parseObject(parsedData.techniques, "techniques", gltfRuntime);
                }
                if (parsedData.materials) {
                    parseObject(parsedData.materials, "materials", gltfRuntime);
                }
                if (parsedData.animations) {
                    parseObject(parsedData.animations, "animations", gltfRuntime);
                }
                if (parsedData.skins) {
                    parseObject(parsedData.skins, "skins", gltfRuntime);
                }
                if (parsedData.scenes) {
                    gltfRuntime.scenes = parsedData.scenes;
                }
                if (parsedData.scene && parsedData.scenes) {
                    gltfRuntime.currentScene = parsedData.scenes[parsedData.scene];
                }
                return gltfRuntime;
            };
            GLTFLoaderBase.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
                var buffer = gltfRuntime.buffers[id];
                if (BABYLON.Tools.IsBase64(buffer.uri)) {
                    setTimeout(function () { return onSuccess(new Uint8Array(BABYLON.Tools.DecodeBase64(buffer.uri))); });
                }
                else {
                    BABYLON.Tools.LoadFile(gltfRuntime.rootUrl + buffer.uri, function (data) { return onSuccess(new Uint8Array(data)); }, onProgress, undefined, true, function (request) {
                        if (request) {
                            onError(request.status + " " + request.statusText);
                        }
                    });
                }
            };
            GLTFLoaderBase.LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
                var texture = gltfRuntime.textures[id];
                if (!texture || !texture.source) {
                    onError("");
                    return;
                }
                if (texture.babylonTexture) {
                    onSuccess(null);
                    return;
                }
                var source = gltfRuntime.images[texture.source];
                if (BABYLON.Tools.IsBase64(source.uri)) {
                    setTimeout(function () { return onSuccess(new Uint8Array(BABYLON.Tools.DecodeBase64(source.uri))); });
                }
                else {
                    BABYLON.Tools.LoadFile(gltfRuntime.rootUrl + source.uri, function (data) { return onSuccess(new Uint8Array(data)); }, undefined, undefined, true, function (request) {
                        if (request) {
                            onError(request.status + " " + request.statusText);
                        }
                    });
                }
            };
            GLTFLoaderBase.CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
                var texture = gltfRuntime.textures[id];
                if (texture.babylonTexture) {
                    onSuccess(texture.babylonTexture);
                    return;
                }
                var sampler = gltfRuntime.samplers[texture.sampler];
                var createMipMaps = (sampler.minFilter === GLTF1.ETextureFilterType.NEAREST_MIPMAP_NEAREST) ||
                    (sampler.minFilter === GLTF1.ETextureFilterType.NEAREST_MIPMAP_LINEAR) ||
                    (sampler.minFilter === GLTF1.ETextureFilterType.LINEAR_MIPMAP_NEAREST) ||
                    (sampler.minFilter === GLTF1.ETextureFilterType.LINEAR_MIPMAP_LINEAR);
                var samplingMode = BABYLON.Texture.BILINEAR_SAMPLINGMODE;
                var blob = buffer == null ? new Blob() : new Blob([buffer]);
                var blobURL = URL.createObjectURL(blob);
                var revokeBlobURL = function () { return URL.revokeObjectURL(blobURL); };
                var newTexture = new BABYLON.Texture(blobURL, gltfRuntime.scene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
                if (sampler.wrapS !== undefined) {
                    newTexture.wrapU = GLTF1.GLTFUtils.GetWrapMode(sampler.wrapS);
                }
                if (sampler.wrapT !== undefined) {
                    newTexture.wrapV = GLTF1.GLTFUtils.GetWrapMode(sampler.wrapT);
                }
                newTexture.name = id;
                texture.babylonTexture = newTexture;
                onSuccess(newTexture);
            };
            GLTFLoaderBase.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
                var shader = gltfRuntime.shaders[id];
                if (BABYLON.Tools.IsBase64(shader.uri)) {
                    var shaderString = atob(shader.uri.split(",")[1]);
                    if (onSuccess) {
                        onSuccess(shaderString);
                    }
                }
                else {
                    BABYLON.Tools.LoadFile(gltfRuntime.rootUrl + shader.uri, onSuccess, undefined, undefined, false, function (request) {
                        if (request && onError) {
                            onError(request.status + " " + request.statusText);
                        }
                    });
                }
            };
            GLTFLoaderBase.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
                var material = gltfRuntime.materials[id];
                if (!material.technique) {
                    if (onError) {
                        onError("No technique found.");
                    }
                    return;
                }
                var technique = gltfRuntime.techniques[material.technique];
                if (!technique) {
                    var defaultMaterial = new BABYLON.StandardMaterial(id, gltfRuntime.scene);
                    defaultMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                    defaultMaterial.sideOrientation = BABYLON.Material.CounterClockWiseSideOrientation;
                    onSuccess(defaultMaterial);
                    return;
                }
                var program = gltfRuntime.programs[technique.program];
                var states = technique.states;
                var vertexShader = BABYLON.Effect.ShadersStore[program.vertexShader + "VertexShader"];
                var pixelShader = BABYLON.Effect.ShadersStore[program.fragmentShader + "PixelShader"];
                var newVertexShader = "";
                var newPixelShader = "";
                var vertexTokenizer = new Tokenizer(vertexShader);
                var pixelTokenizer = new Tokenizer(pixelShader);
                var unTreatedUniforms = {};
                var uniforms = [];
                var attributes = [];
                var samplers = [];
                // Fill uniform, sampler2D and attributes
                for (var unif in technique.uniforms) {
                    var uniform = technique.uniforms[unif];
                    var uniformParameter = technique.parameters[uniform];
                    unTreatedUniforms[unif] = uniformParameter;
                    if (uniformParameter.semantic && !uniformParameter.node && !uniformParameter.source) {
                        var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                        if (transformIndex !== -1) {
                            uniforms.push(babylonTransforms[transformIndex]);
                            delete unTreatedUniforms[unif];
                        }
                        else {
                            uniforms.push(unif);
                        }
                    }
                    else if (uniformParameter.type === GLTF1.EParameterType.SAMPLER_2D) {
                        samplers.push(unif);
                    }
                    else {
                        uniforms.push(unif);
                    }
                }
                for (var attr in technique.attributes) {
                    var attribute = technique.attributes[attr];
                    var attributeParameter = technique.parameters[attribute];
                    if (attributeParameter.semantic) {
                        var name_1 = getAttribute(attributeParameter);
                        if (name_1) {
                            attributes.push(name_1);
                        }
                    }
                }
                // Configure vertex shader
                while (!vertexTokenizer.isEnd() && vertexTokenizer.getNextToken()) {
                    var tokenType = vertexTokenizer.currentToken;
                    if (tokenType !== ETokenType.IDENTIFIER) {
                        newVertexShader += vertexTokenizer.currentString;
                        continue;
                    }
                    var foundAttribute = false;
                    for (var attr in technique.attributes) {
                        var attribute = technique.attributes[attr];
            };