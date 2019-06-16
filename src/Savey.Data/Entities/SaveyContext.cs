using IBM.EntityFrameworkCore;
using IBM.EntityFrameworkCore.Storage.Internal;
using Microsoft.EntityFrameworkCore;

namespace Savey.Data.Entities
{
    public class SaveyContext : DbContext
    {
        public SaveyContext(DbContextOptions<SaveyContext> options) : base(options)
        {
        }

//        public virtual DbSet<Contactos> Contactos { get; set; }
//        public virtual DbSet<Cuentas> Cuentas { get; set; }
//        public virtual DbSet<Dividendos> Dividendos { get; set; }
//        public virtual DbSet<Liquidaciones> Liquidaciones { get; set; }
//        public virtual DbSet<Pagos> Pagos { get; set; }
//        public virtual DbSet<Prestamos> Prestamos { get; set; }
//        public virtual DbSet<Transacciones> Transacciones { get; set; }
//        public virtual DbSet<Usuarios> Usuarios { get; set; }

        public virtual DbSet<Member> Members { get; set; }

        // Unable to generate entity type for table 'SAVEY_APP.AFILIADOS'. Please see the warning messages.

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseDb2(@"server=localhost:50000;uid=db2admin;pwd=admin;database=savey" , p=>{ p.SetServerInfo(IBMDBServerType.LUW); p.UseRowNumberForPaging(); });
//            }
//        }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.Entity<Contactos>(entity =>
//            {
//                entity.ToTable("CONTACTOS", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.AfiliadoId)
//                    .HasColumnName("AFILIADO_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Avenida)
//                    .HasColumnName("AVENIDA")
//                    .HasMaxLength(30)
//                    .IsUnicode(false);
//
//                entity.Property(e => e.Calle)
//                    .HasColumnName("CALLE")
//                    .HasMaxLength(30)
//                    .IsUnicode(false);
//
//                entity.Property(e => e.NumeroCasa)
//                    .HasColumnName("NUMERO_CASA")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Referencia)
//                    .HasColumnName("REFERENCIA")
//                    .HasMaxLength(40)
//                    .IsUnicode(false);
//
//                entity.Property(e => e.Telefono)
//                    .HasColumnName("TELEFONO")
//                    .HasMaxLength(20)
//                    .IsUnicode(false);
//            });
//
//            modelBuilder.Entity<Cuentas>(entity =>
//            {
//                entity.ToTable("CUENTAS", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.AfiliadoId)
//                    .HasColumnName("AFILIADO_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.FechaApertura)
//                    .HasColumnName("FECHA_APERTURA")
//                    .HasColumnType("date(4)");
//
//                entity.Property(e => e.NumeroCuenta)
//                    .HasColumnName("NUMERO_CUENTA")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Saldo)
//                    .HasColumnName("SALDO")
//                    .HasColumnType("decimal(5, 0)");
//
//                entity.Property(e => e.Tipo)
//                    .HasColumnName("TIPO")
//                    .HasMaxLength(10)
//                    .IsUnicode(false);
//            });
//
//            modelBuilder.Entity<Dividendos>(entity =>
//            {
//                entity.ToTable("DIVIDENDOS", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Ganancias)
//                    .HasColumnName("GANANCIAS")
//                    .HasColumnType("integer(4)");
//            });
//
//            modelBuilder.Entity<Liquidaciones>(entity =>
//            {
//                entity.ToTable("LIQUIDACIONES", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.AfiliadoId)
//                    .HasColumnName("AFILIADO_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Monto)
//                    .HasColumnName("MONTO")
//                    .HasColumnType("decimal(5, 0)");
//            });
//
//            modelBuilder.Entity<Pagos>(entity =>
//            {
//                entity.ToTable("PAGOS", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Fecha)
//                    .HasColumnName("FECHA")
//                    .HasColumnType("date(4)");
//
//                entity.Property(e => e.Intereses)
//                    .HasColumnName("INTERESES")
//                    .HasColumnType("decimal(5, 0)");
//
//                entity.Property(e => e.Monto)
//                    .HasColumnName("MONTO")
//                    .HasColumnType("decimal(5, 0)");
//
//                entity.Property(e => e.NumeroPago)
//                    .HasColumnName("NUMERO_PAGO")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.PrestamoId)
//                    .HasColumnName("PRESTAMO_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.HasOne(d => d.Prestamo)
//                    .WithMany(p => p.Pagos)
//                    .HasForeignKey(d => d.PrestamoId)
//                    .HasConstraintName("PAGOS_PRESTAMOS_ID_FK");
//            });
//
//            modelBuilder.Entity<Prestamos>(entity =>
//            {
//                entity.ToTable("PRESTAMOS", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.AfiliadoId)
//                    .HasColumnName("AFILIADO_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.EstaPagado)
//                    .HasColumnName("ESTA_PAGADO")
//                    .HasColumnType("boolean(1)");
//
//                entity.Property(e => e.Fecha)
//                    .HasColumnName("FECHA")
//                    .HasColumnType("date(4)");
//
//                entity.Property(e => e.Monto)
//                    .HasColumnName("MONTO")
//                    .HasColumnType("decimal(5, 0)");
//
//                entity.Property(e => e.Periodo)
//                    .HasColumnName("PERIODO")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Saldo)
//                    .HasColumnName("SALDO")
//                    .HasColumnType("decimal(5, 0)");
//            });
//
//            modelBuilder.Entity<Transacciones>(entity =>
//            {
//                entity.ToTable("TRANSACCIONES", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.CuentaId)
//                    .HasColumnName("CUENTA_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Descripcion)
//                    .HasColumnName("DESCRIPCION")
//                    .HasMaxLength(50)
//                    .IsUnicode(false);
//
//                entity.Property(e => e.Fecha)
//                    .HasColumnName("FECHA")
//                    .HasColumnType("date(4)");
//
//                entity.Property(e => e.Monto)
//                    .HasColumnName("MONTO")
//                    .HasColumnType("decimal(5, 0)");
//
//                entity.Property(e => e.Tipo)
//                    .IsRequired()
//                    .HasColumnName("TIPO")
//                    .HasMaxLength(50)
//                    .IsUnicode(false);
//            });
//
//            modelBuilder.Entity<Usuarios>(entity =>
//            {
//                entity.ToTable("USUARIOS", "SAVEY_APP");
//
//                entity.Property(e => e.Id)
//                    .HasColumnName("ID")
//                    .HasColumnType("integer(4)")
//                    .ValueGeneratedNever();
//
//                entity.Property(e => e.AfiliadosId)
//                    .HasColumnName("AFILIADOS_ID")
//                    .HasColumnType("integer(4)");
//
//                entity.Property(e => e.Contr)
//                    .IsRequired()
//                    .HasColumnName("CONTR")
//                    .HasMaxLength(30)
//                    .IsUnicode(false);
//            });
//        }
    }
}